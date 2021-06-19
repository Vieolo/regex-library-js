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