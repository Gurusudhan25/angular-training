import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router , ActivatedRoute} from "@angular/router";
import { GetUsersService } from "../services/get-users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public formData: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  public apiData: any =[];
  constructor(private _data: GetUsersService , private _router: Router , private _route:ActivatedRoute) {}

  ngOnInit(): void {
    this._data.getUsers().subscribe((res ) => {
      this.apiData = (res);
    });
  }
  checkUsers() {
    let username = this.formData.value.username;
    let password = this.formData.value.password;
    for (let key in this.apiData) {
      if(this.apiData[key].username === username){
        if(this.apiData[key].password === password){
            this._router.navigate(['../homepage'] , {relativeTo: this._route})
        }
      }
    }
  }
}
