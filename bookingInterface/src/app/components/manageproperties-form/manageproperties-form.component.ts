
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../classes/property';
import {LoginService} from '../../services/login.service'
import { AccBooking } from '../../classes/acc-booking';
import { AccBookingService } from '../../services/acc-booking.service';
import { PropertyMapService } from '../../services/property-map.service';
import {User} from '../../classes/user';
import { UserService } from '../../services/user.service';
import { ValueTransformer } from '@angular/compiler/src/util';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';

@Component({
  selector: 'app-manageproperties-form',
  templateUrl: './manageproperties-form.component.html',
  styleUrls: ['./manageproperties-form.component.css']
})
export class ManagepropertiesFormComponent implements OnInit {

  private property: Property;
  private username:string;
  private admin:any;
  private properties:Property[];
  private bookings:AccBooking[];
  
  private user:User[];

  private ownedProperties:string = "Property";
  private userID:number;
  private propID:number;

  constructor(private _PropertyTimeSheet:PropertyTimeSheetService,private _userService:UserService,private _propertyMapService:PropertyMapService,private _accBookingService:AccBookingService,private _propertyService: PropertyService, private _router: Router,private _login:LoginService) { }


  ngOnInit() {
    this.property = this._propertyService.getter();
    this.username = this._login.getLoggedInUser();
    this.admin = this._login.getAdmin();
    this.ownedProperties = this._PropertyTimeSheet.getPropertyName();
    this._accBookingService.getAccBookings().subscribe((accBooking)=>{console.log("Accommodation " ,accBooking);
      this.bookings = accBooking;
      //console.log(property);
    
        
    
    },(error)=>{
      console.log(error);
     
    })

    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    })

    this.userID = this._login.getLoggedInUserID();

    this._propertyService.getProperties().subscribe((property)=>{console.log(property);
      this.properties = property;
    },(error)=>{
      console.log(error);
     
    })
     
  }
  manageProperty(accBookingName:string,user_id:number)
  {
    var checked = false;
    var userid = this.userID;
    var place =accBookingName;
    var pUserID = null;
    var vpropID = null;
    
    this.bookings.forEach(function(value) {
      if(accBookingName == value.prop_name && user_id == value.user_id && userid == value.user_id)
      {
        checked =true;
        place = value.prop_name;
       
        
      }
      else
      {
        pUserID = "wrong"
      }
    });

    this.properties.forEach(function(value){
      if(value.user_Id == userid && accBookingName == value.prop_name )
      {
        vpropID = value.prop_Id;
      }
    })

   
    this.ownedProperties = place;
    this.propID = vpropID;

    this._PropertyTimeSheet.setPropertyId(this.propID,this.ownedProperties);
   
    console.log(this.ownedProperties,this.propID);
    location.reload();
  }
  logout()
  {
    this._login.logOut();
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
  }
  
  home()
  {
    this._router.navigate(['home']);
  }
  processForm(prop_name: string,
    prop_type: string,
    numberRoom: number,
    city: string,
    contact_name: string,
    addressline2: string,
    country: string,
    image: File,
    province: string,
    streetAddress: string,
    website: string,
    price: string,
    postal_code: string) {

    if (prop_name == null || prop_type == null || numberRoom == null || city == null ||
       contact_name == null || addressline2 == null || country == null ||
       image == null||province==null||streetAddress==null||
       price==null||postal_code==null) {
      console.log("Enter Values");
      
      // alert("Make sure you entered all the needed fields");
    } else {
      
     if (this.property.prop_name == prop_name){
        this._propertyService.updateProperty(this.property).subscribe((property) => {
          console.log(property);
          this._router.navigate(['/home']);
        },
          (error) => {
            console.log(error);
          }

        );
      }
    }
    return false;
  }





}

 