import {
    hoursWithLeadingZero,
    minutesWithLeadingZero,
    time24Hours,
    time24HoursWithSeconds,
    dateDDMMYYYY,
    dateMMDDYYYY,
    dateYYYYMMDD,
    NetherlandsPostCode,
    SEPAXMLTextRegex,
    emailRegexMix,
    emailRegexStandAlone,
} from '../src/index';





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


    it("Matches the Time regex correctly", () => {
        
        expect(emailRegexStandAlone.test("example@example.com")).toBeTruthy();
        expect(emailRegexStandAlone.test("Example._-1234@Exa.co.UK")).toBeTruthy();                
        expect(emailRegexStandAlone.test("Example._-1234@Exa.co.UK ssds")).toBeFalsy();                
        expect(emailRegexMix.test("sd Example._-1234@Exa.co.UK ssds")).toBeTruthy();                
        expect(emailRegexStandAlone.test("Example._-1234@Exa")).toBeFalsy();                
    })


    it("Matched the Date regex correctly", () => {

        // YYYY-MM-DD
        expect(dateYYYYMMDD.test('2020-10-10')).toBeTruthy();
        expect(dateYYYYMMDD.test('2020-12-31')).toBeTruthy();
        expect(dateYYYYMMDD.test('2020-01-01')).toBeTruthy();
        expect(dateYYYYMMDD.test('2020-1-10')).toBeFalsy();
        expect(dateYYYYMMDD.test('2020-10-1')).toBeFalsy();
        expect(dateYYYYMMDD.test('2020-13-10')).toBeFalsy();
        expect(dateYYYYMMDD.test('2020-10-32')).toBeFalsy();
        expect(dateYYYYMMDD.test('2020-10-100')).toBeFalsy();
        expect(dateYYYYMMDD.test('12020-10-10')).toBeFalsy();
        expect(dateYYYYMMDD.test('2020--10-10')).toBeFalsy();
        expect(dateYYYYMMDD.test('2020-10--10')).toBeFalsy();
        expect(dateYYYYMMDD.test('2020/10/10')).toBeFalsy();


        // DD-MM-YYYY
        expect(dateDDMMYYYY.test('10/10/2020')).toBeTruthy();
        expect(dateDDMMYYYY.test('31/12/2020')).toBeTruthy();
        expect(dateDDMMYYYY.test('01/01/2020')).toBeTruthy();
        expect(dateDDMMYYYY.test('10/1/2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('1/10/2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('10/13/2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('32/10/2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('100/10/2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('10/100/2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('10/10/12020')).toBeFalsy();
        expect(dateDDMMYYYY.test('10//10/2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('10/10//2020')).toBeFalsy();
        expect(dateDDMMYYYY.test('10-10-2020')).toBeFalsy();


        // MM-DD-YYYY
        expect(dateMMDDYYYY.test('10/10/2020')).toBeTruthy();
        expect(dateMMDDYYYY.test('12/31/2020')).toBeTruthy();
        expect(dateMMDDYYYY.test('01/01/2020')).toBeTruthy();
        expect(dateMMDDYYYY.test('1/10/2020')).toBeFalsy();
        expect(dateMMDDYYYY.test('10/1/2020')).toBeFalsy();
        expect(dateMMDDYYYY.test('13/10/2020')).toBeFalsy();
        expect(dateMMDDYYYY.test('10/32/2020')).toBeFalsy();
        expect(dateMMDDYYYY.test('100/10/2020')).toBeFalsy()
        expect(dateMMDDYYYY.test('10/100/2020')).toBeFalsy();
        expect(dateMMDDYYYY.test('10/10/12020')).toBeFalsy();
        expect(dateMMDDYYYY.test('10//10/2020')).toBeFalsy();
        expect(dateMMDDYYYY.test('10/10//2020')).toBeFalsy();
        expect(dateMMDDYYYY.test('10-10-2020')).toBeFalsy();

    })


    it("Matches the Address regex correctly", () => {
        // This regex does not enforce the start and the end of the string. So, if a match existing in the middle of a string, it returns true
        expect(NetherlandsPostCode.test("")).toBeFalsy();
        expect(NetherlandsPostCode.test("A")).toBeFalsy();
        expect(NetherlandsPostCode.test("1")).toBeFalsy();
        expect(NetherlandsPostCode.test("10")).toBeFalsy();
        expect(NetherlandsPostCode.test("101")).toBeFalsy();
        expect(NetherlandsPostCode.test("1000")).toBeFalsy();
        expect(NetherlandsPostCode.test("1009")).toBeFalsy();
        expect(NetherlandsPostCode.test("1009 AA")).toBeFalsy();
        expect(NetherlandsPostCode.test("1009AA")).toBeFalsy();
        expect(NetherlandsPostCode.test("1010 AA")).toBeFalsy();
        expect(NetherlandsPostCode.test("1011")).toBeFalsy();
        expect(NetherlandsPostCode.test("1011 A")).toBeFalsy();
        expect(NetherlandsPostCode.test("1011 AA")).toBeTruthy();
        expect(NetherlandsPostCode.test("1020AB")).toBeTruthy();
        expect(NetherlandsPostCode.test("1099ZZ")).toBeTruthy();
        expect(NetherlandsPostCode.test("1100 EW")).toBeTruthy();
        expect(NetherlandsPostCode.test("1111 RA")).toBeTruthy();
        expect(NetherlandsPostCode.test("1999GH")).toBeTruthy();
        expect(NetherlandsPostCode.test("2999HG")).toBeTruthy();
        expect(NetherlandsPostCode.test("3000za")).toBeTruthy();
        expect(NetherlandsPostCode.test("9999Vb")).toBeTruthy();
        expect(NetherlandsPostCode.test("9999vB")).toBeTruthy();
        expect(NetherlandsPostCode.test("999vB")).toBeFalsy();
        expect(NetherlandsPostCode.test("8765  AB")).toBeFalsy();
        expect(NetherlandsPostCode.test("8765 ABZ")).toBeFalsy();
    })

    it("Matched SEPA XML text correctly", () => {
        expect(SEPAXMLTextRegex.test("")).toBeTruthy();
        expect(SEPAXMLTextRegex.test("8765 ABZ")).toBeTruthy();
        expect(SEPAXMLTextRegex.test("Note: Senders must ensure that the content of Identifiers/reference data elements is restricted to the restricted basic Latin character set (across). If non supported characters are used in these fields they may lead to rejection of files or transactions in the payment chain.")).toBeTruthy();
        expect(SEPAXMLTextRegex.test('a b c d e f g hi j k l m no p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 / - ? : ( ) . , + & < > "')).toBeTruthy();
        expect(SEPAXMLTextRegex.test("Vieolo OÜ")).toBeFalsy();
        expect(SEPAXMLTextRegex.test("'")).toBeFalsy();
        expect(SEPAXMLTextRegex.test("`")).toBeFalsy();
        expect(SEPAXMLTextRegex.test("_")).toBeFalsy();
        expect(SEPAXMLTextRegex.test("!")).toBeFalsy();
        expect(SEPAXMLTextRegex.test(";")).toBeFalsy();
        expect(SEPAXMLTextRegex.test("Optionally, if the personal account or organization in which you're creating uses any GitHub Apps from GitHub Marketplace, select any apps you'd like to use in the repository.")).toBeFalsy();        
    })

});

