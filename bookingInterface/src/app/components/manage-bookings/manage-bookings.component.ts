import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {AccBookingService} from '../../services/acc-booking.service';
import {AccBooking} from '../../classes/acc-booking';
import {PropertyMapService} from '../../services/property-map.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Property } from '../../classes/property';
import { PropertyService } from '../../services/property.service';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
import {PropertyTimeSheet} from '../../classes/property-time-sheet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {

  private accBooking:AccBooking[];
  private Property:Property;
  private propertyName:String;
  private username:string;
  private userID:number;
  private admin:any;
  private timeSheet:PropertyTimeSheet[];
  private timeSlots:PropertyTimeSheet;
  
  constructor(public toastr:ToastrService,private _propertyMapService:PropertyMapService ,private _router:Router ,private _login:LoginService,private _accBookingService:AccBookingService,private _propertyService:PropertyService,private _propertyTimeSheetService :PropertyTimeSheetService) { }

  ngOnInit() {
    this._accBookingService.getAccBookings().subscribe((accBooking)=>{console.log(accBooking);
      this.accBooking = accBooking;
      //console.log(property);
    
        
    
    },(error)=>{
      console.log(error);
     
    })
this.admin = this._login.getAdmin();
    this.userID = this._login.getLoggedInUserID();
    console.log(this.userID);
    this.username = this._login.getLoggedInUser();
    this.timeSlots = this._propertyTimeSheetService.getter();
    this._propertyTimeSheetService.getPropertyTimeSheets().subscribe((timeSheets)=>{console.log(timeSheets);
      this.timeSheet = timeSheets;
    })
  }

  CancelBooking(accBookingName)
  {
    console.log("name",accBookingName);
    
   this._accBookingService.deleteAccBooking(accBookingName.accBooking_Id).subscribe((data) =>{
     this.accBooking.splice(this.accBooking.indexOf(accBookingName),1);
   })

   this.resetDates(accBookingName,this.timeSheet);
   
  
    //alert("The Booking Was Canceled");
    
    location.reload();
    this.toastr.success("The Booking Was Canceled.","Success");
   

  }

  resetDates(booking,propertyTimeSheet)
  {
    var startDate = new Date(booking.checkInDate)
    var endDate = new Date(booking.checkOutDate)
    var addDay = new Date(startDate);
      
    
       
    
  }
  getAccBookings()
  {
    var userId = this.userID;
    var count = 0;
    if(this.accBooking != undefined){
      this.accBooking.forEach(function(value)
      {
        if(userId == value.user_id)
        {
          count++;
        }
        
      });
    }
   
return count;
  }
  viewPropertyByName(prop_name:string)
  {
    this._propertyMapService.setPropName(prop_name);
    this.propertyName = this._propertyMapService.getPropName();
    console.log(this.propertyName);
    this._router.navigate(['viewProperty']);
  }
  EditProfile()
  {
    this._router.navigate(['/editProfile']);
  }
  viewProfile()
  {
    this._router.navigate(['viewProfile']);
  }
  EditBooking(prop_name:string)
  {
    this._propertyMapService.setPropName(prop_name);
    this.propertyName = this._propertyMapService.getPropName();
    console.log(this.propertyName);
    this._router.navigate(['viewProperty']);
  }
  manageBooking()
  {
    this._router.navigate(['/manageBooking']);
  }
  home()
  {
    this._router.navigate(['/home']);
  }
  logout()
  {
    this._login.logOut();
  }

}
