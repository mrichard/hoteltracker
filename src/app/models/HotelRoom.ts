export class HotelRoom {
	dates: string;
	nights: string;
	roomType: string;
	level: string;
	bedding: string;
	ac: boolean;
	ratePerDay: string;
	total: string;
	reserved: boolean;

	constructor(data: any) {
		this.dates = data.dates;
		this.nights = data.nights;
		this.roomType = data.roomType;
		this.level = data.level;
		this.bedding = data.bedding;
		this.ac = data.ac;
		this.ratePerDay = data.ratePerDay;
		this.total = data.total;
		this.reserved = data.reserved;
	}
}
