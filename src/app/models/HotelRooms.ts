import { HotelRoom } from './HotelRoom';

export class HotelRooms {
	hotelRooms: HotelRoom[];

	constructor() {
		this.hotelRooms = [
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Master Suite",
				"level": "Beach Level",
				"bedding": "KING SIZE BED + SINGLE DAY BED",
				"ac": true,
				"ratePerDay": "$502.18",
				"total": "$2008.72",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Master Suite",
				"level": "Beach Level",
				"bedding": "KING SIZE BED",
				"ac": true,
				"ratePerDay": "$502.18",
				"total": "$2008.72",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Master Suite",
				"level": "Top Floor",
				"bedding": "KING SIZE BED + FULL DAY BED",
				"ac": false,
				"ratePerDay": "$454.58",
				"total": "$1818.32",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Master Suite",
				"level": "Beach Level",
				"bedding": "KING SIZE BED",
				"ac": true,
				"ratePerDay": "$502.18",
				"total": "$2008.72",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Junior Suite - Ocean Front",
				"level": "Beach Level",
				"bedding": "TWO QUEEN BEDS",
				"ac": true,
				"ratePerDay": "$335.58",
				"total": "$1342.32",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Junior Suite - Ocean Front",
				"level": "Top Floor",
				"bedding": "TWO FULL BEDS",
				"ac": false,
				"ratePerDay": "$335.58",
				"total": "$1342.32",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Junior Suite - Garden View",
				"level": "Beach Level",
				"bedding": "KING SIZE BED",
				"ac": true,
				"ratePerDay": "$264.18",
				"total": "$1056.72",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Junior Suite - Garden View",
				"level": "Top Floor",
				"bedding": "KING SIZE BED",
				"ac": false,
				"ratePerDay": "$264.18",
				"total": "$1056.72",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Junior Suite - Ocean View",
				"level": "Beach Level",
				"bedding": "KING SIZE BED",
				"ac": true,
				"ratePerDay": "$311.78",
				"total": "$1247.12",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Junior Suite - Ocean View",
				"level": "Top Floor",
				"bedding": "KING SIZE BED",
				"ac": false,
				"ratePerDay": "$311.78",
				"total": "$1247.12",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Junior Suite - Garden View",
				"level": "Beach Level",
				"bedding": "KING SIZE BED",
				"ac": true,
				"ratePerDay": "$287.98",
				"total": "$1151.92",
				"reserved": false
			}),
			new HotelRoom({
				"dates": "May 4 - 8, 2016",
				"nights": "4",
				"roomType": "Garden Palapa",
				"level": "Top Floor",
				"bedding": "KING SIZE BED",
				"ac": false,
				"ratePerDay": "$240.38",
				"total": "$961.52",
				"reserved": false
			})];
	}

	getHotelRooms() {
		return this.hotelRooms;
	}
}
