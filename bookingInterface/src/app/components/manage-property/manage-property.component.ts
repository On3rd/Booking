import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { LoginService } from '../../services/login.service';
import { Property } from '../../classes/property';
@Component({
  selector: 'app-manage-property',
  templateUrl: './manage-property.component.html',
  styleUrls: ['./manage-property.component.css']
})
export class ManagePropertyComponent implements OnInit {

  private userID;
  private properties:Property[];
  private statement =false ;
 
  constructor(private _router:Router, private _propertyService:PropertyService,private _login:LoginService) {
   
 
   }

  ngOnInit() {

    this.userID = this._login.getLoggedInUserID();
    
    
  
  this._propertyService.getProperties().subscribe((property)=>
  {
    this.properties = property;
  });
   
  }
  
  managePropertyPage()
  {
    this._router.navigate(['/manageProperty']);
  }

  getStatement()
  {
    if(this.properties != undefined)
    {
      var state;
      var UID = this.userID;

      this.properties.forEach(function(value)
    {
        if(UID == value.user_Id)
        {
          state = true;
        }
      });
        return this.statement = state;
     
    }
    else
    {
     
      return this.statement = false;
    }
  }

}
