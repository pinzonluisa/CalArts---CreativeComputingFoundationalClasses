'use strict';

// Deterministic generative background for the CalArts Creative Computing
// site. Same SEED -> byte-identical SVG on stdout every run. Zero
// dependencies (plain Node). Adapted from the same value-noise
// strand-tracing technique used on luisapinzon.com's veil (see
// luisa-website/scripts/veil-generator.js), with the site's own sand/rust/
// terracotta/umber palette and a fresh seed, so it's the same *effect*
// across both sites without literally duplicating either one's artwork.
// Trimmed relative to the personal-site version: no stipple trails, no
// travelling "movers" — flocks + loners + marks + taper + bloom only, kept
// calmer since this background sits behind dense schedule text.

process.stdout.on('error', (err) => {
  if (err.code === 'EPIPE') process.exit(0);
  throw err;
});

const VBW = 2000, VBH = 1150;
const SEED = 2026; // Fall 2026

const FEATURE_SCALE     = 0.0018;
const FOLD_STRENGTH     = 1.6;
const FLOCK_COUNT       = 8;
const FLOCK_SIZE_MIN    = 8, FLOCK_SIZE_MAX = 14;
const FLOCK_ALIGN_STEPS = 30;
const LONER_COUNT       = 22;
const MARK_COUNT        = 24;
const ACCENT_SHARE      = 0.62;
const BLOOM_STDDEV      = 9;
const BLOOM_STRAND_ALPHA = 0.42;

// CalArts palette (sand bg #e5aa70; ink/umber darks, rust/terracotta accents)
const DARKS = [
  { hex: '#3d2b1f', opacity: [0.26, 0.40] },
  { hex: '#59260b', opacity: [0.26, 0.40] },
  { hex: '#6b4a2f', opacity: [0.26, 0.42] },
];
const ACCENTS = [
  { hex: '#a81c07', opacity: [0.30, 0.48] },
  { hex: '#c9642f', opacity: [0.30, 0.48] },
  { hex: '#8a3a12', opacity: [0.28, 0.44] },
  { hex: '#d98a4f', opacity: [0.34, 0.52] },
];

const LONG_STEPS = 66, LONG_STEP_LEN = 8;
const SHORT_STEPS = 28, SHORT_STEP_LEN = 8;
const STRAND_JITTER = 0.18;
const FLOCK_HEADING_SPREAD = 0.4;
const FLOCK_MEMBER_JITTER  = 0.12;
const FLOCK_SPAWN_RADIUS   = 46;
const TAPER_CHANCE = 0.5;
const TAPER_WIDTH_FACTORS   = [1, 0.72, 0.48, 0.28];
const TAPER_OPACITY_FACTORS = [1, 0.7, 0.45, 0.25];
const STROKE_WIDTH_MIN = 1.1, STROKE_WIDTH_MAX = 2.5;
const MARK_RADIUS_MIN = 8, MARK_RADIUS_MAX = 40;

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) | 0;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r = (r + Math.imul(r ^ (r >>> 7), r | 61)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(SEED);

function hash2(ix, iy) {
  let h = Math.imul(ix | 0, 374761393);
  h = (h + Math.imul(iy | 0, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h = (h ^ (h >>> 16)) >>> 0;
  return h / 4294967296;
}
function smoothstep(t) { return t * t * (3 - 2 * t); }
function valueNoise2D(x, y) {
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const x1 = x0 + 1, y1 = y0 + 1;
  const sx = smoothstep(x - x0), sy = smoothstep(y - y0);
  const n00 = hash2(x0, y0), n10 = hash2(x1, y0);
  const n01 = hash2(x0, y1), n11 = hash2(x1, y1);
  const nx0 = n00 + (n10 - n00) * sx;
  const nx1 = n01 + (n11 - n01) * sx;
  return nx0 + (nx1 - nx0) * sy;
}
function fieldAngle(x, y) {
  const base = valueNoise2D(x * FEATURE_SCALE, y * FEATURE_SCALE) * Math.PI * 4.4;
  const wobble = valueNoise2D(
    x * FEATURE_SCALE * 4.4 + 500,
    y * FEATURE_SCALE * 4.4 + 500
  ) * Math.PI * FOLD_STRENGTH;
  return base + wobble;
}

function traceCurve(x, y, steps, stepLen, jitter, flockAngle, flockDecay) {
  const points = [[x, y]];
  let cx = x, cy = y;
  for (let step = 0; step < steps; step++) {
    let angle = fieldAngle(cx, cy);
    if (flockAngle !== null) {
      const blend = Math.max(0, 1 - step / flockDecay);
      angle = flockAngle * blend + angle * (1 - blend);
    }
    angle += (rng() - 0.5) * 2 * jitter;
    cx += Math.cos(angle) * stepLen;
    cy += Math.sin(angle) * stepLen;
    points.push([cx, cy]);
    if (cx < -50 || cx > VBW + 50 || cy < -50 || cy > VBH + 50) break;
  }
  return points;
}

let accentDraws = 0, darkDraws = 0;
function pickColour() {
  if (rng() < ACCENT_SHARE) { accentDraws++; return ACCENTS[Math.floor(rng() * ACCENTS.length)]; }
  darkDraws++; return DARKS[Math.floor(rng() * DARKS.length)];
}
function pickOpacity(p) { const [min, max] = p.opacity; return +(min + rng() * (max - min)).toFixed(3); }
function fmt(n) { const r = Math.round(n * 10) / 10; return r === 0 ? 0 : r; }
function pointsToPath(points) { return points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${fmt(x)},${fmt(y)}`).join(''); }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const strands = [];
for (let f = 0; f < FLOCK_COUNT; f++) {
  const cx = rng() * VBW, cy = rng() * VBH;
  const baseHeading = fieldAngle(cx, cy) + (rng() - 0.5) * 2 * FLOCK_HEADING_SPREAD;
  const colour = pickColour();
  const size = FLOCK_SIZE_MIN + Math.floor(rng() * (FLOCK_SIZE_MAX - FLOCK_SIZE_MIN + 1));
  for (let m = 0; m < size; m++) {
    const r = rng() * FLOCK_SPAWN_RADIUS, theta = rng() * Math.PI * 2;
    const sx = cx + Math.cos(theta) * r, sy = cy + Math.sin(theta) * r;
    const heading = baseHeading + (rng() - 0.5) * 2 * FLOCK_MEMBER_JITTER;
    const points = traceCurve(sx, sy, LONG_STEPS, LONG_STEP_LEN, STRAND_JITTER, heading, FLOCK_ALIGN_STEPS);
    strands.push({ points, colour, opacity: pickOpacity(colour),
      width: STROKE_WIDTH_MIN + rng() * (STROKE_WIDTH_MAX - STROKE_WIDTH_MIN), tapered: rng() < TAPER_CHANCE });
  }
}
for (let l = 0; l < LONER_COUNT; l++) {
  const sx = rng() * VBW, sy = rng() * VBH;
  const longForm = rng() < 0.55;
  const colour = pickColour();
  const points = traceCurve(sx, sy, longForm ? LONG_STEPS : SHORT_STEPS, longForm ? LONG_STEP_LEN : SHORT_STEP_LEN,
    STRAND_JITTER, null, FLOCK_ALIGN_STEPS);
  strands.push({ points, colour, opacity: pickOpacity(colour),
    width: STROKE_WIDTH_MIN + rng() * (STROKE_WIDTH_MAX - STROKE_WIDTH_MIN), tapered: rng() < TAPER_CHANCE });
}

let strandMarkup = '';
for (const s of strands) {
  const d = pointsToPath(s.points);
  if (s.tapered) {
    for (let i = 0; i < TAPER_WIDTH_FACTORS.length; i++) {
      const w = +(s.width * TAPER_WIDTH_FACTORS[i]).toFixed(2);
      const op = +(s.opacity * TAPER_OPACITY_FACTORS[i]).toFixed(3);
      strandMarkup += `<path d="${d}" fill="none" stroke="${s.colour.hex}" stroke-width="${w}" stroke-opacity="${op}" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
  } else {
    strandMarkup += `<path d="${d}" fill="none" stroke="${s.colour.hex}" stroke-width="${s.width.toFixed(2)}" stroke-opacity="${s.opacity}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
}

let markMarkup = '';
for (let i = 0; i < MARK_COUNT; i++) {
  const cx = rng() * VBW, cy = rng() * VBH;
  const colour = pickColour();
  const opacity = pickOpacity(colour);
  const strokeW = +(0.8 + rng() * 1.3).toFixed(2);
  if (rng() < 0.7) {
    const r = +(MARK_RADIUS_MIN + rng() * (MARK_RADIUS_MAX - MARK_RADIUS_MIN)).toFixed(1);
    markMarkup += `<circle cx="${fmt(cx)}" cy="${fmt(cy)}" r="${r}" fill="none" stroke="${colour.hex}" stroke-width="${strokeW}" stroke-opacity="${opacity}"/>`;
  } else {
    const rx = +(MARK_RADIUS_MIN + rng() * (MARK_RADIUS_MAX - MARK_RADIUS_MIN)).toFixed(1);
    const ry = +(rx * (0.4 + rng() * 0.4)).toFixed(1);
    const rot = +(rng() * 360).toFixed(1);
    markMarkup += `<ellipse cx="${fmt(cx)}" cy="${fmt(cy)}" rx="${rx}" ry="${ry}" fill="none" stroke="${colour.hex}" stroke-width="${strokeW}" stroke-opacity="${opacity}" transform="rotate(${rot} ${fmt(cx)} ${fmt(cy)})"/>`;
  }
}

const defs = `<defs><filter id="bloom" x="-12%" y="-12%" width="124%" height="124%"><feGaussianBlur stdDeviation="${BLOOM_STDDEV}"/></filter><g id="strands">${strandMarkup}${markMarkup}</g></defs>`;
const uses = `<use href="#strands" xlink:href="#strands" filter="url(#bloom)" opacity="${BLOOM_STRAND_ALPHA}"/><use href="#strands" xlink:href="#strands"/>`;
const svg = `<svg viewBox="0 0 ${VBW} ${VBH}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${defs}${uses}</svg>
`;
process.stdout.write(svg);

if (process.env.VEIL_DEBUG) {
  const total = accentDraws + darkDraws;
  process.stderr.write(`strands: ${strands.length}, accent: ${accentDraws} (${(100*accentDraws/total).toFixed(1)}%), dark: ${darkDraws} (${(100*darkDraws/total).toFixed(1)}%)\n`);
}
