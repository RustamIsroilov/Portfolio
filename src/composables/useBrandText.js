/**
 * Render a tagline with brand-highlighted fragments.
 *
 *   "Hi I'm {Rustam} and I love {Vue}"  →  3 segments:
 *     [ {text: "Hi I'm ",  brand: false},
 *       {text: "Rustam",   brand: true },
 *       {text: " and I love ", brand: false},
 *       {text: "Vue",      brand: true } ]
 *
 * The component then v-for-renders <span> for brand fragments and plain text
 * for the rest. Keeps the brand gradient highlighting editable from the admin
 * (just type {something} in the tagline).
 */
export function parseBrandText(input) {
    if (!input) return [];
    const parts = [];
    const regex = /\{([^}]+)\}/g;
    let last = 0, m;
    while ((m = regex.exec(input)) !== null) {
        if (m.index > last) parts.push({ text: input.slice(last, m.index), brand: false });
        parts.push({ text: m[1], brand: true });
        last = regex.lastIndex;
    }
    if (last < input.length) parts.push({ text: input.slice(last), brand: false });
    return parts;
}
