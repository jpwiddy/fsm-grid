import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

import { FsmGridModule } from '../../lib/fsm-grid.module';

@NgModule({
  imports: [FsmGridModule, BrowserModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule {}

