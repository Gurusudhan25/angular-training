import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    FormArray,
} from "@angular/forms";

@Component({
    selector: "app-form-application",
    templateUrl: "./form-application.component.html",
    styleUrls: ["./form-application.component.scss"],
})
export class FormApplicationComponent implements OnInit {
    public formDetails: any = new FormGroup({});

    public addressDetails = this._fb.group({
        city: [""],
        state: [""],
    });

    constructor(private _fb: FormBuilder) {}

    ngOnInit(): void {
        this.formDetails = new FormGroup({
            firstName: new FormControl("", [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(16),
            ]),
            lastName: new FormControl("", [Validators.required]),
            degree: new FormControl("", [Validators.required]),
            age: new FormControl("", [
                Validators.required,
                Validators.min(18),
                Validators.max(200),
            ]),
        });
    }

    public skills = new FormArray([new FormControl("")]);

    addSkill() {
        this.skills.push(new FormControl(""));
    }
    deleteSkill(i: number) {
        this.skills.removeAt(i);
    }

    showDetails() {
        console.log(
            this.formDetails.value,
            this.addressDetails.value,
            this.skills.value
        );
    }

    just(event: any, index: number) {
        this.skills.controls[index].setValue(event.target.value);
    }
}
