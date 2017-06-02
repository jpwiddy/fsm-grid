import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'fsm-grid',
    templateUrl: 'fsm-grid.component.html',
    styleUrls: ['fsm-grid.component.css'],
})
export class FsmGridComponent implements OnInit, OnChanges{

    /**
     * Color of the header (in hex)
     * Values: 
     *      Default (blue)
     *      Success (green)
     *      Failure  (red)
     */
    @Input() headerClass: string;

    private appliedClass: string;
    private classOptions = {
        'default': 'blue',
        'success': 'green',
        'failure': 'red',
    }

    constructor() { }

    ngOnInit() {
        this.setheaderColor();
    }

    ngOnChanges() {
        this.setheaderColor();
    }

    private setheaderColor() {
        this.headerClass = this.headerClass || 'default';
        this.appliedClass = this.classOptions[this.headerClass];
    }

}
