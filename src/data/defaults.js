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
    milestones: [
        {
            title: 'Proweb Learning Center — Graduated',
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
