(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['fsm-grid'] = global['fsm-grid'] || {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", String)
], FsmGridComponent.prototype, "headerClass", void 0);
FsmGridComponent = __decorate$1([
    _angular_core.Component({
        selector: 'fsm-grid',
        template: "<div class=\"wrapper\">\n    <div class=\"table\">\n        <div class=\"row header\" [ngClass]=\"appliedClass\">\n            <div class=\"cell\">\n                Name\n            </div>\n            <div class=\"cell\">\n                Ounces\n            </div>\n            <div class=\"cell\">\n                Steep Length (minutes)\n            </div>\n            <div class=\"cell\">\n                Water Temp (F)\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Earl Grey\n            </div>\n            <div class=\"cell\">\n                24\n            </div>\n            <div class=\"cell\">\n                3-5\n            </div>\n            <div class=\"cell\">\n                208-212\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                English Breakfast\n            </div>\n            <div class=\"cell\">\n                27\n            </div>\n            <div class=\"cell\">\n                3-5\n            </div>\n            <div class=\"cell\">\n                208-212\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Moroccan Green Mint\n            </div>\n            <div class=\"cell\">\n                26\n            </div>\n            <div class=\"cell\">\n                2-3\n            </div>\n            <div class=\"cell\">\n                180-185\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Ginseng Green\n            </div>\n            <div class=\"cell\">\n                24\n            </div>\n            <div class=\"cell\">\n                3\n            </div>\n            <div class=\"cell\">\n                185-190\n            </div>\n        </div>\n    </div>\n</div>",
        styles: [".wrapper {\n    margin: 0 auto;\n}\n\n.table {\n    margin: 0 0 40px 0;\n    width: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    display: table;\n}\n\n@media screen and (max-width: 580px) {\n    .table {\n        display: block;\n    }\n}\n\n.row {\n    display: table-row;\n    background: #f6f6f6;\n}\n\n.row:nth-of-type(odd) {\n    background: #e9e9e9;\n}\n\n.row.header {\n    font-weight: 900;\n    color: #ffffff;\n    background: #ea6153;\n}\n\n.row.green {\n    background: #27ae60;\n}\n\n.row.blue {\n    background: #2980b9;\n}\n\n@media screen and (max-width: 580px) {\n    .row {\n        padding: 8px 0;\n        display: block;\n    }\n}\n\n.cell {\n    padding: 6px 12px;\n    display: table-cell;\n}\n\n@media screen and (max-width: 580px) {\n    .cell {\n        padding: 2px 12px;\n        display: block;\n    }\n}"],
    }),
    __metadata("design:paramtypes", [])
], FsmGridComponent);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.FsmGridModule = (function () {
    function FsmGridModule() {
    }
    return FsmGridModule;
}());
exports.FsmGridModule = __decorate([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        declarations: [FsmGridComponent],
        exports: [FsmGridComponent]
    })
], exports.FsmGridModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
