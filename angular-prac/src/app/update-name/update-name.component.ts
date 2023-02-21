import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.scss'],
})
export class UpdateNameComponent {
  public formData: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.min(4),
      Validators.maxLength(11),
    ]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    native: new FormControl(''),
    phn: new FormControl(''),
  });
  public details = {
    name: '',
    age: 0,
    email: '',
    native: 'details.',
    phn: '',
  };

  updateName() {
    this.details.name = this.formData.get('username')?.value;
    this.details.age = this.formData.get('age')?.value;
    this.details.email = this.formData.get('email')?.value;
    this.details.native = this.formData.get('native')?.value;
    this.details.phn = this.formData.get('phn')?.value;
  }
}
