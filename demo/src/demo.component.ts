import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template:
    `
    <div>
        <h1>FSM Grid</h1>
        <br>
        <fsm-grid></fsm-grid>
        <br>
        <button (click)="toggleColor()">Toggle Grid Header Color</button>
    </div>
  `
})
export class DemoComponent {
    constructor() { }

    toggleColor() {
        console.info('did toggle');
    }
}

