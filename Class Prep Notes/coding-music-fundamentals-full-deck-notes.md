# CODING MUSIC FUNDAMENTALS (ChucK) — Full-Semester Deck Notes

CalArts · Fall 2026 · Instructor: Luisa Pinzon
Wednesdays, 3:00–4:50 PM (class starts 3:15, 15-min easy-start window before) · 14 sessions
Format: 8 pre-recorded ChucK sessions + weekly in-person class

*Source: `coding-music-fundamentals-syllabus.md` (project doc) combined with the Day One class plan already drafted. This file is meant to be handed to a deck-building agent as the single source of truth for every session's slide content: Day One gets full treatment (introductions, policies, AI framing), Weeks 2–14 give topics, in-class content, and the homework assigned that day.*

*Updated 2026-09-07: the source syllabus had a stray Week 9 mention of the final-group deadline; removed here too so this file matches the syllabus exactly — the deadline is Week 11 only (see that section below).*

---

## PART ONE: DAY ONE (Week 1 · Sept 9) — Full Class Plan

### Before Class: Pre-Course Email (send Friday before first class)
- Set a reminder to send this the Friday before Week 1.
- Warm welcome / intro message.
- Link to the course syllabus.
- Reminder: bring a computer to every class.
- Reminder: turn off Bluetooth (flag: confirm with Luisa this is still necessary before sending).
- **No need to install anything before Week 1** — ChucK and miniAudicle get installed and tested together in class. Optional head start: chuck.stanford.edu.
- Bring a laptop that can run audio (Mac or PC — support fastest on Mac, Windows just as welcome, flag driver issues early), a charger, and headphones if you have them.
- Computer specs note: minimum spec guidance for Windows + Mac (flag: needs research).
- Mention better Mac support this semester; students should avoid very old machines.
- Mention Codecademy / collab library resource for extra computer support.
- iPads: not viable for ChucK — say so clearly.
- Come ready to talk a little about your context (a couple of sentences on where you're coming from — first semester or returning).
- No musical background required — Week 1 covers just enough shared vocabulary to make the rest of the semester easier to talk about.

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
- A couple of sentences on their context — first semester at CalArts (what they studied before) or returning (what they've been working on).
- Note to self: acknowledge names take a few sessions to stick; reassure students she gets better with names over time.

### C. Music Basics + The Calculator/AI Exercise
- A relaxed, informal conversation about music basics: pitch, rhythm, timbre. Not required knowledge — just enough shared language for later conversations. This is context, not a prerequisite; explicitly not a music-theory class.
- **The calculator exercise (live demo for how the class will think about AI this semester):**
  1. Ask students to answer a few things out loud, no calculator: 2+2, 2×4, 100/25.
  2. A little harder, still doable in your head: 12+15, 30/5, 6×8.
  3. Harder still — most people reach for a calculator here: 110×320. Point out that with pen, paper, and enough time, they could still work it out by hand; the calculator just saves time, it doesn't replace understanding.
  4. Give an AI tool a genuinely hard, multi-step equation and ask it to solve it and show its work.
  5. Key point: if you don't know the underlying math, you're stuck trusting the AI's answer even when its process is wrong. If you know the basics, you can check each step, catch a mistake, or break the problem down yourself when the AI stumbles. Same logic applies to code.

### D. Software Demo
- Get ChucK and the miniAudicle IDE installed and making sound on **every laptop** before anyone leaves — nothing left broken going into Week 2.
- Full installation walkthrough/demo already happens today (unlike the other two courses, this is needed day one since students need a working setup for Week 2's content).

### E. Accommodations Note (before general expectations)
- Not required to disclose anything, not to her and definitely not in front of the class.
- If comfortable, ask students to send a short email just confirming they've applied for accommodations — no details needed.
- Reason: accommodation letters have arrived very late in the past; an early heads-up lets her follow up with the accommodations office if approval hasn't come through.
- Frame clearly as optional, not required.

### F. Class Expectations
- Strict about deadlines and attendance. Miss 3+ unexcused classes = No Credit for the course. Sign in with the TA every class — forgetting counts as an absence.
- **Remote/Zoom policy:** a Zoom link is available on request when a student genuinely can't be in the room (illness, conflicting project obligation), as long as requested ahead of time — not same-day. Meant for real need, not routine use; becoming a habit means the privilege goes away.
- Class flow: 15-minute easy-start window (3:00–3:15, coffee/plug in/catch up), class officially starts 3:15, a 5–10 minute break partway through.
- Weekly rhythm from Week 2 on: first half of class = share last week's video assignment together; second half = plain-language preview of the next video, then it's assigned as homework.
- **No digital submission deadline for weekly work** — assignments are brought and played live in class, not submitted online. (The final project is different — same Week 13/14 structure and deadlines as the other two courses, no exception.)
- All classes are recorded so students can rewatch.
- Questions: handled at the start of next class or by email; she won't pause mid-class given how much content there is to cover.
- TAs: mention office hours will be shared later (TA status for the semester not confirmed yet); TAs are knowledgeable across topics, encourage students to use their hours.
- Overall tone: fast-paced but aiming to be fun; expects homework completion and active questions.

### G. AI Policy
- **Students are asked not to use AI tools (ChatGPT, Copilot, Claude) to write or solve their ChucK assignments, especially early on while core skills are being built.** This is introduced today via the calculator exercise above.
- Not anti-AI — would honestly prefer a world without it, but understands its potential and that the pace of work now assumes AI use; falling behind on it can mean falling behind for jobs.
- Personal philosophy: lean on AI for boring/daily tasks (emails, searching files, admin/setup); still refining her own best practices, was intentionally slow to adopt it but has leaned in more recently.
- Collaborator model, not replacement model: "I'm the brain, I delegate specific work."
- Core goal for students: this course builds the "know it by hand" layer first (ChucK fundamentals, one concept at a time) so that later, when AI tools help write or debug code, students can actually verify what's happening instead of blindly trusting output they can't check.
- Cautionary story: students who prompt AI for a whole final project get code back with no understanding of architecture, multithreading, resource usage, or where the files even live — things work in isolation, then break when integrated, and become unfixable at the last minute.
- Required workshop in Week 14 (shared across all three courses): Luisa walks through how she actually uses AI in her own work, once the fundamentals are solid enough that it helps instead of becoming a crutch. Held remotely, same day as the Digital Expo deadline.

### H. "Where This Can Go" — Advanced/Inspiration Demo (end of class)
- Purpose: give students a glimpse of combined/advanced usage once they've built skills. Still deciding exact content — keep flexible.
- Possible pieces: a ChucK + TouchDesigner combo demo, possibly tied to the Coral speaker project — one version showing visual design + sensors + ChucK, another showing an interactive version with Ableton driving visuals differently.
- Show photos of current/personal projects, framed as "here's where these skills eventually lead."
- Outside inspiration references: Dataland (LA); Meow Wolf–style museums as relevant precedent.
- Message to land: this isn't only about skill-building, it's where creation and idea generation begin. Technology doesn't have to be the visible output — a musician might use these tools purely in process without "coding" on stage.

### I. "Welcome to University" — Expectations/Philosophy Framing
- University ≠ a YouTube tutorial or an AI prompt — university offers compounding, varied experience neither replicates alone.
- Reality of the format: once a week, 14 weeks, several sessions are presentational/workshop/intro-based, not pure skill-building time throughout.
- No single class can cover everything unless it's an extremely narrow, methodical technical class — this is an entry point, not a complete or expert-level path.
- Students often go deeper than she has on topics that sparked their interest — that's the intended outcome.
- Personal example: she's "decent/good at many things" rather than deeply mastered in every one; her real skill is knowing enough to figure things out, research, ask others, and now use AI to fill gaps.
- Core message: success depends heavily on students' own outside work and practice.
- Point students toward Independent Studies/tutorials in the Creative Computing program for guided deeper project work.

### Today's Homework
Spend 10 minutes in Chrome Music Lab's Song Maker building a 4-bar loop — a basic drum beat (rhythm), a short melody (pitch), then swap instrument types to hear the tone change (timbre); save it and bring the link to share in class. Plus some time in GarageBand just playing with sound (Musical Typing turns the keyboard into a mini piano if no MIDI controller). Ableton Learning Music and BeepBox are two more free, browser-based options for further exploration. No musical experience expected.

---

## PART TWO: FULL SEMESTER, WEEK BY WEEK (topics + homework, from the syllabus)

**Weekly rhythm from Week 2 on:** first half of class = share the assignment from the video watched over the past week; second half = plain-language preview of the *next* video, then it gets assigned as homework. Assignments are brought and presented live in class — not submitted digitally, and not graded if not presented. **Weekly assignments = 50% of the final grade.**

### Week 2 · Sept 16 — First Sounds
**Topics:** what makes ChucK "strongly timed" — code and sound stay precisely in sync. The `=>` operator, core data types (`int`, `float`, `string`, `dur`, `time`), how `now` works, `if`/`else`, `for`/`while` loops, building your first oscillator.
**In class:** listen to everyone's GarageBand experiments from Week 1 first, then this content. Session 1 video assigned at the end of class.
**Homework:** Session 1 video.

### Week 3 · Sept 23 — Libraries, Randomness & Arrays
**Topics:** ChucK's standard and math libraries — unit conversion, randomness, panning across speakers — and arrays: declaring, indexing, looping through, using one to build a melody instead of a single note.
**Homework:** Session 2 video.

### Week 4 · Sept 30 — Working with Sound Files
**Topics:** `SndBuf`, ChucK's object for playing sound files — looping and reverse playback, switching between samples — and the modulo operator, the technique behind a step sequencer.
**Homework:** Session 3 video.

### Week 5 · Oct 7 — Functions & Musical Structure
**Topics:** writing a function and passing it arguments; local vs. global scope; using functions to build chords and give a piece musical structure; recursion, via the classic factorial example.
**Homework:** Session 4 video.

### Week 6 · Oct 14 — Synthesis & Physical Models
**Topics:** the big one, right before the midterm. Envelopes and ADSR shaping, FM synthesis, filters and effects (pitch-shifting, reverb), physical modeling instruments — a mandolin, a flute, a mallet instrument, shakers. This is the material the midterm draws on.
**Homework:** no separate assignment — this material is covered by the midterm instead.

### Week 7 · Oct 21 — Midterm
No fixed time slot — coordinated across all three courses.
**Deliverable:** a piece or instrument built around Week 6's synthesis material, shared with the class.

### Week 8 · Oct 28 — Running Things at Once
**Topics:** the shred, ChucK's term for a single running thread of code, and `spork`, which launches a new one; managing several shreds with `Machine.add`, `remove`, and `replace`; how a piece with several instruments holds together.
**Homework:** Session 6 video.

### Week 9 · Nov 4 — Classes & Building Instruments
**Topics:** classes and objects — member variables, methods, public vs. private, inheritance. Used to build a proper reusable instrument, not a one-off patch.
**Homework:** Session 7 video.

### Week 10 · Nov 11 — Playing Live
**Topics:** the last core session — events, keyboard and mouse input, MIDI in and out, OSC (the protocol ChucK uses to talk to other software over a network). What turns a patch into something you can actually perform.
**Homework:** Session 8 video. **Your group's presentation slot for Dec 2 also goes out this week**, three weeks ahead.

### Week 11 · Nov 18 — Talking to Other Software
**Topics:** with all 8 pre-recorded sessions behind them, connecting ChucK outward — OSC to p5.js, MIDI to Ableton — using exactly the concepts from Session 8, aimed at other tools.
**Admin: deadline to have your final group picked** (min 2, max 3) — see Final Project below for how groups form and what happens if a student doesn't have one.

### Week 12 · Nov 25 — A Visit from Stanford CCRMA
Remote conversation with the research center where ChucK and ChuGL were built, about visuals, ChuGL, and weaving code into art-making. Shared across all three courses. 1:1 remote help slots also available this week, alongside the CCRMA session — keep developing the final piece around it.
**Admin:** Week 14 digital-submission specs go out today, two weeks ahead.

### Week 13 · Dec 2 — Final Performance
Required group performance, in person, no solo projects. Not on the usual Wednesday slot — presentations run 1–6 PM that day across all three classes; each group's actual slot went out by Nov 11.

### Week 14 · Dec 9 — AI Workshop & Portfolio Day
Held remotely. Three things due/happening: (1) digital submission — a high-quality recording of the performance, doubling as portfolio material, doesn't have to be a straight capture of the Dec 2 slot; (2) required AI workshop — Luisa walks through how she really uses AI in her own work; (3) Digital Expo portfolio due (GitHub for code, Vimeo/SoundCloud/YouTube for sound/performance documentation).

Withdrawal deadline ("W" on transcript): Friday, Nov 13. Institute closed Nov 26–27 (Thanksgiving). Grades due Dec 21.

---

## Final Project (Week 13, live group performance — required, no solo work)
- **Group size:** minimum 2, maximum 3.
- **Forming your group:** around Week 4, a background chart goes out so students can find teammates. Week 11 is the deadline; unformed groups get assigned that day and exchange contact info.
- **The one non-flexible requirement:** every group needs at least one properly coded ChucK instrument per person (real ChucK logic, synthesis, signal processing, sequencing, or control — not just triggering pre-made audio). A group of 3 needs at least 3 instruments.
- **Cross-tool requirement:** every group's ChucK content must connect outward to at least one other piece of software or language (Ableton Live, TouchDesigner, p5.js, openFrameworks, Arduino, or anything speaking OSC/MIDI/another live protocol) — not from a fixed list.
- **Double/triple-counting exception:** if a project counts as the final for more than one of Luisa's three courses, it must incorporate each tool it's counting for.
- **Sensors/hardware (Arduino, serial, etc.) are out of scope** this semester — welcome as an extra layer if a student already has the experience, but never required.
- **On top of the live Week 13 performance, this course has the exact same Week 14 digital submission deadline as the other two courses** — no exception; the live-in-class-only model applies to weekly homework, not the final project.

## Grading (shared word-for-word across all three courses)
- Regular assignments: 50%
- Midterm project: 20%
- Final project: 30%
- Scale: HP (80–100) / P (60–79) / LP (30–59) / NC (0–29)

## Digital Expo — Final Deliverable Portfolio (due Week 14)
A finished, properly edited digital portfolio covering both the midterm and final project — not raw files. GitHub for code, Vimeo/SoundCloud/YouTube for performance recordings, with a README explaining what's there and how to run/use it. Each student's own ChucK contribution within a group should be clearly identified.

## Materials & Software
ChucK (free, open source) + miniAudicle IDE (installed Week 1). GarageBand (Mac). Chrome Music Lab, Ableton Learning Music, BeepBox (Week 1 self-study). Arduino Uno + IDE (referenced in the Week 11 demo). p5.js web editor and Ableton Live (Week 11 demo). A GitHub account plus a hosting account (Vimeo/SoundCloud/YouTube) for the Digital Expo.

## Weekly Workload (BFA vs. MFA)
1h50m/week in-class (≈25.7 hrs across the semester). Independent work: BFA ≈7.8 hrs/week (≈109.3 hrs total), MFA ≈11.0 hrs/week (≈154.3 hrs total). This stands per course, not blended across a student's other classes.

## Open Items Still Needing Luisa's Call
1. Attendance and academic integrity language still pending from the Program Director across all three courses.
