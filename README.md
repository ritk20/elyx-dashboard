# Elyx Dashboard

Visualize the member's journey through our interactive timeline!

## Running Locally

### Prerequisites

Node.js + npm

### Starting the app

```
git clone
npm install
npm start
```

## Development

### Tech Stack

- React

#### Libraries

- Tailwind CSS
- Shadcn.ui
- Charts.js

### Prompts Used

#### For Generating Messasges -

```
SYSTEM
You are a scriptwriter simulating a realistic, human-sounding WhatsApp conversation between Rohan Patel, a high-performing executive, and his dedicated Elyx health team. Your goal is to portray Elyx as a mature, proactive, and seamlessly integrated service.

Roles:
Rohan Patel: A 46-year-old, data-driven Head of Sales. Analytical, time-poor, and focused on proactive health management due to a family history of heart disease. He values efficiency and evidence-based actions.
Ruby: The primary point of contact. She's the master coordinator—empathetic, organized, and proactive, ensuring a frictionless experience. She anticipates needs and confirms every action. Her job is to remove all friction from the client's life.
Dr. Warren: The team's physician. Authoritative, precise, and scientific. He explains complex medical topics in clear, understandable terms
Advik: The performance and data scientist. Analytical and curious, focused on wearable data. He communicates in terms of experiments, hypotheses, and data-driven insights.
Carla: The nutritionist. Practical, educational, and focused on behavioral change. He explains the "why" behind every nutritional choice.
Rachel: The physiotherapist. Direct, encouraging, and an expert on physical movement.
Neel: The senior relationship manager. Strategic, reassuring, and focused on the big picture.

STYLE GUIDELINES:
"more humanlike message, rohan reciprocates and gives affirmations and replies"
1. Emulate Busy Professionals: Use contractions ("I'll," "can't") and occasional emojis or ellipses (...). Medical-related texts should remain clear and professional. Avoid rigid replies; instead, use conversational glue (e.g., "Sounds good, thanks Ruby!").
2. Message Length: Keep each message under 60 words. Vary the length between one-liners and multi-sentence notes.
3. Politeness: Include 1–2 polite sign-offs per week (e.g., "Appreciate the quick help 🙏").
4. Short Affirmative, appreciative messages from both rohan and the team is encouraged
5. Humans are talking - There may be small mistakes from both sides, for example rohan may miss an appointment, ruby could be bit late in replies. Basically try to make the texts as human as possible while keeping them professional

TIMESTAMP & CONTINUITY RULES:
"proper lining up of timestamps and events": All timestamps must be chronological and fall within the specified date range.
The default time zone is Singapore (UTC+8).
If Rohan is traveling, switch to the local time zone and note it in the message (e.g., "Chicago time").
Use the format: YYYY-MM-DD HH:MM.

CONTACT WEIGHTING:
"Ruby is main PoC": Ruby should author approximately 60% of all Elyx team messages each week.

GLOBAL RULES (apply to every week)
1. A full diagnostic panel is required every 3 months.
2. Rohan initiates up to 5 new conversation threads per week.
3. Rohan commits about 5 hours per week to the plan; reflect both successes and challenges.
4. The exercise plan is updated every 2 weeks.
5. Rohan travels for at least one week out of every four.
6. His primary residence is in Singapore.
7. Plan adherence is approximately 50%, requiring adjustments and course corrections.
8. He has a chronic condition (POTS/long COVID) that serves as a constant backdrop.

OUTPUT FORMAT (return a JSON array)
json
{ "id": "msg_###", "timestamp": "YYYY-MM-DD HH:MM", "sender": "Rohan | Ruby | Dr Warren | Advik | Carla | Rachel | Neel", "content": "Actual WhatsApp text" }
Aim for ~40 messages per week

STATIC MEMBER PROFILE
Preferred name: Rohan Patel
DOB / Age / Gender: 12 Mar 1979 | 46 | Male
Primary residence: Singapore
Frequent travel hubs: UK, US, South Korea, Jakarta (≈ every 4 wks)
Occupation: Regional Head of Sales, FinTech - high-stress, heavy travel
Personal assistant: Sarah Tan
Top 3 goals & deadlines:
1. Lower heart-disease risk via optimal cholesterol & BP - Dec 2026
2. Enhance cognitive function/focus for work - Jun 2026
3. Annual full-body screenings - start Nov 2025
Intrinsic motivation: Family history of heart disease; wants longevity for career & young children.
Key success metrics:
- Blood markers (lipids, BP, hs-CRP)
- Cognitive-assessment scores
- Sleep quality & HRV (Garmin/Whoop)
- VO₂ max; biological-age trends; subjective stress resilience
Behavioural / psychosocial:
- Personality: Analytical, driven, efficiency-obsessed, data-oriented
Stage of change: Ready to act but time-constrained; wants concise, evidence-backed actions
Support: Wife (supportive), 2 kids, in-house cook
Mental health: None formal; manages stress via exercise
Tech & data feeds:
- Garmin in use; considering Oura; open to Whoop
- Apps: Trainerize, MyFitnessPal
- Will share all APIs; wants monthly dashboards + quarterly deep-dives
Communication prefs:
- Scheduling through PA Sarah; urgent matters via Sarah → wife
- Expect <48 h response for routine queries
- Prefers exec summaries with option to drill into granular data
Scheduling & logistics:
- 20-min exercise most mornings; occasional runs
- Prefers virtual appts; on-site only for major diagnostics
- Arranges own transport

WEEK #32: DATE RANGE: 2026-02-10→ 2026-02-16 (Sprint 32 of the Member Journey)

RUNNING CONTEXT:

Rohan has successfully consolidated his recent learnings into a tangible "Peak Performance Playbook," a key asset for his career. He is now equipped with a new, real-time data stream—a continuous daytime HRV monitor—which is already providing actionable insights into his daily stressors. The next steps in his proactive health journey are locked in: his first consultation with a clinical psychologist, Dr. Alice Chen, is scheduled for February 10th, and his next major diagnostic panel (now including APOE4 testing) is booked for February 15th. The program has evolved into a robust, multi-pillar system that Rohan actively co-manages.

THEMATIC FOCUS: Consolidating the Transformation: The 8-Month Journey Review.

KEY OBJECTIVES:

Synthesize the 8-Month Journey: Formally begin the comprehensive journey review by presenting powerful "before and after" data visualizations that clearly demonstrate Rohan's profound transformation in physiological resilience and metabolic health.

Quantify Progress Against Goals: Directly map the significant progress made over the past eight months against his three initial, high-level goals (reducing heart disease risk, enhancing cognitive function, proactive screening).

Integrate Mental & Physical Data: Introduce the advanced concept of integrating insights from his upcoming psychology sessions with his real-time physiological data, creating a powerful biofeedback loop for mental resilience.

Close Experimental Loops: Propose a final, forward-looking diagnostic—a Gut Microbiome re-test—to scientifically quantify the impact of his successful dietary changes and formally close the loop on that experiment.

EVENTS THAT MUST HAPPEN IN THIS 7-DAY SLICE:

Neel Sets the Stage for Review: Neel kicks off the week by messaging Rohan about the upcoming comprehensive journey review, framing it as a data synthesis against his initial goals to demonstrate the ROI of his efforts.

Visualizing Resilience: Advik sends a powerful "before and after" chart comparing HRV during Rohan's first month versus the most recent month. He highlights the 25% increase in average HRV and the much faster "bounce back" time after travel, providing a clear visualization of his increased resilience.

Quantifying Metabolic Health: Carla sends another key "before and after" data point, showing the 50%+ decrease in glycemic variability since the first CGM was applied, explicitly framing it as a "powerful leading indicator for your long-term cardiovascular health."

Connecting Mental & Physical Data: With the psychologist appointment approaching, Advik introduces a new concept: "Rohan, as you prepare for your session with Dr. Chen, we can correlate your subjective feedback from those sessions with your real-time HRV data. This creates a powerful biofeedback loop to see how discussions about specific stressors impact your nervous system."

Rohan's Psychophysiological Curiosity: Rohan grasps the concept immediately: "So, the daytime HRV monitor can literally measure the physiological impact of a therapy session? We could see in the data if a particular technique Dr. Chen teaches is effective at down-regulating my nervous system?" This allows Advik to confirm this advanced application of psychophysiology.

Closing the Loop (Gut Microbiome): Building on the successful diet experiments, Carla proposes the next test: "Rohan, you'll recall we took a baseline gut microbiome sample before your keto experiment. As part of your upcoming diagnostics, I recommend we do a re-test to see exactly how your dietary changes have beneficially shifted your gut bacteria, closing the loop on that experiment."

Logistical Integration: Ruby confirms that the gut microbiome re-test kit will be sent out and can be completed at home before his diagnostic appointment on Feb 15th, requiring no additional appointments.
```

#### For Updating Running Context

```
Carefully based on the data from the w31.json (previous week's messages) file, find relevant information and update the Running Context for the next prompt.
Relevant Information Includes -
1. Events/Appointments that are planned to happen next week and their exact dates/times
2. The important things that happened this week that hold relevance onto the coming weeks
3. Relevant things from the running context of the previous prompt that continue to hold relevance in this week as well

The running context from the previous week is as follows -
///Some running context
```

#### For adding the thematic focus, key objectives and events of a particular week

```
Based on the below week 32 framework, add the EVENTS THAT MUST HAPPEN IN THIS 7-DAY SLICE, Key objectives and thematic focus sections in a series of short points. Only give me the optimised and adjusted prompt for the newly designed week's format. Include more points of discussion or events into the EVENTS THAT MUST HAPPEN IN THIS 7-DAY SLICE: or other part of the prompt, so that we can get more comprehensive data. 

Section 32: Week 32 - Q3 Progress Summary & Annual Planning
The final week of the quarter formally concludes this phase of the journey, delivering a comprehensive summary of progress and professionally setting the stage for the next strategic planning cycle.
Detailed Discussion Points & Actions:
[Neel] Delivering the Q3 Progress Summary: Neel sends a message summarizing the quarter's achievements, framing the period as a successful transition to "full co-creation and the establishment of a long-term health vision."
The Formal Report: Ruby follows up with a link to the official "Q3 Progress Report" document, which includes the final KPI summary table.
Highlighting Key Wins: To reinforce the value of the integrated team, individual experts send brief, impactful messages:
: "Rohan, your latest blood panel shows your ApoB is now 72 mg/dL. This is a significant achievement that moves you into a much lower cardiovascular risk category. Our goal for the next phase is to sustain this excellent result."
: "Congratulations on successfully hitting your 1.25x bodyweight deadlift this week. This is an excellent strength milestone that reflects your consistency and hard work."
[Advik]: "Your formal cognitive assessment scores showed a 10% improvement in processing speed compared to your baseline. This objectively validates our integrated focus on sleep, nutrition, and new skill acquisition with your piano practice."
[Neel] Scheduling the Annual Plan: Neel sends the final communication of this phase: "An outstanding quarter, Rohan. The team is already architecting a strategic plan for the final quarter of your first year, focusing on the new longevity and performance goals we've established. Ruby will coordinate with Sarah to schedule our formal Annual Planning call for next week."
```

#### For Generating Week-Wise Events

- Made with our own ideas and chats with LLMs
