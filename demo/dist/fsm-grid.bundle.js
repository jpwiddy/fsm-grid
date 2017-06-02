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
var FsmGridComponent = (function () {
    function FsmGridComponent() {
    }
    return FsmGridComponent;
}());
FsmGridComponent = __decorate$1([
    _angular_core.Component({
        selector: 'fsm-grid',
        template: "\n    <div class=\"wrapper\">\n    <div class=\"table\">\n        <div class=\"row header\">\n            <div class=\"cell\">\n                Name\n            </div>\n            <div class=\"cell\">\n                Age\n            </div>\n            <div class=\"cell\">\n                Occupation\n            </div>\n            <div class=\"cell\">\n                Location\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Luke Peters\n            </div>\n            <div class=\"cell\">\n                25\n            </div>\n            <div class=\"cell\">\n                Freelance Web Developer\n            </div>\n            <div class=\"cell\">\n                Brookline, MA\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Joseph Smith\n            </div>\n            <div class=\"cell\">\n                27\n            </div>\n            <div class=\"cell\">\n                Project Manager\n            </div>\n            <div class=\"cell\">\n                Somerville, MA\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Maxwell Johnson\n            </div>\n            <div class=\"cell\">\n                26\n            </div>\n            <div class=\"cell\">\n                UX Architect & Designer\n            </div>\n            <div class=\"cell\">\n                Arlington, MA\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Harry Harrison\n            </div>\n            <div class=\"cell\">\n                25\n            </div>\n            <div class=\"cell\">\n                Front-End Developer\n            </div>\n            <div class=\"cell\">\n                Boston, MA\n            </div>\n        </div>\n    </div>\n    <div class=\"table\">\n        <div class=\"row header green\">\n            <div class=\"cell\">\n                Product\n            </div>\n            <div class=\"cell\">\n                Unit Price\n            </div>\n            <div class=\"cell\">\n                Quantity\n            </div>\n            <div class=\"cell\">\n                Date Sold\n            </div>\n            <div class=\"cell\">\n                Status\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Solid oak work table\n            </div>\n            <div class=\"cell\">\n                $800\n            </div>\n            <div class=\"cell\">\n                10\n            </div>\n            <div class=\"cell\">\n                03/15/2014\n            </div>\n            <div class=\"cell\">\n                Waiting for Pickup\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Leather iPhone wallet\n            </div>\n            <div class=\"cell\">\n                $45\n            </div>\n            <div class=\"cell\">\n                120\n            </div>\n            <div class=\"cell\">\n                02/28/2014\n            </div>\n            <div class=\"cell\">\n                In Transit\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                27\" Apple Thunderbolt displays\n            </div>\n            <div class=\"cell\">\n                $1000\n            </div>\n            <div class=\"cell\">\n                25\n            </div>\n            <div class=\"cell\">\n                02/10/2014\n            </div>\n            <div class=\"cell\">\n                Delivered\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                Bose studio headphones\n            </div>\n            <div class=\"cell\">\n                $60\n            </div>\n            <div class=\"cell\">\n                90\n            </div>\n            <div class=\"cell\">\n                01/14/2014\n            </div>\n            <div class=\"cell\">\n                Delivered\n            </div>\n        </div>\n    </div>\n    <div class=\"table\">\n        <div class=\"row header blue\">\n            <div class=\"cell\">\n                Username\n            </div>\n            <div class=\"cell\">\n                Email\n            </div>\n            <div class=\"cell\">\n                Password\n            </div>\n            <div class=\"cell\">\n                Active\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                ninjalug\n            </div>\n            <div class=\"cell\">\n                misterninja@hotmail.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                Yes\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                jsmith41\n            </div>\n            <div class=\"cell\">\n                joseph.smith@gmail.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                No\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                1337hax0r15\n            </div>\n            <div class=\"cell\">\n                hackerdude1000@aol.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                Yes\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cell\">\n                hairyharry19\n            </div>\n            <div class=\"cell\">\n                harryharry@gmail.com\n            </div>\n            <div class=\"cell\">\n                ************\n            </div>\n            <div class=\"cell\">\n                Yes\n            </div>\n        </div>\n    </div>\n</div>\n    ",
        styles: [".wrapper {\n    margin: 0 auto;\n    padding: 40px;\n    max-width: 800px;\n}\n\n.table {\n    margin: 0 0 40px 0;\n    width: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    display: table;\n}\n\n@media screen and (max-width: 580px) {\n    .table {\n        display: block;\n    }\n}\n\n.row {\n    display: table-row;\n    background: #f6f6f6;\n}\n\n.row:nth-of-type(odd) {\n    background: #e9e9e9;\n}\n\n.row.header {\n    font-weight: 900;\n    color: #ffffff;\n    background: #ea6153;\n}\n\n.row.green {\n    background: #27ae60;\n}\n\n.row.blue {\n    background: #2980b9;\n}\n\n@media screen and (max-width: 580px) {\n    .row {\n        padding: 8px 0;\n        display: block;\n    }\n}\n\n.cell {\n    padding: 6px 12px;\n    display: table-cell;\n}\n\n@media screen and (max-width: 580px) {\n    .cell {\n        padding: 2px 12px;\n        display: block;\n    }\n}"],
        /* tslint:disable-next-line */
        host: {}
    })
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
