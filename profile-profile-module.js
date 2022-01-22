(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "IpHn":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.menu.ts ***!
  \*****************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
const menu = [
    {
        label: "Call logs",
        icon: "fa fa-phone",
        link: "logs",
        type: "sidebar",
        submenu: false
    },
    {
        label: "customers",
        icon: "fa fa-user-o",
        link: "customers",
        type: "sidebar",
        submenu: false
    },
    {
        label: "Events",
        icon: "fa fa-calendar-check-o",
        link: "calendar",
        type: "sidebar",
        submenu: false
    },
    {
        label: "Assignment",
        icon: "fa fa-bookmark-o",
        link: "assignment",
        type: "sidebar",
        submenu: false
    },
    {
        label: "Marketting",
        icon: "fa fa-bar-chart-o",
        link: "marketting",
        type: "sidebar",
        submenu: false
    },
    {
        label: "Notifications",
        icon: "fa fa-bell-o",
        link: "notifications",
        type: "sidebar",
        submenu: false
    }
];


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _profile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.menu */ "IpHn");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore.service */ "YWyl");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_caller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/caller.service */ "1vHj");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");













function ProfileComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", data_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.label, " ");
} }
class ProfileComponent {
    constructor(db, cookie, auth, caller) {
        this.db = db;
        this.cookie = cookie;
        this.auth = auth;
        this.caller = caller;
        this.menu = _profile_menu__WEBPACK_IMPORTED_MODULE_1__["menu"];
        this.user_id = this.cookie.get("user_id");
    }
    ngOnInit() {
        this.getUserInfo();
    }
    signOut() {
        this.auth.signOut();
    }
    addProfilePic() {
        this.caller.trigger();
    }
    getUserInfo() {
        const db = this.db.getDataById("users", this.user_id);
        db.subscribe((response) => {
            if (response.hasOwnProperty("picture")) {
                this.user = response;
            }
            else {
                this.user = response;
                this.user["picture"] = "https://iconape.com/wp-content/png_logo_vector/avatar-4.png";
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_caller_service__WEBPACK_IMPORTED_MODULE_5__["CallerService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 25, vars: 4, consts: [[1, "main"], ["mode", "side", "opened", "", 1, "p-4"], ["src", "assets/logo.png", "width", "80%", 1, "mb-5"], ["mat-button", "", "class", "py-1", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "p-4"], ["fxLayoutAlign", "space-between center"], ["fxLayoutAlign", "start center"], ["width", "50", 2, "border-radius", "50%", 3, "src", "click"], [1, "p-0", "m-0", "mat-typography", "title-text", 2, "color", "black", "font-weight", "bold"], [1, "p-0", "m-0", "mat-typography", 2, "color", "black", "font-size", "12"], ["mat-icon-button", ""], [1, "fa", "fa-tasks", 2, "font-size", "18px"], ["mat-icon-button", "", "routerLink", "calendar"], [1, "fa", "fa-calendar-o", 2, "font-size", "18px"], [1, "fa", "fa-bell-o", 2, "font-size", "20px"], ["mat-icon-button", "", 3, "click"], [1, "fa", "fa-sign-out", 2, "font-size", "20px"], ["mat-button", "", 1, "py-1", 3, "routerLink"], [2, "font-size", "20px"], [1, "desc-text", "ml-3", 2, "font-size", "18px"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_button_4_Template, 4, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-drawer-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_img_click_8_listener() { return ctx.addProfilePic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_21_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.website);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n}\n.main[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 230px;\n}\n.main[_ngcontent-%COMP%]   mat-drawer-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0px 0px 10px #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBQ0k7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFDTiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgbWF0LWRyYXdlcntcclxuICAgIHdpZHRoOjIzMHB4O1xyXG4gIH07XHJcbiAgbWF0LWRyYXdlci1jb250ZW50e1xyXG4gICAgbWF0LXRvb2xiYXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNoYWRvdzowcHggMHB4IDEwcHggI2RkZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_caller_service__WEBPACK_IMPORTED_MODULE_5__["CallerService"] }]; }, null); })();


/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "W6KJ");
/* harmony import */ var _modules_all_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/all.module */ "w/CV");






class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
            _modules_all_module__WEBPACK_IMPORTED_MODULE_4__["AllModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
        _modules_all_module__WEBPACK_IMPORTED_MODULE_4__["AllModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                    _modules_all_module__WEBPACK_IMPORTED_MODULE_4__["AllModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "W6KJ");





const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        children: [
            {
                path: 'customers', loadChildren: () => __webpack_require__.e(/*! import() | profile-data-customers-customers-module */ "profile-data-customers-customers-module").then(__webpack_require__.bind(null, /*! ../profile-data/customers/customers.module */ "g5hR")).then(m => m.CustomersModule)
            },
            {
                path: 'calendar', loadChildren: () => __webpack_require__.e(/*! import() | profile-data-calendar-calendar-module */ "profile-data-calendar-calendar-module").then(__webpack_require__.bind(null, /*! ../profile-data/calendar/calendar.module */ "TYgF")).then(m => m.CalendarModule)
            },
            {
                path: 'logs', loadChildren: () => __webpack_require__.e(/*! import() | profile-data-logs-logs-module */ "profile-data-logs-logs-module").then(__webpack_require__.bind(null, /*! ../profile-data/logs/logs.module */ "hhQh")).then(m => m.LogsModule)
            },
        ]
    },
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map