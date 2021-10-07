/** Used in cases such as time expressions like 14:23 */
export declare let hoursWithLeadingZero: RegExp;
/** Used in cases such as time expressions like 14:23 */
export declare let minutesWithLeadingZero: RegExp;
/** Regex matching 14:23 */
export declare let time24Hours: RegExp;
/** Regex matching 14:23:56 */
export declare let time24HoursWithSeconds: RegExp;
/** Regex matching example@example.com */
export declare let emailRegex: RegExp;
/**
 * Regex matching the post codes of addresses in Netherland
 * A post code in Netherland, the last section before the name of the city, is made up of 4 numbers and 2 alphabets
 * The first two number indicate the area, the second two numbers indicate the locality, and the two alphabets indicate the street
 * Currently, the range of post codes are from 1011AA to 9999ZZ
 * There can be a single white space between the four number part and two alphabet part. Hence, both `1013 AA` nad `1013AA` are valid.
 */
export declare let NetherlandsPostCode: RegExp;
