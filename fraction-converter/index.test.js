import fractionConverter from ".";

describe("fractionConverter", () => {
    it('should return null', () => {
        expect(fractionConverter(0)).toBeNull();
    });
});