//#region Time Regex
/** Used in cases such as time expressions like 14:23 */
export let hoursWithLeadingZero = /0{0}([0-1]{1}[0-9]{1}|[2]{1}[0-3]{1})/;
/** Used in cases such as time expressions like 14:23 */
export let minutesWithLeadingZero = /0{0}[0-5]{1}[0-9]{1}/;
/** Regex matching 14:23 */
export let time24Hours = new RegExp("^" + hoursWithLeadingZero.source + "\:" + minutesWithLeadingZero.source + "$");
/** Regex matching 14:23:56 */
export let time24HoursWithSeconds = new RegExp("^" + hoursWithLeadingZero.source + "\:" + minutesWithLeadingZero.source + "\:" + minutesWithLeadingZero.source + "$");
//#endregion
//#region Date Regex
/** Regex matching 2020-12-24 */
export let dateYYYYMMDD = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/m;
/** Regex matching 24/12/2020 */
export let dateDDMMYYYY = /^((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/[12]\d{3})$/m;
/** Regex matching 12/24/2020 */
export let dateMMDDYYYY = /^((0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/[12]\d{3})$/m;
//#endregion
//#region Email Regex
/** Regex matching example@example.com */
export let emailRegex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
//#endregion
//#region Address Regex
/**
 * Regex matching the post codes of addresses in Netherland
 * A post code in Netherland, the last section before the name of the city, is made up of 4 numbers and 2 alphabets
 * The first two number indicate the area, the second two numbers indicate the locality, and the two alphabets indicate the street
 * Currently, the range of post codes are from 1011AA to 9999ZZ
 * There can be a single white space between the four number part and two alphabet part. Hence, both `1013 AA` nad `1013AA` are valid.
 */
export let NetherlandsPostCode = /^((101[1-9]|10[2-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9][0-9][0-9])\s?(([A-Z]|[a-z]){2}))$/m;
//#endregion
//#region SEPA regex
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
export let SEPAXMLTextRegex = /^[A-Za-z0-9\s/?:<>,+&"().-]+$|^$/;
//#endregion
