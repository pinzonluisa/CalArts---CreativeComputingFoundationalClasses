# CODING ART FUNDAMENTALS — Full-Semester Deck Notes

CalArts · Fall 2026 · Instructor: Luisa Pinzon
Wednesdays, 5:00–6:50 PM · 14 sessions · p5.js (Weeks 1–7) → openFrameworks/C++ (Weeks 8–14)

*Source: `coding-art-fundamentals-syllabus.md` (project doc) combined with the Day One class plan already drafted. This file is meant to be handed to a deck-building agent as the single source of truth for every session's slide content: Day One gets full treatment (introductions, policies, AI framing), Weeks 2–14 give topics, in-class content, and the homework assigned that day.*

*Checked 2026-09-07 against the source syllabus after a restoration pass there — no changes needed here, this file already matched the correct/confirmed content (Week 11-only group deadline, concept alignment, etc.).*

---

## PART ONE: DAY ONE (Week 1 · Sept 9) — Full Class Plan

### Before Class: Pre-Course Email (send Friday before first class)
- Set a reminder to send this the Friday before Week 1.
- Warm welcome / intro message.
- Link to the course syllabus.
- Reminder: bring a computer to every class.
- Reminder: turn off Bluetooth (flag: confirm with Luisa this is still necessary before sending).
- Downloads needed — download only, installing optional/welcome:
  - VS Code
  - An empty starter p5.js project
- Computer specs note: minimum spec guidance for Windows + Mac to run VS Code smoothly (flag: needs research).
- Mention better Mac support this semester; students should avoid very old machines.
- Mention Codecademy / collab library resource for extra computer support.
- iPads: workable-ish for p5.js, but not ideal — say so clearly.

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
- Note to self: acknowledge names take a few sessions to stick, especially in large intro classes; reassure students she gets better with names over time.

### C. Software Demo (matches the syllabus's actual Week 1 plan)
- Open the **p5.js web editor** together, not VS Code — this is the one session that uses it instead of the local/VS Code template.
- VS Code still gets installed today in class, just not used yet; the local template takes over from Week 2 on.
- Run a **simple instructor example first** — `20250916_w2-F25_IntroToP5/sketch.js` (shapes, XY positions, light transforms) — as the visual backdrop for coordinates/color.
- Then the class types a few things together in p5.js, live — some hands-on typing alongside the demo, not purely watch-only.
- Let anyone who hasn't finished downloads catch up (~5 min).
- Full installation walkthrough/demo: save for next week, not needed day one.

**Topics covered today (foundations review, no-code-mastery expected):**
- Color in RGB, and a little into color spaces (RGB vs. RYB color-mixing intuition from art class).
- XY coordinates — basic positioning, plus the one gotcha worth flagging: screen coordinates have Y increasing *downward*, opposite of the math-class Cartesian plane.
- Basic trigonometry — sine and cosine, what they describe (smooth oscillation), degrees vs. radians.
- *(suggested addition)* What a variable is, in the algebra sense — a labeled box holding a value that can change.
- *(suggested addition)* How code actually runs — top to bottom, and a first plain-language mention that `draw()` just means "run this block again, and again, really fast" — priming the idea of a loop before they've seen the word.

**Today's homework (submitted as a p5.js web editor sketch link, not text):**
Watch a short beginner-friendly creative-coding video series (6 links, including a sine/cosine-specific one), then build a first p5.js sketch: a shape, at a position, with an RGB color, moved via sine/cosine. Copy-pasting code shown in the videos is explicitly fine — the goal is refreshing vocabulary and getting initial hands-on coding in, not conceptual mastery.

### D. Accommodations Note (before general expectations)
- Not required to disclose anything, not to her and definitely not in front of the class.
- If comfortable, ask students to send a short email just confirming they've applied for accommodations — no details needed.
- Reason: accommodation letters have arrived very late in the past; an early heads-up lets her follow up with the accommodations office if approval hasn't come through.
- Frame clearly as optional, not required.

### E. Class Expectations
- Strict about deadlines and attendance.
- Zoom policy (both directions, hers and theirs); point to syllabus for which sessions are official remote days.
- Brief overview of what happens in each class type (not a full topic-by-topic walkthrough; syllabus covers that).
- Pace/workload: fast-paced, information-dense, not hand-held — "welcome to university," self-driven work expected outside class.
- All classes are recorded so students can rewatch.
- Weekly homework is now "rewatch the recording, redo what we built in class, add one small thing" — no code gets handed out, students rebuild it themselves (BFA: one small addition; MFA: a bigger addition).
- **Hard submission deadline: 11:59 PM the night of class.** After that, submissions close and late work isn't accepted, no exceptions. Shared policy with Intro to TouchDesigner.
- Submission model: GitHub Pages all semester, from Week 2 on (demoed live in Week 2). Week 1 alone submits via a p5.js web editor link instead.
- Questions: handled at the start of next class or by email; she won't pause mid-class given how much content there is to cover.
- TAs: mention office hours will be shared later (TA status for the semester not confirmed yet); TAs are knowledgeable across topics, encourage students to use their hours.
- Overall tone: fast-paced but aiming to be fun; expects homework completion and active questions.

### F. AI Policy
- Not anti-AI — would honestly prefer a world without it, but understands its potential and that the pace of work now assumes AI use; falling behind on it can mean falling behind for jobs.
- Personal philosophy: lean on AI for boring/daily tasks (emails, searching files, admin/setup); still refining her own best practices, was intentionally slow to adopt it but has leaned in more recently.
- Collaborator model, not replacement model: "I'm the brain, I delegate specific work." Give AI clear structure and instructions rather than letting it improvise.
- Math analogy: knowing basic arithmetic lets you catch a calculator's mistake even though it's almost always right; knowing coding fundamentals lets you catch AI's mistakes and direct corrections.
- Core goal for students: use AI to work faster and accurately — catch errors, direct changes, don't end up locked out of understanding your own project.
- Cautionary story: students who prompt AI for a whole final project get code back with no understanding of architecture, multithreading, resource usage, or where the files even live — things work in isolation, then break when integrated, and become unfixable at the last minute.
- Key skill being taught: specificity when directing AI — clear structure, chosen language/tools, labeling conventions, examples and references.
- New this semester: a workshop on her own Claude/AI workflow, framed honestly as still-evolving and "a little manual" (Week 14, shared across all three courses).
- Bigger picture: because she knows what each tool/language is good for, she can architect how they connect and use AI to execute within that structure.

### G. "Where This Can Go" — Advanced/Inspiration Demo (end of class)
- Purpose: give students a glimpse of combined/advanced usage once they've built skills.
- A coded p5.js graphics example, plus a talk about how p5/C++ are a good entry point into computer graphics fundamentals — sets up future work in shaders/OpenGL, even though there's no dedicated class for that yet.
- Show photos of current/personal projects, framed as "here's where these skills eventually lead."
- Outside inspiration references: Dataland (LA) as a strong current example; Meow Wolf–style museums as relevant precedent.
- Message to land: this isn't only about skill-building, it's where creation and idea generation begin. Technology doesn't have to be the visible output.

### H. "Welcome to University" — Expectations/Philosophy Framing
- University ≠ a YouTube tutorial or an AI prompt — university offers compounding, varied experience neither replicates alone.
- Reality of the format: once a week, 14 weeks, several sessions are presentational/workshop/intro-based, not pure skill-building time throughout.
- No single class can cover everything unless it's an extremely narrow, methodical technical class — this is an entry point, not a complete or expert-level path.
- Students often go deeper than she has on topics that sparked their interest — that's the intended outcome.
- Personal example: she's "decent/good at many things" rather than deeply mastered in every one; her real skill is knowing enough to figure things out, research, ask others, and now use AI to fill gaps.
- Core message: success depends heavily on students' own outside work and practice.
- Point students toward Independent Studies/tutorials in the Creative Computing program for guided deeper project work.

---

## PART TWO: FULL SEMESTER, WEEK BY WEEK (topics + homework, from the syllabus)

**How weekly homework works, all semester:** each class is recorded. Homework is: rewatch the recording, redo what was built together in class that day, then add one small thing on top. No code is handed out — students rebuild it themselves. BFA: redo + one small addition. MFA: redo + a bigger addition (named per week below). Submitted as a GitHub Pages link (Week 1 is the one exception — a p5.js web editor link). **Deadline: 11:59 PM the night of class, hard cutoff.**

### Week 2 · Sept 16 — First Shape, First Push (p5.js)
**Topics:** GitHub Pages setup demoed live in class (first Pages-hosted assignment). Variables (number/string/boolean), `setup()`/`draw()`, `if`/`else`, **`for`/`while` loops**, shapes at XY positions — reusing Week 1's coordinate/trig vocabulary.
**In-class build:** a shape whose position or color is controlled by a variable, an `if`/`else` that changes something based on a condition, and a loop doing real work.
**Homework:** redo the class shape; add a second variable-controlled property or a second conditional branch. *MFA: both.*

### Week 3 · Sept 23 — Randomness, Arrays, and Sine/Cosine (p5.js)
**Topics:** matches ChucK's own Session 2 pace — randomness, arrays, and sine/cosine together.
**In-class build:** three short warm-ups (a `random()`-driven shape; an array-driven row using last week's loop; a shape oscillating via `sin()`/`cos()`), then one combined "code that has it all" piece pulling all three together.
**Homework:** redo the three warm-ups and the combined piece; change one part of the combination. *MFA: use two arrays together, or drive two different properties from two different oscillations.*

### Week 4 · Sept 30 — Modulo, via Random Shade Lines (p5.js)
**Topics:** modulo operator, p5.js's half of ChucK's Session 3 pairing (SndBuf + modulo).
**In-class build:** a variation on Luisa's own sketch "Random Shade Lines" — several soft, semi-transparent lines drifting/bouncing around the canvas, each drawn by connecting a small array of trailing points end-to-end with modulo indexing (`points[(i+1) % points.length]`), so the shape always closes into a loop.
**Homework:** redo the line-effect exercise; use modulo again somewhere else in the same piece. *MFA: use it to cycle through a small color palette as each line redraws.*

### Week 5 · Oct 7 — Functions, and Oscillation Revisited (p5.js)
**Topics:** functions only, no factorial/recursion. Declare/call, parameters, local vs. global scope.
**In-class build:** refactor a sketch into at least one custom function called more than once with different arguments, then use a function to add oscillating movement — revisiting Week 3's sine/cosine, through a function this time.
**Homework:** redo the function-based oscillation exercise; add one more function call with different arguments. *MFA: use the function(s) to build a visibly more complex composition than a single call would produce.*

### Week 6 · Oct 14 — Build a Class (p5.js)
**Topics:** classes — constructor, member variables, methods (`display()`/`update()`/`keepInCanvas()`), built from two proven files in sequence, ending with two live instances on screen. Doubles as pre-midterm consolidation (a class packages variables, conditionals, randomness, and functions together).
**In-class build:** a custom class with a constructor, at least two member variables, and at least two methods, instantiated at least twice.
**Homework:** redo the class exercise (two instances on screen); add a third method. *MFA: vary behavior between instances (e.g. one instance moves differently than the other).* This is the midterm dry run.

### Week 7 · Oct 21 — Midterm (p5.js)
No fixed time slot — coordinated across all three courses.
**Deliverable:** interactive sketch demonstrating variables, conditionals, loops, randomness, arrays, at least one custom function, and a custom class with at least one instance on screen. *MFA: same, plus one of nested loops, multi-array interaction, or polar-coordinate work.*

### Week 8 · Oct 28 — oF/C++ Onboarding, and Port to C++ (openFrameworks/C++)
**Pre-work:** openFrameworks setup as a pre-recorded video, assigned as homework before this week (Xcode/Visual Studio, oF download, project generator, confirm an empty app builds and runs) — students arrive with it already working.
**Topics:** typed variables, control flow in C++ syntax, oF's `setup()`/`update()`/`draw()` structure. Header files (`.h`/`.cpp`) introduced explicitly — `#include`, `#pragma once`, declaration vs. implementation.
**In-class build:** same class, port the Week 6 p5.js class into a C++ `Mover` class using what was just learned.
**Homework:** redo the C++ port; name one place C++'s typing forced more explicitness than JavaScript did. *MFA: add a third method, or a simple form of inheritance.*

### Week 9 · Nov 4 — Connecting to Other Software (OSC, oF to ChucK) (openFrameworks/C++)
**Topics:** formally teaching connection to other software (OSC) — a concrete example of two Fall 2026 courses talking to each other.
**In-class build:** send OSC from an oF sketch to a ChucK patch using `ofxOsc` on the oF side, sending a simple value (mouse position, a noise value, a bouncing number) that a ChucK patch listens for and turns into sound.
**Homework:** redo the OSC-to-ChucK example; confirm it arrives (nothing more required). *MFA: send two different values, each controlling something different in the receiving ChucK patch.*

### Week 10 · Nov 11 — Vectors (openFrameworks/C++)
**Topics:** vectors, `ofVec2f` only (position & velocity, add, normalize; `glm::vec2` gets a one-line mention, not taught).
**In-class build:** refactor Week 8's `Mover` to store position and velocity as one `ofVec2f` each instead of separate x/y/xDir/yDir fields, and make it follow the mouse.
**Homework:** redo the vector refactor (following the mouse); add a bit more vector math. *MFA: add vector math beyond position, e.g. a velocity that changes based on distance to the mouse.*
**Admin:** this is also the week each group's actual Week 13 presentation slot goes out, 3 weeks ahead.

### Week 11 · Nov 18 — Noise (openFrameworks/C++)
**Topics:** drive the same single `Mover`'s motion with `ofNoise()` instead of `random()`/vector math alone — organic wandering. Stops here: this is the semester's landing point on Nature of Code material (vectors + noise), not particle-system territory.
**In-class build:** replace `random()` in the mover's motion with `ofNoise()`.
**Homework:** redo the noise-driven mover; add a second property driven by noise. *MFA: drive a second property (position and size, or position and color) from a second noise input.*
**Admin: deadline to have your final group picked** (min 2, max 3) — see Final Project below.

### Week 12 · Nov 25 — Shared: CCRMA Remote Visit + 1:1 Help
Shared remote day across all three courses. 1:1 help slots build on Week 9's in-class OSC introduction — troubleshooting and pairing-specific wiring (ChucK/oF/TouchDesigner), not a first exposure.
**Admin:** Week 14's digital-submission specs go out today, 2 weeks ahead.

### Week 13 · Dec 2 — Final Performance
In person, required group performance, within the shared **1–6 PM** window. Each group's exact slot was sent by Week 10.

### Week 14 · Dec 9 — Digital Submission + AI Workshop + Digital Expo Portfolio
Digital submission of the recorded performance due. Required remote AI workshop (attendance counts toward final project grade — see Grading). Digital Expo portfolio due.

---

## Midterm (Week 7, p5.js) — full spec
Interactive sketch demonstrating variables, conditionals, loops, randomness, arrays, at least one custom function, and a custom class with at least one instance on screen. *MFA:* same, plus one of nested loops, multi-array interaction, or polar-coordinate work.

## Final Project (Week 13, group performance — required, no solo work)
- **Group size:** minimum 2, maximum 3.
- **Forming your group:** around Week 4, a background chart goes out (musician/visual artist/coding experience + notes) so students can find teammates. Week 11 is the deadline; unformed groups get assigned that day and exchange contact info.
- **Cross-tool requirement:** every final project must connect outward to at least one other piece of software or language (ChucK, TouchDesigner, Ableton, Arduino, or anything speaking OSC/MIDI/another live protocol) — not from a fixed list.
- **Double/triple-counting exception:** if a project counts as the final for more than one of Luisa's three courses, it must incorporate each tool it's counting for (two if double-counted, all three if triple-counted).
- **Presentation:** live, in person, Week 13, within the shared 1–6 PM window; slot assigned by Week 10.
- **Digital submission:** Week 14, a polished video/audio recording (doesn't have to be a straight capture of the live slot — can be re-recorded for quality); technical spec goes out Week 12.

## Grading (shared word-for-word across all three courses)
- Weekly exercises: 50%
- Midterm project: 20%
- Final project: 30%
- Scale: HP (80–100) / P (60–79) / LP (30–59) / NC (0–29)

## Digital Expo — Final Deliverable Portfolio (due Week 14)
1. Code on GitHub as a project portfolio, with GitHub Pages links for each weekly piece, and a README explaining what's there and how to run it.
2. A rendered, good-quality recording on YouTube, SoundCloud, or Vimeo (can reuse the Week 14 digital submission file).

## Materials & Software
VS Code, p5.js (web editor for Week 1, local template from Week 2 on), a GitHub account and GitHub Pages, openFrameworks (Xcode or Visual Studio, installed via pre-recorded video before Week 8), a laptop capable of running both p5.js and openFrameworks smoothly.

## Weekly Workload (BFA vs. MFA)
1h50m/week in-class (≈25.7 hrs across the semester). Independent work: BFA ≈7.8 hrs/week (≈109.3 hrs total), MFA ≈11.0 hrs/week (≈154.3 hrs total). This stands per course, not blended across a student's other classes.

## Open Items Still Needing Luisa's Call
1. Course description needs updating — the official version only mentions p5.js, not openFrameworks/C++ or GitHub Pages submission.
2. Naming: "Coding Art Fundamentals" vs. "Art Coding Fundamentals."
3. Attendance and academic integrity language still pending from the Program Director across all three courses.
