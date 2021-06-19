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
        expect(hoursWithLeadingZero.test("111")).toBeTruthy();
        expect(hoursWithLeadingZero.test("0")).toBeFalsy();


        // This regex does not enforce the start and the end of the string. So, if a match existing in the middle of a string, it returns true
        expect(minutesWithLeadingZero.test("00")).toBeTruthy();
        expect(minutesWithLeadingZero.test("0s0")).toBeFalsy();
        expect(minutesWithLeadingZero.test("09")).toBeTruthy();
        expect(minutesWithLeadingZero.test("09s")).toBeTruthy();
        expect(minutesWithLeadingZero.test("11")).toBeTruthy();
        expect(minutesWithLeadingZero.test("23")).toBeTruthy();
        expect(minutesWithLeadingZero.test("60")).toBeFalsy();
        expect(minutesWithLeadingZero.test("111")).toBeTruthy();
        expect(minutesWithLeadingZero.test("0")).toBeFalsy();

    })

});

