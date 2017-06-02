"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var fsm_grid_component_1 = require("./fsm-grid.component");
var FsmGridModule = (function () {
    function FsmGridModule() {
    }
    return FsmGridModule;
}());
FsmGridModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [fsm_grid_component_1.FsmGridComponent],
                exports: [fsm_grid_component_1.FsmGridComponent]
            },] },
];
/** @nocollapse */
FsmGridModule.ctorParameters = function () { return []; };
exports.FsmGridModule = FsmGridModule;
//# sourceMappingURL=fsm-grid.module.js.map