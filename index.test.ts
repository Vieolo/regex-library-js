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

        
        // The 24 hours time regexes (yes, the plural of regex is regexes) enforce the start and the end of the string. So, a case in the middle of the string will not be matched
        expect(time24Hours.test("0")).toBeFalsy();
        expect(time24Hours.test("00")).toBeFalsy();
        expect(time24Hours.test("23")).toBeFalsy();
        expect(time24Hours.test("23:")).toBeFalsy();
        expect(time24Hours.test("23:1")).toBeFalsy();
        expect(time24Hours.test("23:s1")).toBeFalsy();
        expect(time24Hours.test("23:60")).toBeFalsy();
        expect(time24Hours.test("24:11")).toBeFalsy();
        expect(time24Hours.test("24s11")).toBeFalsy();
        expect(time24Hours.test("2s:11")).toBeFalsy();
        expect(time24Hours.test("s22:11")).toBeFalsy();
        expect(time24Hours.test("22:11s")).toBeFalsy();
        expect(time24Hours.test("00:11")).toBeTruthy();
        expect(time24Hours.test("23:59")).toBeTruthy();
        expect(time24Hours.test("18:42")).toBeTruthy();
        expect(time24Hours.test("04:05")).toBeTruthy();


        expect(time24HoursWithSeconds.test("0")).toBeFalsy();
        expect(time24HoursWithSeconds.test("00")).toBeFalsy();
        expect(time24HoursWithSeconds.test("23")).toBeFalsy();
        expect(time24HoursWithSeconds.test("23:")).toBeFalsy();
        expect(time24HoursWithSeconds.test("23:1")).toBeFalsy();
        expect(time24HoursWithSeconds.test("23:s1")).toBeFalsy();
        expect(time24HoursWithSeconds.test("23:60")).toBeFalsy();
        expect(time24HoursWithSeconds.test("24:11")).toBeFalsy();
        expect(time24HoursWithSeconds.test("24s11")).toBeFalsy();
        expect(time24HoursWithSeconds.test("2s:11")).toBeFalsy();
        expect(time24HoursWithSeconds.test("s22:11")).toBeFalsy();
        expect(time24HoursWithSeconds.test("22:11s")).toBeFalsy();
        expect(time24HoursWithSeconds.test("00:11")).toBeFalsy();
        expect(time24HoursWithSeconds.test("23:59")).toBeFalsy();
        expect(time24HoursWithSeconds.test("18:42")).toBeFalsy();
        expect(time24HoursWithSeconds.test("04:05")).toBeFalsy();
        expect(time24HoursWithSeconds.test("00:11s11")).toBeFalsy();
        expect(time24HoursWithSeconds.test("23:59:1s")).toBeFalsy();
        expect(time24HoursWithSeconds.test("18:42:s1")).toBeFalsy();
        expect(time24HoursWithSeconds.test("04:05:60")).toBeFalsy();
        expect(time24HoursWithSeconds.test("00:11:20")).toBeTruthy();
        expect(time24HoursWithSeconds.test("23:59:59")).toBeTruthy();
        expect(time24HoursWithSeconds.test("18:42:00")).toBeTruthy();
        expect(time24HoursWithSeconds.test("04:05:06")).toBeTruthy();

    })

});

