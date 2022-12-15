/** Used in cases such as time expressions like 14:23 */
export declare let hoursWithLeadingZero: RegExp;
/** Used in cases such as time expressions like 14:23 */
export declare let minutesWithLeadingZero: RegExp;
/** Regex matching 14:23 */
export declare let time24Hours: RegExp;
/** Regex matching 14:23:56 */
export declare let time24HoursWithSeconds: RegExp;
/** Regex matching 2020-12-24 */
export declare let dateYYYYMMDD: RegExp;
/** Regex matching 24/12/2020 */
export declare let dateDDMMYYYY: RegExp;
/** Regex matching 12/24/2020 */
export declare let dateMMDDYYYY: RegExp;
/** Regex matching an email address, anywhere in the text */
export declare let emailRegexMix: RegExp;
/** Regex matching an email address, with no other text allowed in the subject*/
export declare let emailRegexStandAlone: RegExp;
/**
 * Regex matching the post codes of addresses in Netherland
 * A post code in Netherland, the last section before the name of the city, is made up of 4 numbers and 2 alphabets
 * The first two number indicate the area, the second two numbers indicate the locality, and the two alphabets indicate the street
 * Currently, the range of post codes are from 1011AA to 9999ZZ
 * There can be a single white space between the four number part and two alphabet part. Hence, both `1013 AA` nad `1013AA` are valid.
 */
export declare let NetherlandsPostCode: RegExp;
/**
 * Regex matching the texts allowed in the batch payment XML used for SEPA.
 *
 * The allowed characters are:
 *
 * a b c d e f g hi j k l m no p q r s t u v w x y z
 * A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 01 2 3 4 5 6 7 8 9
 * / - ? : ( ) .,+ & < > "
 *
 * Please note that [&, <, >, "] should be replaced with their XML representations: [&amp;, &lt;, &gt;, &quot;]
 *
 * Please note that beside this regex, the text cannot have two consecutive `/` (//) and cannot start or end with a `/`
 */
export declare let SEPAXMLTextRegex: RegExp;
