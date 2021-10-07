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
