import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {PropertyService} from '../../services/property.service';
import {Router} from '@angular/router';
import {Property} from '../../classes/property';
import {PropertyMapService} from '../../services/property-map.service';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homesearch-form',
  templateUrl: './homesearch-form.component.html',
  styleUrls: ['./homesearch-form.component.css']
})
export class HomesearchFormComponent implements OnInit {

  private property:Property[];
  //private title:string;
  private adult = 0;
  private child = 0;
  private searchForm:FormGroup;
  
  constructor(public toastr:ToastrService,private _formBuilder:FormBuilder,private _propertyMapService:PropertyMapService,private _login:LoginService,private _PropertyService:PropertyService, private _router:Router) { }

  ngOnInit() {
    this._PropertyService.getProperties().subscribe((property)=>{console.log(property);
      this.property = property;
    
    },(error)=>{
      console.log(error);
     
    });

    this.searchForm = this._formBuilder.group({
      "txt_destination":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "Adults" : new FormControl('',[Validators.maxLength(100),Validators.required]),
      "Children" :new FormControl('',[Validators.maxLength(10),Validators.required]),
      "Rooms" :new FormControl('',[Validators.maxLength(10),Validators.required])
      
    });

  }

  searchProperty(destination:string,adults:string,children:string,rooms:string)
  {

    var dest;
    if(adults != undefined)
    {
      this.adult = parseInt(adults);
    };
      if(children !=undefined)
      {
        this.child = parseInt(children);
      };
      var vistors= this.adult + this.child
    var vist;
    var Rooms = 0;
    var count = 0;
    this.property.forEach(function(value){
      if(value.city == destination)
      {
        dest = destination;
        count = 1;
        console.log(destination);
        return false;
      }else if(value.prop_name == destination)
         {
          dest = destination;
            count = 1;
            console.log(dest);
            return false;
          }
          else if(value.province == destination)
          {
            dest = destination;
              count = 1;
              console.log(destination);
              return false;
          }
          else if(value.country == destination)
          {
            dest = destination;
              count = 1;
              console.log(dest);
              return false;
          }
          else if(value.prop_type == destination)
          {
            dest = destination;
              count = 1;
              console.log(dest);
              return false;
          };

          if (value.numberRoom >= vistors)
          {
            Rooms = value.numberRoom;
            count = 1;
            console.log("Visitors",vistors);
            return false;
          };
          if(value.numberRoom >= parseInt(rooms))
          {
            Rooms = value.numberRoom;
            count = 1;
            console.log("Visitors",vistors);
            return false;
          };
          
    });
    if(count == 1)
    {
    this._propertyMapService.setTitle(dest);
    this._propertyMapService.setRooms(Rooms)
    this._router.navigate(['searchProperty']);
    }
    else
    {
      //alert("No results.");
      
      this._router.navigate(['home']);
      this.toastr.info("No results.","Search");
    
      count =0;
    }
  }

}
