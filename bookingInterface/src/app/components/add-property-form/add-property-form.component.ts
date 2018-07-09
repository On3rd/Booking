import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../classes/property';
import { LoginService } from '../../services/login.service';
import {User} from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-property-form',
  templateUrl: './add-property-form.component.html',
  styleUrls: ['./add-property-form.component.css']
})
export class AddPropertyFormComponent implements OnInit {

  private property: Property;
  private properties:Property[];
  private user:User;
  private userID:number;
  private users:User[];

  constructor(private _userService:UserService,private _login:LoginService,private _propertyService: PropertyService, private _router: Router) { }


  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.users = users;
    })
    this.property = this._propertyService.getter();
    this._propertyService.getProperties().subscribe((property)=>{console.log(property);
      this.properties = property;
      //console.log(property);

    },(error)=>{
      console.log(error);
     
    })

    var user = JSON.parse(localStorage.getItem('currentUser')); 
    var admin = JSON.parse(localStorage.getItem('Admin'));

    if(user != null){
      this.userID = this._login.getLoggedInUserID();
    console.log("Add proper owner" + this.userID); }
    else
    if(admin != null){
      this.userID = this._login.getLoggedInUserID();
      console.log("Add proper owner" + this.userID); 
    }
   
    
}

  processForm( prop_name: string,
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
      
      var pname = prop_name;
      var City = city;
      var Country = country;
      var Province = province;
     
      var checked = 0;
      var userID =this.userID;
      
      //this.property.user_Id = this.userID
       
     
      this.property.user_Id = userID;
     
    if ( prop_name == null || prop_type == null || numberRoom == null || city == null ||
      contact_name == null || addressline2 == null || country == null ||
      image == null||province==null||streetAddress==null||
      price==null||postal_code==null) {
      alert("Invalid, Enter Values");
      
      // alert("Make sure you entered all the needed fields");
    } else {
      if (this.property.prop_Id == undefined) {
        this._propertyService.createProperty(this.property).subscribe((property) => {
          console.log(property);
          this._router.navigate(['/manageProperty']);
          alert("Property Registered Successfully");
        },
          (error) => {
            console.log(error);
          }

        );
      }
      else {
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
