import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GermanComponent } from './german/german.component';

@NgModule({
  declarations: [GermanComponent],
  imports: [CommonModule],
  exports: [GermanComponent],
})
export class DogsModule {}
