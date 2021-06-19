import {
    emailRegex,
    hoursWithLeadingZero,
    minutesWithLeadingZero,
    time24Hours,
    time24HoursWithSeconds
} from './index';





describe("Regex Tests", () => {

    it("Matches the Time regex correctly", () => {

        // This regex does not enforce the start and the end of the string. So, if a match existing in the middle of a string, it returns true
        expect(hoursWithLeadingZero.test("00")).toBeTruthy();
        expect(hoursWithLeadingZero.test("0s0")).toBeFalsy();
        expect(hoursWithLeadingZero.test("09")).toBeTruthy();
        expect(hoursWithLeadingZero.test("09s")).toBeTruthy();
        expect(hoursWithLeadingZero.test("11")).toBeTruthy();
        expect(hoursWithLeadingZero.test("23")).toBeTruthy();
        expect(hoursWithLeadingZero.test("24")).toBeFalsy();
        expect(hoursWithLeadingZero.test("111")).toBeFalsy();
        expect(hoursWithLeadingZero.test("0")).toBeFalsy();


        // This regex does not enforce the start and the end of the string. So, if a match existing in the middle of a string, it returns true
        expect("00".match(minutesWithLeadingZero)).toBeTruthy();
        expect("0s0".match(minutesWithLeadingZero)).toBeFalsy();
        expect("09".match(minutesWithLeadingZero)).toBeTruthy();
        expect("09s".match(minutesWithLeadingZero)).toBeTruthy();
        expect("11".match(minutesWithLeadingZero)).toBeTruthy();
        expect("23".match(minutesWithLeadingZero)).toBeTruthy();
        expect("60".match(minutesWithLeadingZero)).toBeFalsy();
        expect("111".match(minutesWithLeadingZero)).toBeTruthy();
        expect("0".match(minutesWithLeadingZero)).toBeFalsy();

    })

});

