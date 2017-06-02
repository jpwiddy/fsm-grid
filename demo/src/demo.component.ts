import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template:
    `
    <div>
        <h1>FSM Grid</h1>
        <br>
        <fsm-grid [headerClass]="headerClass"></fsm-grid>
        <br>
        <button (click)="toggleColor()">Toggle Grid Header Color</button>
    </div>
  `
})
export class DemoComponent {
    private step: number;
    private headerClass: string;
    private classes: Array<string>;

    constructor() {
        this.step = 0;
        this.classes = ['default', 'success', 'failure']
    }

    toggleColor() {
        this.headerClass = this.classes[++this.step % 3];
    }
}

