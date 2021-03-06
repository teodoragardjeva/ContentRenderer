"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const menuComponent_1 = require('./components/menuComponent');
const router_1 = require('@angular/router');
const list_1 = require('./components/list');
const grid_1 = require('./components/grid');
const userProfile_1 = require('./components/userProfile');
const forms_1 = require('./components/forms');
const dashboard_1 = require('./components/dashboard');
const treeView_1 = require('./components/treeView');
const entityTypes_1 = require('./enums/entityTypes');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'grid-ui', component: list_1.ListElement },
                { path: 'users', component: list_1.ListElement, data: { type: entityTypes_1.EntityType.User } },
                { path: 'user-profile', component: userProfile_1.UserProfile },
                { path: 'forms-ui', component: forms_1.FormsElement },
                { path: 'dashboard', component: dashboard_1.Dashboard },
                { path: '', component: dashboard_1.Dashboard },
            ])
        ],
        declarations: [menuComponent_1.MenuComponent, grid_1.GridElement, userProfile_1.UserProfile, forms_1.FormsElement, dashboard_1.Dashboard, treeView_1.TreeView, list_1.ListElement],
        bootstrap: [menuComponent_1.MenuComponent],
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
