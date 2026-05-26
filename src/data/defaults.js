/**
 * Default site content. Used as the fallback when Firebase is unconfigured
 * or hasn't been seeded yet, and as initial values when the admin first
 * writes to Firestore.
 */

// ── Achievements doc (content/achievements) ──────────────────────────────
export const defaultAchievements = {
    ielts: {
        overall: 7.5,
        sections: [
            { label: 'Listening', score: 8.0 },
            { label: 'Reading',   score: 8.5 },
            { label: 'Writing',   score: 6.5 },
            { label: 'Speaking',  score: 6.5 },
        ],
    },
    gpa: { value: '5.0', scale: '5.0', note: 'School cumulative GPA' },
    sat: { status: 'In progress', note: 'Currently preparing — score coming soon' },
    milestones: [
        { title: 'Public School #178',                            org: 'Tashkent, Uzbekistan', when: 'September 2016 – May 2019',  desc: 'Primary and lower-secondary education.' },
        { title: 'Wisdom Private School',                         org: 'Tashkent, Uzbekistan', when: 'September 2019 – March 2020', desc: 'Continued secondary education.' },
        {
            title: "Iste'dodli Kelajak Yoshlari — Private School",
            org:   'Tashkent, Uzbekistan',
            when:  'March 2020 – May 2026',
            desc:  'Full secondary education through graduation.',
            badges: [
                '🏆 Best Student of the Year 2023–2024',
                '🏆 Best Student of the Year 2024–2025',
                '🏆 Best Student of the Year 2025–2026',
            ],
        },
        { title: 'Proweb Learning Center — Web Development',      org: 'Tashkent, Uzbekistan', when: '16.03.2023 – 16.01.2024',     desc: 'Modern Web Professions course: HTML, CSS, JavaScript, SCSS, Vue, Git.' },
        { title: 'Self-study with Claude AI',                     org: 'Remote, ongoing',      when: '2025 – present',              desc: 'Vibe-coding full projects end-to-end with Claude as a coding partner.' },
    ],
};

// ── Site doc (content/site) ──────────────────────────────────────────────
// Edit-anywhere content for every page except Achievements.
export const defaultSite = {
    profile: {
        name:      'Rustam Isroilov',
        email:     'isroilovr10@gmail.com',
        phone:     '+998 93 845 55 65',
        github:    'https://github.com/RustamIsroilov',
        twitter:   'https://twitter.com/RustambekI39739',
        instagram: 'https://www.instagram.com/rustambek7875/',
    },

    home: {
        // {brand} highlights the parts inside braces with the brand gradient
        title: 'Hi 👋, My name is {Rustam Isroilov} I build things for the web — and I use {Claude AI} to vibe-code full projects, end to end.',
    },

    about: {
        title: 'I am a {Junior} web developer studying in the {Vue} ecosystem and shipping projects with {Claude AI}.',
        bio: [
            "I'm Rustam Isroilov — born on **17 April 2010 in Samarkand**, the firstborn of a bankers' family. My mother taught art at a school and my father worked in banking. When I was one year old, my parents moved with me to **Tashkent**, where I've lived ever since.",
            "From **age 6 to about 10–11, I was a chess player**. I trained seriously, climbed the rankings and earned the *1st sports category* title. My proudest result was finishing **17th at the Sochi International Tournament 2019**, out of thousands of participants. Then COVID-19 hit and everything stopped — no classes, no tournaments. After a long break my sharpness was gone, and I decided to close that chapter rather than chase a faded peak.",
            "In **7th grade I discovered programming** and enrolled at the Proweb Front-End course. Something clicked: building things became the way I think — projects turned into my *kind of art*.",
            "In **9th grade I decided I want to study abroad** and use what I learn to build a life that helps real people. My goal isn't just \"ship code\" — it's to make tools and sites that *quietly make millions of small daily things easier*.",
            "Most recently I started **using Claude AI as a coding partner** — \"vibe-coding\" full projects end-to-end, from the first idea to a deployed product.",
        ],
        education: [
            { title: 'Public School #178',                                org: 'Tashkent, Uzbekistan', when: 'September 2016 – May 2019',  badge: 'Completed' },
            { title: 'Wisdom Private School',                             org: 'Tashkent, Uzbekistan', when: 'September 2019 – March 2020', badge: 'Completed' },
            { title: "Iste'dodli Kelajak Yoshlari — Private School",      org: 'Tashkent, Uzbekistan', when: 'March 2020 – May 2026',       badge: 'Best Student ×3', gold: true },
            { title: 'Proweb Learning Center — Web Development',          org: 'Tashkent, Uzbekistan', when: '16.03.2023 – 16.01.2024',     badge: 'Graduated' },
            { title: 'Self-study with Claude AI',                         org: 'Remote',               when: '2025 – present',              badge: 'Ongoing' },
        ],
    },

    stack: {
        title: 'I have studied the languages listed below at {Proweb} Learning Center, and I level them up daily by vibe-coding with {Claude AI}.',
        items: [
            { name: 'HTML',      icon: 'html.svg',   percent: 90 },
            { name: 'CSS',       icon: 'css.svg',    percent: 90 },
            { name: 'JS',        icon: 'js.svg',     percent: 70 },
            { name: 'Vue',       icon: 'vue.png',    percent: 75 },
            { name: 'SCSS',      icon: 'scss.svg',   percent: 85 },
            { name: 'Vite',      icon: 'vite.svg',   percent: 70 },
            { name: 'GitHub',    icon: 'github.svg', percent: 70 },
            { name: 'Git',       icon: 'git.svg',    percent: 90 },
            { name: 'Claude AI', icon: 'claude.svg', percent: 95 },
        ],
    },

    // Tech tiles on the home page (no percent — just an icon grid)
    homeTech: [
        { name: 'HTML',       icon: 'html.svg' },
        { name: 'CSS',        icon: 'css.svg' },
        { name: 'JavaScript', icon: 'js.svg' },
        { name: 'SCSS',       icon: 'scss.svg' },
        { name: 'Vue',        icon: 'vue.png' },
        { name: 'Vite',       icon: 'vite.svg' },
        { name: 'Git',        icon: 'git.svg' },
        { name: 'GitHub',     icon: 'github.svg' },
        { name: 'VS Code',    icon: 'vs.svg' },
        { name: 'Claude AI',  icon: 'claude.svg' },
    ],

    /**
     * projects[] — each item:
     *   title      string
     *   desc       string   (short summary, used on home cards)
     *   tech       string   "comma-separated stack"
     *   image      string   filename inside src/assets/img, OR full https:// URL
     *   liveUrl?   string   "View Site" / "Live Preview" link
     *   codeUrl?   string   GitHub link
     *   telegram?  string   t.me/... link (shown as "Open in Telegram")
     *   featured?  boolean  pinned to top of list
     */
    projects: [
        {
            title:    'ScamGuard Bot',
            desc:     "Telegram bot that flags suspicious accounts: estimates account age, scans every URL/file with VirusTotal, cross-checks against the CAS anti-spam list, and builds a shared scammer database. Vibe-coded end-to-end with Claude AI, deployed 24/7 on Railway.",
            tech:     'Python, python-telegram-bot, SQLite, VirusTotal, Railway',
            image:    'scamguard.svg',
            telegram: 'https://t.me/safityprovider_bot',
            codeUrl:  'https://github.com/RustamIsroilov/safitybot',
            featured: true,
        },
        { title: 'Notes',       desc: 'Streamline your thoughts with our intuitive notes site. Effortlessly capture ideas, stay organized, and boost productivity.', tech: 'HTML, JavaScript, SCSS, Vue',     image: 'card_1.png', liveUrl: 'https://smirfayoz.github.io/todo-list/',     codeUrl: 'https://github.com/RustamIsroilov/Notes' },
        { title: 'dBurger',     desc: 'Savor the extraordinary at our burger haven. Indulge in mouthwatering creations crafted with the finest ingredients.',         tech: 'HTML, JavaScript, CSS',           image: 'card_2.png', liveUrl: 'https://rustamisroilov.github.io/dBurger/',   codeUrl: 'https://github.com/RustamIsroilov/dBurger' },
        { title: 'Vue Cinema',  desc: 'Dive into a cinematic universe where every frame tells a story. Latest releases, exclusive content, and a seamless booking experience.', tech: 'HTML, CSS', image: 'card_3.png', liveUrl: 'https://rustamisroilov.github.io/VueCinema/', codeUrl: 'https://github.com/RustamIsroilov/VueCinema' },
        { title: 'Apreture',    desc: 'Explore a world of visual mastery. Unleash creativity with precision and clarity — where photography meets artistry.',         tech: 'HTML, SCSS',                      image: 'card_4.png', liveUrl: 'https://rustamisroilov.github.io/document/',  codeUrl: 'https://github.com/RustamIsroilov/document' },
        { title: 'Totembo',     desc: 'A collection of stylish watches with online ordering, an intuitive interface and impeccable service.',                          tech: 'HTML, CSS',                        image: 'card_7.jpg', liveUrl: 'https://rustamisroilov.github.io/Totembo/',   codeUrl: 'https://github.com/RustamIsroilov/Totembo' },
        { title: 'CinePhile',   desc: 'A cinematic journey. Explore a variety of movies, book tickets online, and enjoy a modern, user-centred design.',               tech: 'HTML, JavaScript, SASS, Vue',     image: 'card_6.png', liveUrl: 'https://fakhad.github.io/movie-app' },
    ],
};
