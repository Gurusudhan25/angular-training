import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanactivateComponent } from "./canactivate/canactivate.component";
import { CanactivatechildComponent } from "./canactivatechild/canactivatechild.component";
import { CandeactivateComponent } from "./candeactivate/candeactivate.component";
import { CanmatchComponent } from "./canmatch/canmatch.component";
import { GuardHomeComponent } from "./guard-home/guard-home.component";
import { CanactivateGuard } from "./guards/canactivate.guard";
import { CanactivatechildGuard } from "./guards/canactivatechild.guard";
import { CandeactivateGuard } from "./guards/candeactivate.guard";

const routes: Routes = [
    { path: "", redirectTo: "homeguard", pathMatch: "full" },
    {
        path: "homeguard",
        component: GuardHomeComponent,
        canActivateChild: [CanactivatechildGuard],
        children: [
            {
                path: "canactivate",
                component: CanactivateComponent,
                canActivate: [CanactivateGuard],
            },
    
            {
                path: "candeactivate",
                component: CandeactivateComponent,
                canDeactivate: [CandeactivateGuard],
            },
            { path: "canmatch", component: CanmatchComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GuardPracticeRoutingModule {}
