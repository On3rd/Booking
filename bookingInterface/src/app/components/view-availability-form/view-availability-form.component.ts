import { Component, OnInit } from '@angular/core';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
import { PropertyMapService } from '../../services/property-map.service';
import { PropertyTimeSheet } from '../../classes/property-time-sheet';

@Component({
  selector: 'app-view-availability-form',
  templateUrl: './view-availability-form.component.html',
  styleUrls: ['./view-availability-form.component.css']
})
export class ViewAvailabilityFormComponent implements OnInit {

  private timeSheets:PropertyTimeSheet;
  private prodId:number;
  private localProperty;

  constructor(private _propertyTimeSheetService:PropertyTimeSheetService, private _propertyMapService:PropertyMapService ) { }

  ngOnInit() {

   
    this._propertyTimeSheetService.getPropertyTimeSheets().subscribe((timeSheets)=>{console.log(timeSheets);
      this.timeSheets = timeSheets;
    })
    this.prodId = this._propertyTimeSheetService.getDisplayPropertyId();

    console.log("The Property ID",this.prodId)

  }

}
