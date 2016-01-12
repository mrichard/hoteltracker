import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';

import { HotelRooms } from './models/HotelRooms';
import { HotelRoom } from './models/HotelRoom';


/*
 * Root Component
 * Top Level Component
 */
@Component({
    selector: 'root', // <root></root>
    providers: [HotelRooms],
    template: `
    <h1>Hotel Booking: May 4th - 8th, 2016</h1>
    <table>
        <thead>
            <tr>
                <th>Room Type</th>
                <th>Level</th>
                <th>Bedding</th>
                <th>Air Conditioning</th>
                <th>Cost Per Day</th>
                <th>Total (4 nights)</th>
                <th>Reserve</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="#hotelRoom of hotelRooms">
                <td>{{ hotelRoom.roomType }}</td>
                <td>{{ hotelRoom.level }}</td>
                <td>{{ hotelRoom.bedding }}</td>
                <td>{{ hotelRoom.ac }}</td>
                <td>{{ hotelRoom.ratePerDay }}</td>
                <td>{{ hotelRoom.total }}</td>
                <td>{{ hotelRoom.reserved }}</td>
            </tr>
        </tbody>
    </table>
  `
})
export class Root {
    hotelRooms: HotelRoom[];
    constructor(hotelRooms: HotelRooms) {
        this.hotelRooms = hotelRooms.getHotelRooms();

        console.log(this.hotelRooms);

    }
}
