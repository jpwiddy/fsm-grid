"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FsmGridComponent = (function () {
    function FsmGridComponent() {
        this.classOptions = {
            'default': 'blue',
            'success': 'green',
            'failure': 'red',
        };
    }
    FsmGridComponent.prototype.ngOnInit = function () {
        this.setheaderColor();
    };
    FsmGridComponent.prototype.ngOnChanges = function () {
        this.setheaderColor();
    };
    FsmGridComponent.prototype.setheaderColor = function () {
        this.headerClass = this.headerClass || 'default';
        this.appliedClass = this.classOptions[this.headerClass];
    };
    return FsmGridComponent;
}());
FsmGridComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'fsm-grid',
                template: "<div class=\"wrapper\">\n    <div class=\"table\">\n        <div class=\"row header\" [ngClass]=\"appliedClass\">\n            <div class=\"cell\">\n                Name\n            </div>\n            <div class=\"cell\">\n                Ounces\n            </div>\n            <div class=\"cell\">\n                Steep Length (minutes)\n            </div>\n            <div class=\"cell\">\n                Water Temp (F)\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Earl Grey\n            </div>\n            <div class=\"cell\">\n                24\n            </div>\n            <div class=\"cell\">\n                3-5\n            </div>\n            <div class=\"cell\">\n                208-212\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                English Breakfast\n            </div>\n            <div class=\"cell\">\n                27\n            </div>\n            <div class=\"cell\">\n                3-5\n            </div>\n            <div class=\"cell\">\n                208-212\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Moroccan Green Mint\n            </div>\n            <div class=\"cell\">\n                26\n            </div>\n            <div class=\"cell\">\n                2-3\n            </div>\n            <div class=\"cell\">\n                180-185\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Ginseng Green\n            </div>\n            <div class=\"cell\">\n                24\n            </div>\n            <div class=\"cell\">\n                3\n            </div>\n            <div class=\"cell\">\n                185-190\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".wrapper {\n    margin: 0 auto;\n}\n\n.table {\n    margin: 0 0 40px 0;\n    width: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    display: table;\n}\n\n@media screen and (max-width: 580px) {\n    .table {\n        display: block;\n    }\n}\n\n.row {\n    display: table-row;\n    background: #f6f6f6;\n}\n\n.row:nth-of-type(odd) {\n    background: #e9e9e9;\n}\n\n.row.header {\n    font-weight: 900;\n    color: #ffffff;\n    background: #ea6153;\n}\n\n.row.green {\n    background: #27ae60;\n}\n\n.row.blue {\n    background: #2980b9;\n}\n\n@media screen and (max-width: 580px) {\n    .row {\n        padding: 8px 0;\n        display: block;\n    }\n}\n\n.cell {\n    padding: 6px 12px;\n    display: table-cell;\n}\n\n@media screen and (max-width: 580px) {\n    .cell {\n        padding: 2px 12px;\n        display: block;\n    }\n}"],
            },] },
];
/** @nocollapse */
FsmGridComponent.ctorParameters = function () { return []; };
FsmGridComponent.propDecorators = {
    'headerClass': [{ type: core_1.Input },],
};
exports.FsmGridComponent = FsmGridComponent;
//# sourceMappingURL=fsm-grid.component.js.map