import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import {LoginService} from '../../services/login.service';
import {LoggedUserComponent} from '../../components/logged-user/logged-user.component';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { ToastrService } from 'ngx-toastr';
//import {LoggedInDetails} from '../../logged-in-details';


@Component({
  selector: 'app-admin-sign-in-form',
  templateUrl: './admin-sign-in-form.component.html',
  styleUrls: ['./admin-sign-in-form.component.css']
})
export class AdminSignInFormComponent implements OnInit {
  private user:User[];

  constructor(public toastr: ToastrService,private _userService:UserService, private _router:Router,private _login:LoginService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    
    },(error)=>{
      console.log(error);
     
    })
  }

  login(email:string,password:string,stuffno:string)
    {
     
      var counter:number = 0;
      var uname :any = null;
      var usurname:any = null;
      var phoneNo:any =null;
      var admin_id:any = null;
      var stuff_no:any =null;

      this.user.forEach(function(value){
      if(value.email == email && value.password == password &&value.stuffNo == stuffno)
        {
        admin_id = value.user_Id;
        uname = value.name;
        usurname = value.surname;
        phoneNo = value.phoneNo;
        stuff_no = value.stuffNo;
        console.log("Welcome!");
       
          counter++;
        
        
        
        console.log(admin_id,uname,usurname,email, password ,stuff_no);
        
        
      }
      });

       if(counter==1)
       {
        
        this._login.setAdmin(admin_id,uname,usurname,email,phoneNo,stuff_no);
        this._router.navigate(['/editDisplay']);
        this.toastr.success("Login Successful.","Success");
        console.log(this._login.getLoggedInUser());
        counter = 0;
       } else
       {
      // alert("Incorrect inputs");
       this.toastr.error("Incorrect Inputs","Invalid Inputs");
       }
     
    
    }

}


