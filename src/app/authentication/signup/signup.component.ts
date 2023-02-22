import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  public formData: FormGroup = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    pass1: new FormControl(""),
    pass2: new FormControl(""),
  });
  onSubmit() {
    console.log(this.formData.value.username);
  }
}
