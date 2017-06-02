import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fsm-grid',
    template:
    `
    <div class="wrapper">
    <div class="table">
        <div class="row header">
            <div class="cell">
                Name
            </div>
            <div class="cell">
                Age
            </div>
            <div class="cell">
                Occupation
            </div>
            <div class="cell">
                Location
            </div>
        </div>
        <div class="row">
            <div class="cell">
                Luke Peters
            </div>
            <div class="cell">
                25
            </div>
            <div class="cell">
                Freelance Web Developer
            </div>
            <div class="cell">
                Brookline, MA
            </div>
        </div>
        <div class="row">
            <div class="cell">
                Joseph Smith
            </div>
            <div class="cell">
                27
            </div>
            <div class="cell">
                Project Manager
            </div>
            <div class="cell">
                Somerville, MA
            </div>
        </div>
        <div class="row">
            <div class="cell">
                Maxwell Johnson
            </div>
            <div class="cell">
                26
            </div>
            <div class="cell">
                UX Architect & Designer
            </div>
            <div class="cell">
                Arlington, MA
            </div>
        </div>
        <div class="row">
            <div class="cell">
                Harry Harrison
            </div>
            <div class="cell">
                25
            </div>
            <div class="cell">
                Front-End Developer
            </div>
            <div class="cell">
                Boston, MA
            </div>
        </div>
    </div>
    <div class="table">
        <div class="row header green">
            <div class="cell">
                Product
            </div>
            <div class="cell">
                Unit Price
            </div>
            <div class="cell">
                Quantity
            </div>
            <div class="cell">
                Date Sold
            </div>
            <div class="cell">
                Status
            </div>
        </div>
        <div class="row">
            <div class="cell">
                Solid oak work table
            </div>
            <div class="cell">
                $800
            </div>
            <div class="cell">
                10
            </div>
            <div class="cell">
                03/15/2014
            </div>
            <div class="cell">
                Waiting for Pickup
            </div>
        </div>
        <div class="row">
            <div class="cell">
                Leather iPhone wallet
            </div>
            <div class="cell">
                $45
            </div>
            <div class="cell">
                120
            </div>
            <div class="cell">
                02/28/2014
            </div>
            <div class="cell">
                In Transit
            </div>
        </div>
        <div class="row">
            <div class="cell">
                27" Apple Thunderbolt displays
            </div>
            <div class="cell">
                $1000
            </div>
            <div class="cell">
                25
            </div>
            <div class="cell">
                02/10/2014
            </div>
            <div class="cell">
                Delivered
            </div>
        </div>
        <div class="row">
            <div class="cell">
                Bose studio headphones
            </div>
            <div class="cell">
                $60
            </div>
            <div class="cell">
                90
            </div>
            <div class="cell">
                01/14/2014
            </div>
            <div class="cell">
                Delivered
            </div>
        </div>
    </div>
    <div class="table">
        <div class="row header blue">
            <div class="cell">
                Username
            </div>
            <div class="cell">
                Email
            </div>
            <div class="cell">
                Password
            </div>
            <div class="cell">
                Active
            </div>
        </div>
        <div class="row">
            <div class="cell">
                ninjalug
            </div>
            <div class="cell">
                misterninja@hotmail.com
            </div>
            <div class="cell">
                ************
            </div>
            <div class="cell">
                Yes
            </div>
        </div>
        <div class="row">
            <div class="cell">
                jsmith41
            </div>
            <div class="cell">
                joseph.smith@gmail.com
            </div>
            <div class="cell">
                ************
            </div>
            <div class="cell">
                No
            </div>
        </div>
        <div class="row">
            <div class="cell">
                1337hax0r15
            </div>
            <div class="cell">
                hackerdude1000@aol.com
            </div>
            <div class="cell">
                ************
            </div>
            <div class="cell">
                Yes
            </div>
        </div>
        <div class="row">
            <div class="cell">
                hairyharry19
            </div>
            <div class="cell">
                harryharry@gmail.com
            </div>
            <div class="cell">
                ************
            </div>
            <div class="cell">
                Yes
            </div>
        </div>
    </div>
</div>
    `,
    styles: [`.wrapper {
    margin: 0 auto;
    padding: 40px;
    max-width: 800px;
}

.table {
    margin: 0 0 40px 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: table;
}

@media screen and (max-width: 580px) {
    .table {
        display: block;
    }
}

.row {
    display: table-row;
    background: #f6f6f6;
}

.row:nth-of-type(odd) {
    background: #e9e9e9;
}

.row.header {
    font-weight: 900;
    color: #ffffff;
    background: #ea6153;
}

.row.green {
    background: #27ae60;
}

.row.blue {
    background: #2980b9;
}

@media screen and (max-width: 580px) {
    .row {
        padding: 8px 0;
        display: block;
    }
}

.cell {
    padding: 6px 12px;
    display: table-cell;
}

@media screen and (max-width: 580px) {
    .cell {
        padding: 2px 12px;
        display: block;
    }
}`],
    /* tslint:disable-next-line */
    host: {
        // '(document: mouseup)': 'onMouseUp($event)',
        // '(document: touchend)': 'onMouseUp($event)',
        // '(document: mousemove)': 'onMouseMove($event)',
        // '(document: touchmove)': 'onMouseMove($event)'
    }
})
export class FsmGridComponent {

    // // Resize start event.
    // @Output() resizeStart = new EventEmitter<IResizeEvent>();
    // // Resizing event.
    // @Output() resizing = new EventEmitter<IResizeEvent>();
    // // Resize end event.
    // @Output() resizeEnd = new EventEmitter<IResizeEvent>();

    // // Width of the element.
    // @Input() width: number;
    // // Height of the element.
    // @Input() height: number;
    // // x coordinate of the element.
    // @Input() x: number;
    // // y coordinate of the element.
    // @Input() y: number;
    // // Maximum width.
    // @Input() maxWidth = Infinity;
    // // Minimum width.
    // @Input() minWidth = 0;
    // // Maximum height.
    // @Input() maxHeight = Infinity;
    // // Minimum height.
    // @Input() minHeight = 0;
    // // Disable the resize.
    // @Input() disableResize: boolean = false;
    // // An array which contains the resize directions.
    // @Input() directions: string[] = ['bottom', 'right'];
    // // Resize in a grid.
    // @Input() grid: ISize = { width: 1, height: 1 };
    // // Bound the resize.
    // @Input() bound: IRectangle = null;
    // // Resize ratio.
    // @Input() ratio: number = null;

    // constructor(private _el: ElementRef, private _store: Store, private _renderer: Renderer2) { }

    // ngOnInit() {
    //     this._renderer.addClass(this._el.nativeElement, 'ngresizable');
    //     this._store.addReducer(resizeReducer);
    //     this.setSize(
    //         { width: this.width, height: this.height },
    //         { x: this.x, y: this.y }
    //     );
    // }

    // ngOnChanges(c: any) {
    //     this.setSize(
    //         { width: this.width, height: this.height },
    //         { x: this.x, y: this.y }
    //     );
    // }

    // onMouseMove(e: any) {
    //     e.preventDefault();
    //     if (e.touches) {
    //         e = e.touches[0];
    //     }
    //     if (this._state.isResizing) {
    //         this.emitAction(RESIZE, {
    //             x: e.clientX,
    //             y: e.clientY
    //         });
    //         const csize = this._state.currentSize;
    //         const cpos = this._state.currentPosition;
    //         this.setSize(csize, cpos);
    //         this.emitEvent(this.resizing);
    //     }
    // }

    // onMouseDown(e: any, dir: any) {
    //     if (e.touches) {
    //         e = e.touches[0];
    //     }
    //     this.emitAction(MOUSE_DOWN, {
    //         x: e.clientX,
    //         y: e.clientY
    //     }, {
    //             x: this._el.nativeElement.offsetLeft,
    //             y: this._el.nativeElement.offsetTop
    //         }, {
    //             width: this._el.nativeElement.offsetWidth,
    //             height: this._el.nativeElement.offsetHeight
    //         }, dir);
    //     this.emitEvent(this.resizeStart);
    // }

    // onMouseUp(e: any) {
    //     this.emitAction(RESIZE_STOP, { x: 0, y: 0 }, { x: 0, y: 0 });
    //     this.emitEvent(this.resizeEnd);
    // }

    // private emitAction(action: String, mousePosition: IPoint, startPosition?: IPoint, startSize?: ISize, startDirection?: string) {
    //     const options: IOptions = {
    //         minSize: { width: this.minWidth, height: this.minHeight },
    //         maxSize: { width: this.maxWidth, height: this.maxHeight },
    //         grid: this.grid,
    //         ratio: this.ratio,
    //         disabled: this.disableResize,
    //         directions: this.directions,
    //         bound: this.bound || defaultBound
    //     };
    //     this._store.emitAction(action, mousePosition, startPosition, options, startSize, startDirection);
    // }

    // private emitEvent(output: EventEmitter<IResizeEvent>) {
    //     output.next({
    //         position: this._state.currentPosition,
    //         size: this._state.currentSize,
    //         direction: this._state.direction
    //     });
    // }

    // private get _state(): IResizeState {
    //     return this._store.state;
    // }

    // private setSize(size: ISize, pos: IPoint) {
    //     this.width = size.width;
    //     this.height = size.height;
    //     this.x = pos.x;
    //     this.y = pos.y;
    //     this._renderer.setStyle(this._el.nativeElement, 'width', this.width + 'px');
    //     this._renderer.setStyle(this._el.nativeElement, 'height', this.height + 'px');
    //     this._renderer.setStyle(this._el.nativeElement, 'left', this.x + 'px');
    //     this._renderer.setStyle(this._el.nativeElement, 'top', this.y + 'px');
    // }
}
