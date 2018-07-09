import { Component, OnInit } from '@angular/core';
import {DispProperty} from '../../classes/disp-property';
import {Router} from '@angular/router';
import {PropertyMapService} from '../../services/property-map.service';
import {PropertyService} from '../../services/property.service';
import {Property} from '../../classes/property';
import {LoginService} from '../../services/login.service';
//I will change this displayPropertyService to PropertyService
//And Create And Import PropertyService
import {PropertyMaps} from '../../classes/property-maps';

import {DisplayPropertiesServiceService} from '../../services/display-properties-service.service';
import { LocalStorage } from 'ngx-webstorage';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
@Component({
  selector: 'app-display-properties',
  templateUrl: './display-properties.component.html',
  styleUrls: ['./display-properties.component.css']
})
export class DisplayPropertiesComponent implements OnInit {

  private dispProperty:DispProperty[];
  private propertyName:String;
  private property:Property[];
  private city:string;
  private username:string;
  private admin:any;

  constructor(private _login:LoginService,private _PropertyService:PropertyService, private _router:Router,private _propertyMapService:PropertyMapService ,private _displayPropertiesService:DisplayPropertiesServiceService,private _PropertyTimeSheet:PropertyTimeSheetService) {
    this.city = this._propertyMapService.getCity();
  }

  ngOnInit() {
    this._displayPropertiesService.getDisplayProperties().subscribe((dispProperties)=>{console.log(dispProperties);
      this.dispProperty = dispProperties;
    },(error)=>{
      console.log(error);
     
    })
    this._PropertyService.getProperties().subscribe((property)=>{console.log(property);
      this.property = property;
      //console.log(property);

    },(error)=>{
      console.log(error);
     
    })
    this.admin = this._login.getAdmin();
   this.username = this._login.getLoggedInUser();
  }

  viewPropertyByName(prop_name:string,prodID:number)
  {
   this._PropertyTimeSheet.setDisplayPropertyId(prodID,prop_name);

    this._propertyMapService.setPropName(prop_name);
    this.propertyName = this._propertyMapService.getPropName();
    console.log(this.propertyName);
    this._router.navigate(['viewProperty']);
  }
  home()
  {
    this._router.navigate(['home']);
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
}
