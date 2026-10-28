# INTRO TO TOUCHDESIGNER — Full-Semester Deck Notes

CalArts · Fall 2026 · Instructor: Luisa Pinzon
Wednesdays, 1:00–2:50 PM · 14 sessions · Main Bldg, B214A

*Source: `intro-touchdesigner-syllabus.md` (project doc) combined with the Day One class plan already drafted. This file is meant to be handed to a deck-building agent as the single source of truth for every session's slide content: Day One gets full treatment (introductions, policies, AI framing), Weeks 2–14 give topics, in-class content, and the homework assigned that day.*

*Checked 2026-09-07 against the source syllabus after a restoration pass there — no changes needed here, this file already matched the correct/confirmed content (no computer lab, single 3D week, Week 14 Claude segment specifics, Week 11-only group deadline).*

---

## PART ONE: DAY ONE (Week 1 · Sept 9) — Full Class Plan

### Before Class: Pre-Course Email (send Friday before first class)
- Set a reminder to send this the Friday before Week 1.
- Warm welcome / intro message.
- Link to the course syllabus.
- Reminder: bring a computer to every class.
- Reminder: turn off Bluetooth (flag: confirm with Luisa this is still necessary before sending).
- Downloads needed: TouchDesigner (free/non-commercial version is sufficient). Unlike the other two courses, **installing (not just downloading) is suggested here**, since it needs to actually run.
- Computer specs note: minimum spec guidance for Windows + Mac to run TouchDesigner smoothly (flag: needs research).
- Mention better Mac support this semester; students should avoid very old machines.
- Mention Codecademy / collab library resource for extra computer support.
- **Students use their own laptops all semester — no computer lab assumed.** TouchDesigner is GPU-heavy; older/integrated-graphics laptops may struggle from Week 8 (3D/Instancing/POPs) on — worth flagging so students know what kind of machine to bring.
- iPads: not viable for TouchDesigner — say so clearly.

### A. Instructor Introduction
- Sound engineer and teacher of these languages/software; works at the intersection of them.
- Still active in sound design (soundscape work, occasional musical composition, always conceptual, quality-focused from sound engineering training).
- Records music occasionally, non-technically now; knows mic technique by memory but doesn't practice much; more mixing and some mastering these days.
- Primary current focus: sound design for film.
- Also an interactive artist — personal projects and collaborations combining sensors, sound, and visuals.
- Prefers working from original source material (photographs, sound samples) over fully synthetic content; that's usually her starting point, gets conceptual from there.
- Point students to her website (linked via Canvas and the syllabus) to see past work.
- Show a few examples of what the class will look like, before demos.

### B. Student Introductions (go around the room)
Ask each student for:
- Name (+ chosen American name alongside given name, if applicable).
- Pronouns (hers: she/her).
- Program/school + degree type (BA, BFA, MFA, etc.).
- Whether they're in the Creative Computing program (requirement) vs. another program (elective / critical studies credit / just for fun).
- Any prior experience with coding, logic-based work, or visual programming (Max/MSP, TouchDesigner, etc.).
- Note to self: acknowledge names take a few sessions to stick; reassure students she gets better with names over time.

### C. Software Demo (matches the syllabus's actual Week 1 plan: "Welcome to TD: Pixels, Assets & an Exploratory Palette")
- Quick demo: open a premade TouchDesigner network, show a bunch of interconnected boxes.
- Install TouchDesigner, tour the interface.
- **Topics covered today:** pixels and resolution (what a pixel is, how TOPs store image data, resolution/aspect ratio and why it matters for GPU performance); what an "asset" is and the `Assets`-subfolder convention; TD's operator documentation as a self-directed learning skill — right-click any operator → **Help** opens its full wiki documentation.
- **Build by feel, live:** an exploratory palette component — Constant TOPs → Table DAT → Ramp TOP → COMP.
- **First look (just to see it, not build it):** the pre-made "2D Compile" showcase network Luisa will share — a preview of where the semester's headed, revisited hands-on in Week 6.
- Let anyone who hasn't finished downloads catch up (~5 min); have everyone run one simple test to confirm setup works.
- Full installation walkthrough/demo already mostly covered today, unlike the other two courses, since TD needs to actually run for next week's content.

**Today's homework:**
Recreate the Palette component from class: a few Constant TOPs as color swatches, their values moved into a Table DAT, that DAT driving a Ramp TOP, the whole thing compacted into a Base COMP with its own parameters. Also: research one artist working in interactive or real-time digital art (installation, projection, audio-reactive visuals, generative work) — write a short description (a few sentences, plus an image or video link) and submit it; a few students will be picked at random next class to present theirs live for a couple of minutes. Submit the `.toe` on Canvas, and name the new TOP explored independently (see "How weekly homework works" below).

### D. Accommodations Note (before general expectations)
- Not required to disclose anything, not to her and definitely not in front of the class.
- If comfortable, ask students to send a short email just confirming they've applied for accommodations — no details needed.
- Reason: accommodation letters have arrived very late in the past; an early heads-up lets her follow up with the accommodations office if approval hasn't come through.
- Frame clearly as optional, not required.

### E. Class Expectations
- Strict about deadlines and attendance. Miss 3+ unexcused classes = No Credit, proposed to match ChucK's policy. Sign in every class.
- Zoom policy (both directions, hers and theirs); point to syllabus for which sessions are official remote days.
- Class flow, roughly: first 10–15 min open last week's network + questions (Week 2 especially: randomly-picked artist share-outs) → demo block (live-build the week's technique) → build time (students build alongside, TA circulating) → last 10 min: name next week's assignment.
- Pace/workload: fast-paced, information-dense — "welcome to university," self-driven work expected outside class.
- All classes are recorded (safety net for re-watching, not required viewing — there's a lot of content each week).
- **Weekly homework model:** the network isn't shared as a file. Homework is: recreate that day's class network from what students saw (plus the recording if needed), then add one new operator explored independently (not demoed in class), naming it and its family at submission. **Weeks 1–6, the new operator must be a TOP** — building real depth in one family before spreading out; from Week 8 on, it can be a CHOP, SOP, DAT, or POP.
- **Hard submission deadline: 11:59 PM the night of class** (`.toe`, zipped with its `Assets` folder if used, relative file paths only, via Canvas). Shared policy with Coding Art Fundamentals.
- Questions: handled at the start of next class or by email; she won't pause mid-class given how much content there is to cover.
- TAs: mention office hours will be shared later (TA status for the semester not confirmed yet); TAs are knowledgeable across topics, encourage students to use their hours.
- Overall tone: fast-paced but aiming to be fun; expects homework completion and active questions.
- Homework for this course includes rewatching class recordings as part of the assignment.

### F. AI Policy
- Not anti-AI — would honestly prefer a world without it, but understands its potential and that the pace of work now assumes AI use; falling behind on it can mean falling behind for jobs.
- Personal philosophy: lean on AI for boring/daily tasks (emails, searching files, admin/setup); still refining her own best practices, was intentionally slow to adopt it but has leaned in more recently.
- Collaborator model, not replacement model: "I'm the brain, I delegate specific work."
- Math analogy: knowing basic arithmetic lets you catch a calculator's mistake even though it's almost always right; the same logic applies to catching AI's mistakes in code/networks.
- Core goal for students: use AI to work faster and accurately — catch errors, direct changes, don't end up locked out of understanding your own project.
- Cautionary story: students who prompt AI for a whole final project get code back with no understanding of architecture, multithreading, resource usage, or where the files even live — things work in isolation, then break when integrated, and become unfixable at the last minute.
- Key skill being taught: specificity when directing AI — clear structure, chosen language/tools, labeling conventions, examples and references.
- **Week 14 includes a TouchDesigner-specific AI segment**, live, centered on Claude specifically: the same shared workshop content applied to TD examples — using Claude to help debug TD Python/expressions and explore asset generation feeding into TOPs.

### G. "Where This Can Go" — Advanced/Inspiration Demo (end of class)
- Purpose: give students a glimpse of combined/advanced usage once they've built skills. Still deciding exact content — keep flexible.
- Show photos of current/personal projects, framed as "here's where these skills eventually lead."
- Outside inspiration references: Dataland (LA); Meow Wolf–style museums as relevant precedent.
- Message to land: this isn't only about skill-building, it's where creation and idea generation begin.

### H. "Welcome to University" — Expectations/Philosophy Framing
- University ≠ a YouTube tutorial or an AI prompt — university offers compounding, varied experience neither replicates alone.
- Reality of the format: once a week, 14 weeks, several sessions are presentational/workshop/intro-based, not pure skill-building time throughout.
- No single class can cover everything unless it's an extremely narrow, methodical technical class — this is an entry point, not a complete or expert-level path.
- Students often go deeper than she has on topics that sparked their interest — that's the intended outcome.
- Personal example: she's "decent/good at many things" rather than deeply mastered in every one; her real skill is knowing enough to figure things out, research, ask others, and now use AI to fill gaps.
- Core message: success depends heavily on students' own outside work and practice.
- Point students toward Independent Studies/tutorials in the Creative Computing program for guided deeper project work.

### Course-Specific Additions for This Course's First Day
- **Demo before diving in:** show the ChucK + TouchDesigner combo demo — most students in this class likely won't have been in the ChucK class, so plan to run the same demonstration here. Also show photos of the Coral installation (on her website) and how the projection mapping was done for it.
- **First live-in-TouchDesigner demo:** before formally guiding students through navigation, open TouchDesigner and do something quick and prepared in advance — e.g., load an image, apply color palettes, add a simple reactive/interactive element. Possibly attempt a live, quick transformation of an image pulled from the internet.
- **Framing point to make explicitly:** TouchDesigner work is more signal processing than coding from scratch — working with an input source (video, camera, photo, shape, or even nothing) and processing it into something new, rather than coding the exact position of a specific object the way you would in C++/computer graphics/shaders/OpenGL. Even particle systems in TouchDesigner tend to be signal/source-driven rather than hand-coded from scratch.
- **Then:** dive into the first introductory week of TouchDesigner content per above — loading it, installing it, first navigation, and the first color-palette component. Students are expected to go home and explore further on their own.
- Rationale for diving in fast: too much content, too little time — important to get students using TouchDesigner right away rather than spending extended time on theory first.

---

## PART TWO: FULL SEMESTER, WEEK BY WEEK (topics + homework, from the syllabus)

**How weekly homework works, all semester:** each class is recorded, and the network isn't shared as a file. Homework is: recreate that day's class network from what was seen (plus the recording if needed), then add one new operator explored independently, named (with its family) at submission. **Weeks 1–6: the new operator must be a TOP.** From Week 8 on: CHOP, SOP, DAT, or POP, whatever that week's content touches. Submitted via Canvas as a zipped `.toe` + `Assets` folder. **Deadline: 11:59 PM the night of class, hard cutoff.**

### Week 2 · Sept 16 — Signal Processing: Animate with CHOPs (+ a Color Nudge)
**Topics:** a few randomly-picked students present their Week 1 artist research; everyone else submits. Color theory gets a brief mention only (deep dive is homework reading). Core content: CHOPs as numeric signals over time — a Wave CHOP set up as an LFO, exported into a TOP parameter. HSV Adjust + Lookup TOP applied to the Week 1 palette.
**In-class build:** Constant TOP into one or more HSV Adjust TOPs at different Hue Offsets, recoloring the artist-research video via a Lookup TOP; animate one property (hue offset drifting, or ramp position cycling) using a Wave CHOP exported into that parameter.
**Homework:** recreate the harmony palette + animation from class. Read/watch at least one color-theory resource first (Color Theory for Beginners, Color Wheel Basics, Adobe Color Wheel, or Adobe's color-models article). *New operator:* your choice. *MFA: build a second palette (e.g. complementary instead of analogous) with a live, animated switch between the two.*

### Week 3 · Sept 23 — Feedback Loops
**Topics:** Feedback TOP, kept deliberately simple — no webcam, no noise layered on top. Feedback alone is hard enough to build a mental model of.
**In-class build:** a generative, self-referencing visual from feeding a TOP network's output back into itself.
**Homework:** recreate the feedback piece from class. *New operator:* your choice. *MFA: two independent feedback chains cross-feeding or blended together.*

### Week 4 · Sept 30 — Audio Reactivity + Control Panel
**Topics:** Audio Spectrum CHOP driving visuals; Panel COMPs, buttons, sliders for manual control.
**In-class build:** at least 2 visual parameters responding to sound, plus one slider or button giving manual override on one of them.
**Homework:** recreate the audio-reactive piece + control panel. *New operator:* your choice. *MFA: separate frequency bands (low/mid/high) each driving a different parameter.*

### Week 5 · Oct 7 — Video Synthesis
**Topics:** Displace TOP + Ramp TOP, heavy use — waveform-like, video-synth-style visuals from warping one pattern by another. A callback to Week 2's CHOP-export skill (an animated ramp is that same signal-processing technique pointed at a new parameter).
**In-class build:** Displace TOP and Ramp TOP piece, animated via the Wave-CHOP-export technique.
**Homework:** recreate the video-synth piece. *New operator:* your choice. *MFA: chain two Displace stages, or drive the displacement source from audio.*

### Week 6 · Oct 14 — 2D Compile: Revisit & Explore
**Topics:** revisit the same pre-made "2D Compile" network first previewed in Week 1 — basics re-taught (e.g. CHOP-to-TOP export, straight back to Week 2), dedicated class time to explore and ask questions. Image manipulation content (Noise TOPs, Composite TOP, Level/Blur) lives inside this network as one of the things explored.
**Homework (lighter this week, not a new recreation):** spend time in the "2D Compile" network now that the fundamentals make sense of it; pick 1–2 techniques and fold them into the midterm piece-in-progress. This doubles as the midterm dry run. *New operator:* one of the techniques picked from the network. *MFA: write one sentence on what an unfamiliar technique in the network does.*

### Week 7 · Oct 21 — Midterm
No fixed time slot — coordinated across all three courses.
**Deliverable:** a TouchDesigner piece demonstrating a custom color palette (Lookup TOP or HSV Adjust off a defined harmony), at least one animated or reactive component, and the Week 3/5 technique and/or audio reactivity.

### Week 8 · Oct 28 — 3D Introduction
**Topics:** Geometry, Camera, Light COMPs, Render TOP. Palette applied as material color. (Confirmed: one 3D introduction week, not two — depth traded for breadth elsewhere this semester.)
**In-class build:** a few geometries, one camera, one light, palette as material color.
**Homework:** recreate the 3D scene from class. *New operator:* your choice. *MFA: two cameras switched or blended, or import one outside `.obj`/`.fbx` model.*

### Week 9 · Nov 4 — Instancing
**Topics:** GPU instancing — per-instance position, color, scale driven from data, counts kept to what a typical laptop handles comfortably (no computer lab assumed).
**In-class build:** an instanced system — particles, a grid, or a crowd — with per-instance color pulled from the palette.
**Homework:** recreate the instanced system. *New operator:* your choice. *MFA: drive per-instance color or scale from audio.*

### Week 10 · Nov 11 — POPs: Point Clouds & GPU Particles
**Topics:** TD's newer GPU-compute particle/point-cloud family, again scaled to run well on personal laptops. (Committed, full week — not tentative.)
**Homework:** recreate the POPs-based point cloud/particle system from class, sized for a laptop. *New operator:* your choice. *MFA: drive it from data, audio, or a signal from earlier in the semester.*
**Admin:** Week 13 slot assignments go out today.

### Week 11 · Nov 18 — Talking to Other Software
**Topics:** OSC/MIDI In from ChucK and openFrameworks classmates — the cross-tool interconnection week, aligned to ChucK's and Coding Art Fundamentals' own Week 11.
**In-class build:** one external signal (a classmate's ChucK or openFrameworks output, or a test OSC app) driving one TouchDesigner parameter.
**Homework:** recreate the external-signal example. *New operator:* your choice. *MFA: two independent external signals driving two independent systems.*
**Admin: deadline for final groups** (min 2, max 3) — same week as ChucK and Coding Art Fundamentals; see Final Project below.

### Week 12 · Nov 25 — Remote: CCRMA + 1:1 Help
Shared remote day across all three courses. A new pre-made "2D+3D Compile" reference network shared for final-project use. 1:1 help for cross-tool OSC/MIDI wiring. Start final project.
**Admin:** Week 14 digital-submission specs go out today.

### Week 13 · Dec 2 — Final Performance
In person, required group performance, within the shared **1–6 PM** window. Slot assigned Week 10.

### Week 14 · Dec 9 — Digital Submission + AI Workshop (incl. AI × TD) + Portfolio
Recorded performance due. Required remote AI workshop, including the TouchDesigner-specific segment (Claude applied to TD examples — debugging Python/expressions, asset generation feeding TOPs). Digital Expo portfolio due.

Withdrawal deadline ("W" on transcript): Friday, Nov 13. Institute closed Nov 26–27 (Thanksgiving). Grades due Dec 21.

---

## Midterm (Week 7) — full spec
A TouchDesigner piece demonstrating: a custom color palette (Lookup TOP or HSV Adjust off a defined harmony), at least one animated or reactive component, and the Week 3/5 technique (feedback and/or video synthesis) and/or audio reactivity.

## Final Project (Week 13, group performance — required, no solo work)
- **Group size:** minimum 2, maximum 3.
- **Forming your group:** around Week 4, a background chart goes out so students can find teammates. Week 11 is the deadline; unformed groups get assigned that day and exchange contact info.
- **TouchDesigner-side requirement:** every TD-enrolled student in a group contributes at least one properly built, genuinely real-time TouchDesigner network (audio-reactive and/or OSC/MIDI-driven and/or generative) — not a pre-rendered video export with nothing live behind it.
- **Cross-tool requirement:** every group's TD content must connect outward to at least one other piece of software or language (ChucK, p5.js/openFrameworks, Ableton, Arduino, or anything speaking OSC/MIDI/another live protocol) — not from a fixed list.
- **Double/triple-counting exception:** if a project counts as the final for more than one of Luisa's three courses, it must incorporate each tool it's counting for.
- **Presentation:** live, in person, Week 13, within the shared 1–6 PM window; slot assigned by Week 10.
- **Digital submission:** Week 14, a high-quality edited video/audio recording (doesn't have to be a straight capture of the live show); technical spec pending from the Program Director, due by Week 12.

## Grading (shared word-for-word across all three courses)
- Weekly assignments: 50%
- Midterm project: 20%
- Final project: 30%
- Scale: HP (80–100) / P (60–79) / LP (30–59) / NC (0–29)

## Digital Expo — Final Deliverable Portfolio (due Week 14)
1. The network itself on GitHub (`.toe`/`.tox` for midterm and final), with a README explaining how to open/run it, TD version needed, external assets required, how the network is organized.
2. A rendered, good-quality recording on YouTube or Vimeo (can reuse the Week 14 digital submission file).

## Materials & Software
TouchDesigner (free, non-commercial license, installed Week 1). Personal laptops all semester (no computer lab). Color-theory resources for Week 2 (pick at least one). A short video clip for Week 2. Canvas for all weekly submissions. A GitHub account plus YouTube/Vimeo for the Digital Expo. Access to a performance space for Week 13. The pre-recorded export/render walkthrough (assigned ~Week 9–10).

## Weekly Workload (BFA vs. MFA)
1h50m/week in-class (≈25.7 hrs across the semester). Independent work: BFA ≈7.8 hrs/week (≈109.3 hrs total), MFA ≈11.0 hrs/week (≈154.3 hrs total). This stands per course, not blended across a student's other classes.

## Open Items Still Needing Luisa's Call
1. Digital submission technical standards, still pending from the Program Director (due by Week 12).
2. Confirm the second-semester boundary — Replicators, MediaPipe, projection mapping, and sensor/hardware input stay out of this semester entirely.
3. Attendance and academic integrity language still pending from the Program Director across all three courses.
