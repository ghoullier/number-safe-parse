import { numberSafeParse } from "./index"

import { describe, expect, test } from "bun:test"

describe("numberSafeParse()", () => {
    test('Return `null` instead of `NaN` on failure (with matching type)', () => {
        expect(numberSafeParse("yo")).toBe(null)
    })
    test('Does not parse things like "42foo" as "42" (vs useing`Number.parseFloat`)', () => {
        expect(numberSafeParse('42foo')).toBe(null)
    })
    test('Does not parse whitespace - only strings as `0` (vs using`Number()`)', () => {
        expect(numberSafeParse('     ')).toBe(null)
    })
    test('Does not parse "NaN" into "NaN" or "Infinity" into "Infinity"(vs using`Number()`)', () => {
        expect(numberSafeParse("NaN")).toBe(null)
        expect(numberSafeParse("Infinity")).toBe(null)
        expect(numberSafeParse("-Infinity")).toBe(null)
    })
    test("Only parses token sequences that are *exactly* valid JS numbers", ()=> {
        expect(numberSafeParse("12345")).toBe(12345)
        expect(numberSafeParse("10.145")).toBe(10.145)
    })
})
