import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let CarDetailsComponent = class CarDetailsComponent {
    constructor() {
        this.carDetails = '';
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], CarDetailsComponent.prototype, "carDetails", void 0);
CarDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-car-details',
        templateUrl: './car-details.component.html',
        styleUrls: ['./car-details.component.css']
    })
], CarDetailsComponent);
export { CarDetailsComponent };
//# sourceMappingURL=car-details.component.js.map