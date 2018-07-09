import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {PropertyService} from '../../services/property.service';
import {PropertyMapService} from '../../services/property-map.service';
import {Property} from '../../classes/property';

@Component({
  selector: 'app-search-property',
  templateUrl: './search-property.component.html',
  styleUrls: ['./search-property.component.css']
})
export class SearchPropertyComponent implements OnInit {

  private title:string;
  private property:Property[];
  private username:string;
  private propertyName:string;
  private propID:number;

  constructor(private _router:Router,private _login:LoginService,private _PropertyService:PropertyService,private _propertyMapService:PropertyMapService ) 
  { 
    this.title = this._propertyMapService.getTitle();
    console.log("::"+this.title);
  }

  ngOnInit() {
    this._PropertyService.getProperties().subscribe((property)=>{console.log(property);
      this.property = property;
      this.username = this._login.getLoggedInUser();
        
    
    },(error)=>{
      console.log(error);
     
    })
  }
  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  logout()
  {
    this._login.logOut();
  }
  viewPropertyByName(prop_name:string,propId :number)
  {
    this._propertyMapService.setPropName(prop_name);
    this._propertyMapService.setPropID(propId);
    this.propID = this._propertyMapService.getPropID();
    this.propertyName = this._propertyMapService.getPropName();
    console.log("Property Name:",this.propertyName ," Property ID:", this.propID);
    this._router.navigate(['viewProperty']);
  }

}
