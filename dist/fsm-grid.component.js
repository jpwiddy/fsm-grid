"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FsmGridComponent = (function () {
    function FsmGridComponent() {
    }
    return FsmGridComponent;
}());
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
FsmGridComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'fsm-grid',
                template: "\n    <div class=\"wrapper\">\n    <div class=\"table\">\n        <div class=\"row header\">\n            <div class=\"cell\">\n                Name\n            </div>\n            <div class=\"cell\">\n                Age\n            </div>\n            <div class=\"cell\">\n                Occupation\n            </div>\n            <div class=\"cell\">\n                Location\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Luke Peters\n            </div>\n            <div class=\"cell\">\n                25\n            </div>\n            <div class=\"cell\">\n                Freelance Web Developer\n            </div>\n            <div class=\"cell\">\n                Brookline, MA\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Joseph Smith\n            </div>\n            <div class=\"cell\">\n                27\n            </div>\n            <div class=\"cell\">\n                Project Manager\n            </div>\n            <div class=\"cell\">\n                Somerville, MA\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Maxwell Johnson\n            </div>\n            <div class=\"cell\">\n                26\n            </div>\n            <div class=\"cell\">\n                UX Architect & Designer\n            </div>\n            <div class=\"cell\">\n                Arlington, MA\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Harry Harrison\n            </div>\n            <div class=\"cell\">\n                25\n            </div>\n            <div class=\"cell\">\n                Front-End Developer\n            </div>\n            <div class=\"cell\">\n                Boston, MA\n            </div>\n        </div>\n    </div>\n    <div class=\"table\">\n        <div class=\"row header green\">\n            <div class=\"cell\">\n                Product\n            </div>\n            <div class=\"cell\">\n                Unit Price\n            </div>\n            <div class=\"cell\">\n                Quantity\n            </div>\n            <div class=\"cell\">\n                Date Sold\n            </div>\n            <div class=\"cell\">\n                Status\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Solid oak work table\n            </div>\n            <div class=\"cell\">\n                $800\n            </div>\n            <div class=\"cell\">\n                10\n            </div>\n            <div class=\"cell\">\n                03/15/2014\n            </div>\n            <div class=\"cell\">\n                Waiting for Pickup\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Leather iPhone wallet\n            </div>\n            <div class=\"cell\">\n                $45\n            </div>\n            <div class=\"cell\">\n                120\n            </div>\n            <div class=\"cell\">\n                02/28/2014\n            </div>\n            <div class=\"cell\">\n                In Transit\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                27\" Apple Thunderbolt displays\n            </div>\n            <div class=\"cell\">\n                $1000\n            </div>\n            <div class=\"cell\">\n                25\n            </div>\n            <div class=\"cell\">\n                02/10/2014\n            </div>\n            <div class=\"cell\">\n                Delivered\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Bose studio headphones\n            </div>\n            <div class=\"cell\">\n                $60\n            </div>\n            <div class=\"cell\">\n                90\n            </div>\n            <div class=\"cell\">\n                01/14/2014\n            </div>\n            <div class=\"cell\">\n                Delivered\n            </div>\n        </div>\n    </div>\n    <div class=\"table\">\n        <div class=\"row header blue\">\n            <div class=\"cell\">\n                Username\n            </div>\n            <div class=\"cell\">\n                Email\n            </div>\n            <div class=\"cell\">\n                Password\n            </div>\n            <div class=\"cell\">\n                Active\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                ninjalug\n            </div>\n            <div class=\"cell\">\n                misterninja@hotmail.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                Yes\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                jsmith41\n            </div>\n            <div class=\"cell\">\n                joseph.smith@gmail.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                No\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                1337hax0r15\n            </div>\n            <div class=\"cell\">\n                hackerdude1000@aol.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                Yes\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                hairyharry19\n            </div>\n            <div class=\"cell\">\n                harryharry@gmail.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                Yes\n            </div>\n        </div>\n    </div>\n</div>\n    ",
                styles: [".wrapper {\n    margin: 0 auto;\n    padding: 40px;\n    max-width: 800px;\n}\n\n.table {\n    margin: 0 0 40px 0;\n    width: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    display: table;\n}\n\n@media screen and (max-width: 580px) {\n    .table {\n        display: block;\n    }\n}\n\n.row {\n    display: table-row;\n    background: #f6f6f6;\n}\n\n.row:nth-of-type(odd) {\n    background: #e9e9e9;\n}\n\n.row.header {\n    font-weight: 900;\n    color: #ffffff;\n    background: #ea6153;\n}\n\n.row.green {\n    background: #27ae60;\n}\n\n.row.blue {\n    background: #2980b9;\n}\n\n@media screen and (max-width: 580px) {\n    .row {\n        padding: 8px 0;\n        display: block;\n    }\n}\n\n.cell {\n    padding: 6px 12px;\n    display: table-cell;\n}\n\n@media screen and (max-width: 580px) {\n    .cell {\n        padding: 2px 12px;\n        display: block;\n    }\n}"],
                /* tslint:disable-next-line */
                host: {}
            },] },
];
/** @nocollapse */
FsmGridComponent.ctorParameters = function () { return []; };
exports.FsmGridComponent = FsmGridComponent;
//# sourceMappingURL=fsm-grid.component.js.map