
let dateNow = new Date();

let nowMilli = dateNow.getTime();
let dayWeek = dateNow.getDay();
let adder = 6 - dayWeek;
let satMilli = adder * 86400000;
let newMillDate = satMilli + nowMilli;
let satDate = new Date(newMillDate);
let satNum = satDate.getDate();

let end = "";

switch(satNum) {
	case 1:
 	case 21:
 	case 31:
 		end = "st";
 		break;
 	case 2:
	case 22:
 		end = "nd";
 		break;
 	case 3:
	case 23:
		end = "rd";
 		break;  
 	default:
		end = "th";
}
