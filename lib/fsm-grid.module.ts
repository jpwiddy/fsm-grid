import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsmGridComponent } from './fsm-grid.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FsmGridComponent],
  exports: [FsmGridComponent]
})
export class FsmGridModule {}
