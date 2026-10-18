(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(hover: none)').matches) {
    return;
  }
  var veil = document.querySelector('.veil');
  var lantern = document.querySelector('.veil__lantern');
  var lanternImg = lantern ? lantern.querySelector('img') : null;
  if (!veil || !lantern || !lanternImg) return;

  var EASE = 0.10;
  var CONVERGE_THRESHOLD = 0.05;
  var LANTERN_HALF = 210;

  var targetX = 0, targetY = 0;
  var currentX = 0, currentY = 0;
  var rafId = null;
  var pendingLive = false;

  function frame() {
    if (pendingLive) { veil.classList.add('is-live'); pendingLive = false; }
    currentX += (targetX - currentX) * EASE;
    currentY += (targetY - currentY) * EASE;
    lantern.style.transform = 'translate3d(' + currentX + 'px, ' + currentY + 'px, 0)';
    lanternImg.style.transform = 'translate3d(' + (LANTERN_HALF - currentX) + 'px, ' + (LANTERN_HALF - currentY) + 'px, 0)';
    var dx = targetX - currentX, dy = targetY - currentY;
    if (Math.abs(dx) > CONVERGE_THRESHOLD || Math.abs(dy) > CONVERGE_THRESHOLD) {
      rafId = requestAnimationFrame(frame);
    } else { rafId = null; }
  }
  function onMouseMove(e) {
    targetX = e.clientX; targetY = e.clientY;
    if (!veil.classList.contains('is-live')) pendingLive = true;
    if (rafId === null) rafId = requestAnimationFrame(frame);
  }
  function onMouseLeave() { veil.classList.remove('is-live'); }
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseleave', onMouseLeave);
})();
