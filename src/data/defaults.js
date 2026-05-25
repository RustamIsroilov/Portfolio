/**
 * Default site content. Used as the fallback when Firebase is unconfigured
 * or hasn't been seeded yet. Also used as the initial values when the admin
 * seeds the database.
 */

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
    gpa: {
        value: '5.0',
        scale: '5.0',
        note: 'School cumulative GPA',
    },
    sat: {
        status: 'In progress',
        note: 'Currently preparing — score coming soon',
    },
    /**
     * milestones[] — each item:
     *   title    string   — heading
     *   org      string   — institution + location
     *   when     string   — date range
     *   desc     string   — short description
     *   badges?  string[] — optional accolades, rendered as highlighted chips
     */
    milestones: [
        {
            title: 'Public School #178',
            org:   'Tashkent, Uzbekistan',
            when:  'September 2016 – May 2019',
            desc:  'Primary and lower-secondary education.',
        },
        {
            title: 'Wisdom Private School',
            org:   'Tashkent, Uzbekistan',
            when:  'September 2019 – March 2020',
            desc:  'Continued secondary education.',
        },
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
        {
            title: 'Proweb Learning Center — Web Development',
            org:   'Tashkent, Uzbekistan',
            when:  '16.03.2023 – 16.01.2024',
            desc:  'Modern Web Professions course: HTML, CSS, JavaScript, SCSS, Vue, Git.',
        },
        {
            title: 'Self-study with Claude AI',
            org:   'Remote, ongoing',
            when:  '2025 – present',
            desc:  'Vibe-coding full projects end-to-end with Claude as a coding partner.',
        },
    ],
};
