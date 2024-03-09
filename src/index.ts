/**
 * Return `null` instead of `NaN` on failure (with matching type)
 * Doesn't parse things like "42foo" as "42" (vs useing `Number.parseFloat`)
 * Doesn't parse whitespace-only strings as `0` (vs using `Number()`)
 * Doesn't parse "NaN" into "NaN" or "Infinity" into "Infinity" (vs using `Number()`)
 * In short, only parses token sequences that are *exactly* valid JS numbers
 */
export function numberSafeParse(input: string): number | null {
    if (input.trim() === '') {
        return null
    }
    const parsed = Number(input)
    if (!Number.isFinite(parsed)) {
        return null
    }
    return parsed
}
