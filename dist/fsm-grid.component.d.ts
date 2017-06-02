import { OnChanges, OnInit } from '@angular/core';
export declare class FsmGridComponent implements OnInit, OnChanges {
    /**
     * Color of the header (in hex)
     * Values:
     *      Default (blue)
     *      Success (green)
     *      Failure  (red)
     */
    headerClass: string;
    private appliedClass;
    private classOptions;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    private setheaderColor();
}
