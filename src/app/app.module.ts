import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { SDogListComponent } from './dog-list/s-dog-list.component';
import { DogsModule } from './dogs/dogs.module';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RoutingComponent } from './routing/routing.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { UpdateNameComponent } from './update-name/update-name.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormsComponent,
    RoutingComponent,
    ErrorPageComponent,
    ChildRouteComponent,
    UpdateNameComponent,
    TodoAppComponent,
    GamePageComponent,
    GameDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SDogListComponent,
    DogsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
