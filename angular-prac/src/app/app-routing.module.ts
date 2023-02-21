import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildRouteComponent } from './child-route/child-route.component';
import { GermanComponent } from './dogs/german/german.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsComponent } from './forms/forms.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoutingComponent } from './routing/routing.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { UpdateNameComponent } from './update-name/update-name.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent },
  {
    path: 'german',
    component: GermanComponent,
  },
  { path: 'forms', component: FormsComponent },
  {
    path: 'routing/:id/:name',
    component: RoutingComponent,
    title: 'Routing Page',
  },
  {
    path: 'rt',
    component: RoutingComponent,
    title: 'child-route',
    children: [
      {
        path: 'first-child',
        component: ChildRouteComponent,
        canActivate: [AuthGuardGuard],
      },
      { path: 'second-child', component: ChildRouteComponent },
    ],
  },
  { path: 'updatename', component: UpdateNameComponent, title: 'update' },
  {
    path: 'todo',
    component: TodoAppComponent,
    title: 'Do-It',
  },
  { path: 'gamelist', component: GamePageComponent },
  { path: 'gamedetails/:game', component: GameDetailComponent },
  { path: '**', component: ErrorPageComponent, title: 'Error Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
