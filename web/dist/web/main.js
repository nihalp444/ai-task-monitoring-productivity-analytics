"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login */ 6365);
/* harmony import */ var _dashboard_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard */ 2625);
/* harmony import */ var _task_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task/task */ 8473);
/* harmony import */ var _task_create_task_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-create/task-create */ 6417);
/* harmony import */ var _signup_signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup */ 451);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  component: _login_login__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'signup',
  component: _signup_signup__WEBPACK_IMPORTED_MODULE_4__.SignupComponent
}, {
  path: 'dashboard',
  component: _dashboard_dashboard__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}, {
  path: 'tasks',
  component: _task_task__WEBPACK_IMPORTED_MODULE_2__.TaskComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}, {
  path: 'tasks/create',
  component: _task_create_task_create__WEBPACK_IMPORTED_MODULE_3__.TaskCreateComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 5389:
/*!************************************************!*\
  !*** ./src/app/app.component/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function AppComponent_aside_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "TaskAI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_aside_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_aside_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_aside_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_aside_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2726");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_aside_1_span_6_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 10)(8, "a", 11)(9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_aside_1_span_11_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 14)(13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_aside_1_span_15_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 15)(17, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_aside_1_span_19_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapsed", ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r1.collapsed ? "Expand" : "Collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.collapsed ? "\u25B6" : "\u25C0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r1.collapsed ? "Dashboard" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r1.collapsed ? "Tasks" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r1.collapsed ? "Create Task" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
  }
}
function AppComponent_header_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_header_3_div_10_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.popupOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Profile Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_header_3_div_10_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\uD83D\uDD13");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, ctx_r1.user == null ? null : ctx_r1.user.first_name == null ? null : ctx_r1.user.first_name.charAt(0)), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx_r1.user == null ? null : ctx_r1.user.last_name == null ? null : ctx_r1.user.last_name.charAt(0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.user == null ? null : ctx_r1.user.first_name, " ", ctx_r1.user == null ? null : ctx_r1.user.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.user == null ? null : ctx_r1.user.email);
  }
}
function AppComponent_header_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Task AI System");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20)(4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_header_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.togglePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_header_3_div_10_Template, 20, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.user == null ? null : ctx_r1.user.first_name, " ", ctx_r1.user == null ? null : ctx_r1.user.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, ctx_r1.user == null ? null : ctx_r1.user.first_name == null ? null : ctx_r1.user.first_name.charAt(0)), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, ctx_r1.user == null ? null : ctx_r1.user.last_name == null ? null : ctx_r1.user.last_name.charAt(0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.popupOpen);
  }
}
class AppComponent {
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
    this.showSidebar = false;
    this.collapsed = false;
    this.popupOpen = false;
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        const url = e.urlAfterRedirects;
        this.showSidebar = url !== '/' && url !== '/signup';
        this.popupOpen = false;
      }
    });
  }
  get user() {
    return this.auth.getUser();
  }
  toggle() {
    this.collapsed = !this.collapsed;
  }
  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }
  onDocClick(e) {
    const target = e.target;
    if (!target.closest('.profile-wrap')) this.popupOpen = false;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_click_HostBindingHandler($event) {
            return ctx.onDocClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      decls: 6,
      vars: 8,
      consts: [[1, "layout"], ["class", "sidebar", 3, "collapsed", 4, "ngIf"], [1, "content"], ["class", "topbar", 4, "ngIf"], [1, "page-content"], [1, "sidebar"], [1, "toggle-btn", 3, "click", "title"], [1, "brand"], [1, "brand-icon"], ["class", "brand-name", 4, "ngIf"], [1, "nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "title"], [1, "icon"], ["class", "label", 4, "ngIf"], ["routerLink", "/tasks", "routerLinkActive", "active", 1, "nav-item", 3, "title"], ["routerLink", "/tasks/create", "routerLinkActive", "active", 1, "nav-item", 3, "title"], [1, "brand-name"], [1, "label"], [1, "topbar"], [1, "page-title"], [1, "profile-wrap"], [1, "user-name"], [1, "avatar-btn", 3, "click"], ["class", "popup", 4, "ngIf"], [1, "popup"], [1, "popup-header"], [1, "popup-avatar"], [1, "popup-name"], [1, "popup-email"], [1, "popup-divider"], ["routerLink", "/profile", 1, "popup-item", 3, "click"], [1, "popup-item", "logout-item", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_aside_1_Template, 20, 11, "aside", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_header_3_Template, 11, 9, "header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("full", !ctx.showSidebar)("shifted", ctx.showSidebar && !ctx.collapsed)("shifted-sm", ctx.showSidebar && ctx.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSidebar);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe],
      styles: ["@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; transform: translateY(-8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from { opacity: 0; transform: translateX(-10px); }\n  to   { opacity: 1; transform: translateX(0); }\n}\n\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  min-height: 100vh;\n  background: #111111;\n  display: flex;\n  flex-direction: column;\n  padding: 24px 14px;\n  position: fixed;\n  top: 0; left: 0; bottom: 0;\n  z-index: 100;\n  border-right: 1px solid #1f1f1f;\n  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);\n  overflow: hidden;\n  box-shadow: 4px 0 24px rgba(0,0,0,0.4);\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 66px;\n  padding: 24px 10px;\n}\n\n\n\n.toggle-btn[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: #1a1a1a;\n  border: 1px solid #2a2a2a;\n  color: #6b7280;\n  border-radius: 8px;\n  width: 30px; height: 30px;\n  cursor: pointer;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  transition: background 0.2s, color 0.2s, border-color 0.2s;\n  flex-shrink: 0;\n}\n\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #1f1a0f;\n  border-color: #f59e0b;\n  color: #f59e0b;\n}\n\n\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 6px 22px;\n  border-bottom: 1px solid #1f1f1f;\n  margin-bottom: 20px;\n  white-space: nowrap;\n}\n\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #f59e0b;\n  flex-shrink: 0;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  background: linear-gradient(90deg, #f59e0b, #fcd34d);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: 1px;\n}\n\n\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  border-radius: 10px;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s, color 0.2s, transform 0.15s;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease both;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #1a1a1a;\n  color: #f59e0b;\n  transform: translateX(3px);\n}\n\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1f1a0f;\n  color: #f59e0b;\n  font-weight: 600;\n  border-left: 3px solid #f59e0b;\n  padding-left: 11px;\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 11px;\n  gap: 0;\n  border-left: none;\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  border-left: none;\n  padding: 11px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n\n\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #1f1f1f;\n  padding-top: 14px;\n}\n\n.logout[_ngcontent-%COMP%] { color: #6b7280; }\n\n.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239,68,68,0.1);\n  color: #f87171;\n  transform: translateX(3px);\n}\n\n\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 100vh;\n  background: #0a0a0a;\n  transition: margin-left 0.3s cubic-bezier(0.4,0,0.2,1);\n  display: flex;\n  flex-direction: column;\n}\n\n.content.full[_ngcontent-%COMP%]       { margin-left: 0; }\n.content.shifted[_ngcontent-%COMP%]    { margin-left: 240px; }\n.content.shifted-sm[_ngcontent-%COMP%] { margin-left: 66px; }\n\n\n\n.topbar[_ngcontent-%COMP%] {\n  height: 60px;\n  background: #111111;\n  border-bottom: 1px solid #1f1f1f;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 28px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  box-shadow: 0 2px 16px rgba(0,0,0,0.4);\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #e2e8f0;\n  letter-spacing: 0.5px;\n}\n\n.profile-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n\n.avatar-btn[_ngcontent-%COMP%] {\n  width: 36px; height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  border: 2px solid #2a2a2a;\n  color: #0a0a0a;\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;\n  flex-shrink: 0;\n  box-shadow: 0 2px 10px rgba(245,158,11,0.3);\n}\n\n.avatar-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 18px rgba(245,158,11,0.5);\n  border-color: #f59e0b;\n}\n\n\n\n.popup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 12px);\n  right: 0;\n  width: 265px;\n  background: #111111;\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06);\n  border: 1px solid #222;\n  overflow: hidden;\n  z-index: 200;\n  animation: _ngcontent-%COMP%_fadeIn 0.18s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 16px 14px;\n  background: #161616;\n  border-bottom: 1px solid #1f1f1f;\n}\n\n.popup-avatar[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: #0a0a0a;\n  font-size: 15px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 2px 10px rgba(245,158,11,0.35);\n}\n\n.popup-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #f1f5f9;\n}\n\n.popup-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n  margin-top: 3px;\n  word-break: break-all;\n}\n\n.popup-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #1f1f1f;\n  margin: 0;\n}\n\n.popup-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 12px 16px;\n  background: none;\n  border: none;\n  font-size: 14px;\n  color: #9ca3af;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s, color 0.15s;\n}\n\n.popup-item[_ngcontent-%COMP%]:hover {\n  background: #1a1a1a;\n  color: #f1f5f9;\n}\n\n.logout-item[_ngcontent-%COMP%] { color: #6b7280; }\n\n.logout-item[_ngcontent-%COMP%]:hover {\n  background: rgba(239,68,68,0.1);\n  color: #f87171;\n}\n\n.page-content[_ngcontent-%COMP%] { flex: 1; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFO0VBQ2hELE9BQU8sVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQy9DOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7RUFDakQsT0FBTyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVM7RUFDMUIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXLEVBQUUsWUFBWTtFQUN6QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwREFBMEQ7RUFDMUQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ys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O0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUEsZUFBZSxjQUFjLEVBQUU7O0FBRS9CO0VBQ0UsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLE9BQU8sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbn1cblxuLmxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU2lkZWJhciDDosKUwoDDosKUwoAgKi9cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjRweCAxNHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDsgbGVmdDogMDsgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxZjFmMWY7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogNHB4IDAgMjRweCByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi5zaWRlYmFyLmNvbGxhcHNlZCB7XG4gIHdpZHRoOiA2NnB4O1xuICBwYWRkaW5nOiAyNHB4IDEwcHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBUb2dnbGUgw6LClMKAw6LClMKAICovXG4udG9nZ2xlLWJ0biB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmEyYTJhO1xuICBjb2xvcjogIzZiNzI4MDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgY29sb3IgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udG9nZ2xlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxZjFhMGY7XG4gIGJvcmRlci1jb2xvcjogI2Y1OWUwYjtcbiAgY29sb3I6ICNmNTllMGI7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBCcmFuZCDDosKUwoDDosKUwoAgKi9cbi5icmFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMCA2cHggMjJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxZjFmMWY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5icmFuZC1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5icmFuZC1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmNTllMGIsICNmY2QzNGQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBOYXYgw6LClMKAw6LClMKAICovXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIGZsZXg6IDE7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTFweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgY29sb3IgMC4ycywgdHJhbnNmb3JtIDAuMTVzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlIGJvdGg7XG59XG5cbi5uYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbn1cblxuLm5hdi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxZjFhMGY7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmNTllMGI7XG4gIHBhZGRpbmctbGVmdDogMTFweDtcbn1cblxuLnNpZGViYXIuY29sbGFwc2VkIC5uYXYtaXRlbSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMXB4O1xuICBnYXA6IDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lkZWJhci5jb2xsYXBzZWQgLm5hdi1pdGVtLmFjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBwYWRkaW5nOiAxMXB4O1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBTaWRlYmFyIGZvb3RlciDDosKUwoDDosKUwoAgKi9cbi5zaWRlYmFyLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWYxZjFmO1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLmxvZ291dCB7IGNvbG9yOiAjNmI3MjgwOyB9XG5cbi5sb2dvdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjEpO1xuICBjb2xvcjogI2Y4NzE3MTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBNYWluIGNvbnRlbnQgw6LClMKAw6LClMKAICovXG4uY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMGEwYTBhO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250ZW50LmZ1bGwgICAgICAgeyBtYXJnaW4tbGVmdDogMDsgfVxuLmNvbnRlbnQuc2hpZnRlZCAgICB7IG1hcmdpbi1sZWZ0OiAyNDBweDsgfVxuLmNvbnRlbnQuc2hpZnRlZC1zbSB7IG1hcmdpbi1sZWZ0OiA2NnB4OyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBUb3AgQmFyIMOiwpTCgMOiwpTCgCAqL1xuLnRvcGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxZjFmMWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAyOHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDUwO1xuICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZTJlOGYwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5wcm9maWxlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM5Y2EzYWY7XG59XG5cbi5hdmF0YXItYnRuIHtcbiAgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU5ZTBiLCAjZDk3NzA2KTtcbiAgYm9yZGVyOiAycHggc29saWQgIzJhMmEyYTtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzLCBib3JkZXItY29sb3IgMC4ycztcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgyNDUsMTU4LDExLDAuMyk7XG59XG5cbi5hdmF0YXItYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IHJnYmEoMjQ1LDE1OCwxMSwwLjUpO1xuICBib3JkZXItY29sb3I6ICNmNTllMGI7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBQcm9maWxlIFBvcHVwIMOiwpTCgMOiwpTCgCAqL1xuLnBvcHVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDEycHgpO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDI2NXB4O1xuICBiYWNrZ3JvdW5kOiAjMTExMTExO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsMCwwLDAuNyksIDAgMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyMDA7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMThzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpIGJvdGg7XG59XG5cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIHBhZGRpbmc6IDE4cHggMTZweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFmMWYxZjtcbn1cblxuLnBvcHVwLWF2YXRhciB7XG4gIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2Q5NzcwNik7XG4gIGNvbG9yOiAjMGEwYTBhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDI0NSwxNTgsMTEsMC4zNSk7XG59XG5cbi5wb3B1cC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2YxZjVmOTtcbn1cblxuLnBvcHVwLWVtYWlsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRiNTU2MztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5wb3B1cC1kaXZpZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzFmMWYxZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucG9wdXAtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOWNhM2FmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMsIGNvbG9yIDAuMTVzO1xufVxuXG4ucG9wdXAtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG4gIGNvbG9yOiAjZjFmNWY5O1xufVxuXG4ubG9nb3V0LWl0ZW0geyBjb2xvcjogIzZiNzI4MDsgfVxuXG4ubG9nb3V0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjEpO1xuICBjb2xvcjogI2Y4NzE3MTtcbn1cblxuLnBhZ2UtY29udGVudCB7IGZsZXg6IDE7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login */ 6365);
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component/app.component */ 5389);
/* harmony import */ var _dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard */ 2625);
/* harmony import */ var _task_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/task */ 8473);
/* harmony import */ var _task_create_task_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-create/task-create */ 6417);
/* harmony import */ var _signup_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup */ 451);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);












class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _signup_signup__WEBPACK_IMPORTED_MODULE_5__.SignupComponent, _dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _task_task__WEBPACK_IMPORTED_MODULE_3__.TaskComponent, _task_create_task_create__WEBPACK_IMPORTED_MODULE_4__.TaskCreateComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 2625:
/*!****************************************!*\
  !*** ./src/app/dashboard/dashboard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = ["lineChart"];
const _c1 = ["pieChart"];
function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17)(4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--delay", i_r2 * 0.07 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", s_r1.color + "18")("color", s_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", s_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r1.value);
  }
}
function DashboardComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ins_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--delay", i_r4 * 0.08 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ins_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ins_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ins_r3.text);
  }
}
function DashboardComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56)(1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.text);
  }
}
function DashboardComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 59);
  }
  if (rf & 2) {
    const cell_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("heat-" + cell_r6.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", cell_r6.date + " \u2014 " + cell_r6.level + " tasks");
  }
}
function DashboardComponent_div_87_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r7.ai);
  }
}
function DashboardComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63)(5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_87_span_7_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 66)(9, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-done", t_r7.status === "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r7.status === "Completed" ? "\u2705" : "\u2B1C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r7.ai);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.priorityClass(t_r7.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r7.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83D\uDD50 ", t_r7.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("status-done", t_r7.status === "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r7.status);
  }
}
class DashboardComponent {
  constructor() {
    this.score = 78;
    this.today = new Date();
    this.circumference = 2 * Math.PI * 36;
    this.stats = [{
      icon: '✅',
      label: 'Tasks Completed Today',
      value: 8,
      color: '#10b981'
    }, {
      icon: '⏳',
      label: 'Tasks Pending',
      value: 5,
      color: '#f59e0b'
    }, {
      icon: '🕐',
      label: 'Time Spent Today',
      value: '6.5h',
      color: '#6366f1'
    }];
    this.insights = [{
      icon: '⚡',
      text: 'You are most productive between 10 AM – 12 PM',
      color: '#f59e0b'
    }, {
      icon: '📅',
      text: 'You complete more tasks on weekdays',
      color: '#10b981'
    }, {
      icon: '⚠️',
      text: 'High priority tasks take longer than expected',
      color: '#ef4444'
    }, {
      icon: '🔁',
      text: 'You tend to reschedule tasks after 4 PM',
      color: '#6366f1'
    }, {
      icon: '🎯',
      text: 'Focus sessions under 90 min yield best results',
      color: '#f59e0b'
    }];
    this.recommendations = [{
      icon: '🧠',
      text: 'Recommended: Do high-focus tasks now (peak hours)'
    }, {
      icon: '🚫',
      text: 'Avoid adding more than 5 tasks today'
    }, {
      icon: '🔥',
      text: 'You are already at 78% capacity — pace yourself'
    }];
    this.tasks = [{
      title: 'Finalize project report',
      priority: 'High',
      time: '2h',
      status: 'Pending',
      ai: '⚠️ May take longer than usual'
    }, {
      title: 'Review pull requests',
      priority: 'Medium',
      time: '45m',
      status: 'Completed',
      ai: null
    }, {
      title: 'Team standup meeting',
      priority: 'Low',
      time: '30m',
      status: 'Completed',
      ai: null
    }, {
      title: 'Update API documentation',
      priority: 'High',
      time: '1.5h',
      status: 'Pending',
      ai: '💡 Best done in morning hours'
    }, {
      title: 'Exercise / workout',
      priority: 'Medium',
      time: '1h',
      status: 'Pending',
      ai: null
    }, {
      title: 'Read research paper',
      priority: 'Low',
      time: '1h',
      status: 'Pending',
      ai: '⚠️ Often skipped — schedule it early'
    }];
    this.heatmapCells = [];
  }
  get dashOffset() {
    return this.circumference * (1 - this.score / 100);
  }
  ngOnInit() {
    this.buildHeatmap();
  }
  ngAfterViewInit() {
    this.initLineChart();
    this.initPieChart();
  }
  buildHeatmap() {
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const label = d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
      this.heatmapCells.push({
        level: Math.floor(Math.random() * 5),
        date: label
      });
    }
  }
  initLineChart() {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [4, 7, 5, 9, 6, 3, 8];
    new Chart(this.lineChartRef.nativeElement, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Tasks Completed',
          data,
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245,158,11,0.08)',
          pointBackgroundColor: '#f59e0b',
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: true,
          borderWidth: 2.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 900,
          easing: 'easeInOutQuart'
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              color: '#1f1f1f'
            },
            ticks: {
              color: '#6b7280',
              font: {
                family: 'Inter',
                size: 12
              }
            }
          },
          y: {
            grid: {
              color: '#1f1f1f'
            },
            ticks: {
              color: '#6b7280',
              font: {
                family: 'Inter',
                size: 12
              },
              stepSize: 2
            },
            beginAtZero: true
          }
        }
      }
    });
  }
  initPieChart() {
    new Chart(this.pieChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Work', 'Study', 'Health', 'Personal'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#f59e0b', '#6366f1', '#10b981', '#ec4899'],
          borderColor: '#111111',
          borderWidth: 3,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 900,
          easing: 'easeInOutQuart'
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#9ca3af',
              font: {
                family: 'Inter',
                size: 12
              },
              padding: 16,
              boxWidth: 12,
              borderRadius: 4
            }
          }
        },
        cutout: '65%'
      }
    });
  }
  priorityClass(p) {
    return p === 'High' ? 'badge-high' : p === 'Medium' ? 'badge-med' : 'badge-low';
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineChartRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pieChartRef = _t.first);
        }
      },
      decls: 88,
      vars: 14,
      consts: [["lineChart", ""], ["pieChart", ""], [1, "dash-header"], [1, "dash-title"], [1, "dash-sub"], [1, "dash-date"], [1, "stats-row"], ["class", "stat-card", 3, "--delay", 4, "ngFor", "ngForOf"], [1, "stat-card", "score-card"], [1, "score-ring-wrap"], ["width", "88", "height", "88", "viewBox", "0 0 88 88"], ["cx", "44", "cy", "44", "r", "36", "fill", "none", "stroke", "#1f1f1f", "stroke-width", "7"], ["cx", "44", "cy", "44", "r", "36", "fill", "none", "stroke", "url(#scoreGrad)", "stroke-width", "7", "stroke-linecap", "round", "transform", "rotate(-90 44 44)", 1, "score-arc"], ["id", "scoreGrad", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "0%"], ["offset", "0%", "stop-color", "#f59e0b"], ["offset", "100%", "stop-color", "#fcd34d"], ["x", "44", "y", "49", "text-anchor", "middle", 1, "score-text"], [1, "stat-info"], [1, "stat-label"], [1, "score-status"], [1, "main-grid"], [1, "charts-col"], [1, "card", "chart-card"], [1, "card-head"], [1, "card-title"], [1, "card-badge"], [1, "chart-wrap"], [1, "chart-wrap", "pie-wrap"], [1, "insights-col"], [1, "card", "insights-card"], [1, "ai-live"], [1, "insights-list"], ["class", "insight-item", 3, "--delay", 4, "ngFor", "ngForOf"], [1, "card", "reco-card"], [1, "reco-list"], ["class", "reco-item", 4, "ngFor", "ngForOf"], [1, "card", "heatmap-card"], [1, "heatmap-grid"], ["class", "heat-cell", 3, "class", "title", 4, "ngFor", "ngForOf"], [1, "heat-legend"], [1, "legend-label"], [1, "heat-cell", "heat-0"], [1, "heat-cell", "heat-1"], [1, "heat-cell", "heat-2"], [1, "heat-cell", "heat-3"], [1, "heat-cell", "heat-4"], [1, "card", "tasks-card"], [1, "task-list"], ["class", "task-row", 3, "task-done", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-value"], [1, "insight-item"], [1, "insight-dot"], [1, "insight-icon"], [1, "insight-text"], [1, "reco-item"], [1, "reco-icon"], [1, "reco-text"], [1, "heat-cell", 3, "title"], [1, "task-row"], [1, "task-left"], [1, "task-check"], [1, "task-info"], [1, "task-title"], ["class", "task-ai", 4, "ngIf"], [1, "task-right"], [1, "badge"], [1, "task-time"], [1, "task-status"], [1, "task-ai"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div")(2, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AI Productivity Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Here's your intelligence summary for today");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 8, 11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 11)(15, "circle", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "defs")(17, "linearGradient", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "stop", 14)(19, "stop", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "text", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17)(23, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Productivity Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20)(28, "div", 21)(29, "div", 22)(30, "div", 23)(31, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\uD83D\uDCC8 Task Completion Trend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Last 7 Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "canvas", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22)(39, "div", 23)(40, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\uD83C\uDF69 Task Category Distribution");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "This Week");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "canvas", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28)(48, "div", 29)(49, "div", 23)(50, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\uD83E\uDD16 AI Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u25CF Live");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DashboardComponent_div_55_Template, 6, 6, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33)(57, "div", 23)(58, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\uD83D\uDCA1 Smart Recommendations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DashboardComponent_div_61_Template, 5, 2, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36)(63, "div", 23)(64, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\uD83D\uDDD3\uFE0F Activity Heatmap");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Last 30 Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, DashboardComponent_div_69_Template, 1, 3, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39)(71, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Less");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 41)(74, "div", 42)(75, "div", 43)(76, "div", 44)(77, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "More");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 46)(81, "div", 23)(82, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\uD83D\uDCCB Today's Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, DashboardComponent_div_87_Template, 15, 12, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 11, ctx.today, "EEEE, MMMM d"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.dashOffset);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.score, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score >= 75 ? "\uD83D\uDD25 On Fire" : ctx.score >= 50 ? "\uD83D\uDC4D Good" : "\uD83D\uDCA4 Low");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.insights);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommendations);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heatmapCells);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.tasks.length, " tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: ["@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(18px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes _ngcontent-%COMP%_arcDraw {\n  from { stroke-dashoffset: 226.2; }\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 32px 36px;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n  max-width: 1400px;\n}\n\n\n\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.dash-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  background: linear-gradient(90deg, #f59e0b, #fcd34d);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: 0.3px;\n}\n\n.dash-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  margin-top: 4px;\n}\n\n.dash-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  font-weight: 500;\n  background: #111;\n  border: 1px solid #1f1f1f;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  background: #111111;\n  border: 1px solid #1f1f1f;\n  border-radius: 16px;\n  padding: 22px 24px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.35);\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n  transition: box-shadow 0.25s, border-color 0.25s, transform 0.2s;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 36px rgba(0,0,0,0.5);\n  border-color: #2a2a2a;\n}\n\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #e2e8f0;\n  letter-spacing: 0.2px;\n}\n\n.card-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #f59e0b;\n  background: rgba(245,158,11,0.1);\n  border: 1px solid rgba(245,158,11,0.2);\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n\n\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #111111;\n  border: 1px solid #1f1f1f;\n  border-radius: 16px;\n  padding: 20px 22px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n  animation: _ngcontent-%COMP%_fadeUp 0.4s var(--delay, 0s) ease both;\n  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;\n  cursor: default;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0,0,0,0.45);\n  border-color: #2a2a2a;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.stat-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #4b5563;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n  margin-bottom: 6px;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n}\n\n\n\n.score-card[_ngcontent-%COMP%] {\n  border-color: rgba(245,158,11,0.25);\n  background: linear-gradient(135deg, #111111 60%, #1a1500 100%);\n}\n\n.score-card[_ngcontent-%COMP%]:hover { border-color: rgba(245,158,11,0.5); }\n\n.score-ring-wrap[_ngcontent-%COMP%] { flex-shrink: 0; }\n\n.score-arc[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_arcDraw 1.2s 0.3s cubic-bezier(0.4,0,0.2,1) both;\n  transition: stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1);\n}\n\n.score-text[_ngcontent-%COMP%] {\n  font-family: 'Inter', sans-serif;\n  font-size: 15px;\n  font-weight: 800;\n  fill: #f59e0b;\n}\n\n.score-status[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #f59e0b;\n  margin-top: 4px;\n}\n\n\n\n.main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n  margin-bottom: 24px;\n  align-items: start;\n}\n\n.charts-col[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; }\n.insights-col[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; }\n\n\n\n.chart-card[_ngcontent-%COMP%] { animation-delay: 0.1s; }\n\n.chart-wrap[_ngcontent-%COMP%] {\n  height: 220px;\n  position: relative;\n}\n\n.pie-wrap[_ngcontent-%COMP%] { height: 240px; }\n\n\n\n.insights-card[_ngcontent-%COMP%] { animation-delay: 0.12s; }\n\n.ai-live[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #10b981;\n  letter-spacing: 0.5px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.4; }\n}\n\n.insights-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n\n.insight-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  background: #161616;\n  border-radius: 10px;\n  border: 1px solid #1f1f1f;\n  animation: _ngcontent-%COMP%_fadeUp 0.35s var(--delay, 0s) ease both;\n  transition: background 0.2s, border-color 0.2s, transform 0.15s;\n}\n\n.insight-item[_ngcontent-%COMP%]:hover {\n  background: #1a1a1a;\n  border-color: #2a2a2a;\n  transform: translateX(3px);\n}\n\n.insight-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-top: 6px;\n  flex-shrink: 0;\n}\n\n.insight-icon[_ngcontent-%COMP%] { font-size: 15px; flex-shrink: 0; }\n\n.insight-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  line-height: 1.5;\n}\n\n\n\n.reco-card[_ngcontent-%COMP%] {\n  border-color: rgba(245,158,11,0.2);\n  background: linear-gradient(135deg, #111111 60%, #1a1500 100%);\n  animation-delay: 0.18s;\n}\n\n.reco-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n\n.reco-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 11px 14px;\n  background: rgba(245,158,11,0.05);\n  border: 1px solid rgba(245,158,11,0.12);\n  border-radius: 10px;\n  transition: background 0.2s, transform 0.15s;\n}\n\n.reco-item[_ngcontent-%COMP%]:hover {\n  background: rgba(245,158,11,0.1);\n  transform: translateX(3px);\n}\n\n.reco-icon[_ngcontent-%COMP%] { font-size: 15px; flex-shrink: 0; }\n\n.reco-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #d1a84b;\n  line-height: 1.5;\n  font-weight: 500;\n}\n\n\n\n.heatmap-card[_ngcontent-%COMP%] { margin-bottom: 24px; animation-delay: 0.2s; }\n\n.heatmap-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n.heat-cell[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 5px;\n  transition: transform 0.15s;\n  cursor: default;\n}\n\n.heat-cell[_ngcontent-%COMP%]:hover { transform: scale(1.3); }\n\n.heat-0[_ngcontent-%COMP%] { background: #1a1a1a; }\n.heat-1[_ngcontent-%COMP%] { background: #1a1500; }\n.heat-2[_ngcontent-%COMP%] { background: #7c4f00; }\n.heat-3[_ngcontent-%COMP%] { background: #b97200; }\n.heat-4[_ngcontent-%COMP%] { background: #f59e0b; }\n\n.heat-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 12px;\n}\n\n.legend-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  font-weight: 500;\n}\n\n\n\n.tasks-card[_ngcontent-%COMP%] { animation-delay: 0.24s; }\n\n.task-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n\n.task-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 16px;\n  background: #161616;\n  border: 1px solid #1f1f1f;\n  border-radius: 12px;\n  gap: 12px;\n  transition: background 0.2s, border-color 0.2s, transform 0.15s;\n}\n\n.task-row[_ngcontent-%COMP%]:hover {\n  background: #1a1a1a;\n  border-color: #2a2a2a;\n  transform: translateX(3px);\n}\n\n.task-done[_ngcontent-%COMP%] { opacity: 0.55; }\n\n.task-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n\n.task-check[_ngcontent-%COMP%] { font-size: 16px; flex-shrink: 0; margin-top: 1px; }\n\n.task-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 3px; }\n\n.task-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #e2e8f0;\n}\n\n.task-ai[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #f59e0b;\n  font-weight: 500;\n}\n\n.task-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.4px;\n}\n\n.badge-high[_ngcontent-%COMP%]  { background: rgba(239,68,68,0.15);  color: #f87171; border: 1px solid rgba(239,68,68,0.25); }\n.badge-med[_ngcontent-%COMP%]   { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.25); }\n.badge-low[_ngcontent-%COMP%]   { background: rgba(99,102,241,0.15); color: #818cf8; border: 1px solid rgba(99,102,241,0.25); }\n\n.task-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n}\n\n.task-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6b7280;\n  background: #1a1a1a;\n  border: 1px solid #2a2a2a;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.status-done[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16,185,129,0.1);\n  border-color: rgba(16,185,129,0.2);\n}\n\n\n\n@media (max-width: 1100px) {\n  .main-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .insights-col[_ngcontent-%COMP%] { flex-direction: row; flex-wrap: wrap; }\n  .insights-card[_ngcontent-%COMP%], .reco-card[_ngcontent-%COMP%] { flex: 1; min-width: 280px; }\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%] { padding: 20px 16px; }\n  .stats-row[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n  .task-right[_ngcontent-%COMP%] { flex-wrap: wrap; gap: 6px; }\n}\n\n@media (max-width: 480px) {\n  .stats-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtFQUNoRCxPQUFPLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUMvQzs7QUFFQTtFQUNFLE9BQU8sd0JBQXdCLEVBQUU7QUFDbkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9EQUFvRDtFQUNwRCw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxnQ0FBZ0M7RUFDaEMsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FB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ZXMgZmFkZVVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxOHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbkBrZXlmcmFtZXMgYXJjRHJhdyB7XG4gIGZyb20geyBzdHJva2UtZGFzaG9mZnNldDogMjI2LjI7IH1cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMzJweCAzNnB4O1xuICBhbmltYXRpb246IGZhZGVVcCAwLjRzIGVhc2UgYm90aDtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBIZWFkZXIgw6LClMKAw6LClMKAICovXG4uZGFzaC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4uZGFzaC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjU5ZTBiLCAjZmNkMzRkKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5cbi5kYXNoLXN1YiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM0YjU1NjM7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmRhc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFmMWY7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiDDosKUwoDDosKUwoAgU2hhcmVkIENhcmQgw6LClMKAw6LClMKAICovXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFmMWY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDIycHggMjRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsMCwwLDAuMzUpO1xuICBhbmltYXRpb246IGZhZGVVcCAwLjRzIGVhc2UgYm90aDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cywgYm9yZGVyLWNvbG9yIDAuMjVzLCB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAzNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgYm9yZGVyLWNvbG9yOiAjMmEyYTJhO1xufVxuXG4uY2FyZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNlMmU4ZjA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuLmNhcmQtYmFkZ2Uge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLDAuMik7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiDDosKUwoDDosKUwoAgU3RhdHMgUm93IMOiwpTCgMOiwpTCgCAqL1xuLnN0YXRzLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnN0YXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFmMWY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDIwcHggMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlVXAgMC40cyB2YXIoLS1kZWxheSwgMHMpIGVhc2UgYm90aDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGJveC1zaGFkb3cgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnN0YXQtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMycHggcmdiYSgwLDAsMCwwLjQ1KTtcbiAgYm9yZGVyLWNvbG9yOiAjMmEyYTJhO1xufVxuXG4uc3RhdC1pY29uIHtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zdGF0LWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU2NvcmUgQ2FyZCDDosKUwoDDosKUwoAgKi9cbi5zY29yZS1jYXJkIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwxNTgsMTEsMC4yNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMTExMTEgNjAlLCAjMWExNTAwIDEwMCUpO1xufVxuXG4uc2NvcmUtY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogcmdiYSgyNDUsMTU4LDExLDAuNSk7IH1cblxuLnNjb3JlLXJpbmctd3JhcCB7IGZsZXgtc2hyaW5rOiAwOyB9XG5cbi5zY29yZS1hcmMge1xuICBhbmltYXRpb246IGFyY0RyYXcgMS4ycyAwLjNzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSkgYm90aDtcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC44cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO1xufVxuXG4uc2NvcmUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZpbGw6ICNmNTllMGI7XG59XG5cbi5zY29yZS1zdGF0dXMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBNYWluIEdyaWQgw6LClMKAw6LClMKAICovXG4ubWFpbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzgwcHg7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uY2hhcnRzLWNvbCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjBweDsgfVxuLmluc2lnaHRzLWNvbCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjBweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgQ2hhcnRzIMOiwpTCgMOiwpTCgCAqL1xuLmNoYXJ0LWNhcmQgeyBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cblxuLmNoYXJ0LXdyYXAge1xuICBoZWlnaHQ6IDIyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5waWUtd3JhcCB7IGhlaWdodDogMjQwcHg7IH1cblxuLyogw6LClMKAw6LClMKAIEFJIEluc2lnaHRzIMOiwpTCgMOiwpTCgCAqL1xuLmluc2lnaHRzLWNhcmQgeyBhbmltYXRpb24tZGVsYXk6IDAuMTJzOyB9XG5cbi5haS1saXZlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzEwYjk4MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNDsgfVxufVxuXG4uaW5zaWdodHMtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgfVxuXG4uaW5zaWdodC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWYxZjFmO1xuICBhbmltYXRpb246IGZhZGVVcCAwLjM1cyB2YXIoLS1kZWxheSwgMHMpIGVhc2UgYm90aDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBib3JkZXItY29sb3IgMC4ycywgdHJhbnNmb3JtIDAuMTVzO1xufVxuXG4uaW5zaWdodC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcbiAgYm9yZGVyLWNvbG9yOiAjMmEyYTJhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbn1cblxuLmluc2lnaHQtZG90IHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmluc2lnaHQtaWNvbiB7IGZvbnQtc2l6ZTogMTVweDsgZmxleC1zaHJpbms6IDA7IH1cblxuLmluc2lnaHQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM5Y2EzYWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBSZWNvbW1lbmRhdGlvbnMgw6LClMKAw6LClMKAICovXG4ucmVjby1jYXJkIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwxNTgsMTEsMC4yKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzExMTExMSA2MCUsICMxYTE1MDAgMTAwJSk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4xOHM7XG59XG5cbi5yZWNvLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEwcHg7IH1cblxuLnJlY28taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDExcHggMTRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgdHJhbnNmb3JtIDAuMTVzO1xufVxuXG4ucmVjby1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xufVxuXG4ucmVjby1pY29uIHsgZm9udC1zaXplOiAxNXB4OyBmbGV4LXNocmluazogMDsgfVxuXG4ucmVjby10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2QxYTg0YjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogw6LClMKAw6LClMKAIEhlYXRtYXAgw6LClMKAw6LClMKAICovXG4uaGVhdG1hcC1jYXJkIHsgbWFyZ2luLWJvdHRvbTogMjRweDsgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XG5cbi5oZWF0bWFwLWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNXB4O1xufVxuXG4uaGVhdC1jZWxsIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmhlYXQtY2VsbDpob3ZlciB7IHRyYW5zZm9ybTogc2NhbGUoMS4zKTsgfVxuXG4uaGVhdC0wIHsgYmFja2dyb3VuZDogIzFhMWExYTsgfVxuLmhlYXQtMSB7IGJhY2tncm91bmQ6ICMxYTE1MDA7IH1cbi5oZWF0LTIgeyBiYWNrZ3JvdW5kOiAjN2M0ZjAwOyB9XG4uaGVhdC0zIHsgYmFja2dyb3VuZDogI2I5NzIwMDsgfVxuLmhlYXQtNCB7IGJhY2tncm91bmQ6ICNmNTllMGI7IH1cblxuLmhlYXQtbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5sZWdlbmQtbGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiDDosKUwoDDosKUwoAgVGFzayBMaXN0IMOiwpTCgMOiwpTCgCAqL1xuLnRhc2tzLWNhcmQgeyBhbmltYXRpb24tZGVsYXk6IDAuMjRzOyB9XG5cbi50YXNrLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDhweDsgfVxuXG4udGFzay1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgYmFja2dyb3VuZDogIzE2MTYxNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmMWYxZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZ2FwOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIGJvcmRlci1jb2xvciAwLjJzLCB0cmFuc2Zvcm0gMC4xNXM7XG59XG5cbi50YXNrLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG4gIGJvcmRlci1jb2xvcjogIzJhMmEyYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG59XG5cbi50YXNrLWRvbmUgeyBvcGFjaXR5OiAwLjU1OyB9XG5cbi50YXNrLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi50YXNrLWNoZWNrIHsgZm9udC1zaXplOiAxNnB4OyBmbGV4LXNocmluazogMDsgbWFyZ2luLXRvcDogMXB4OyB9XG5cbi50YXNrLWluZm8geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDNweDsgfVxuXG4udGFzay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNlMmU4ZjA7XG59XG5cbi50YXNrLWFpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhc2stcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYmFkZ2Uge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5cbi5iYWRnZS1oaWdoICB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMTUpOyAgY29sb3I6ICNmODcxNzE7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LDAuMjUpOyB9XG4uYmFkZ2UtbWVkICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiAjZmJiZjI0OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsMC4yNSk7IH1cbi5iYWRnZS1sb3cgICB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6ICM4MThjZjg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjI1KTsgfVxuXG4udGFzay10aW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhc2stc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZiNzI4MDtcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJhMmEyYTtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5zdGF0dXMtZG9uZSB7XG4gIGNvbG9yOiAjMTBiOTgxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LDE4NSwxMjksMC4yKTtcbn1cblxuLyogw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgw6LClMKAw6LClMKAICovXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5tYWluLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAuaW5zaWdodHMtY29sIHsgZmxleC1kaXJlY3Rpb246IHJvdzsgZmxleC13cmFwOiB3cmFwOyB9XG4gIC5pbnNpZ2h0cy1jYXJkLCAucmVjby1jYXJkIHsgZmxleDogMTsgbWluLXdpZHRoOiAyODBweDsgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgeyBwYWRkaW5nOiAyMHB4IDE2cHg7IH1cbiAgLnN0YXRzLXJvdyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IH1cbiAgLnRhc2stcmlnaHQgeyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogNnB4OyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc3RhdHMtcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/']);
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6365:
/*!********************************!*\
  !*** ./src/app/login/login.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_task_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/task-services */ 5167);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






function LoginComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
class LoginComponent {
  constructor(router, taskService, auth) {
    this.router = router;
    this.taskService = taskService;
    this.auth = auth;
    this.username = '';
    this.password = '';
    this.error = '';
    this.loading = false;
  }
  login() {
    if (!this.username || !this.password) {
      this.error = 'Email and password are required.';
      return;
    }
    this.error = '';
    this.loading = true;
    this.taskService.login(this.username, this.password).subscribe({
      next: res => {
        this.auth.setUser(res.user);
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.detail || 'Login failed. Please try again.';
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_task_services__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 24,
      vars: 5,
      consts: [[1, "bg"], [1, "card"], [1, "logo"], [1, "logo-icon"], [1, "subtitle"], [1, "field"], ["type", "email", "placeholder", "Enter your email", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter your password", 3, "ngModelChange", "ngModel"], ["class", "error", 4, "ngIf"], [1, "btn", 3, "click", "disabled"], [1, "footer"], ["routerLink", "/signup"], [1, "error"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2726");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "TaskAI");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Sign in to your workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.username, $event) || (ctx.username = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_p_17_Template, 2, 1, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Signing in..." : "Sign In \u2192", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: ["\n\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(28px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  from { transform: translate(0, 0) scale(1); }\n  to   { transform: translate(50px, 35px) scale(1.12); }\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%   { background-position: -200% center; }\n  100% { background-position: 200% center; }\n}\n\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0%   { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }\n  70%  { box-shadow: 0 0 0 10px rgba(245,158,11,0); }\n  100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }\n}\n\n\n\n.bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0a0a0a;\n  position: relative;\n  overflow: hidden;\n}\n\n.bg[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  width: 600px; height: 600px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%);\n  top: -150px; left: -150px;\n  animation: _ngcontent-%COMP%_float 12s ease-in-out infinite alternate;\n}\n\n.bg[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 500px; height: 500px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%);\n  bottom: -100px; right: -100px;\n  animation: _ngcontent-%COMP%_float 15s ease-in-out infinite alternate-reverse;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  background: #111111;\n  border: 1px solid #222;\n  border-radius: 20px;\n  padding: 48px 40px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #f59e0b;\n  animation: _ngcontent-%COMP%_pulse-ring 2.5s ease-out infinite;\n}\n\n.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  background: linear-gradient(90deg, #f59e0b, #fcd34d, #f59e0b);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_shimmer 3s linear infinite;\n  letter-spacing: 1px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 14px;\n  margin-bottom: 32px;\n}\n\n\n\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.field[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.05s; }\n.field[_ngcontent-%COMP%]:nth-child(4) { animation-delay: 0.1s; }\n.field[_ngcontent-%COMP%]:nth-child(5) { animation-delay: 0.15s; }\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #9ca3af;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  transition: color 0.2s;\n}\n\n.field[_ngcontent-%COMP%]:focus-within   label[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 16px;\n  background: #1a1a1a;\n  border: 1.5px solid #2a2a2a;\n  border-radius: 10px;\n  color: #f1f5f9;\n  font-size: 15px;\n  outline: none;\n  transition: border 0.25s, box-shadow 0.25s, background 0.25s;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder { color: #374151; }\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #f59e0b;\n  background: #1f1a0f;\n  box-shadow: 0 0 0 3px rgba(245,158,11,0.12);\n}\n\n\n\n.error[_ngcontent-%COMP%] {\n  color: #fca5a5;\n  font-size: 13px;\n  margin-bottom: 14px;\n  background: rgba(239,68,68,0.1);\n  border: 1px solid rgba(239,68,68,0.25);\n  border-radius: 8px;\n  padding: 10px 14px;\n  animation: _ngcontent-%COMP%_fadeUp 0.3s ease both;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  margin-top: 6px;\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  border: none;\n  border-radius: 10px;\n  color: #0a0a0a;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  letter-spacing: 0.5px;\n  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;\n  box-shadow: 0 4px 20px rgba(245,158,11,0.35);\n  animation: _ngcontent-%COMP%_fadeUp 0.5s 0.2s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(245,158,11,0.45);\n}\n\n.btn[_ngcontent-%COMP%]:active { transform: translateY(0); }\n\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  color: #4b5563;\n  font-size: 13px;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s 0.25s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: #fcd34d; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFO0VBQ2hELE9BQU8sVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQy9DOztBQUVBO0VBQ0UsT0FBTyxtQ0FBbUMsRUFBRTtFQUM1QyxPQUFPLDRDQUE0QyxFQUFFO0FBQ3ZEOztBQUVBO0VBQ0UsT0FBTyxpQ0FBaUMsRUFBRTtFQUMxQyxPQUFPLGdDQUFnQyxFQUFFO0FBQzNDOztBQUVBO0VBQ0UsT0FBTyx3Q0FBd0MsRUFBRTtFQUNqRCxPQUFPLHlDQUF5QyxFQUFFO0VBQ2xELE9BQU8sc0NBQXNDLEVBQUU7QUFDakQ7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUUsYUFBYTtFQUMzQixrQkFBa0I7RUFDbEIsMkVBQTJFO0VBQzNFLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFFLGFBQWE7RUFDM0Isa0JBQWtCO0VBQ2xCLDBFQUEwRTtFQUMxRSxjQUFjLEVBQUUsYUFBYTtFQUM3QiwyREFBMkQ7QUFDN0Q7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUVBQXlFO0VBQ3pFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0RBQXNEO0FBQ3hEOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw2REFBNkQ7RUFDN0QsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxtQkFBbUI7RUFDbkIsc0RBQXNEO0FBQ3hEOztBQUVBLHNCQUFzQixzQkFBc0IsRUFBRTtBQUM5QyxzQkFBc0IscUJBQXFCLEVBQUU7QUFDN0Msc0JBQXNCLHNCQUFzQixFQUFFOztBQUU5QztFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw0REFBNEQ7QUFDOUQ7O0FBRUEsNEJBQTRCLGNBQWMsRUFBRTs7QUFFNUM7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseURBQXlEO0VBQ3pELDRDQUE0QztFQUM1QywyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDOztBQUVBLGNBQWMsd0JBQXdCLEVBQUU7O0FBRXhDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUEsa0JBQWtCLGNBQWMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpTCgMOiwpTCgCBFbnRyeSBhbmltYXRpb24gw6LClMKAw6LClMKAICovXG5Aa2V5ZnJhbWVzIGZhZGVVcCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjhweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpOyB9XG4gIHRvICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAzNXB4KSBzY2FsZSgxLjEyKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgY2VudGVyOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIGNlbnRlcjsgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlLXJpbmcge1xuICAwJSAgIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NSwxNTgsMTEsMC40KTsgfVxuICA3MCUgIHsgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NSwxNTgsMTEsMCk7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDUsMTU4LDExLDApOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBCYWNrZ3JvdW5kIMOiwpTCgMOiwpTCgCAqL1xuLmJnIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMGEwYTBhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iZzo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwMHB4OyBoZWlnaHQ6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjQ1LDE1OCwxMSwwLjEyKSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgdG9wOiAtMTUwcHg7IGxlZnQ6IC0xNTBweDtcbiAgYW5pbWF0aW9uOiBmbG9hdCAxMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYmc6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTM5LDkyLDI0NiwwLjEpLCB0cmFuc3BhcmVudCA3MCUpO1xuICBib3R0b206IC0xMDBweDsgcmlnaHQ6IC0xMDBweDtcbiAgYW5pbWF0aW9uOiBmbG9hdCAxNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBDYXJkIMOiwpTCgMOiwpTCgCAqL1xuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjMTExMTExO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA0OHB4IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBib3gtc2hhZG93OiAwIDI1cHggNjBweCByZ2JhKDAsMCwwLDAuNiksIDAgMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGFuaW1hdGlvbjogZmFkZVVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSkgYm90aDtcbn1cblxuLyogw6LClMKAw6LClMKAIExvZ28gw6LClMKAw6LClMKAICovXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubG9nby1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgYW5pbWF0aW9uOiBwdWxzZS1yaW5nIDIuNXMgZWFzZS1vdXQgaW5maW5pdGU7XG59XG5cbi5sb2dvIGgxIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmNTllMGIsICNmY2QzNGQsICNmNTllMGIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBhbmltYXRpb246IHNoaW1tZXIgM3MgbGluZWFyIGluZmluaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uc3VidGl0bGUge1xuICBjb2xvcjogIzRiNTU2MztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4vKiDDosKUwoDDosKUwoAgRmllbGRzIMOiwpTCgMOiwpTCgCAqL1xuLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYW5pbWF0aW9uOiBmYWRlVXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKSBib3RoO1xufVxuXG4uZmllbGQ6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjA1czsgfVxuLmZpZWxkOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxuLmZpZWxkOm50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogMC4xNXM7IH1cblxuLmZpZWxkIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOWNhM2FmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG4uZmllbGQ6Zm9jdXMtd2l0aGluIGxhYmVsIHtcbiAgY29sb3I6ICNmNTllMGI7XG59XG5cbi5maWVsZCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzJhMmEyYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMjVzLCBib3gtc2hhZG93IDAuMjVzLCBiYWNrZ3JvdW5kIDAuMjVzO1xufVxuXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICMzNzQxNTE7IH1cblxuLmZpZWxkIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjU5ZTBiO1xuICBiYWNrZ3JvdW5kOiAjMWYxYTBmO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNDUsMTU4LDExLDAuMTIpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgRXJyb3Igw6LClMKAw6LClMKAICovXG4uZXJyb3Ige1xuICBjb2xvcjogI2ZjYTVhNTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGFuaW1hdGlvbjogZmFkZVVwIDAuM3MgZWFzZSBib3RoO1xufVxuXG4vKiDDosKUwoDDosKUwoAgQnV0dG9uIMOiwpTCgMOiwpTCgCAqL1xuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjMGEwYTBhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzLCBvcGFjaXR5IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgyNDUsMTU4LDExLDAuMzUpO1xuICBhbmltYXRpb246IGZhZGVVcCAwLjVzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSkgYm90aDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjhweCByZ2JhKDI0NSwxNTgsMTEsMC40NSk7XG59XG5cbi5idG46YWN0aXZlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG5cbi5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ1O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBGb290ZXIgw6LClMKAw6LClMKAICovXG4uZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBjb2xvcjogIzRiNTU2MztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBhbmltYXRpb246IGZhZGVVcCAwLjVzIDAuMjVzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpIGJvdGg7XG59XG5cbi5mb290ZXIgYSB7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi5mb290ZXIgYTpob3ZlciB7IGNvbG9yOiAjZmNkMzRkOyB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AuthService {
  constructor() {
    this.key = 'auth_user';
  }
  setUser(user) {
    sessionStorage.setItem(this.key, JSON.stringify(user));
  }
  getUser() {
    const u = sessionStorage.getItem(this.key);
    return u ? JSON.parse(u) : null;
  }
  isLoggedIn() {
    return !!sessionStorage.getItem(this.key);
  }
  logout() {
    sessionStorage.removeItem(this.key);
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5167:
/*!*******************************************!*\
  !*** ./src/app/services/task-services.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class TaskService {
  constructor(http) {
    this.http = http;
    this.api = 'http://127.0.0.1:8000';
  }
  getTasks() {
    return this.http.get(this.api + '/tasks');
  }
  createTask(task) {
    return this.http.post(this.api + '/tasks', task);
  }
  addTask(task) {
    return this.http.post(this.api + '/tasks', task);
  }
  startTask(taskId, userId) {
    return this.http.post(`${this.api}/tasks/start/${taskId}`, {
      user_id: userId
    });
  }
  completeTask(taskId, data) {
    return this.http.post(`${this.api}/tasks/complete/${taskId}`, data);
  }
  signup(user) {
    return this.http.post(this.api + '/signup', user);
  }
  login(email, password) {
    return this.http.post(this.api + '/login', {
      email,
      password
    });
  }
  static {
    this.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 451:
/*!**********************************!*\
  !*** ./src/app/signup/signup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_task_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/task-services */ 5167);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function SignupComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
class SignupComponent {
  constructor(router, taskService) {
    this.router = router;
    this.taskService = taskService;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.mobile = '';
    this.password = '';
    this.confirmPassword = '';
    this.error = '';
    this.loading = false;
  }
  signup() {
    if (!this.firstName || !this.lastName || !this.email || !this.mobile || !this.password) {
      this.error = 'All fields are required.';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }
    this.error = '';
    this.loading = true;
    const user = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      mobile_number: this.mobile,
      password: this.password
    };
    this.taskService.signup(user).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => {
        this.loading = false;
        this.error = err.error?.detail || 'Signup failed. Please try again.';
      }
    });
  }
  static {
    this.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_services__WEBPACK_IMPORTED_MODULE_0__.TaskService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 44,
      vars: 9,
      consts: [[1, "bg"], [1, "card"], [1, "logo"], [1, "logo-icon"], [1, "subtitle"], [1, "row"], [1, "field"], ["type", "text", "placeholder", "John", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Doe", 3, "ngModelChange", "ngModel"], [1, "hint"], ["type", "email", "placeholder", "john@example.com", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+91 9876543210", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["class", "error", 4, "ngIf"], [1, "btn", 3, "click", "disabled"], [1, "footer"], ["routerLink", "/"], [1, "error"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u2726");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "TaskAI");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Create your account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.firstName, $event) || (ctx.firstName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.lastName, $event) || (ctx.lastName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "(used as username)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6)(25, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mobile Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.mobile, $event) || (ctx.mobile = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5)(29, "div", 6)(30, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6)(34, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SignupComponent_p_37_Template, 2, 1, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_38_listener() {
            return ctx.signup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.firstName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.lastName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.mobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Creating Account..." : "Create Account \u2192", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(28px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  from { transform: translate(0, 0) scale(1); }\n  to   { transform: translate(50px, 35px) scale(1.12); }\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%   { background-position: -200% center; }\n  100% { background-position: 200% center; }\n}\n\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0%   { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }\n  70%  { box-shadow: 0 0 0 10px rgba(245,158,11,0); }\n  100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }\n}\n\n.bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0a0a0a;\n  position: relative;\n  overflow: hidden;\n  padding: 40px 16px;\n}\n\n.bg[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  width: 600px; height: 600px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%);\n  top: -150px; left: -150px;\n  animation: _ngcontent-%COMP%_float 12s ease-in-out infinite alternate;\n}\n\n.bg[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 500px; height: 500px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%);\n  bottom: -100px; right: -100px;\n  animation: _ngcontent-%COMP%_float 15s ease-in-out infinite alternate-reverse;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #111111;\n  border: 1px solid #222;\n  border-radius: 20px;\n  padding: 48px 40px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #f59e0b;\n  animation: _ngcontent-%COMP%_pulse-ring 2.5s ease-out infinite;\n}\n\n.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  background: linear-gradient(90deg, #f59e0b, #fcd34d, #f59e0b);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_shimmer 3s linear infinite;\n  letter-spacing: 1px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 14px;\n  margin-bottom: 28px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] { flex: 1; }\n\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.field[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.05s; }\n.field[_ngcontent-%COMP%]:nth-child(4) { animation-delay: 0.1s; }\n.field[_ngcontent-%COMP%]:nth-child(5) { animation-delay: 0.12s; }\n.field[_ngcontent-%COMP%]:nth-child(6) { animation-delay: 0.15s; }\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #9ca3af;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  transition: color 0.2s;\n}\n\n.field[_ngcontent-%COMP%]:focus-within   label[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 11px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 16px;\n  background: #1a1a1a;\n  border: 1.5px solid #2a2a2a;\n  border-radius: 10px;\n  color: #f1f5f9;\n  font-size: 14px;\n  outline: none;\n  transition: border 0.25s, box-shadow 0.25s, background 0.25s;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder { color: #374151; }\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #f59e0b;\n  background: #1f1a0f;\n  box-shadow: 0 0 0 3px rgba(245,158,11,0.12);\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #fca5a5;\n  font-size: 13px;\n  margin-bottom: 14px;\n  background: rgba(239,68,68,0.1);\n  border: 1px solid rgba(239,68,68,0.25);\n  border-radius: 8px;\n  padding: 10px 14px;\n  animation: _ngcontent-%COMP%_fadeUp 0.3s ease both;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  margin-top: 4px;\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  border: none;\n  border-radius: 10px;\n  color: #0a0a0a;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  letter-spacing: 0.5px;\n  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;\n  box-shadow: 0 4px 20px rgba(245,158,11,0.35);\n  animation: _ngcontent-%COMP%_fadeUp 0.5s 0.2s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(245,158,11,0.45);\n}\n\n.btn[_ngcontent-%COMP%]:active { transform: translateY(0); }\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  color: #4b5563;\n  font-size: 13px;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s 0.25s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: #fcd34d; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtFQUNoRCxPQUFPLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUMvQzs7QUFFQTtFQUNFLE9BQU8sbUNBQW1DLEVBQUU7RUFDNUMsT0FBTyw0Q0FBNEMsRUFBRTtBQUN2RDs7QUFFQTtFQUNFLE9BQU8saUNBQWlDLEVBQUU7RUFDMUMsT0FBTyxnQ0FBZ0MsRUFBRTtBQUMzQzs7QUFFQTtFQUNFLE9BQU8sd0NBQXdDLEVBQUU7RUFDakQsT0FBTyx5Q0FBeUMsRUFBRTtFQUNsRCxPQUFPLHNDQUFzQyxFQUFFO0FBQ2pEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFFLGFBQWE7RUFDM0Isa0JBQWtCO0VBQ2xCLDJFQUEyRTtFQUMzRSxXQUFXLEVBQUUsWUFBWTtFQUN6QixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBRSxhQUFhO0VBQzNCLGtCQUFrQjtFQUNsQiwwRUFBMEU7RUFDMUUsY0FBYyxFQUFFLGFBQWE7RUFDN0IsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUVBQXlFO0VBQ3pFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZEQUE2RDtFQUM3RCwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQSxjQUFjLE9BQU8sRUFBRTs7QUFFdkI7RUFDRSxtQkFBbUI7RUFDbkIsc0RBQXNEO0FBQ3hEOztBQUVBLHNCQUFzQixzQkFBc0IsRUFBRTtBQUM5QyxzQkFBc0IscUJBQXFCLEVBQUU7QUFDN0Msc0JBQXNCLHNCQUFzQixFQUFFO0FBQzlDLHNCQUFzQixzQkFBc0IsRUFBRTs7QUFFOUM7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsNERBQTREO0FBQzlEOztBQUVBLDRCQUE0QixjQUFjLEVBQUU7O0FBRTVDO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YscURBQXFEO0VBQ3JELFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5REFBeUQ7RUFDekQsNENBQTRDO0VBQzVDLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBNEM7QUFDOUM7O0FBRUEsY0FBYyx3QkFBd0IsRUFBRTs7QUFFeEM7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQixjQUFjLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGZhZGVVcCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjhweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpOyB9XG4gIHRvICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAzNXB4KSBzY2FsZSgxLjEyKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgY2VudGVyOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIGNlbnRlcjsgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlLXJpbmcge1xuICAwJSAgIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NSwxNTgsMTEsMC40KTsgfVxuICA3MCUgIHsgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NSwxNTgsMTEsMCk7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDUsMTU4LDExLDApOyB9XG59XG5cbi5iZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA0MHB4IDE2cHg7XG59XG5cbi5iZzo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwMHB4OyBoZWlnaHQ6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjQ1LDE1OCwxMSwwLjEyKSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgdG9wOiAtMTUwcHg7IGxlZnQ6IC0xNTBweDtcbiAgYW5pbWF0aW9uOiBmbG9hdCAxMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYmc6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTM5LDkyLDI0NiwwLjEpLCB0cmFuc3BhcmVudCA3MCUpO1xuICBib3R0b206IC0xMDBweDsgcmlnaHQ6IC0xMDBweDtcbiAgYW5pbWF0aW9uOiBmbG9hdCAxNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNDhweCA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDYwcHggcmdiYSgwLDAsMCwwLjYpLCAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBhbmltYXRpb246IGZhZGVVcCAwLjVzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpIGJvdGg7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5sb2dvLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBhbmltYXRpb246IHB1bHNlLXJpbmcgMi41cyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cblxuLmxvZ28gaDEge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y1OWUwYiwgI2ZjZDM0ZCwgI2Y1OWUwYik7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGFuaW1hdGlvbjogc2hpbW1lciAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG59XG5cbi5yb3cgLmZpZWxkIHsgZmxleDogMTsgfVxuXG4uZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBhbmltYXRpb246IGZhZGVVcCAwLjVzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpIGJvdGg7XG59XG5cbi5maWVsZDpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDAuMDVzOyB9XG4uZmllbGQ6bnRoLWNoaWxkKDQpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XG4uZmllbGQ6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjEyczsgfVxuLmZpZWxkOm50aC1jaGlsZCg2KSB7IGFuaW1hdGlvbi1kZWxheTogMC4xNXM7IH1cblxuLmZpZWxkIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOWNhM2FmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG4uZmllbGQ6Zm9jdXMtd2l0aGluIGxhYmVsIHtcbiAgY29sb3I6ICNmNTllMGI7XG59XG5cbi5oaW50IHtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uZmllbGQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTFweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMyYTJhMmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjI1cywgYm94LXNoYWRvdyAwLjI1cywgYmFja2dyb3VuZCAwLjI1cztcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjMzc0MTUxOyB9XG5cbi5maWVsZCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2Y1OWUwYjtcbiAgYmFja2dyb3VuZDogIzFmMWEwZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjQ1LDE1OCwxMSwwLjEyKTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNmY2E1YTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBhbmltYXRpb246IGZhZGVVcCAwLjNzIGVhc2UgYm90aDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjMGEwYTBhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzLCBvcGFjaXR5IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgyNDUsMTU4LDExLDAuMzUpO1xuICBhbmltYXRpb246IGZhZGVVcCAwLjVzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSkgYm90aDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjhweCByZ2JhKDI0NSwxNTgsMTEsMC40NSk7XG59XG5cbi5idG46YWN0aXZlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG5cbi5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGFuaW1hdGlvbjogZmFkZVVwIDAuNXMgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSkgYm90aDtcbn1cblxuLmZvb3RlciBhIHtcbiAgY29sb3I6ICNmNTllMGI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cblxuLmZvb3RlciBhOmhvdmVyIHsgY29sb3I6ICNmY2QzNGQ7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6417:
/*!********************************************!*\
  !*** ./src/app/task-create/task-create.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskCreateComponent: () => (/* binding */ TaskCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_task_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/task-services */ 5167);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function TaskCreateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("toast-success", ctx_r0.toast.type === "success")("toast-error", ctx_r0.toast.type === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.toast.message, "\n");
  }
}
function TaskCreateComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r0.f["title"].errors == null ? null : ctx_r0.f["title"].errors["required"]) ? "Title is required." : "Minimum 3 characters.", " ");
  }
}
function TaskCreateComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", c_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2);
  }
}
function TaskCreateComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Category is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", p_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r3);
  }
}
function TaskCreateComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r0.f["estimated_time"].errors == null ? null : ctx_r0.f["estimated_time"].errors["required"]) ? "Estimated time is required." : "Must be at least 1 minute.", " ");
  }
}
function TaskCreateComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Due date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("p-high", ((tmp_1_0 = ctx_r0.form.get("priority")) == null ? null : tmp_1_0.value) === "High")("p-med", ((tmp_2_0 = ctx_r0.form.get("priority")) == null ? null : tmp_2_0.value) === "Medium")("p-low", ((tmp_3_0 = ctx_r0.form.get("priority")) == null ? null : tmp_3_0.value) === "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (tmp_4_0 = ctx_r0.form.get("priority")) == null ? null : tmp_4_0.value, " priority selected");
  }
}
function TaskCreateComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 33);
  }
}
class TaskCreateComponent {
  constructor(fb, taskService, auth) {
    this.fb = fb;
    this.taskService = taskService;
    this.auth = auth;
    this.loading = false;
    this.toast = null;
    this.categories = ['Work', 'Study', 'Health', 'Personal'];
    this.priorities = ['High', 'Medium', 'Low'];
  }
  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      estimated_time: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      due_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  get f() {
    return this.form.controls;
  }
  isInvalid(field) {
    const c = this.form.get(field);
    return c?.invalid && c?.touched;
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const user = this.auth.getUser();
    const payload = {
      ...this.form.value,
      due_date: new Date(this.form.value.due_date).toISOString(),
      user_id: user?.id
    };
    this.loading = true;
    this.toast = null;
    this.taskService.createTask(payload).subscribe({
      next: () => {
        this.loading = false;
        this.form.reset();
        this.showToast('success', '✅ Task created successfully!');
      },
      error: err => {
        this.loading = false;
        const msg = err?.error?.detail || 'Something went wrong. Please try again.';
        this.showToast('error', '❌ ' + msg);
      }
    });
  }
  reset() {
    this.form.reset();
    this.toast = null;
  }
  showToast(type, message) {
    this.toast = {
      type,
      message
    };
    setTimeout(() => this.toast = null, 4000);
  }
  static {
    this.ɵfac = function TaskCreateComponent_Factory(t) {
      return new (t || TaskCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_task_services__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TaskCreateComponent,
      selectors: [["app-task-create"]],
      decls: 69,
      vars: 24,
      consts: [["class", "toast", 3, "toast-success", "toast-error", 4, "ngIf"], [1, "page-wrap"], [1, "form-card"], [1, "form-header"], [1, "form-icon"], [1, "form-title"], [1, "form-sub"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "label"], [1, "req"], ["formControlName", "title", "type", "text", "placeholder", "e.g. Finish project report", 1, "input"], ["class", "err-msg", 4, "ngIf"], [1, "field-row"], [1, "select-wrap"], ["formControlName", "category", 1, "input"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "select-arrow"], ["formControlName", "priority", 1, "input"], ["formControlName", "estimated_time", "type", "number", "placeholder", "e.g. 90", "min", "1", 1, "input"], ["formControlName", "due_date", "type", "date", 1, "input"], ["class", "priority-hint", 4, "ngIf"], [1, "actions"], ["type", "button", 1, "btn-reset", 3, "click", "disabled"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "toast"], [1, "err-msg"], [3, "value"], [1, "priority-hint"], [1, "p-dot"], [1, "p-label"], [1, "spinner"]],
      template: function TaskCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TaskCreateComponent_div_0_Template, 2, 5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u2726");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Create New Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fill in the details to add a task to your board");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TaskCreateComponent_Template_form_ngSubmit_11_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Task Title ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TaskCreateComponent_span_18_Template, 2, 1, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "div", 8)(21, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Category ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14)(26, "select", 15)(27, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Select category");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TaskCreateComponent_option_29_Template, 2, 2, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u25BE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TaskCreateComponent_span_32_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 8)(34, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Priority ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 14)(39, "select", 19)(40, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Select priority");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, TaskCreateComponent_option_42_Template, 2, 2, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u25BE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, TaskCreateComponent_span_45_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 13)(47, "div", 8)(48, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Estimated Time (min) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, TaskCreateComponent_span_53_Template, 2, 1, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 8)(55, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Due Date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, TaskCreateComponent_span_60_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, TaskCreateComponent_div_61_Template, 4, 7, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 23)(63, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskCreateComponent_Template_button_click_63_listener() {
            return ctx.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, TaskCreateComponent_span_66_Template, 1, 0, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_14_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toast);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isInvalid("title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInvalid("title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isInvalid("category"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInvalid("category"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isInvalid("priority"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.priorities);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInvalid("priority"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isInvalid("estimated_time"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInvalid("estimated_time"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isInvalid("due_date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInvalid("due_date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.form.get("priority")) == null ? null : tmp_14_0.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.loading ? "Creating..." : "Create Task");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: ["@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from { opacity: 0; transform: translateY(-16px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to { transform: rotate(360deg); }\n}\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n.page-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 20px 60px;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n}\n\n\n\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 680px;\n  background: #111111;\n  border: 1px solid #1f1f1f;\n  border-radius: 20px;\n  padding: 36px 40px;\n  box-shadow: 0 8px 40px rgba(0,0,0,0.5);\n}\n\n\n\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #1f1f1f;\n}\n\n.form-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background: rgba(245,158,11,0.12);\n  border: 1px solid rgba(245,158,11,0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #f59e0b;\n  flex-shrink: 0;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  background: linear-gradient(90deg, #f59e0b, #fcd34d);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 4px;\n}\n\n.form-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n}\n\n\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n}\n\n.req[_ngcontent-%COMP%] { color: #f59e0b; }\n\n\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  background: #1a1a1a;\n  border: 1.5px solid #2a2a2a;\n  border-radius: 12px;\n  color: #f1f5f9;\n  font-size: 14px;\n  font-family: 'Inter', sans-serif;\n  outline: none;\n  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;\n  appearance: none;\n  -webkit-appearance: none;\n}\n\n.input[_ngcontent-%COMP%]::placeholder { color: #374151; }\n\n.input[_ngcontent-%COMP%]:focus {\n  border-color: #f59e0b;\n  background: #1f1a0f;\n  box-shadow: 0 0 0 3px rgba(245,158,11,0.12);\n}\n\n.field-error[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239,68,68,0.1);\n}\n\n\n\n.select-wrap[_ngcontent-%COMP%] { position: relative; }\n\n.select-wrap[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] { padding-right: 36px; cursor: pointer; }\n\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #4b5563;\n  font-size: 13px;\n  pointer-events: none;\n}\n\n\n\ninput[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(0.4) sepia(1) saturate(3) hue-rotate(5deg);\n  cursor: pointer;\n}\n\n\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button { opacity: 0.4; }\n\n\n\n.err-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #f87171;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease both;\n}\n\n\n\n.priority-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #161616;\n  border: 1px solid #1f1f1f;\n  border-radius: 10px;\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_fadeUp 0.25s ease both;\n}\n\n.p-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.p-high[_ngcontent-%COMP%] { background: #ef4444; box-shadow: 0 0 6px rgba(239,68,68,0.6); }\n.p-med[_ngcontent-%COMP%]  { background: #f59e0b; box-shadow: 0 0 6px rgba(245,158,11,0.6); }\n.p-low[_ngcontent-%COMP%]  { background: #6366f1; box-shadow: 0 0 6px rgba(99,102,241,0.6); }\n\n.p-label[_ngcontent-%COMP%] { font-size: 13px; color: #6b7280; font-weight: 500; }\n\n\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 8px;\n  border-top: 1px solid #1f1f1f;\n  margin-top: 4px;\n}\n\n.btn-reset[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: transparent;\n  border: 1.5px solid #2a2a2a;\n  border-radius: 12px;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  transition: border-color 0.2s, color 0.2s, background 0.2s;\n}\n\n.btn-reset[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #4b5563;\n  color: #e2e8f0;\n  background: #1a1a1a;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  border: none;\n  border-radius: 12px;\n  color: #0a0a0a;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  box-shadow: 0 4px 18px rgba(245,158,11,0.35);\n  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(245,158,11,0.5);\n}\n\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) { transform: translateY(0); }\n\n.btn-submit[_ngcontent-%COMP%]:disabled, .btn-reset[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n\n\n.spinner[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(0,0,0,0.25);\n  border-top-color: #0a0a0a;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n\n\n\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  padding: 14px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: 'Inter', sans-serif;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.5);\n  animation: _ngcontent-%COMP%_slideDown 0.3s cubic-bezier(0.16,1,0.3,1) both;\n  max-width: 360px;\n}\n\n.toast-success[_ngcontent-%COMP%] {\n  background: #052e16;\n  border: 1px solid rgba(16,185,129,0.3);\n  color: #6ee7b7;\n}\n\n.toast-error[_ngcontent-%COMP%] {\n  background: #1c0a0a;\n  border: 1px solid rgba(239,68,68,0.3);\n  color: #fca5a5;\n}\n\n\n\n@media (max-width: 600px) {\n  .form-card[_ngcontent-%COMP%] { padding: 24px 20px; }\n  .field-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .actions[_ngcontent-%COMP%] { flex-direction: column-reverse; }\n  .btn-reset[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] { width: 100%; justify-content: center; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFzay1jcmVhdGUvdGFzay1jcmVhdGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7RUFDaEQsT0FBTyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDL0M7O0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtFQUNqRCxPQUFPLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUMvQzs7QUFFQTtFQUNFLEtBQUsseUJBQXlCLEVBQUU7QUFDbEM7O0FBRUEsUUFBUSxjQUFjLEVBQUU7O0FBRXhCLG9CQUFvQjtBQUNwQjtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvREFBb0Q7RUFDcEQsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VB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QUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxzQ0FBc0M7RUFDdEMseURBQXlEO0VBQ3pELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsY0FBYztBQUNoQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhLGtCQUFrQixFQUFFO0VBQ2pDLGFBQWEsMEJBQTBCLEVBQUU7RUFDekMsV0FBVyw4QkFBOEIsRUFBRTtFQUMzQywwQkFBMEIsV0FBVyxFQUFFLHVCQUF1QixFQUFFO0FBQ2xFIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG46aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBQYWdlIHdyYXAgw6LClMKAw6LClMKAICovXG4ucGFnZS13cmFwIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMjBweCA2MHB4O1xuICBhbmltYXRpb246IGZhZGVVcCAwLjRzIGVhc2UgYm90aDtcbn1cblxuLyogw6LClMKAw6LClMKAIENhcmQgw6LClMKAw6LClMKAICovXG4uZm9ybS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjgwcHg7XG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFmMWY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM2cHggNDBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggNDBweCByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBIZWFkZXIgw6LClMKAw6LClMKAICovXG4uZm9ybS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFmMWYxZjtcbn1cblxuLmZvcm0taWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjEyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmNTllMGIsICNmY2QzNGQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmZvcm0tc3ViIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzRiNTU2Mztcbn1cblxuLyogw6LClMKAw6LClMKAIEZpZWxkIMOiwpTCgMOiwpTCgCAqL1xuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5maWVsZC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTZweDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzZiNzI4MDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xufVxuXG4ucmVxIHsgY29sb3I6ICNmNTllMGI7IH1cblxuLyogw6LClMKAw6LClMKAIElucHV0IC8gU2VsZWN0IMOiwpTCgMOiwpTCgCAqL1xuLmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMmEyYTJhO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzLCBib3gtc2hhZG93IDAuMjVzLCBiYWNrZ3JvdW5kIDAuMjVzO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5pbnB1dDo6cGxhY2Vob2xkZXIgeyBjb2xvcjogIzM3NDE1MTsgfVxuXG4uaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNmNTllMGI7XG4gIGJhY2tncm91bmQ6ICMxZjFhMGY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI0NSwxNTgsMTEsMC4xMik7XG59XG5cbi5maWVsZC1lcnJvciAuaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIzOSw2OCw2OCwwLjEpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU2VsZWN0IHdyYXBwZXIgw6LClMKAw6LClMKAICovXG4uc2VsZWN0LXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnNlbGVjdC13cmFwIC5pbnB1dCB7IHBhZGRpbmctcmlnaHQ6IDM2cHg7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc2VsZWN0LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTRweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6ICM0YjU1NjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIERhdGUgaW5wdXQgY2FsZW5kYXIgaWNvbiBjb2xvciAqL1xuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGZpbHRlcjogaW52ZXJ0KDAuNCkgc2VwaWEoMSkgc2F0dXJhdGUoMykgaHVlLXJvdGF0ZSg1ZGVnKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBOdW1iZXIgaW5wdXQgYXJyb3dzICovXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgb3BhY2l0eTogMC40OyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBFcnJvciBtZXNzYWdlIMOiwpTCgMOiwpTCgCAqL1xuLmVyci1tc2cge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZjg3MTcxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjJzIGVhc2UgYm90aDtcbn1cblxuLyogw6LClMKAw6LClMKAIFByaW9yaXR5IGhpbnQgw6LClMKAw6LClMKAICovXG4ucHJpb3JpdHktaGludCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJhY2tncm91bmQ6ICMxNjE2MTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFmMWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGFuaW1hdGlvbjogZmFkZVVwIDAuMjVzIGVhc2UgYm90aDtcbn1cblxuLnAtZG90IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5wLWhpZ2ggeyBiYWNrZ3JvdW5kOiAjZWY0NDQ0OyBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMjM5LDY4LDY4LDAuNik7IH1cbi5wLW1lZCAgeyBiYWNrZ3JvdW5kOiAjZjU5ZTBiOyBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMjQ1LDE1OCwxMSwwLjYpOyB9XG4ucC1sb3cgIHsgYmFja2dyb3VuZDogIzYzNjZmMTsgYm94LXNoYWRvdzogMCAwIDZweCByZ2JhKDk5LDEwMiwyNDEsMC42KTsgfVxuXG4ucC1sYWJlbCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2YjcyODA7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLyogw6LClMKAw6LClMKAIEFjdGlvbnMgw6LClMKAw6LClMKAICovXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxZjFmMWY7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmJ0bi1yZXNldCB7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzJhMmEyYTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnMsIGJhY2tncm91bmQgMC4ycztcbn1cblxuLmJ0bi1yZXNldDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJvcmRlci1jb2xvcjogIzRiNTU2MztcbiAgY29sb3I6ICNlMmU4ZjA7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMjhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2Q5NzcwNik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCByZ2JhKDI0NSwxNTgsMTEsMC4zNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnMsIG9wYWNpdHkgMC4ycztcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggcmdiYSgyNDUsMTU4LDExLDAuNSk7XG59XG5cbi5idG4tc3VibWl0OmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCxcbi5idG4tcmVzZXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBTcGlubmVyIMOiwpTCgMOiwpTCgCAqL1xuLnNwaW5uZXIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMGEwYTBhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjdzIGxpbmVhciBpbmZpbml0ZTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBUb2FzdCDDosKUwoDDosKUwoAgKi9cbi50b2FzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyNHB4O1xuICByaWdodDogMjRweDtcbiAgei1pbmRleDogOTk5OTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKSBib3RoO1xuICBtYXgtd2lkdGg6IDM2MHB4O1xufVxuXG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICMwNTJlMTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjMpO1xuICBjb2xvcjogIzZlZTdiNztcbn1cblxuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZDogIzFjMGEwYTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4zKTtcbiAgY29sb3I6ICNmY2E1YTU7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mb3JtLWNhcmQgeyBwYWRkaW5nOiAyNHB4IDIwcHg7IH1cbiAgLmZpZWxkLXJvdyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5hY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlOyB9XG4gIC5idG4tcmVzZXQsIC5idG4tc3VibWl0IHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8473:
/*!******************************!*\
  !*** ./src/app/task/task.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskComponent: () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_task_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/task-services */ 5167);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);





const _c0 = () => [1, 2, 3, 4, 5];
const _c1 = () => [1, 2, 3];
function TaskComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("toast-success", ctx_r0.toast.type === "success")("toast-error", ctx_r0.toast.type === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.toast.message, "\n");
  }
}
function TaskComponent_div_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_button_19_Template_button_click_0_listener() {
      const n_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.focusScore = n_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("star-active", n_r4 <= ctx_r0.focusScore);
  }
}
function TaskComponent_div_1_p_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.modalError);
  }
}
function TaskComponent_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 38);
  }
}
function TaskComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Complete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 21)(13, "div", 22)(14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Focus Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TaskComponent_div_1_button_19_Template, 2, 2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 22)(23, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Distraction Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 28)(26, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.distractionCount = ctx_r0.distractionCount > 0 ? ctx_r0.distractionCount - 1 : 0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.distractionCount = ctx_r0.distractionCount + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TaskComponent_div_1_p_32_Template, 2, 1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 32)(34, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_1_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.submitComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TaskComponent_div_1_span_37_Template, 1, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.modalTask == null ? null : ctx_r0.modalTask.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.focusScore, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.distractionCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.modalError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.modalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.modalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.modalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.modalLoading ? "Saving..." : "Submit");
  }
}
function TaskComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 41);
  }
}
function TaskComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TaskComponent_div_28_div_1_Template, 1, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
  }
}
function TaskComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No tasks found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Create your first task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaskComponent_div_30_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, task_r5.due_date, "MMM d"), "");
  }
}
function TaskComponent_div_30_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.formatElapsed(task_r5._elapsed), " elapsed");
  }
}
function TaskComponent_div_30_div_1_button_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 68);
  }
}
function TaskComponent_div_30_div_1_button_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u25B6 Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskComponent_div_30_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_30_div_1_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.startTask(task_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TaskComponent_div_30_div_1_button_18_span_1_Template, 1, 0, "span", 66)(2, TaskComponent_div_30_div_1_button_18_span_2_Template, 2, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", task_r5._loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r5._loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !task_r5._loading);
  }
}
function TaskComponent_div_30_div_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_30_div_1_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.openModal(task_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u2705 Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", task_r5._loading);
  }
}
function TaskComponent_div_30_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\uD83C\uDF89 Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 52)(8, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TaskComponent_div_30_div_1_span_12_Template, 3, 4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TaskComponent_div_30_div_1_div_13_Template, 4, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 56)(15, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TaskComponent_div_30_div_1_button_18_Template, 3, 3, "button", 59)(19, TaskComponent_div_30_div_1_button_19_Template, 2, 1, "button", 60)(20, TaskComponent_div_30_div_1_span_20_Template, 2, 0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("card-progress", task_r5.status === "In Progress")("card-done", task_r5.status === "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.priorityClass(task_r5.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r5.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\uD83D\uDCC1 ", task_r5.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u23F1 ", task_r5.estimated_time, " min");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r5.due_date && task_r5.due_date !== "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r5.status === "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.statusClass(task_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r5.status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r5.status === "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r5.status === "Completed");
  }
}
function TaskComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TaskComponent_div_30_div_1_Template, 21, 18, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.filteredTasks);
  }
}
class TaskComponent {
  constructor(taskService, auth) {
    this.taskService = taskService;
    this.auth = auth;
    this.tasks = [];
    this.pageLoading = true;
    // Modal state
    this.modalOpen = false;
    this.modalTask = null;
    this.focusScore = 3;
    this.distractionCount = 0;
    this.modalLoading = false;
    this.modalError = '';
    // Toast
    this.toast = null;
    // Filter
    this.filter = 'All';
  }
  ngOnInit() {
    this.loadTasks();
  }
  ngOnDestroy() {
    this.tasks.forEach(t => {
      if (t._timerRef) clearInterval(t._timerRef);
    });
  }
  get userId() {
    return this.auth.getUser()?.id ?? '';
  }
  get filteredTasks() {
    return this.filter === 'All' ? this.tasks : this.tasks.filter(t => t.status === this.filter);
  }
  get counts() {
    return {
      all: this.tasks.length,
      pending: this.tasks.filter(t => t.status === 'Pending').length,
      inProgress: this.tasks.filter(t => t.status === 'In Progress').length,
      completed: this.tasks.filter(t => t.status === 'Completed').length
    };
  }
  loadTasks() {
    this.pageLoading = true;
    this.taskService.getTasks().subscribe({
      next: data => {
        this.tasks = data.map(t => ({
          ...t,
          _loading: false,
          _elapsed: 0
        }));
        this.pageLoading = false;
      },
      error: () => {
        this.pageLoading = false;
        this.showToast('error', '❌ Failed to load tasks');
      }
    });
  }
  startTask(task) {
    task._loading = true;
    this.taskService.startTask(task.id, this.userId).subscribe({
      next: () => {
        task.status = 'In Progress';
        task._loading = false;
        task._elapsed = 0;
        task._timerRef = setInterval(() => task._elapsed = (task._elapsed ?? 0) + 1, 1000);
        this.showToast('success', `▶️ "${task.title}" started`);
      },
      error: err => {
        task._loading = false;
        this.showToast('error', '❌ ' + (err?.error?.detail ?? 'Failed to start task'));
      }
    });
  }
  openModal(task) {
    this.modalTask = task;
    this.focusScore = 3;
    this.distractionCount = 0;
    this.modalError = '';
    this.modalOpen = true;
  }
  closeModal() {
    this.modalOpen = false;
    this.modalTask = null;
    this.modalLoading = false;
    this.modalError = '';
  }
  submitComplete() {
    if (!this.modalTask) return;
    if (this.distractionCount < 0) {
      this.modalError = 'Distraction count cannot be negative.';
      return;
    }
    this.modalLoading = true;
    this.modalError = '';
    const payload = {
      focus_score: this.focusScore,
      distraction_count: this.distractionCount,
      user_id: this.userId
    };
    this.taskService.completeTask(this.modalTask.id, payload).subscribe({
      next: () => {
        const t = this.tasks.find(x => x.id === this.modalTask.id);
        if (t) {
          t.status = 'Completed';
          if (t._timerRef) {
            clearInterval(t._timerRef);
            t._timerRef = null;
          }
        }
        this.showToast('success', `✅ "${this.modalTask.title}" completed!`);
        this.closeModal();
      },
      error: err => {
        this.modalLoading = false;
        this.modalError = err?.error?.detail ?? 'Failed to complete task.';
      }
    });
  }
  formatElapsed(secs = 0) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
  priorityClass(p) {
    return p === 'High' ? 'p-high' : p === 'Medium' ? 'p-med' : 'p-low';
  }
  statusClass(s) {
    return s === 'Completed' ? 's-done' : s === 'In Progress' ? 's-progress' : 's-pending';
  }
  showToast(type, message) {
    clearTimeout(this.toastTimer);
    this.toast = {
      type,
      message
    };
    this.toastTimer = setTimeout(() => this.toast = null, 4000);
  }
  static {
    this.ɵfac = function TaskComponent_Factory(t) {
      return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_task_services__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TaskComponent,
      selectors: [["app-task"]],
      decls: 31,
      vars: 17,
      consts: [["class", "toast", 3, "toast-success", "toast-error", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["routerLink", "/tasks/create", 1, "btn-new"], [1, "filter-tabs"], [1, "tab", 3, "click"], [1, "tab-count"], ["class", "skeleton-list", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "task-list", 4, "ngIf"], [1, "toast"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-icon"], [1, "modal-title"], [1, "modal-sub"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "m-field"], [1, "m-label"], [1, "m-req"], [1, "star-row"], ["class", "star-btn", "type", "button", 3, "star-active", "click", 4, "ngFor", "ngForOf"], [1, "star-hint"], [1, "counter-row"], ["type", "button", 1, "counter-btn", 3, "click"], [1, "counter-val"], ["class", "modal-err", 4, "ngIf"], [1, "modal-footer"], [1, "btn-cancel", 3, "click", "disabled"], [1, "btn-confirm", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], ["type", "button", 1, "star-btn", 3, "click"], [1, "modal-err"], [1, "spinner"], [1, "skeleton-list"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "empty"], [1, "empty-icon"], ["routerLink", "/tasks/create", 1, "btn-new", 2, "margin-top", "12px"], [1, "task-list"], ["class", "task-card", 3, "card-progress", "card-done", 4, "ngFor", "ngForOf"], [1, "task-card"], [1, "card-left"], [1, "card-top"], [1, "task-title"], [1, "priority-badge"], [1, "card-meta"], [1, "meta-chip"], ["class", "meta-chip", 4, "ngIf"], ["class", "live-timer", 4, "ngIf"], [1, "card-right"], [1, "status-badge"], [1, "card-actions"], ["class", "btn-start", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-complete", 3, "disabled", "click", 4, "ngIf"], ["class", "done-label", 4, "ngIf"], [1, "live-timer"], [1, "timer-dot"], [1, "timer-text"], [1, "btn-start", 3, "click", "disabled"], ["class", "spinner-sm", 4, "ngIf"], [4, "ngIf"], [1, "spinner-sm"], [1, "btn-complete", 3, "click", "disabled"], [1, "done-label"]],
      template: function TaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TaskComponent_div_0_Template, 2, 5, "div", 0)(1, TaskComponent_div_1_Template, 40, 10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div")(5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Task Tracker");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Manage, start, and complete your tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "+ New Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_12_listener() {
            return ctx.filter = "All";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_16_listener() {
            return ctx.filter = "Pending";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Pending ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_20_listener() {
            return ctx.filter = "In Progress";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "In Progress ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_24_listener() {
            return ctx.filter = "Completed";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Completed ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TaskComponent_div_28_Template, 2, 2, "div", 10)(29, TaskComponent_div_29_Template, 7, 0, "div", 11)(30, TaskComponent_div_30_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toast);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modalOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tab-active", ctx.filter === "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.counts.all);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tab-active", ctx.filter === "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.counts.pending);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tab-active", ctx.filter === "In Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.counts.inProgress);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tab-active", ctx.filter === "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.counts.completed);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pageLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.pageLoading && ctx.filteredTasks.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.pageLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(18px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from { opacity: 0; transform: translateY(-14px) scale(0.97); }\n  to   { opacity: 1; transform: translateY(0) scale(1); }\n}\n@keyframes _ngcontent-%COMP%_backdropIn {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n@keyframes _ngcontent-%COMP%_pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%   { background-position: -600px 0; }\n  100% { background-position: 600px 0; }\n}\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 36px;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n  max-width: 1100px;\n}\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  background: linear-gradient(90deg, #f59e0b, #fcd34d);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.page-sub[_ngcontent-%COMP%] { font-size: 13px; color: #4b5563; margin-top: 4px; }\n\n.btn-new[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: #0a0a0a;\n  border: none;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  box-shadow: 0 4px 16px rgba(245,158,11,0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n\n.btn-new[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,158,11,0.45); }\n\n\n\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #111;\n  border: 1px solid #1f1f1f;\n  border-radius: 20px;\n  color: #6b7280;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: 'Inter', sans-serif;\n  transition: background 0.2s, color 0.2s, border-color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.tab[_ngcontent-%COMP%]:hover { background: #1a1a1a; color: #e2e8f0; }\n\n.tab-active[_ngcontent-%COMP%] {\n  background: rgba(245,158,11,0.12);\n  border-color: rgba(245,158,11,0.35);\n  color: #f59e0b;\n}\n\n.tab-count[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  color: #6b7280;\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n}\n\n.tab-active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: rgba(245,158,11,0.2);\n  color: #f59e0b;\n}\n\n\n\n.skeleton-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 90px;\n  border-radius: 16px;\n  background: linear-gradient(90deg, #111 25%, #1a1a1a 50%, #111 75%);\n  background-size: 600px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite linear;\n}\n\n\n\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  color: #4b5563;\n  gap: 8px;\n  font-size: 14px;\n}\n\n.empty-icon[_ngcontent-%COMP%] { font-size: 40px; }\n\n\n\n.task-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n\n\n\n.task-card[_ngcontent-%COMP%] {\n  background: #111111;\n  border: 1px solid #1f1f1f;\n  border-radius: 16px;\n  padding: 18px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  box-shadow: 0 3px 16px rgba(0,0,0,0.3);\n  animation: _ngcontent-%COMP%_fadeUp 0.35s ease both;\n  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;\n}\n\n.task-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(0,0,0,0.45);\n  border-color: #2a2a2a;\n}\n\n.card-progress[_ngcontent-%COMP%] {\n  border-color: rgba(245,158,11,0.3);\n  background: linear-gradient(135deg, #111111 70%, #1a1500 100%);\n}\n\n.card-done[_ngcontent-%COMP%] { opacity: 0.6; }\n\n\n\n.card-left[_ngcontent-%COMP%] { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px; }\n\n.card-top[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }\n\n.task-title[_ngcontent-%COMP%] { font-size: 15px; font-weight: 700; color: #f1f5f9; }\n\n.card-meta[_ngcontent-%COMP%] { display: flex; gap: 8px; flex-wrap: wrap; }\n\n.meta-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  background: #1a1a1a;\n  border: 1px solid #2a2a2a;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n\n\n\n.priority-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.4px;\n}\n\n.p-high[_ngcontent-%COMP%] { background: rgba(239,68,68,0.15);  color: #f87171; border: 1px solid rgba(239,68,68,0.25); }\n.p-med[_ngcontent-%COMP%]  { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.25); }\n.p-low[_ngcontent-%COMP%]  { background: rgba(99,102,241,0.15); color: #818cf8; border: 1px solid rgba(99,102,241,0.25); }\n\n\n\n.live-timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.timer-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #f59e0b;\n  animation: _ngcontent-%COMP%_pulse 1.4s infinite;\n  box-shadow: 0 0 6px rgba(245,158,11,0.7);\n}\n\n.timer-text[_ngcontent-%COMP%] { font-size: 12px; color: #f59e0b; font-weight: 600; font-variant-numeric: tabular-nums; }\n\n\n\n.card-right[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; flex-shrink: 0; }\n\n\n\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n}\n\n.s-pending[_ngcontent-%COMP%]  { background: rgba(245,158,11,0.1);  color: #f59e0b; border: 1px solid rgba(245,158,11,0.2); }\n.s-progress[_ngcontent-%COMP%] { background: rgba(99,102,241,0.12); color: #818cf8; border: 1px solid rgba(99,102,241,0.25); }\n.s-done[_ngcontent-%COMP%]     { background: rgba(16,185,129,0.1);  color: #34d399; border: 1px solid rgba(16,185,129,0.2); }\n\n\n\n.card-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; }\n\n.btn-start[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: transparent;\n  border: 1.5px solid #f59e0b;\n  border-radius: 10px;\n  color: #f59e0b;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;\n  min-width: 90px;\n  justify-content: center;\n}\n\n.btn-start[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(245,158,11,0.1);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(245,158,11,0.25);\n}\n\n.btn-start[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.btn-complete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: linear-gradient(135deg, #10b981, #059669);\n  border: none;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(16,185,129,0.3);\n  transition: transform 0.15s, box-shadow 0.2s;\n}\n\n.btn-complete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(16,185,129,0.45);\n}\n\n.btn-complete[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.done-label[_ngcontent-%COMP%] { font-size: 13px; color: #34d399; font-weight: 600; }\n\n\n\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  border: 2px solid rgba(245,158,11,0.3);\n  border-top-color: #f59e0b;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.75);\n  backdrop-filter: blur(4px);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_backdropIn 0.2s ease both;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: #111111;\n  border: 1px solid #2a2a2a;\n  border-radius: 20px;\n  box-shadow: 0 24px 80px rgba(0,0,0,0.7);\n  animation: _ngcontent-%COMP%_slideDown 0.25s cubic-bezier(0.16,1,0.3,1) both;\n  overflow: hidden;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 22px 24px 18px;\n  border-bottom: 1px solid #1f1f1f;\n  background: #161616;\n}\n\n.modal-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(16,185,129,0.12);\n  border: 1px solid rgba(16,185,129,0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n\n.modal-title[_ngcontent-%COMP%] { font-size: 16px; font-weight: 800; color: #f1f5f9; }\n.modal-sub[_ngcontent-%COMP%]   { font-size: 12px; color: #4b5563; margin-top: 3px; }\n\n.modal-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: #4b5563;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: color 0.2s, background 0.2s;\n}\n\n.modal-close[_ngcontent-%COMP%]:hover { color: #e2e8f0; background: #1f1f1f; }\n\n.modal-body[_ngcontent-%COMP%] { padding: 22px 24px; display: flex; flex-direction: column; gap: 20px; }\n\n.m-field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n\n.m-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n}\n\n.m-req[_ngcontent-%COMP%] { color: #f59e0b; }\n\n\n\n.star-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 6px; }\n\n.star-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 26px;\n  color: #2a2a2a;\n  cursor: pointer;\n  transition: color 0.15s, transform 0.15s;\n  padding: 0;\n  line-height: 1;\n}\n\n.star-btn[_ngcontent-%COMP%]:hover { transform: scale(1.2); }\n.star-active[_ngcontent-%COMP%] { color: #f59e0b; }\n\n.star-hint[_ngcontent-%COMP%] { font-size: 13px; color: #6b7280; font-weight: 600; margin-left: 4px; }\n\n\n\n.counter-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; }\n\n.counter-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #1a1a1a;\n  border: 1.5px solid #2a2a2a;\n  color: #e2e8f0;\n  font-size: 18px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, border-color 0.2s;\n}\n\n.counter-btn[_ngcontent-%COMP%]:hover { background: #222; border-color: #f59e0b; color: #f59e0b; }\n\n.counter-val[_ngcontent-%COMP%] { font-size: 22px; font-weight: 800; color: #f1f5f9; min-width: 28px; text-align: center; }\n\n.modal-err[_ngcontent-%COMP%] { font-size: 12px; color: #f87171; font-weight: 500; }\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding: 16px 24px 22px;\n  border-top: 1px solid #1f1f1f;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: transparent;\n  border: 1.5px solid #2a2a2a;\n  border-radius: 10px;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  transition: border-color 0.2s, color 0.2s;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) { border-color: #4b5563; color: #e2e8f0; }\n.btn-cancel[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.btn-confirm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 26px;\n  background: linear-gradient(135deg, #10b981, #059669);\n  border: none;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(16,185,129,0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 22px rgba(16,185,129,0.45); }\n.btn-confirm[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255,255,255,0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n\n\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  padding: 14px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: 'Inter', sans-serif;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.5);\n  animation: _ngcontent-%COMP%_slideDown 0.3s cubic-bezier(0.16,1,0.3,1) both;\n  max-width: 360px;\n}\n\n.toast-success[_ngcontent-%COMP%] { background: #052e16; border: 1px solid rgba(16,185,129,0.3); color: #6ee7b7; }\n.toast-error[_ngcontent-%COMP%]   { background: #1c0a0a; border: 1px solid rgba(239,68,68,0.3);  color: #fca5a5; }\n\n\n\n@media (max-width: 640px) {\n  .page[_ngcontent-%COMP%] { padding: 20px 16px; }\n  .task-card[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; }\n  .card-right[_ngcontent-%COMP%] { flex-direction: row; align-items: center; width: 100%; justify-content: space-between; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFzay90YXNrLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFO0VBQ2hELE9BQU8sVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQy9DO0FBQ0E7RUFDRSxPQUFPLFVBQVUsRUFBRSx3Q0FBd0MsRUFBRTtFQUM3RCxPQUFPLFVBQVUsRUFBRSxpQ0FBaUMsRUFBRTtBQUN4RDtBQUNBO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDckI7QUFDQSxrQkFBa0IsS0FBSyx5QkFBeUIsRUFBRSxFQUFFO0FBQ3BELG1CQUFtQixVQUFVLFNBQVMsRUFBRSxFQUFFLE1BQU0sV0FBVyxFQUFFLEVBQUU7QUFDL0Q7RUFDRSxPQUFPLDZCQUE2QixFQUFFO0VBQ3RDLE9BQU8sNEJBQTRCLEVBQUU7QUFDdkM7O0FBRUEsUUFBUSxjQUFjLEVBQUU7O0FBRXhCLGVBQWU7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvREFBb0Q7RUFDcEQsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUEsWUFBWSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRTs7QUFFOUQ7RUFDRSxrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQywyQ0FBMkM7RUFD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bSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxOHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE0cHgpIHNjYWxlKDAuOTcpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cbn1cbkBrZXlmcmFtZXMgYmFja2Ryb3BJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuQGtleWZyYW1lcyBwdWxzZSB7IDAlLDEwMCUgeyBvcGFjaXR5OjE7IH0gNTAlIHsgb3BhY2l0eTowLjM7IH0gfVxuQGtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUgICB7IGJhY2tncm91bmQtcG9zaXRpb246IC02MDBweCAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2MDBweCAwOyB9XG59XG5cbjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cblxuLyogw6LClMKAw6LClMKAIFBhZ2Ugw6LClMKAw6LClMKAICovXG4ucGFnZSB7XG4gIHBhZGRpbmc6IDMycHggMzZweDtcbiAgYW5pbWF0aW9uOiBmYWRlVXAgMC40cyBlYXNlIGJvdGg7XG4gIG1heC13aWR0aDogMTEwMHB4O1xufVxuXG4vKiDDosKUwoDDosKUwoAgSGVhZGVyIMOiwpTCgMOiwpTCgCAqL1xuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmNTllMGIsICNmY2QzNGQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59XG5cbi5wYWdlLXN1YiB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM0YjU1NjM7IG1hcmdpbi10b3A6IDRweDsgfVxuXG4uYnRuLW5ldyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2Q5NzcwNik7XG4gIGNvbG9yOiAjMGEwYTBhO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMjQ1LDE1OCwxMSwwLjMpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cblxuLmJ0bi1uZXc6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgyNDUsMTU4LDExLDAuNDUpOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBGaWx0ZXIgVGFicyDDosKUwoDDosKUwoAgKi9cbi5maWx0ZXItdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50YWIge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYmFja2dyb3VuZDogIzExMTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmMWYxZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBjb2xvciAwLjJzLCBib3JkZXItY29sb3IgMC4ycztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi50YWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMWExYTFhOyBjb2xvcjogI2UyZThmMDsgfVxuXG4udGFiLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjEyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwxNTgsMTEsMC4zNSk7XG4gIGNvbG9yOiAjZjU5ZTBiO1xufVxuXG4udGFiLWNvdW50IHtcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMXB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRhYi1hY3RpdmUgLnRhYi1jb3VudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjIpO1xuICBjb2xvcjogI2Y1OWUwYjtcbn1cblxuLyogw6LClMKAw6LClMKAIFNrZWxldG9uIMOiwpTCgMOiwpTCgCAqL1xuLnNrZWxldG9uLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7IH1cblxuLnNrZWxldG9uLWNhcmQge1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzExMSAyNSUsICMxYTFhMWEgNTAlLCAjMTExIDc1JSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNjAwcHggMTAwJTtcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDEuNHMgaW5maW5pdGUgbGluZWFyO1xufVxuXG4vKiDDosKUwoDDosKUwoAgRW1wdHkgw6LClMKAw6LClMKAICovXG4uZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW1wdHktaWNvbiB7IGZvbnQtc2l6ZTogNDBweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgVGFzayBMaXN0IMOiwpTCgMOiwpTCgCAqL1xuLnRhc2stbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTJweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgVGFzayBDYXJkIMOiwpTCgMOiwpTCgCAqL1xuLnRhc2stY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFmMWY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE4cHggMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDE2cHggcmdiYSgwLDAsMCwwLjMpO1xuICBhbmltYXRpb246IGZhZGVVcCAwLjM1cyBlYXNlIGJvdGg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnMsIGJvcmRlci1jb2xvciAwLjJzO1xufVxuXG4udGFzay1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoMCwwLDAsMC40NSk7XG4gIGJvcmRlci1jb2xvcjogIzJhMmEyYTtcbn1cblxuLmNhcmQtcHJvZ3Jlc3Mge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LDE1OCwxMSwwLjMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTExMTExIDcwJSwgIzFhMTUwMCAxMDAlKTtcbn1cblxuLmNhcmQtZG9uZSB7IG9wYWNpdHk6IDAuNjsgfVxuXG4vKiDDosKUwoDDosKUwoAgQ2FyZCBMZWZ0IMOiwpTCgMOiwpTCgCAqL1xuLmNhcmQtbGVmdCB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA4cHg7IH1cblxuLmNhcmQtdG9wIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cblxuLnRhc2stdGl0bGUgeyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZjFmNWY5OyB9XG5cbi5jYXJkLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5tZXRhLWNoaXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmEyYTJhO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogw6LClMKAw6LClMKAIFByaW9yaXR5IEJhZGdlIMOiwpTCgMOiwpTCgCAqL1xuLnByaW9yaXR5LWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuXG4ucC1oaWdoIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xNSk7ICBjb2xvcjogI2Y4NzE3MTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4yNSk7IH1cbi5wLW1lZCAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiAjZmJiZjI0OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsMC4yNSk7IH1cbi5wLWxvdyAgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiAjODE4Y2Y4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7IH1cblxuLyogw6LClMKAw6LClMKAIExpdmUgVGltZXIgw6LClMKAw6LClMKAICovXG4ubGl2ZS10aW1lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xufVxuXG4udGltZXItZG90IHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2Y1OWUwYjtcbiAgYW5pbWF0aW9uOiBwdWxzZSAxLjRzIGluZmluaXRlO1xuICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMjQ1LDE1OCwxMSwwLjcpO1xufVxuXG4udGltZXItdGV4dCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICNmNTllMGI7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cblxuLyogw6LClMKAw6LClMKAIENhcmQgUmlnaHQgw6LClMKAw6LClMKAICovXG4uY2FyZC1yaWdodCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgZ2FwOiAxMHB4OyBmbGV4LXNocmluazogMDsgfVxuXG4vKiDDosKUwoDDosKUwoAgU3RhdHVzIEJhZGdlIMOiwpTCgMOiwpTCgCAqL1xuLnN0YXR1cy1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5zLXBlbmRpbmcgIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMSk7ICBjb2xvcjogI2Y1OWUwYjsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLDAuMik7IH1cbi5zLXByb2dyZXNzIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTIpOyBjb2xvcjogIzgxOGNmODsgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMjUpOyB9XG4ucy1kb25lICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEpOyAgY29sb3I6ICMzNGQzOTk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjIpOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBBY3Rpb24gQnV0dG9ucyDDosKUwoDDosKUwoAgKi9cbi5jYXJkLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgfVxuXG4uYnRuLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjU5ZTBiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjE1cywgYm94LXNoYWRvdyAwLjJzO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLXN0YXJ0OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDI0NSwxNTgsMTEsMC4yNSk7XG59XG5cbi5idG4tc3RhcnQ6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuLmJ0bi1jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA5cHggMThweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDE2LDE4NSwxMjksMC4zKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzLCBib3gtc2hhZG93IDAuMnM7XG59XG5cbi5idG4tY29tcGxldGU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxNiwxODUsMTI5LDAuNDUpO1xufVxuXG4uYnRuLWNvbXBsZXRlOmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbi5kb25lLWxhYmVsIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzM0ZDM5OTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4vKiDDosKUwoDDosKUwoAgU3Bpbm5lciAoaW5saW5lKSDDosKUwoDDosKUwoAgKi9cbi5zcGlubmVyLXNtIHtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNDUsMTU4LDExLDAuMyk7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmNTllMGI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuN3MgbGluZWFyIGluZmluaXRlO1xufVxuXG4vKiDDosKUwoDDosKUwoAgTW9kYWwgQmFja2Ryb3Agw6LClMKAw6LClMKAICovXG4ubW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNzUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgei1pbmRleDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYW5pbWF0aW9uOiBiYWNrZHJvcEluIDAuMnMgZWFzZSBib3RoO1xufVxuXG4vKiDDosKUwoDDosKUwoAgTW9kYWwgw6LClMKAw6LClMKAICovXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJhMmEyYTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDgwcHggcmdiYSgwLDAsMCwwLjcpO1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKSBib3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAyMnB4IDI0cHggMThweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxZjFmMWY7XG4gIGJhY2tncm91bmQ6ICMxNjE2MTY7XG59XG5cbi5tb2RhbC1pY29uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5tb2RhbC10aXRsZSB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICNmMWY1Zjk7IH1cbi5tb2RhbC1zdWIgICB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM0YjU1NjM7IG1hcmdpbi10b3A6IDNweDsgfVxuXG4ubW9kYWwtY2xvc2Uge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzRiNTU2MztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYmFja2dyb3VuZCAwLjJzO1xufVxuXG4ubW9kYWwtY2xvc2U6aG92ZXIgeyBjb2xvcjogI2UyZThmMDsgYmFja2dyb3VuZDogIzFmMWYxZjsgfVxuXG4ubW9kYWwtYm9keSB7IHBhZGRpbmc6IDIycHggMjRweDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAyMHB4OyB9XG5cbi5tLWZpZWxkIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA4cHg7IH1cblxuLm0tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG59XG5cbi5tLXJlcSB7IGNvbG9yOiAjZjU5ZTBiOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBTdGFyIFJhdGluZyDDosKUwoDDosKUwoAgKi9cbi5zdGFyLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XG5cbi5zdGFyLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogIzJhMmEyYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cywgdHJhbnNmb3JtIDAuMTVzO1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnN0YXItYnRuOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG4uc3Rhci1hY3RpdmUgeyBjb2xvcjogI2Y1OWUwYjsgfVxuXG4uc3Rhci1oaW50IHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzZiNzI4MDsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luLWxlZnQ6IDRweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgQ291bnRlciDDosKUwoDDosKUwoAgKi9cbi5jb3VudGVyLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTRweDsgfVxuXG4uY291bnRlci1idG4ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMyYTJhMmE7XG4gIGNvbG9yOiAjZTJlOGYwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG59XG5cbi5jb3VudGVyLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6ICMyMjI7IGJvcmRlci1jb2xvcjogI2Y1OWUwYjsgY29sb3I6ICNmNTllMGI7IH1cblxuLmNvdW50ZXItdmFsIHsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogI2YxZjVmOTsgbWluLXdpZHRoOiAyOHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm1vZGFsLWVyciB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICNmODcxNzE7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMTZweCAyNHB4IDIycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWYxZjFmO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzJhMmEyYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYm9yZGVyLWNvbG9yOiAjNGI1NTYzOyBjb2xvcjogI2UyZThmMDsgfVxuLmJ0bi1jYW5jZWw6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuLmJ0bi1jb25maXJtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE2LDE4NSwxMjksMC4zKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcbn1cblxuLmJ0bi1jb25maXJtOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyBib3gtc2hhZG93OiAwIDZweCAyMnB4IHJnYmEoMTYsMTg1LDEyOSwwLjQ1KTsgfVxuLmJ0bi1jb25maXJtOmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjdzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLyogw6LClMKAw6LClMKAIFRvYXN0IMOiwpTCgMOiwpTCgCAqL1xuLnRvYXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI0cHg7XG4gIHJpZ2h0OiAyNHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLDAsMCwwLjUpO1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpIGJvdGg7XG4gIG1heC13aWR0aDogMzYwcHg7XG59XG5cbi50b2FzdC1zdWNjZXNzIHsgYmFja2dyb3VuZDogIzA1MmUxNjsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMyk7IGNvbG9yOiAjNmVlN2I3OyB9XG4udG9hc3QtZXJyb3IgICB7IGJhY2tncm91bmQ6ICMxYzBhMGE7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LDAuMyk7ICBjb2xvcjogI2ZjYTVhNTsgfVxuXG4vKiDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAucGFnZSB7IHBhZGRpbmc6IDIwcHggMTZweDsgfVxuICAudGFzay1jYXJkIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbiAgLmNhcmQtcmlnaHQgeyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map