import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreationOperatorsComponent } from "./creation-operators/creation-operators.component";
import { ErrorHandlingComponent } from "./error-handling/error-handling.component";
import { TransformationComponent } from "./transformation-operators/filter-operators.component";
import { FilteringOperatorsComponent } from "./filtering-operators/filtering-operators.component";
import { ObervablesComponent } from "./obervables/obervables.component";

const routes: Routes = [
    { path: "", redirectTo: "observables", pathMatch: "full" },
    {
        path: "observables",
        component: ObervablesComponent,
        children: [
            { path: "creation", component: CreationOperatorsComponent },
            { path: "transformation", component: TransformationComponent },
            { path: "error", component: ErrorHandlingComponent },
            { path: "filter", component: FilteringOperatorsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RxjsLearningRoutingModule {}
