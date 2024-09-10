import fractionConverter from ".";

describe("fractionConverter", () => {
   it('should return a string form of the fraction', () => {
        expect(fractionConverter(0.5)).toBe('1/2');
    });
    it('should return a string form of the fraction', () => {
        expect(fractionConverter(0.75)).toBe('3/4');
    });
    it('should return a string form of the fraction', () => {
        expect(fractionConverter(0.999)).toBe('999/1000');
    });
    it('should return a string form of the fraction', () => {
        expect(fractionConverter(0.256)).toBe('32/125');
    });
    it('should handle whole numbers', () => {
        expect(fractionConverter(3.0)).toBe('3/1');
    });
    it('should handle irregular fractions', () => {
        expect(fractionConverter(2.5)).toBe('5/2');
    });
    it('should handle irregular fractions', () => {
        expect(fractionConverter(1.625)).toBe('13/8');
    });
    it('should handle large decimal numbers', () => {
        expect(fractionConverter(9846.948)).toBe('2461737/250');
    });
});