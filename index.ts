/** Used in cases such as time expressions like 14:23 */
let hoursWithLeadingZero = /0{0}[0-23]{2}/;

/** Used in cases such as time expressions like 14:23 */
let minutesWithLeadingZero = /0{0}[0-59]{2}/;


/** Regex matching 14:23 */
export let time24Hours = new RegExp(hoursWithLeadingZero.source + "\:" + minutesWithLeadingZero.source);

/** Regex matching 14:23:56 */
export let time24HoursWithSeconds = new RegExp(hoursWithLeadingZero.source + "\:" + minutesWithLeadingZero.source + "\:" + minutesWithLeadingZero.source);
