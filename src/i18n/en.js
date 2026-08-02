/*
 * SOMO — English copy.
 * Natural English, not a literal translation of the Greek. Product names stay
 * in English. Positioning: small group experiences with movement, awareness and
 * human interaction. Careful, non-clinical language (reflection, not therapy).
 */
module.exports = {
  htmlLang: "en",

  common: {
    soon: "Coming soon",
    skip: "Skip to content",
    faqEyebrow: "FAQ",
    viewAllEvents: "View all events",
    viewExperiences: "View upcoming experiences",
    viewCircles: "View upcoming Somo Circles",
    joinWaitlist: "Join the waiting list",
    applyOutdoors: "Apply to Somo Outdoors",
    seeNextEvent: "See the next event",
    talkToUs: "Talk to us",
    hostSomo: "Host a SOMO experience",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you are looking for does not exist or has moved.",
    notFoundCta: "Back to home",
  },

  announce: {
    msg: "Small group experiences with movement, awareness and human interaction",
    link: "Upcoming experiences",
  },

  nav: {
    home: "Home",
    experiences: "Experiences",
    organisations: "For Organisations",
    about: "About",
    safety: "Safety & FAQ",
    cta: "Upcoming experiences",
    homeAria: "Home page",
    navAria: "Primary navigation",
    menuAria: "Open menu",
    langAria: "Αλλαγή γλώσσας στα Ελληνικά",
  },

  products: {
    circles: {
      name: "Somo Circles",
      soon: false,
      kind: "Body and reflection",
      navdesc: "Somatic shaking and group reflection.",
      oneLiner: "Somatic shaking in a small group, with space to talk about and explore what you notice.",
    },
    flow: {
      name: "Somo Flow",
      soon: true,
      kind: "Movement",
      navdesc: "Yoga and somatic shaking.",
      oneLiner: "Gentle yoga and movement followed by somatic shaking. No personal sharing is required.",
    },
    outdoors: {
      name: "Somo Outdoors",
      soon: false,
      kind: "Activity and community",
      navdesc: "Outdoor events for professionals, capped at 12 people.",
      oneLiner: "Small outdoor events for founders, solopreneurs, executives and independent professionals.",
    },
  },

  footer: {
    ctaTitle: "See upcoming SOMO experiences",
    blurb: "SOMO creates small group experiences with movement, awareness and human interaction.",
    experiencesTitle: "Experiences",
    moreTitle: "SOMO",
    contactTitle: "Contact",
    eventsLink: "Events on Luma",
  },

  meta: {
    home: {
      title: "SOMO · Small group experiences with movement and awareness",
      description: "SOMO creates small group experiences that combine somatic shaking, movement, group reflection and outdoor activity. Discover Somo Circles, Somo Flow and Somo Outdoors in Athens.",
      ogAlt: "SOMO — small group experiences with movement, awareness and human interaction.",
    },
    circles: {
      title: "Somo Circles · Somatic shaking and group reflection | SOMO",
      description: "Somo Circles combines somatic shaking in a small group with facilitated conversation and reflection. See how a session works and book a place.",
      ogAlt: "Somo Circles — somatic shaking and group reflection.",
    },
    flow: {
      title: "Somo Flow · Yoga and somatic shaking | SOMO",
      description: "Somo Flow is a gentle yoga and movement class followed by somatic shaking, with no personal sharing. Coming soon. Join the waiting list.",
      ogAlt: "Somo Flow — yoga and somatic shaking.",
    },
    outdoors: {
      title: "Somo Outdoors · Outdoor events for professionals | SOMO",
      description: "Somo Outdoors runs small outdoor events for founders, solopreneurs, executives and independent professionals, capped at 12 people. Apply to join.",
      ogAlt: "Somo Outdoors — small outdoor events for professionals.",
    },
    organisations: {
      title: "For Organisations · SOMO for teams, studios and communities",
      description: "SOMO experiences can be adapted for companies, studios, retreats, coworking spaces and private communities. Talk to us.",
      ogAlt: "SOMO for organisations, teams, studios and communities.",
    },
    about: {
      title: "About SOMO · Aggelos Mouzakitis",
      description: "SOMO creates experiences where movement, body awareness and group interaction exist together. Created by Aggelos Mouzakitis, a mental health counsellor and group facilitator.",
      ogAlt: "About SOMO and Aggelos Mouzakitis.",
    },
    safety: {
      title: "Safety and FAQ · SOMO",
      description: "Practical information to help you decide whether a SOMO experience is suitable for you. This page is not medical advice.",
      ogAlt: "Safety and frequently asked questions for SOMO experiences.",
    },
    privacy: {
      title: "Privacy Policy · SOMO",
      description: "What personal information SOMO collects when you get in touch, apply or book an event.",
      ogAlt: "SOMO Privacy Policy.",
    },
    participation: {
      title: "Participation Conditions · SOMO",
      description: "The conditions that apply when you book and take part in a SOMO experience.",
      ogAlt: "Participation Conditions for SOMO experiences.",
    },
  },

  /* =========================== HOME ===================================== */
  home: {
    hero: {
      eyebrow: "SOMO · Small group experiences",
      h1sr: "SOMO. Group experiences that start with the body",
      lead: "Group experiences that start with the body. SOMO combines somatic shaking, movement, group reflection and outdoor activity, giving you space to notice what is happening in your body and how you relate to the people around you.",
      loc: "Athens · In Greek and English",
      secondary: "See the experiences",
      meta: [
        { k: "Format", v: "Small groups" },
        { k: "Location", v: "Athens" },
        { k: "Language", v: "Greek and English" },
        { k: "Booking", v: "Through Luma" },
      ],
    },
    intro: {
      eyebrow: "What SOMO is",
      title: "Three different ways to take part",
      body: [
        "Each SOMO experience uses the body, movement and the group differently.",
      ],
      points: [
        { name: "Somo Circles", text: "combines somatic shaking with conversation and reflection." },
        { name: "Somo Flow", text: "combines yoga with somatic shaking." },
        { name: "Somo Outdoors", text: "brings small groups of professionals together through outdoor activity." },
      ],
    },
    experiences: {
      eyebrow: "The experiences",
      title: "Choose the format that suits you",
      text: "",
    },
    events: {
      eyebrow: "Upcoming events",
      title: "See what is coming up",
      text: "Dates, locations, prices and availability are listed on Luma.",
      fallback: {
        eyebrow: "Schedule on Luma",
        title: "Upcoming experiences are published on Luma",
        body: "See the schedule, book a place or join a waiting list. Luma keeps the dates and availability up to date for every event.",
      },
    },
    how: {
      eyebrow: "How it works",
      title: "What to expect from SOMO",
      text: "",
      principles: [
        { t: "Clear guidance", d: "The facilitator explains what will happen, gives specific instructions and remains available throughout." },
        { t: "Your own pace", d: "You can adapt an exercise, reduce the intensity, rest or stop." },
        { t: "Attention to the body", d: "We begin with what you notice physically, without asking you to explain it immediately." },
        { t: "Small groups", d: "The number of participants stays limited, allowing time and space for genuine interaction." },
      ],
    },
    referral: {
      eyebrow: "For professionals and partners",
      title: "Easy to recommend",
      body: [
        "SOMO may interest people who want to approach their experience through the body as well as through conversation.",
      ],
      circles: "For people who want to connect what they think and feel with what they notice physically, inside a facilitated group.",
      flow: "For people who want to try somatic shaking through yoga and movement, without group reflection.",
    },
    outdoorsIntro: {
      eyebrow: "Somo Outdoors",
      title: "A small professional community outside the office",
      body: [
        "Somo Outdoors organises hikes, walks and other outdoor events for people with demanding professional lives.",
        "Each event is capped at 12 participants. People get to know each other through the activity and conversation, without formal networking or persistent pitching.",
        "You apply once and then book individual events through Luma.",
      ],
      points: [],
    },
    about: {
      eyebrow: "Who is behind SOMO",
      title: "Created by Aggelos Mouzakitis",
      body: [
        "Aggelos Mouzakitis is a mental health counsellor and group facilitator, with a professional background in product and technology.",
        "SOMO grew from his interest in the relationship between the body, conversation and what happens when people meet inside a group.",
      ],
      cta: "Read more",
      photoAlt: "Aggelos Mouzakitis, who created SOMO.",
    },
    orgs: {
      eyebrow: "For organisations",
      title: "Bring SOMO to your team or space",
      body: [
        "SOMO experiences can be adapted for companies, studios, retreats, coworking spaces and private communities.",
        "Tell us what you have in mind and we can discuss a format that fits your audience and setting.",
      ],
    },
    finalCta: {
      eyebrow: "Upcoming experiences",
      title: "View upcoming SOMO experiences",
      text: "The full schedule and booking links are available on Luma.",
    },
  },

  /* =========================== SOMO CIRCLES ============================= */
  circles: {
    hero: {
      eyebrow: "Somo Circles · Somatic shaking and group reflection",
      h1: "Somo Circles",
      lead: "Somatic shaking in a small group, with space to notice, discuss and explore what comes up.",
      note: "No previous experience with body-based practices or groups is needed.",
      secondary: "What happens in a session",
    },
    definition: {
      eyebrow: "What it is",
      title: "Two parts in the same session",
      body: [
        "Somo Circles combines a guided somatic shaking practice with conversation in a small group.",
        "During the physical practice, shaking may appear in the legs or other parts of the body. Before or after the practice, there is time to notice what happened and, if you choose, connect it with thoughts, feelings or situations in your life.",
        "Personal sharing is optional.",
      ],
    },
    shaking: {
      eyebrow: "Somatic shaking",
      title: "What happens in practice",
      body: [
        "Somatic shaking begins with simple positions and movements that gently activate or tire particular muscle groups. Shaking may then begin to appear in the body.",
        "You remain fully aware and decide how far you want to take the practice.",
      ],
      listLabel: "How it unfolds",
      points: [
        "You begin with simple positions or movements.",
        "The shaking may develop gradually.",
        "You can change the intensity or your position.",
        "You can rest or stop.",
        "You do not need to force a particular response.",
      ],
    },
    group: {
      eyebrow: "Group reflection",
      title: "More than a physical practice",
      body: [
        "The conversation may take place before or after the somatic shaking, depending on the session format.",
        "The facilitator keeps the conversation clear and connected to the experience. No one is pressured to share personal information.",
      ],
      listLabel: "What can be talked about",
      points: [
        "What you noticed physically.",
        "Thoughts or emotions that appeared.",
        "Recurring patterns of tension.",
        "What it was like to be inside the group.",
      ],
    },
    session: {
      eyebrow: "A session",
      title: "What happens in a Somo Circle",
      text: "",
      steps: [
        { t: "Arrival and introduction", d: "We explain the structure, the main instructions and the ways you can adapt or stop the practice." },
        { t: "Physical preparation", d: "Simple movements and positions prepare the body without intense exercise." },
        { t: "Somatic shaking", d: "You allow the shaking to develop to a level that feels manageable." },
        { t: "Conversation and reflection", d: "There is time to notice and, if you choose, share what came up." },
        { t: "Closing", d: "The practice ends gradually, with time to rest and return to your usual pace." },
      ],
      note: "The order may vary depending on the session.",
    },
    suits: {
      eyebrow: "Who it may suit",
      title: "It may interest you if you",
      text: "",
      points: [
        "Often notice tension in your body.",
        "Spend a lot of time analysing what happens to you.",
        "Find it difficult to recognise physical sensations.",
        "Want to explore your experience through more than conversation.",
        "Are interested in noticing how you respond inside a small group.",
      ],
    },
    notFor: {
      eyebrow: "What it is not",
      title: "Clear expectations before you join",
      points: [
        "It is not a fitness class.",
        "It is not a performance.",
        "It does not promise an emotional release.",
        "It is not a medical service.",
        "It does not replace individual support from a qualified professional.",
      ],
    },
    control: {
      eyebrow: "Control and boundaries",
      title: "You decide how much to take part",
      body: [
        "You can reduce the intensity, change position, pause or stop completely.",
        "You do not need to talk about or explain what you noticed. The facilitator gives clear instructions for resting and ending the practice.",
      ],
      cta: "Read about safety and participation",
      listLabel: "In practice you can",
      points: [
        "Reduce the intensity.",
        "Change position.",
        "Pause.",
        "Stop completely.",
        "Stay silent if you prefer.",
      ],
    },
    format: {
      eyebrow: "Practical",
      title: "Format and duration",
      meta: [
        { k: "Group size", v: "Small group" },
        { k: "Duration", v: "75 to 90 minutes" },
        { k: "Format", v: "In person" },
        { k: "Price", v: "Listed on each Luma event" },
      ],
    },
    explain: {
      label: "How to explain it to someone else",
      text: "Somo Circles is a small group experience combining somatic shaking with conversation and reflection. Participants use simple physical exercises, notice what comes up and can explore it with the group if they choose.",
    },
    referral: {
      eyebrow: "For counsellors, coaches and other professionals",
      title: "Recommending Somo Circles",
      body: [
        "Somo Circles may interest people who want to connect verbal understanding with what they notice in their body.",
        "It is a facilitated group experience and does not replace any individual support someone may already be receiving.",
      ],
      secondary: "Ask about hosting a Circle",
    },
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do I need previous experience?", a: ["No. The exercises are simple and are explained from the beginning."] },
      { q: "Do I have to talk?", a: ["No. You can take part in the physical practice without sharing anything personal."] },
      { q: "Can I stop the shaking?", a: ["Yes. You can reduce the intensity, change position, rest or stop."] },
      { q: "Is it the same as yoga?", a: ["No. Somo Circles uses a different physical preparation and includes group reflection."] },
      { q: "Is it psychotherapy?", a: ["No. It is a facilitated experiential group. It is not psychotherapy, a medical service or treatment for a health condition."] },
      { q: "Can I attend if I already work with a professional?", a: ["Yes. Discuss it with the professional supporting you if you are unsure whether the experience is suitable."] },
      { q: "What should I wear?", a: ["Comfortable clothes that allow you to move."] },
      { q: "How large is the group?", a: ["The exact number is shown on each Luma event. Groups remain small."] },
      { q: "Where do sessions take place?", a: ["In person in Athens. The exact location is listed on Luma."] },
      { q: "What if I have a health concern?", a: ["If you have an injury, are pregnant, have recently had surgery or have another condition that may affect physical participation, consult an appropriate health professional first."] },
    ],
    finalCta: {
      eyebrow: "Somo Circles",
      title: "Book a place at the next Somo Circle",
      text: "Dates and availability are listed on Luma.",
    },
  },

  /* =========================== SOMO FLOW =============================== */
  flow: {
    hero: {
      eyebrow: "Somo Flow · Yoga and somatic shaking",
      h1: "Somo Flow",
      lead: "A gentle yoga and movement class followed by somatic shaking. There is no personal sharing or group reflection.",
      secondary: "What happens in a class",
    },
    main: {
      eyebrow: "What it is",
      title: "Yoga, movement and somatic shaking",
      body: [
        "Somo Flow begins with gentle yoga and movement to prepare the body. The somatic shaking practice follows.",
        "The focus stays on movement and physical awareness. You are not asked to discuss personal experiences.",
      ],
    },
    compare: {
      eyebrow: "Comparison",
      title: "Somo Flow and Somo Circles",
      text: "Two different experiences.",
      note: "",
      flow: {
        name: "Somo Flow",
        points: [
          "Is mainly led through movement.",
          "Includes yoga and somatic shaking.",
          "Does not include group reflection.",
          "Suits people looking for a physical practice.",
        ],
      },
      circles: {
        name: "Somo Circles",
        points: [
          "Begins with somatic shaking.",
          "Includes conversation in a small group.",
          "Provides space to explore the experience.",
          "Suits people who want to look more closely at what they notice.",
        ],
      },
    },
    session: {
      eyebrow: "A class",
      title: "What happens in Somo Flow",
      steps: [
        { t: "A quiet start", d: "Time to notice your breathing and body." },
        { t: "Yoga and movement", d: "Gentle movements with options for different levels of experience." },
        { t: "Somatic shaking", d: "Simple positions that allow the shaking to appear gradually." },
        { t: "Rest", d: "Time to notice how the body feels after the practice." },
        { t: "Closing", d: "A gradual return to your usual pace." },
      ],
    },
    suits: {
      eyebrow: "Who it may suit",
      title: "It may interest you if you are looking for",
      points: [
        "Gentle movement with adaptations.",
        "Greater awareness of the body.",
        "A way to try somatic shaking through yoga.",
        "A physical experience without personal sharing.",
        "A different type of group movement class.",
      ],
    },
    format: {
      eyebrow: "Practical",
      title: "Format and duration",
      meta: [
        { k: "Format", v: "Group class" },
        { k: "Duration", v: "60 to 75 minutes" },
        { k: "Level", v: "Beginner friendly" },
        { k: "Launch", v: "To be announced on Luma" },
      ],
    },
    explain: {
      label: "How to explain it to someone else",
      text: "Somo Flow is a gentle class combining yoga with somatic shaking. It is for people who want to move and try the physical practice without taking part in group reflection.",
    },
    partner: {
      eyebrow: "For studios and organisers",
      title: "Host Somo Flow",
      body: [
        "Somo Flow can run in yoga and Pilates studios, retreats, private groups and organisations.",
      ],
      cta: "Ask about hosting Somo Flow",
    },
    finalCta: {
      eyebrow: "Somo Flow · Coming soon",
      title: "Be the first to know when it launches",
      text: "Join the Luma waiting list for updates about the first classes.",
    },
  },

  /* =========================== SOMO OUTDOORS ========================== */
  outdoors: {
    hero: {
      eyebrow: "Somo Outdoors · Outdoor activity and community",
      h1: "Somo Outdoors",
      lead: "Small outdoor events for founders, solopreneurs, executives and independent professionals.",
      note: "Each event is capped at 12 participants. You apply once and then book individual events through Luma.",
    },
    model: {
      eyebrow: "How it works",
      title: "A simple model",
      points: [
        "Up to 12 participants at each event.",
        "Approximately one event a month to begin with.",
        "One short application to join the community.",
        "Each event is booked through Luma.",
        "Difficulty and required equipment are stated in advance.",
        "Participants organise their own transport and preparation.",
      ],
    },
    positioning: {
      eyebrow: "Activity and meeting people",
      title: "Without formal networking",
      body: [
        "Somo Outdoors gives you the opportunity to meet people with similar professional experiences through the activity itself.",
        "There are no pitches, presentations or organised exchanges of business cards. Persistent self-promotion and direct selling do not fit the community.",
        "The application helps us keep the group small and consistent.",
      ],
    },
    activities: {
      eyebrow: "The events",
      title: "Where we begin",
      text: "",
      hike: {
        tag: "Hike & Talk",
        name: "A hike and a conversation",
        text: "A hike with a clearly stated difficulty level, a short introduction and walking in changing pairs. It may include a quiet part of the route and optional coffee or food afterwards.",
      },
      walk: {
        tag: "Walk & Talk",
        name: "An easier walk",
        text: "An easier walk through the city, a park or along the coast. Suitable for people who do not want a demanding hike.",
      },
      occasional: {
        tag: "Occasional events",
        name: "Now and then",
        text: "Depending on the season, we may organise outdoor movement, mindfulness, swimming or simple group activities.",
      },
    },
    membership: {
      eyebrow: "The community",
      title: "How to join",
      steps: [
        { t: "Complete a short application", d: "Tell us a little about your work and why you would like to join." },
        { t: "Receive a response", d: "If the community appears suitable, we send you the participation information." },
        { t: "Book through Luma", d: "Places become available on a first come, first served basis." },
        { t: "Attend the event", d: "Come with the preparation and equipment listed in the description." },
      ],
    },
    audience: {
      eyebrow: "Who it is for",
      title: "How you take part matters more than your job title",
      text: "Somo Outdoors is intended for:",
      points: [
        "Founders and solopreneurs.",
        "Executives and managers.",
        "Independent professionals.",
        "Experienced specialists.",
        "People building demanding careers or businesses.",
      ],
    },
    culture: {
      eyebrow: "Community culture",
      title: "What we ask from members",
      text: "",
      points: [
        { t: "Interest in other people", d: "Come ready to meet people, not only to talk about your work." },
        { t: "Respect for boundaries", d: "No one is pressured to share personal information." },
        { t: "No persistent pitching", d: "The events are not used for direct selling or lead generation." },
        { t: "Reliability", d: "Let us know in good time if you cannot attend after booking." },
      ],
    },
    explain: {
      label: "How to explain it to someone else",
      text: "Somo Outdoors organises small outdoor events for founders and professionals. Groups are capped at 12 people, and people get to know each other through hiking, walking or another shared activity, without formal networking.",
    },
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Why is there an application?", a: ["It helps us keep the group small and include people who understand the character of the events."] },
      { q: "Do I need to be a founder?", a: ["No. Founders, executives and independent professionals from different backgrounds take part."] },
      { q: "Is it a networking event?", a: ["Not in the usual sense. You will meet people, but the event is not organised around professional presentations or selling."] },
      { q: "How many people attend?", a: ["Up to 12 people at each event."] },
      { q: "How difficult are the activities?", a: ["The difficulty and requirements are listed on each Luma event."] },
      { q: "Can I come alone?", a: ["Yes. The format helps participants get to know each other."] },
      { q: "What happens if the weather changes?", a: ["The event may change or move to another date. You will be informed in advance."] },
      { q: "What does the fee include?", a: ["The price and what it includes are listed on Luma. Transport, food and personal equipment are normally the participant's responsibility."] },
      { q: "Can I invite someone?", a: ["You can send them the application link. Every new member completes the same short application."] },
      { q: "How do cancellations work?", a: ["The booking and cancellation terms are listed on each Luma event."] },
    ],
    finalCta: {
      eyebrow: "Somo Outdoors",
      title: "Apply to Somo Outdoors",
      text: "One short application and then you book events through Luma.",
    },
  },

  /* =========================== ORGANISATIONS ========================== */
  organisations: {
    hero: {
      eyebrow: "For organisations",
      h1: "Bring SOMO to your team or space",
      lead: "SOMO experiences can be adapted for companies, studios, retreats, coworking spaces and private communities. Tell us what you have in mind and we can discuss a format that fits your audience, available time and setting.",
    },
    adapt: {
      eyebrow: "Where it can work",
      title: "A format shaped around your audience",
      points: [
        "Company teams and offsites.",
        "Yoga and Pilates studios.",
        "Coworking spaces and professional communities.",
        "Retreats and private groups.",
      ],
    },
    teams: {
      eyebrow: "What a session includes",
      title: "Movement, shaking and optional discussion",
      body: [
        "SOMO can be offered as a one-off workshop or a series of sessions.",
        "The content is adjusted to the setting and does not require participants to disclose personal information.",
      ],
      listLabel: "A session may include",
      points: [
        "Movement.",
        "Somatic shaking.",
        "Individual observation.",
        "Optional group discussion.",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How we proceed",
      steps: [
        { t: "Send us some information", d: "Describe your audience, setting and what you are considering." },
        { t: "Discuss the context", d: "We look at group size, available time and the intended character of the session." },
        { t: "Agree on a format", d: "We decide what the session may include and what is suitable for the audience." },
        { t: "Confirm the details", d: "We agree on the date, venue, fee and participation requirements." },
      ],
    },
    finalCta: {
      eyebrow: "Let us talk",
      title: "Tell us what you have in mind",
      text: "Describe your team or space in a few lines and we will reply.",
      cta: "Tell us what you have in mind",
    },
  },

  /* =========================== ABOUT ================================== */
  about: {
    hero: {
      eyebrow: "About",
      h1: "Why SOMO was created",
      lead: "SOMO creates experiences where movement, body awareness and group interaction can exist together.",
    },
    origin: {
      eyebrow: "The starting point",
      title: "From understanding to experience",
      body: [
        "Many people can explain what they think or feel very clearly, while finding it harder to recognise how the same experience appears in their body.",
        "SOMO was created to give more space to this physical part of experience. Depending on the format, this may happen through somatic shaking, yoga, conversation or outdoor activity.",
      ],
    },
    founder: {
      eyebrow: "The founder",
      name: "Aggelos Mouzakitis",
      photoAlt: "Aggelos Mouzakitis, who created SOMO.",
      body: [
        "Aggelos Mouzakitis is a mental health counsellor and group facilitator, with an MSc in Integrative Counselling and Psychotherapy.",
        "He also has a professional background in product and technology, including work with founders and professionals managing demanding roles and significant responsibility.",
        "SOMO combines his experience of group processes with his interest in body-based practices and the relationship between the body, thought and human interaction.",
      ],
    },
    philosophy: {
      eyebrow: "The approach",
      title: "Four practical principles",
      points: [
        { t: "The body provides information", d: "Physical sensations can help us notice parts of an experience that may not appear easily through thought." },
        { t: "You remain in control", d: "You decide how much to take part and can adapt or stop a practice." },
        { t: "The group is part of the experience", d: "The presence of other people can make patterns in how we relate, avoid or express ourselves more visible." },
        { t: "The format should be clear", d: "Before taking part, you should understand what will happen and what choices you have." },
      ],
    },
    finalCta: {
      eyebrow: "Experiences",
      title: "View upcoming experiences",
      text: "The schedule and booking links are available on Luma.",
    },
  },

  /* =========================== SAFETY & FAQ =========================== */
  safety: {
    hero: {
      eyebrow: "Safety and FAQ",
      h1: "Safety and participation",
      lead: "Practical information to help you decide whether a SOMO experience is suitable for you. This page is not medical advice.",
    },
    principles: {
      eyebrow: "General principles",
      blocks: [
        {
          title: "Before and during an experience",
          points: [
            "You decide whether an activity is suitable for you.",
            "Every physical exercise can be adapted or stopped.",
            "Personal sharing is optional.",
            "Intense discomfort is not a goal of the practice.",
            "You can ask the facilitator for a pause or support.",
            "Requirements for outdoor events are listed separately on Luma.",
            "SOMO does not replace medical care or individual mental health support.",
          ],
        },
        {
          title: "Health concerns",
          body: [
            "If you have an injury, are pregnant, have recently had surgery, or have a cardiac or other relevant health condition, consult an appropriate health professional before taking part.",
            "Tell the facilitator about anything that may affect your physical participation.",
          ],
        },
        {
          title: "Strong reactions",
          body: [
            "Body-based practices may be accompanied by emotions, memories or other unexpected reactions.",
            "You can reduce the intensity, stop, rest or choose not to discuss what appeared.",
          ],
        },
      ],
    },
    clarify: {
      eyebrow: "Notes for each experience",
      blocks: [
        {
          title: "Somo Circles",
          body: [
            "Somo Circles is an experiential group combining somatic shaking with facilitated reflection. It is not psychotherapy, a medical service or treatment for a health condition.",
            "Seek appropriate individual support if you are in crisis or need immediate help.",
          ],
        },
        {
          title: "Somo Flow",
          body: [
            "Somo Flow is a group class combining yoga, movement and somatic shaking. It does not include group reflection.",
          ],
        },
        {
          title: "Somo Outdoors",
          body: [
            "Before booking, review the difficulty, duration, weather conditions, equipment and instructions for each event.",
          ],
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "What is somatic shaking?", a: ["It is a physical practice in which shaking may appear after gentle muscular activation. You remain aware and can stop."] },
      { q: "Is shaking required?", a: ["No. You do not need to force or produce a particular response."] },
      { q: "Do I remain in control?", a: ["Yes. You can reduce the intensity, change position or stop."] },
      { q: "Do I need to be physically fit?", a: ["Most exercises can be adapted. Each outdoor event lists its own required level."] },
      { q: "Are SOMO experiences psychotherapy?", a: ["No. SOMO experiences are not psychotherapy or medical services."] },
      { q: "What language are they delivered in?", a: ["Greek or English. The language is listed on each Luma event."] },
      { q: "Where do they take place?", a: ["In person in Athens and, for Somo Outdoors, at locations in or around Attica."] },
      { q: "How do I book?", a: ["Bookings and waiting lists are managed through Luma."] },
      { q: "How do I cancel?", a: ["Each event has its own cancellation terms, shown on Luma."] },
      { q: "Can an organisation host a private session?", a: ["Yes. Contact us through the For Organisations page."] },
    ],
    finalCta: {
      eyebrow: "Experiences",
      title: "View upcoming experiences",
      text: "The practical details for each event live on Luma.",
    },
  },

  /* =========================== PRIVACY ================================ */
  privacy: {
    navlabel: "Privacy Policy",
    eyebrow: "Privacy",
    title: "Privacy Policy",
    intro: "This page explains what personal information is collected when you contact SOMO, complete an application or book an event.",
    updated: "Last updated: [DATE]",
    toc: true,
    tocLabel: "Contents",
    sections: [
      { h: "Who we are", body: ["SOMO organises small group experiences in Athens. For questions about your personal data, contact us at [EMAIL]."] },
      { h: "Contact forms", body: ["When you complete a form, we receive the information you choose to provide so we can respond to your request.", "We do not use it for unrelated purposes."] },
      { h: "Somo Outdoors applications", body: ["The application contains basic contact details and professional information. We use them to review your application and contact you.", "We do not request health information or other sensitive personal data."] },
      { h: "Luma", body: ["Bookings and waiting lists are managed through Luma. Luma is an independent provider and applies its own privacy policy."] },
      { h: "Analytics and cookies", body: ["The website may use basic analytics. Where consent is required for cookies, an appropriate option will be displayed."] },
      { h: "Data retention", body: ["We keep information only for as long as necessary for the purpose for which it was collected or as required by law."] },
      { h: "Your rights", body: ["You can request access to, correction of or deletion of your personal information by contacting [EMAIL]."] },
      { h: "Contact", body: ["[LEGAL NAME OR BUSINESS NAME]", "[EMAIL]", "[POSTAL ADDRESS, IF REQUIRED]"] },
    ],
  },

  /* =========================== PARTICIPATION ========================== */
  participation: {
    navlabel: "Participation Conditions",
    eyebrow: "Conditions",
    title: "Participation Conditions",
    intro: "These conditions apply when you book and take part in a SOMO experience.",
    updated: "Last updated: [DATE]",
    toc: true,
    tocLabel: "Contents",
    sections: [
      { h: "Bookings and payments", body: ["Bookings are managed through Luma. The price, availability and what is included are listed on each event page."] },
      { h: "Cancellations", body: ["Cancellation and refund terms are shown on each Luma event. Review them before booking."] },
      { h: "Suitability", body: ["You decide whether an activity is suitable for your physical condition and personal needs.", "Consult an appropriate health professional before taking part if you have a relevant health concern or are unsure."] },
      { h: "Conduct", body: ["We ask participants to respect other members of the group, the facilitator and the venue.", "Persistent promotion, harassment or disruptive behaviour may result in participation being ended."] },
      { h: "Confidentiality", body: ["In sessions that include personal sharing, participants are asked not to repeat outside the group what they hear from other people.", "Complete confidentiality cannot be guaranteed because it also depends on the conduct of each participant."] },
      { h: "The facilitator's role", body: ["The facilitator may modify an exercise or end someone's participation when this is considered necessary for the safe and orderly running of the session."] },
      { h: "Outdoor events", body: ["An event may change, move to another date or be cancelled due to weather, route conditions or other safety concerns."] },
      { h: "Photography", body: ["Photographs or video are taken only after clear information and consent."] },
      { h: "Outcomes", body: ["Taking part in SOMO does not guarantee a particular physical, emotional or professional outcome."] },
      { h: "Contact", body: ["For questions about these conditions, contact [EMAIL]."] },
    ],
  },

  /* =========================== FORMS ================================== */
  forms: {
    invalid: "Please check the highlighted fields.",
    outdoors: {
      eyebrow: "Application",
      title: "Apply to Somo Outdoors",
      intro: [
        "You apply once. If the community appears suitable, you will receive information about upcoming events and booking through Luma.",
      ],
      mailSubject: "Somo Outdoors application",
      submit: "Send application",
      note: "We do not ask for sensitive information and you do not need to prove your professional status.",
      fields: {
        name: "Full name",
        email: "Email",
        profile: "LinkedIn or another professional profile",
        profileHint: "One link is enough.",
        role: "What you currently do",
        why: "Why you would like to join",
        whyHint: "Two or three sentences are enough.",
        notSelling: "I understand that the events are not designed for direct selling or promotion.",
        privacyHtml: "I have read the <a class=\"link\" href=\"%URL%\">Privacy Policy</a>.",
      },
      msg: { required: "This field is required.", email: "Enter a valid email." },
    },
    org: {
      eyebrow: "Contact",
      title: "Tell us what you have in mind",
      intro: [
        "Describe your team or space in a few lines. We will reply by email to discuss a suitable format.",
      ],
      mailSubject: "Organisation enquiry for SOMO",
      submit: "Send message",
      note: "You do not need to mention a budget at this stage.",
      fields: {
        name: "Full name",
        email: "Email",
        org: "Organisation or space",
        type: "Type of organisation",
        typePlaceholder: "Select",
        typeOptions: [
          "Company or team",
          "Yoga or Pilates studio",
          "Coworking space",
          "Retreat or organiser",
          "Community or private group",
          "Other",
        ],
        size: "Approximate group size",
        location: "Location",
        about: "What you are considering",
        timing: "Preferred timing",
        privacyHtml: "I have read the <a class=\"link\" href=\"%URL%\">Privacy Policy</a>.",
      },
      msg: { required: "This field is required.", email: "Enter a valid email." },
    },
    confirm: {
      outdoorsTitle: "We have received your application",
      outdoorsBody: "We will reply by email and, if the community appears suitable, send you the participation information.",
      orgTitle: "We have received your message",
      orgBody: "We will reply by email to discuss what may suit your team or space.",
    },
  },
};
