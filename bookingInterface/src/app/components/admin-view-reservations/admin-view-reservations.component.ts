import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { AccBookingService } from '../../services/acc-booking.service';
import { UserService } from '../../services/user.service';
import { Property } from '../../classes/property';
import { AccBooking } from '../../classes/acc-booking';
import { User } from '../../classes/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-admin-view-reservations',
  templateUrl: './admin-view-reservations.component.html',
  styleUrls: ['./admin-view-reservations.component.css']
})
export class AdminViewReservationsComponent implements OnInit {

  private properties:Property[];
  private accBookings:AccBooking[];
  private user:User[];
  private userID;

  constructor(private _PropertyService:PropertyService,private _accBooking:AccBookingService,private _userService:UserService,private _login:LoginService) { }

  ngOnInit() {
    this._PropertyService.getProperties().subscribe((property)=>{console.log(property);
      this.properties = property;
      //console.log(property);

    },(error)=>{
      console.log(error);
     
    })

    this._accBooking.getAccBookings().subscribe((bookings) =>{
      console.log(bookings);
      this.accBookings = bookings;
    })
    
    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    })
    this.userID = this._login.getLoggedInUserID();
  }

  

}
