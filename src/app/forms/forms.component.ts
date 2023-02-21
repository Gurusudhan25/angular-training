import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public age = new FormControl('');
  public username = '';

  constructor() {}
  ngOnInit(): void {}

  showAge() {
    console.log(this.username, this.age.value);
  }
}
