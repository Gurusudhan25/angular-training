import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RxjsLearningRoutingModule } from "./rxjs-learning-routing.module";
import { ObervablesComponent } from "./obervables/obervables.component";
import { CreationOperatorsComponent } from "./creation-operators/creation-operators.component";
import { TransformationComponent } from "./transformation-operators/filter-operators.component";
import { ErrorHandlingComponent } from "./error-handling/error-handling.component";
import { FilteringOperatorsComponent } from "./filtering-operators/filtering-operators.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ObervablesComponent,
        CreationOperatorsComponent,
        TransformationComponent,
        ErrorHandlingComponent,
        FilteringOperatorsComponent,
    ],
    imports: [
        CommonModule,
        RxjsLearningRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class RxjsLearningModule {}
