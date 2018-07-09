import { Component, OnInit } from '@angular/core';
import {PropertyTimeSheetService} from '../../services/property-time-sheet.service';
import { PropertyTimeSheet } from '../../classes/property-time-sheet';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-availabilty-form',
  templateUrl: './availabilty-form.component.html',
  styleUrls: ['./availabilty-form.component.css']
})
export class AvailabiltyFormComponent implements OnInit {
  private propertyTimeSheet= new PropertyTimeSheet();
  private userID:number;
  private propId;
  private localProperty; 
  private timeSheet:PropertyTimeSheet[];
  private count = 0;

  constructor(private _propertyTimeSheetService:PropertyTimeSheetService,private _login:LoginService) { }

  ngOnInit() {
    this.propertyTimeSheet = this._propertyTimeSheetService.getter();
    
    this.userID = this._login.getLoggedInUserID();
    this._propertyTimeSheetService.getPropertyTimeSheets().subscribe((timeSheets)=>{console.log(timeSheets);
      this.timeSheet = timeSheets;
    })
  }

  addMonth(date:Date)
  {
    var checked = true;
    var propID;
    var months = new Date(date)
    var days = new Date(months.getFullYear(),months.getMonth()+1,0).getDate();
    
   
    this.localProperty = JSON.parse(localStorage.getItem('propertyID'));
   
     this.propId = this.localProperty.propertyId;
     propID = this.propId;

     this.propertyTimeSheet.prop_Id = this.propId;

     
      for(var x = days; x>0;x--)
      {
       this.count++;
        var addDay = new Date(months.getFullYear(),months.getMonth(),x);
        
          this.propertyTimeSheet.availableDates = addDay;
          this._propertyTimeSheetService.createPropertyTimeSheet(this.propertyTimeSheet).subscribe((propertyTimeSheet)=>
          {
      
          }
          ,
          (error)=>
          {
              console.log(error);
          }
          );
        
        
     }
      localStorage.setItem("count",JSON.stringify({AvailableDays:this.count}));
       alert("Date Added Successfully");
       location.reload();
   
  }

  
}
