import { Component, OnInit } from '@angular/core';
import { UserContactDetails } from '../../classes/user-contact-details';
import { UserContactDetailsService } from '../../services/user-contact-details.service';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-additional-information',
  templateUrl: './view-additional-information.component.html',
  styleUrls: ['./view-additional-information.component.css']
})
export class ViewAdditionalInformationComponent implements OnInit {

  private UID;
  private contactDetails:UserContactDetails[];

  constructor(public toastr:ToastrService,private _contactDetailsService:UserContactDetailsService,private _login:LoginService) { }

  ngOnInit() {
    this.UID = this._login.getLoggedInUserID();

    this._contactDetailsService.getUserContactDetails().subscribe((contactDetails)=>
  {
    this.contactDetails = contactDetails;
    console.log("####Contact",this.contactDetails);
  });
  }

  remove(userDatails)
  {
    
    this._contactDetailsService.deleteUserContactDetails(userDatails.userContactInfo_Id).subscribe((payment)=>
  {
    this.contactDetails.splice(this.contactDetails.indexOf(userDatails.userContactInfo_Id),1);
    //alert("Contact details were removed successfully");
    this.toastr.success("Contact details were removed successfully","Success");
  },(error)=>
  {
    console.log(error);
  }
);
  }

}
