/**
 * Shuffles an array of items unique to the application. Uses a random
 * switching alorithm in O(n) time.
 * @param {(string || number)[]} items_ - Array of strings or numbers to be
 * shuffled (esp. 'proportionedOranges' for color names and 'viable...
 * Indices')
 * @returns a correctly pseudo-randomized array from the same array
 */
export function shuffleItems<T>(items_: T[]): T[] {
    const items = items_.slice();
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}
