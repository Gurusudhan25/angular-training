import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardPracticeRoutingModule } from './guard-practice-routing.module';
import { GuardHomeComponent } from './guard-home/guard-home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CanactivateComponent } from './canactivate/canactivate.component';
import { CanactivatechildComponent } from './canactivatechild/canactivatechild.component';
import { CandeactivateComponent } from './candeactivate/candeactivate.component';
import { CanmatchComponent } from './canmatch/canmatch.component';

@NgModule({
  declarations: [
    GuardHomeComponent,
    CanactivateComponent,
    CanactivatechildComponent,
    CandeactivateComponent,
    CanmatchComponent
  ],
  imports: [
    CommonModule,
    GuardPracticeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GuardPracticeModule { }
