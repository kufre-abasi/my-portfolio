// Comprehensive event data and image registry for speaking engagements, workshops, and community events

const eventImageModules = import.meta.glob(
  "@/assets/events/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, as: "url" }
);

// Resilient resolver that matches by path or basename
export const resolveEventImage = (subpath) => {
  if (!subpath) return null;
  const filename = subpath.split("/").pop();
  
  // 1. Try exact path match
  for (const [key, url] of Object.entries(eventImageModules)) {
    if (key.endsWith(subpath)) {
      return url;
    }
  }

  // 2. Try match containing path
  for (const [key, url] of Object.entries(eventImageModules)) {
    if (key.includes(subpath)) {
      return url;
    }
  }

  // 3. Fallback to filename match
  for (const [key, url] of Object.entries(eventImageModules)) {
    if (key.endsWith("/" + filename) || key.endsWith(filename)) {
      return url;
    }
  }

  return null;
};

// Return all loaded image assets as an array
export const getAllEventImages = () => {
  return Object.entries(eventImageModules).map(([path, url]) => ({
    path,
    filename: path.split("/").pop(),
    url,
  }));
};

// Precise aspect ratio orientation registry for organic mosaic cluster packing
export const IMAGE_ORIENTATIONS = {
  // Landscapes
  "1700389138819.jpg": "landscape",
  "336A2317.jpg": "landscape",
  "8fc0c28255fa45af846ad59a7c913cec.jpg": "landscape",
  "DevFest 2021 DONE_452.JPG": "landscape",
  "DevFest 2021 DONE_454.JPG": "landscape",
  "E0OL8eCWUAEfQwE.jpg": "landscape",
  "IMG-20241012-WA0089.jpg": "landscape",
  "SRC_0767.jpg": "landscape",
  "SRC_9673.JPG": "landscape",
  "SRC_9674.JPG": "landscape",
  "164.jpg": "landscape",
  "461.jpg": "landscape",
  "477.jpg": "landscape",
  "90.jpg": "landscape",
  "91.jpg": "landscape",
  "IMG_4106.jpg": "landscape",
  "IMG_4112.jpg": "landscape",
  "IMG_4115.jpg": "landscape",
  "IMG_4157.jpg": "landscape",
  "IMG_4158.jpg": "landscape",
  "IMG_4305.jpg": "landscape",
  "IMG_4307.jpg": "landscape",
  "IMG_4309.jpg": "landscape",
  "IMG_6714.jpg": "landscape",
  "1743890937024.jpg": "landscape",
  "IMG-20250406-WA0006.jpg": "landscape",
  "IMG-20250406-WA0008.jpg": "landscape",
  "SNG-1.jpg": "landscape",
  "SNG-3.jpg": "landscape",
  "336A1911.jpg": "landscape",
  "336A1913-1.jpg": "landscape",
  "336A1914.jpg": "landscape",
  "336A1917-1.jpg": "landscape",
  "336A2428.jpg": "landscape",
  "336A2430.jpg": "landscape",
  "336A2448.jpg": "landscape",

  // Portraits
  "1efk0o.jpg": "portrait",
  "336A2426.jpg": "portrait",
  "4bbbd184a7394e6aa8275f9809ddbd9f.jpg": "portrait",
  "SRC_9548.JPG": "portrait",
  "SRC_9677.JPG": "portrait",
  "SRC_9678.JPG": "portrait",
  "bca9393b4de4494aac3f53c29ad256b6.jpg": "portrait",
  "10.jpeg": "portrait",
  "11.jpeg": "portrait",
  "13.jpeg": "portrait",
  "14.jpeg": "portrait",
  "15.jpeg": "portrait",
  "2.jpeg": "portrait",
  "3.jpeg": "portrait",
  "4.jpeg": "portrait",
  "5.jpeg": "portrait",
  "6.jpeg": "portrait",
  "7.jpeg": "portrait",
  "8.jpeg": "portrait",
  "9.jpeg": "portrait",
  "_MG_0172.jpg": "portrait",
  "bio.jpeg": "portrait",
  "head.jpeg": "portrait",
  "FB_IMG_1777146571644.jpg": "portrait",
  "FB_IMG_1777146574175.jpg": "portrait",

  // Squares / Balanced
  "DevFestMe-2021-10-31-21-15-1.png": "square",
  "IMG-20230901-WA0051.jpg": "square",
  "IMG-20231020-WA0085.jpg": "square",
  "IMG-20240902-WA0029.jpg": "square",
  "IMG-20240915-WA0013.jpg": "square",
  "IMG-20241007-WA0068.jpg": "square",
};

export const getImageOrientation = (subpath) => {
  if (!subpath) return "landscape";
  const filename = subpath.split("/").pop();
  return IMAGE_ORIENTATIONS[filename] || "landscape";
};

export const eventCategories = [
  { id: "all", label: "All Chronicles", code: "ALL" },
  { id: "keynotes", label: "Keynotes & Stages", code: "TALK" },
  { id: "workshops", label: "Technical Workshops", code: "LAB" },
  { id: "icp", label: "ICP.Hub & Web3", code: "ICP" },
  { id: "community", label: "Community & Diversity", code: "COMM" },
];

export const eventsList = [
  {
    id: "icp-hub",
    title: "ICP Hubs Sahara NG: Distributed Data Sovereignty Summit & Hackathon",
    shortName: "ICP.Hub Sahara NG",
    // year: "2024",
    role: "Featured Panelist (GDGOC Co-Lead) & Technical Judge",
    location: "Uyo Window on America Space // University of Uyo Main Library",
    category: "icp",
    categoryLabel: "ICP.Hub // Web3",
    tag: "ICP.HUB // SAHARA NG // DATA SOVEREIGNTY",
    stats: "Web3 Summit & Hackathon • GDGOC Co-Lead & Panelist",
    leadPhoto: "icp/IMG-20240915-WA0013.jpg",
    headline: "Distributed Data Sovereignty: Empowering the Future of Internet Control",
    summary:
      "Featured panelist representing GDGOC as Co-lead and technical hackathon judge at ICP Hubs Network Sahara NG (University of Uyo), speaking on 'Distributed Data Sovereignty: Empowering the Future of Internet Control', guiding student builders on canister smart contracts, and evaluating live on-chain deployments.",
    story:
      "At the ICP Hubs Network Sahara NG Community Meetup and Hackathon held at the Uyo Window on America Space (University of Uyo Main Library), I took the stage as Co-lead of GDGOC and featured panelist to address 'Distributed Data Sovereignty: Empowering the Future of Internet Control'.\n\nThe keynote panel session explored the technical boundaries of user privacy and web decentralization. We deconstructed how traditional centralized cloud architectures (AWS, GCP, Azure) enforce platform lock-in, data harvesting, and single points of failure. In contrast, the Internet Computer Protocol (ICP) introduces sovereign, canister-based decentralized compute where code and state execute directly on-chain under cryptographically verifiable user sovereignty.\n\nFollowing the panel, I served as a technical mentor and hackathon judge—inspecting Motoko and Rust smart contract canisters, evaluating frontend wallet connectors, and testing on-chain data persistence while helping student engineering teams transform concept prototypes into working decentralized applications.",
    takeaways: [
      "Distributed Data Sovereignty: Moving from corporate cloud silos to verifiable, user-owned sovereign data systems",
      "Full-Stack On-Chain Compute: Deploying both frontend interfaces and backend canisters directly onto the Internet Computer Protocol",
      "GDGOC Ecosystem Leadership: Bridging university engineering communities with frontier Web3 protocol ecosystems",
      "Hackathon Architecture & Judging: Evaluating canister state machines, cryptographic security, and live dApp user experience",
    ],
    gallery: [
      { path: "icp/IMG-20240915-WA0013.jpg", caption: "Official Panelist Announcement: 'Distributed Data Sovereignty: Empowering the Future of Internet Control' — ICP Hubs Network Sahara NG at University of Uyo." },
      { path: "icp/IMG_4106.jpg", caption: "Hackathon floor: builder squads developing decentralized applications at ICP.Hub." },
      { path: "icp/IMG_4112.jpg", caption: "Evaluating canister architectures and technical code submissions." },
      { path: "icp/IMG_4115.jpg", caption: "Mentoring teams on ICP client-side wallet connectors and reactive UI state." },
      { path: "icp/IMG_4158.jpg", caption: "Ecosystem builder energy during the live ICP.Hub hackathon sprint." },
      { path: "icp/IMG_4157.jpg", caption: "Verifying smart contract functionality and on-chain deployment demos." },
      { path: "icp/IMG_4305.jpg", caption: "Stage presentations and celebrating standout Web3 projects at ICP.Hub." },
      { path: "icp/IMG_4307.jpg", caption: "Awarding honors to winning decentralized application engineering teams." },
      { path: "icp/IMG_4309.jpg", caption: "Post-hackathon technical debrief on decentralized infrastructure scaling." },
    ],
  },
  {
    id: "next-gen-summit",
    title: "Next Gen Tech Summit: From Novice to Builder",
    shortName: "Next Gen Summit 2026",
    // year: "2026",
    role: "Keynote Speaker",
    location: "Main Stage // Next Gen Summit",
    category: "keynotes",
    categoryLabel: "Keynote & Stage",
    tag: "KEYNOTE // THE BUILDER WHEEL // CAREER ARCHITECTURE",
    stats: "250+ Engineers & Builders • Main Keynote Stage",
    slideUrl: "https://docs.google.com/presentation/d/1LkZjlCjkOJ17Ak82HjBOgSwg2v-6zAWSDjAv7vfPA0s/edit?slide=id.h2f0557c81da971df_12_0#slide=id.h2f0557c81da971df_12_0",
    leadPhoto: "next_gen_summit/_MG_0172.jpg",
    headline: "From Novice to Builder: Turning Raw Skills Into Compounding Opportunities",
    summary:
      "Main stage keynote introducing 'The Builder Wheel' (LEARN → BUILD → SHOW → CONNECT → OPPORTUNITY → REPEAT) — dismantling tutorial paralysis, reframing engineering careers as compounding loops, and anchoring authentic networking in proof of work.",
    story:
      "At the Next Gen Summit 2026, I took the main stage to deliver 'FROM NOVICE TO BUILDER: How to Turn Your Skills Into Real-World Opportunities' — an address aimed at dismantling the passive consumption trap that stalls so many promising developers.\n\nToo many engineers get stuck waiting for permission or consuming hours of motivational content before building. My message was direct: 'You don't need another 3-hour motivational video. You need to start. You already know enough to build something — what will you build next?'\n\nTo give attendees a clear roadmap, I unveiled 'The Builder Wheel' (Learn → Build → Show → Connect → Opportunity → Repeat), demonstrating that engineering careers aren't linear ladders, but compounding iterative loops: 'Your career isn't a straight line. It's a loop.' By shipping observable projects and contributing value publicly, developers naturally attract high-conviction opportunities. I urged builders to move beyond asking for opportunities to becoming an indispensable part of the ecosystem: 'networking != begging; networking == proof_of_work.'",
    takeaways: [
      "The Builder Wheel Framework: Learn → Build → Show → Connect → Opportunity → Repeat",
      "Compounding Career Loops: 'Your career isn't a straight line — it's an iterative feedback loop.'",
      "Overcoming Tutorial Paralysis: 'You don't need another 3-hour video. You already know enough to start building.'",
      "Proof of Work Networking: 'networking != begging; networking == proof_of_work.'",
      "Ecosystem Integration: Stop waiting on the sidelines — become an indispensable part of the community.",
    ],
    gallery: [
      { path: "next_gen_summit/_MG_0172.jpg", caption: "Main Stage Keynote: Delivering 'From Novice to Builder' at Next Gen Summit 2026." },
      { path: "next_gen_summit/IMG_6714.jpg", caption: "Deconstructing The Builder Wheel: 'Your career isn't a straight line, it's a compounding loop.'" },
      { path: "next_gen_summit/head.jpeg", caption: "Speaker Profile: Grounding developer momentum in observable proof of work." },
      { path: "next_gen_summit/bio.jpeg", caption: "Summit Credentials: Actionable career architecture for the next wave of engineers." },
    ],
  },
  {
    id: "gdsc-womens-day",
    title: "GDSC International Women's Day: Venturing Into Tech & Building",
    shortName: "GDSC Women's Day",
    // year: "2024",
    role: "GDSC Co-Lead & Opening Speaker",
    location: "Google Developer Student Clubs (GDSC)",
    category: "community",
    categoryLabel: "Community & Leadership",
    tag: "GDSC // CO-LEAD // DIVERSITY IN TECH",
    stats: "200+ Attendees • GDSC Co-Lead Opening Keynote",
    leadPhoto: "gdsc womens day event/164.jpg",
    headline: "Venturing Into Code: Empowering Women to Build, Network, and Seek Guidance",
    summary:
      "Delivered the official opening keynote as GDSC Co-lead to inspire women across our community to break barriers, venture boldly into software development, master authentic networking, and actively seek engineering guidance.",
    story:
      "As Co-lead of Google Developer Student Clubs (GDSC), I had the privilege of delivering the opening keynote address for our International Women's Day Celebration, setting an empowering and actionable foundation for the entire summit.\n\nAddressing a vibrant hall of aspiring and active builders, I encouraged women in our community to move past hesitation and venture boldly into software engineering and product creation: 'The tech industry needs your perspectives, your architectural rigor, and your craft. The only way forward is to start building.'\n\nI focused on two vital catalysts for engineering growth: cultivating fearless, authentic networks and actively seeking mentorship and guidance. Rather than struggling through technical hurdles in isolation, I urged attendees to leverage community circles, ask bold questions, and build publicly. Real empowerment begins when builders realize they don't have to navigate the software journey alone.",
    takeaways: [
      "Venturing Boldly into Tech: Transitioning from passive interest to active software building and project ownership",
      "Proactive Guidance: Breaking isolation by actively seeking experienced engineering mentors and peer accountability",
      "Fearless Networking: Building authentic, collaborative relationships across local and global developer communities",
      "GDSC Co-Lead Leadership: Fostering an inclusive, supportive environment where underrepresented builders thrive",
    ],
    gallery: [
      { path: "gdsc womens day event/164.jpg", caption: "Delivering the opening address as GDSC Co-lead at the International Women's Day Celebration." },
      { path: "gdsc womens day event/477.jpg", caption: "Encouraging women in the room to venture boldly into software development and building." },
      { path: "gdsc womens day event/461.jpg", caption: "Interactive discussion on finding technical mentors and navigating engineering hurdles." },
      { path: "gdsc womens day event/90.jpg", caption: "Q&A session with attendees on building supportive networks and growing in tech." },
      { path: "gdsc womens day event/91.jpg", caption: "Celebrating community impact with GDSC leadership, speakers, and participants." },
    ],
  },
  {
    id: "tech-ignite-2024",
    title: "Tech Ignite 2024: Connecting Student Builders with Founders & Employers",
    shortName: "Tech Ignite 2024",
    // year: "2024",
    role: "Co-Lead & Opening Speaker",
    location: "Main Auditorium // Tech Ignite 2024",
    category: "keynotes",
    categoryLabel: "Keynote & Leadership",
    tag: "CO-LEAD // OPENING KEYNOTE // ECOSYSTEM CATALYST",
    stats: "300+ Students, Founders & Engineers • Co-Lead & Operations",
    leadPhoto: "tech_ignite_2024/336A1911.jpg",
    headline: "Igniting Opportunities: Connecting Student Builders with Founders, Employers & Co-Founders",
    summary:
      "Delivered the official opening keynote address as Co-lead at Tech Ignite 2024, setting the vision for 300+ student attendees, urging proactive networking with attending founders and employers, while orchestrating event operations for seamless execution.",
    story:
      "At Tech Ignite 2024, I took the main stage as Co-lead to deliver the official opening address and set the strategic tone for one of the region's largest developer and tech conferences.\n\nAddressing over 300 students, emerging engineers, and creators, I framed the true purpose of Tech Ignite: it was designed not merely as a forum for lectures, but as an active catalyst for career breakthroughs. I challenged attendees to step out of their comfort zones and proactively build relationships with the startup founders, potential employers, and prospective co-founders gathered in the auditorium: 'The person sitting next to you could be your future co-founder, and the leader on this stage could be your next employer. Don't leave this room without making tangible connections.'\n\nAlongside delivering the opening address, I served as core organizer—steering logistics, coordinating speaker sessions, and overseeing operational flow to ensure the entire conference ran seamlessly from opening keynote to closing networking mixers.",
    takeaways: [
      "Conference Vision & Stage Leadership: Setting an empowering tone as Co-lead for 300+ student builders",
      "Proactive Career Networking: Challenging students to establish direct relationships with founders and hiring teams",
      "End-to-End Operational Execution: Coordinating multi-track speaker logistics, audio-visuals, and stage flow",
      "Ecosystem Bridge-Building: Transforming tech conferences into high-velocity hiring and co-founder discovery hubs",
    ],
    gallery: [
      { path: "tech_ignite_2024/336A1911.jpg", caption: "Delivering the opening address as Co-lead on the main stage at Tech Ignite 2024." },
      { path: "tech_ignite_2024/336A1914.jpg", caption: "Challenging students to leverage the conference to connect with founders and employers." },
      { path: "tech_ignite_2024/336A2428.jpg", caption: "Engaging attendees during interactive Q&A and networking intervals." },
      { path: "tech_ignite_2024/336A2448.jpg", caption: "Main auditorium perspective: 300+ students and builders at Tech Ignite 2024." },
      { path: "tech_ignite_2024/336A2430.jpg", caption: "Guiding student builders on translating academic theory into production software craft." },
      { path: "tech_ignite_2024/336A1917-1.jpg", caption: "Highlighting pathways to early-stage startup collaboration and co-founder matching." },
      { path: "tech_ignite_2024/336A1913-1.jpg", caption: "Coordinating post-stage networking between students, founders, and hiring teams." },
    ],
  },
  {
    id: "startup-women",
    title: "Startup Women Summit: Demystifying Web3 & Blockchain",
    shortName: "Startup Women Summit",
    // year: "2024",
    role: "Panelist (Web3 & Blockchain)",
    location: "Startup Women Summit // Panel Session",
    category: "community",
    categoryLabel: "Community & Diversity",
    tag: "PANELIST // WEB3 DEMYSTIFIED // PERMISSIONLESS TECH",
    stats: "Founders, Builders & Novices • Web3 Panelist",
    leadPhoto: "startup_women/1743890937024.jpg",
    headline: "Demystifying Blockchain & Web3: The Anatomy of Permissionless Technology and Emerging Opportunities",
    summary:
      "Featured panelist at the Startup Women Summit, demystifying blockchain and Web3 for novices, breaking down the underlying technology anatomy, explaining why it is fundamentally permissionless, and spotlighting real-world opportunities for women builders.",
    story:
      "At the Startup Women Summit, I joined the featured panel session to cut through the noise, speculation, and hype surrounding blockchain and Web3 for an audience of novice builders, students, and early-stage founders.\n\nMy focus on the panel was to ground the conversation in technical reality from first principles: moving beyond trading chatter to explain the actual anatomy behind decentralized technologies—distributed ledgers, cryptographic verification, and consensus state machines. I explained what makes Web3 fundamentally transformative: its permissionless architecture. In a permissionless system, anyone with an internet connection can build, deploy code, verify transactions, and participate without needing approval from centralized intermediaries or platform gatekeepers.\n\nFinally, I broke down the tangible opportunities in the space—highlighting how women builders, engineers, and entrepreneurs can take advantage of developer grants, open-source bounties, decentralized finance infrastructure, and emerging startup ecosystems.",
    takeaways: [
      "Demystifying Blockchain for Novices: Stripping away hype to explain core decentralized architecture and cryptographic ledgers",
      "The Anatomy of Web3: Deconstructing how peer-to-peer consensus, smart contracts, and distributed state machines operate",
      "Why 'Permissionless' Matters: How open, borderless protocols eliminate gatekeepers, censorship, and arbitrary platform risk",
      "Ecosystem Opportunities for Women: Unlocking practical pathways across developer grants, startup funding, and protocol engineering",
    ],
    gallery: [
      { path: "startup_women/1743890937024.jpg", caption: "Panel session at Startup Women Summit: Deconstructing blockchain fundamentals and permissionless tech." },
      { path: "startup_women/IMG-20250406-WA0008.jpg", caption: "Demystifying Web3 anatomy and answering audience questions on decentralized opportunities." },
      { path: "startup_women/IMG-20250406-WA0006.jpg", caption: "Engaging female founders and novice builders on leveraging borderless Web3 infrastructure." },
    ],
  },
  {
    id: "bitdev-workshops",
    title: "BitDevs Technical Bitcoin Architecture Workshop",
    shortName: "BitDevs Workshops",
    // year: "2024",
    role: "Workshop Facilitator",
    location: "BitDevs Hub // Developer Lab",
    category: "workshops",
    categoryLabel: "Technical Workshops",
    tag: "BITCOIN // PROTOCOL LAB",
    stats: "Developer Intensive • Protocol & Code",
    leadPhoto: "bitdev_workshops/2.jpeg",
    headline: "Bitcoin Protocol Mechanics, RPC Interfaces & UTXO Operations",
    summary:
      "Organized and facilitated intensive technical deep-dive workshops on Bitcoin Core, regtest network setups, transaction construction, and protocol-level security primitives.",
    story:
      "BitDevs is an engineering research community exploring open monetary networks. In this intensive workshop series, we inspected Bitcoin Core RPC APIs, node configuration, mempool eviction policies, and how to craft raw transactions using standard cryptographic libraries.",
    takeaways: [
      "Setting up and automating local regtest Bitcoin nodes for testing",
      "Constructing and signing raw transactions with multisig and taproot scripts",
      "Inspecting P2P network propagation and state validation mechanics",
    ],
    gallery: [
      { path: "bitdev_workshops/2.jpeg", caption: "Leading the interactive protocol breakdown session with attendees." },
      { path: "bitdev_workshops/4.jpeg", caption: "Whiteboard architecture walk-through of UTXO verification pipelines." },
      { path: "bitdev_workshops/6.jpeg", caption: "Developers working through local regtest configuration and RPC scripts." },
      { path: "bitdev_workshops/7.jpeg", caption: "Analyzing transaction serialization formats and cryptographic signatures." },
      { path: "bitdev_workshops/8.jpeg", caption: "Q&A on layer-2 scaling architectures and node synchronization." },
      { path: "bitdev_workshops/10.jpeg", caption: "Hands-on terminal debugging session with workshop participants." },
      { path: "bitdev_workshops/11.jpeg", caption: "Group discussions and peer code review of decentralized integration scripts." },
      { path: "bitdev_workshops/13.jpeg", caption: "Closing remarks and open technical debate on upcoming BIP proposals." },
      { path: "bitdev_workshops/14.jpeg", caption: "Deep dive into transaction validation logic and mempool dynamics." },
      { path: "bitdev_workshops/15.jpeg", caption: "Collaborative developer code testing on testnet and regtest environments." },
      { path: "bitdev_workshops/3.jpeg", caption: "Protocol design discussion with local blockchain engineers." },
      { path: "bitdev_workshops/5.jpeg", caption: "Scripting custom automated Bitcoin RPC client handlers." },
      { path: "bitdev_workshops/9.jpeg", caption: "Analyzing network topology and gossip protocol performance." },
    ],
  },
  {
    id: "superteam-workshop",
    title: "Superteam Nigeria Web3 Developer Workshop",
    shortName: "Superteam Nigeria",
    // year: "2024",
    role: "Workshop Speaker & Mentor",
    location: "Superteam Nigeria Hub",
    category: "workshops",
    categoryLabel: "Technical Workshops",
    tag: "WEB3 // HIGH-SPEED DAPPS",
    stats: "Hands-on Code Lab • DApp Architecture",
    leadPhoto: "super_team_workshop/SNG-1.jpg",
    headline: "Building Resilient Frontend Interfaces for Web3 & Wallet Interactions",
    summary:
      "Hands-on technical workshop training developers on wallet integration architectures, optimistic transactions, RPC failover strategies, and reactive user feedback.",
    story:
      "In decentralized applications, network latency and asynchronous confirmations present unique UX challenges. In this workshop, I demonstrated how to architect responsive frontend clients that abstract blockchain complexities through optimistic UI updates, robust RPC fallback clusters, and clear transaction lifecycle feedback.",
    takeaways: [
      "Architecting state machines for multi-wallet connectivity and signature requests",
      "Mitigating RPC latency through smart background polling and WebSocket streams",
      "Eliminating phantom loading states and confusing blockchain error codes",
    ],
    gallery: [
      { path: "super_team_workshop/SNG-1.jpg", caption: "Demonstrating clean client-side wallet connection state machines." },
      { path: "super_team_workshop/SNG-3.jpg", caption: "Guiding engineers through Web3 frontend integration exercises." },
    ],
  },
  {
    id: "devfest-community",
    title: "Google DevFest & GDG Community Chronicles",
    shortName: "GDG DevFest",
    // year: "2021 - 2024",
    role: "Speaker & Community Leader",
    location: "Google Developer Groups (GDG)",
    category: "keynotes",
    categoryLabel: "Keynote & Stage",
    tag: "DEVFEST // ECOSYSTEM LEAD",
    stats: "Annual Summits • Keynotes & Demos",
    leadPhoto: "Photos/DevFest 2021 DONE_452.JPG",
    headline: "Ecosystem Building: Modern Web Evolution & Developer Ergonomics",
    summary:
      "Long-time community speaker at Google Developer Groups DevFest summits, delivering presentations on frontend performance, modern frameworks, and technical leadership.",
    story:
      "Being an active part of the Google Developer Groups ecosystem over the years has allowed me to share knowledge with thousands of passionate developers. Across multiple DevFests, I've delivered sessions showcasing frontend modernization, component design systems, and practical career navigation.",
    takeaways: [
      "Modern JavaScript/TypeScript tooling evolution: Bundlers, compilation & SSR",
      "Design systems as shared contracts between engineering and product teams",
      "The value of consistent community engagement in professional growth",
    ],
    gallery: [
      { path: "Photos/DevFest 2021 DONE_452.JPG", caption: "Presenting on stage at Google DevFest on frontend ecosystem trends." },
      { path: "Photos/DevFest 2021 DONE_454.JPG", caption: "Engaging attendees with live architecture comparisons and benchmarks." },
      { path: "Photos/SRC_9678.JPG", caption: "Stage keynote delivery exploring reactive component structures." },
      { path: "Photos/SRC_9677.JPG", caption: "Explaining reactive data models and system design principles." },
      { path: "Photos/SRC_9674.JPG", caption: "Keynote presentation on stage at developer summits." },
      { path: "Photos/SRC_9673.JPG", caption: "Audience Q&A addressing developer questions on real-world frontend challenges." },
      { path: "Photos/SRC_9548.JPG", caption: "Speaking to engineers on API resilience and client-side caching." },
      { path: "Photos/336A2317.jpg", caption: "Sharing lessons learned from shipping high-traffic fintech applications." },
      { path: "Photos/SRC_0767.jpg", caption: "Speaking to builders on system engineering and mobile state architectures." },
      { path: "Photos/IMG-20241012-WA0089.jpg", caption: "Community networking and peer engineering discussions post-keynote." },
      { path: "Photos/DevFestMe-2021-10-31-21-15-1.png", caption: "Official DevFest speaker banner credential." },
    ],
  },
  {
    id: "conference-chronicles",
    title: "National Tech Summits & Developer Gatherings",
    shortName: "Tech Summits",
    // year: "2022 - 2024",
    role: "Speaker & Panelist",
    location: "Tech Innovation Arenas & Hubs",
    category: "keynotes",
    categoryLabel: "Keynote & Stage",
    tag: "CONFERENCE // ECOSYSTEM // PANELS",
    stats: "Multicity Events • Stages & Code Labs",
    leadPhoto: "Photos/336A2426.jpg",
    headline: "Cross-Platform Frontiers: Mobile Ecosystems & Modern Frontend Delivery",
    summary:
      "Presenting on multi-platform architectures, performance profiling, and engineering culture across developer conferences, panels, and regional tech summits.",
    story:
      "Across various regional engineering conferences and community panels, I have advocated for frontend craftsmanship, defensive mobile architectures, and developer ergonomics. These chronicles document the stages, open Q&As, and developer interactions that define this collaborative journey.",
    takeaways: [
      "Navigating architectural trade-offs between progressive web applications and native mobile apps",
      "Implementing resilient client-side telemetry and crash mitigation strategies",
      "Engaging deeply with regional developer squads to foster engineering excellence",
    ],
    gallery: [
      { path: "Photos/336A2426.jpg", caption: "On-stage speaker address explaining system trade-offs." },
      { path: "Photos/bca9393b4de4494aac3f53c29ad256b6.jpg", caption: "Tech summit stage insights on cross-platform mobile architecture." },
      { path: "Photos/1700389138819.jpg", caption: "Technical summit gathering and networking with fellow engineers." },
      { path: "Photos/1efk0o.jpg", caption: "Panel session on software architecture and community engineering." },
      { path: "Photos/4bbbd184a7394e6aa8275f9809ddbd9f.jpg", caption: "Collaborative hackathon debugging and code reviews." },
      { path: "Photos/8fc0c28255fa45af846ad59a7c913cec.jpg", caption: "Post-keynote engineering discussions with developer attendees." },
      { path: "Photos/E0OL8eCWUAEfQwE.jpg", caption: "Conference presentation on frontend framework modernizations." },
      { path: "Photos/IMG-20230901-WA0051.jpg", caption: "Ecosystem developer meetups and lightning talks." },
      { path: "Photos/IMG-20231020-WA0085.jpg", caption: "Community tech summit participation and speaker stage." },
      { path: "Photos/IMG-20240902-WA0029.jpg", caption: "Hands-on builder sessions and tech ecosystem mentorship." },
      { path: "Photos/IMG-20240915-WA0013.jpg", caption: "Stage address on scaling digital products and frontend reliability." },
      { path: "Photos/IMG-20241007-WA0068.jpg", caption: "Developer audience engagement and interactive architecture Q&A." },
    ],
  },
  {
    id: "personal-chronicles",
    title: "Personal Engineering Chronicles & Focus",
    shortName: "Personal Archives",
    // year: "2023 - 2026",
    role: "Senior Software Engineer",
    location: "Studio & Engineering Hub",
    category: "community",
    categoryLabel: "Personal & Craft",
    tag: "PORTRAIT // CRAFT // PHILOSOPHY",
    stats: "Engineering Reflections • Personal Field Notes",
    leadPhoto: "personal/FB_IMG_1777146571644.jpg",
    headline: "Behind the Systems: Continuous Craft, Reflection & Identity",
    summary:
      "A personal retrospective documenting the discipline, late-night architecture sessions, and relentless curiosity behind 5+ years of shipping mission-critical software.",
    story:
      "Beyond the public stages, keynotes, and hackathons lies the daily, focused practice of writing clean code, profiling render cycles, and studying distributed protocol specifications. These personal field chronicles capture that reflective, dedicated side of engineering craft.",
    takeaways: [
      "Cultivating obsessive attention to detail and tactile software ergonomics",
      "Treating software architecture as a long-term discipline of continuous refinement",
      "Maintaining focus amidst rapid technological shifts in web, mobile, and decentralized protocols",
    ],
    gallery: [
      { path: "personal/FB_IMG_1777146571644.jpg", caption: "Personal field chronicle: Reflection, focus, and software craft." },
      { path: "personal/FB_IMG_1777146574175.jpg", caption: "Engineering perspective: Sustained discipline and building with conviction." },
    ],
  },
];
