import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsPracticeRoutingModule } from "./forms-practice-routing.module";
import { FormApplicationComponent } from "./form-application/form-application.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [FormApplicationComponent],
    imports: [
        CommonModule,
        FormsPracticeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class FormsPracticeModule {}
