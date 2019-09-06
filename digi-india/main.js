(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _info_info_eng_info_eng_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/info-eng/info-eng.component */ "./src/app/info/info-eng/info-eng.component.ts");
/* harmony import */ var _info_info_hin_info_hin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info-hin/info-hin.component */ "./src/app/info/info-hin/info-hin.component.ts");
/* harmony import */ var _info_info_tel_info_tel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/info-tel/info-tel.component */ "./src/app/info/info-tel/info-tel.component.ts");
/* harmony import */ var _processors_processors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./processors/processors.component */ "./src/app/processors/processors.component.ts");
/* harmony import */ var _interactive_interactive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interactive/interactive.component */ "./src/app/interactive/interactive.component.ts");
/* harmony import */ var _interact_fullpc_fullpc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interact/fullpc/fullpc.component */ "./src/app/interact/fullpc/fullpc.component.ts");
/* harmony import */ var _interact_front_front_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interact/front/front.component */ "./src/app/interact/front/front.component.ts");
/* harmony import */ var _interact_backcpu_backcpu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interact/backcpu/backcpu.component */ "./src/app/interact/backcpu/backcpu.component.ts");
/* harmony import */ var _interact_insidecpu_insidecpu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interact/insidecpu/insidecpu.component */ "./src/app/interact/insidecpu/insidecpu.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/compare/compare.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");















var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'info-eng', component: _info_info_eng_info_eng_component__WEBPACK_IMPORTED_MODULE_4__["InfoEngComponent"] },
    { path: 'info-hin', component: _info_info_hin_info_hin_component__WEBPACK_IMPORTED_MODULE_5__["InfoHinComponent"] },
    { path: 'info-tel', component: _info_info_tel_info_tel_component__WEBPACK_IMPORTED_MODULE_6__["InfoTelComponent"] },
    { path: 'processors', component: _processors_processors_component__WEBPACK_IMPORTED_MODULE_7__["ProcessorsComponent"] },
    { path: 'interactive', component: _interactive_interactive_component__WEBPACK_IMPORTED_MODULE_8__["InteractiveComponent"] },
    { path: 'app-fullpc', component: _interact_fullpc_fullpc_component__WEBPACK_IMPORTED_MODULE_9__["FullpcComponent"] },
    { path: 'app-front', component: _interact_front_front_component__WEBPACK_IMPORTED_MODULE_10__["FrontComponent"] },
    { path: 'app-backcpu', component: _interact_backcpu_backcpu_component__WEBPACK_IMPORTED_MODULE_11__["BackcpuComponent"] },
    { path: 'app-insidecpu', component: _interact_insidecpu_insidecpu_component__WEBPACK_IMPORTED_MODULE_12__["InsidecpuComponent"] },
    { path: 'compare', component: _compare_compare_component__WEBPACK_IMPORTED_MODULE_13__["CompareComponent"] },
    { path: 'filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_14__["FilterComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n\r\n  width:100%;\r\n\r\n}\r\n\r\nnav{\r\n  background-color: rgb(30, 20, 56);\r\n  width:100%;\r\n  font-size: 26px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  -webkit-text-decoration-line: none;\r\n          text-decoration-line: none;\r\n  padding-left: 50px;\r\n\r\n\r\n\r\n}\r\n\r\n.logo{\r\n\r\n      float: left;\r\n      background-color: rgb(30, 20, 56);\r\n\r\n      font-weight: bold;\r\n      font-size: 28px;\r\n  }\r\n\r\na:hover {\r\n      background: rgb(241, 240, 241);\r\n\r\n\r\n\r\n  }\r\n\r\n.dropdown-menu a{\r\n  background:rgb(98, 49, 231);\r\n\r\n\r\n }\r\n\r\n.dropdown-menu a:hover{\r\n  background: rgb(241, 240, 241);\r\n\r\n\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsZUFBZTtFQUNmLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixrQkFBa0I7Ozs7QUFJcEI7O0FBRUE7O01BRU0sV0FBVztNQUNYLGlDQUFpQzs7TUFFakMsaUJBQWlCO01BQ2pCLGVBQWU7RUFDbkI7O0FBSUE7TUFDSSw4QkFBOEI7Ozs7RUFJbEM7O0FBR0Q7RUFDQywyQkFBMkI7OztDQUc1Qjs7QUFFQTtFQUNDLDhCQUE4Qjs7O0NBRy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG5cclxuICB3aWR0aDoxMDAlO1xyXG5cclxufVxyXG5cclxubmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjAsIDU2KTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLmxvZ297XHJcblxyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyMCwgNTYpO1xyXG5cclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MCwgMjQxKTtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuIC5kcm9wZG93bi1tZW51IGF7XHJcbiAgYmFja2dyb3VuZDpyZ2IoOTgsIDQ5LCAyMzEpO1xyXG5cclxuXHJcbiB9XHJcblxyXG4gLmRyb3Bkb3duLW1lbnUgYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDAsIDI0MSk7XHJcblxyXG5cclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--The content below is only a placeholder and can be replaced.-->\n\n<app-main-nav></app-main-nav>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.lang = "Language";
        this.test = 'info-eng';
    }
    AppComponent.prototype.onclick1 = function () {
        this.lang = 'English';
        this.test = 'info-eng';
    };
    AppComponent.prototype.onclick2 = function () {
        this.lang = 'Hindi';
        this.test = 'info-hin';
    };
    AppComponent.prototype.onclick3 = function () {
        this.lang = 'Telugu';
        this.test = 'info-tel';
    };
    AppComponent.prototype.onclick4 = function () {
        this.lang = 'Malayalam';
        this.test = 'info-eng';
    };
    AppComponent.prototype.onclick5 = function () {
        this.lang = 'Bengali';
        this.test = 'info-eng';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/processor.service */ "./src/app/shared/processor.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./information/information.component */ "./src/app/information/information.component.ts");
/* harmony import */ var _processors_processors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./processors/processors.component */ "./src/app/processors/processors.component.ts");
/* harmony import */ var _processor_companies_intel_intel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./processor_companies/intel/intel.component */ "./src/app/processor_companies/intel/intel.component.ts");
/* harmony import */ var _processor_companies_amd_amd_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./processor_companies/amd/amd.component */ "./src/app/processor_companies/amd/amd.component.ts");
/* harmony import */ var _processor_companies_nvidia_nvidia_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./processor_companies/nvidia/nvidia.component */ "./src/app/processor_companies/nvidia/nvidia.component.ts");
/* harmony import */ var _processor_companies_apple_apple_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./processor_companies/apple/apple.component */ "./src/app/processor_companies/apple/apple.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/compare/compare.component.ts");
/* harmony import */ var _list_information_typesofcomputer_typesofcomputer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./list-information/typesofcomputer/typesofcomputer.component */ "./src/app/list-information/typesofcomputer/typesofcomputer.component.ts");
/* harmony import */ var _list_information_pc_pc_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./list-information/pc/pc.component */ "./src/app/list-information/pc/pc.component.ts");
/* harmony import */ var _list_information_workstation_workstation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./list-information/workstation/workstation.component */ "./src/app/list-information/workstation/workstation.component.ts");
/* harmony import */ var _interactive_interactive_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./interactive/interactive.component */ "./src/app/interactive/interactive.component.ts");
/* harmony import */ var _info_info_eng_info_eng_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./info/info-eng/info-eng.component */ "./src/app/info/info-eng/info-eng.component.ts");
/* harmony import */ var _info_info_hin_info_hin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./info/info-hin/info-hin.component */ "./src/app/info/info-hin/info-hin.component.ts");
/* harmony import */ var _info_info_tel_info_tel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./info/info-tel/info-tel.component */ "./src/app/info/info-tel/info-tel.component.ts");
/* harmony import */ var _lang_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lang.directive */ "./src/app/lang.directive.ts");
/* harmony import */ var _interact_fullpc_fullpc_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./interact/fullpc/fullpc.component */ "./src/app/interact/fullpc/fullpc.component.ts");
/* harmony import */ var _interact_front_front_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./interact/front/front.component */ "./src/app/interact/front/front.component.ts");
/* harmony import */ var _interact_backcpu_backcpu_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./interact/backcpu/backcpu.component */ "./src/app/interact/backcpu/backcpu.component.ts");
/* harmony import */ var _interact_insidecpu_insidecpu_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./interact/insidecpu/insidecpu.component */ "./src/app/interact/insidecpu/insidecpu.component.ts");
/* harmony import */ var _view_processor_view_processor_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./view-processor/view-processor.component */ "./src/app/view-processor/view-processor.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./filter-table/filter-table.component */ "./src/app/filter-table/filter-table.component.ts");
/* harmony import */ var _compare1_compare1_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./compare1/compare1.component */ "./src/app/compare1/compare1.component.ts");
/* harmony import */ var _compare2_compare2_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./compare2/compare2.component */ "./src/app/compare2/compare2.component.ts");











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_12__["MainNavComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__["SideNavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _information_information_component__WEBPACK_IMPORTED_MODULE_15__["InformationComponent"],
                _processors_processors_component__WEBPACK_IMPORTED_MODULE_16__["ProcessorsComponent"],
                _processor_companies_intel_intel_component__WEBPACK_IMPORTED_MODULE_17__["IntelComponent"],
                _processor_companies_amd_amd_component__WEBPACK_IMPORTED_MODULE_18__["AMDComponent"],
                _processor_companies_nvidia_nvidia_component__WEBPACK_IMPORTED_MODULE_19__["NvidiaComponent"],
                _processor_companies_apple_apple_component__WEBPACK_IMPORTED_MODULE_20__["AppleComponent"],
                _compare_compare_component__WEBPACK_IMPORTED_MODULE_21__["CompareComponent"],
                _list_information_typesofcomputer_typesofcomputer_component__WEBPACK_IMPORTED_MODULE_22__["TypesofcomputerComponent"],
                _list_information_pc_pc_component__WEBPACK_IMPORTED_MODULE_23__["PcComponent"],
                _list_information_workstation_workstation_component__WEBPACK_IMPORTED_MODULE_24__["WorkstationComponent"],
                _interactive_interactive_component__WEBPACK_IMPORTED_MODULE_25__["InteractiveComponent"],
                _info_info_eng_info_eng_component__WEBPACK_IMPORTED_MODULE_26__["InfoEngComponent"],
                _info_info_hin_info_hin_component__WEBPACK_IMPORTED_MODULE_27__["InfoHinComponent"],
                _info_info_tel_info_tel_component__WEBPACK_IMPORTED_MODULE_28__["InfoTelComponent"],
                _lang_directive__WEBPACK_IMPORTED_MODULE_29__["LangDirective"],
                _interact_fullpc_fullpc_component__WEBPACK_IMPORTED_MODULE_30__["FullpcComponent"],
                _interact_front_front_component__WEBPACK_IMPORTED_MODULE_31__["FrontComponent"],
                _interact_backcpu_backcpu_component__WEBPACK_IMPORTED_MODULE_32__["BackcpuComponent"],
                _interact_insidecpu_insidecpu_component__WEBPACK_IMPORTED_MODULE_33__["InsidecpuComponent"],
                _view_processor_view_processor_component__WEBPACK_IMPORTED_MODULE_34__["ViewProcessorComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_36__["ViewComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_37__["FilterComponent"],
                _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_38__["FilterTableComponent"],
                _compare1_compare1_component__WEBPACK_IMPORTED_MODULE_39__["Compare1Component"],
                _compare2_compare2_component__WEBPACK_IMPORTED_MODULE_40__["Compare2Component"],
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__["OwlModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_9__["ProcessorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compare/compare.component.css":
/*!***********************************************!*\
  !*** ./src/app/compare/compare.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    align: left;\r\n    width:1000px;\r\n\r\n\r\n}\r\n\r\n.wrapper{\r\n  align:right;\r\n  padding-left: 1400px;\r\n}\r\n\r\n.bg-news {\r\n  background: linear-gradient(90deg, #ff6464 50%, #5ac8fa 40%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7O0FBR2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUlFLDREQUE0RDtBQUM5RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6MTAwMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gIGFsaWduOnJpZ2h0O1xyXG4gIHBhZGRpbmctbGVmdDogMTQwMHB4O1xyXG59XHJcbi5iZy1uZXdzIHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNjQ2NCA1MCUsICM1YWM4ZmEgNDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjY0NjQgNTAlLCAjNWFjOGZhIDQwJSk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjY0NjQgNTAlLCAjNWFjOGZhIDQwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY2NDY0IDUwJSwgIzVhYzhmYSA0MCUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/compare/compare.component.html":
/*!************************************************!*\
  !*** ./src/app/compare/compare.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg-news\">\n<div class=\"container \"  >\n  <div class=\"row\">\n    <div class=\"col\">\n          <app-compare1></app-compare1>\n            </div>\n              <div class=\"col\">\n                <app-compare2></app-compare2>\n                </div>\n   </div>\n  </div>\n  <div class=\"wrapper\" >\n      <h2>Go to Filter</h2>\n        <button type=\"button\" routerLink=\"/filter\" class=\"btn btn-primary\">Filter</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/compare/compare.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compare/compare.component.ts ***!
  \**********************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompareComponent = /** @class */ (function () {
    function CompareComponent() {
    }
    CompareComponent.prototype.ngOnInit = function () {
    };
    CompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.component.html */ "./src/app/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.css */ "./src/app/compare/compare.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/compare1/compare1.component.css":
/*!*************************************************!*\
  !*** ./src/app/compare1/compare1.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  border: 1px;\r\n  border-color: #f4511e;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFyZTEvY29tcGFyZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvY29tcGFyZTEvY29tcGFyZTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2Y0NTExZTtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/compare1/compare1.component.html":
/*!**************************************************!*\
  !*** ./src/app/compare1/compare1.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form #processorForm=\"ngForm\" >\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th><div class=\"dropdown\">\n                        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Processors1\n                       </button>\n                        <ul class=\"dropdown-menu\">\n                          <input class=\"form-control\" id=\"myInput\" type=\"text\" placeholder=\"Search..\">\n                          <li><a (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" >Apple A9</a></li>\n                          <li><a (click)=\"onView('5cc28b50d9c3c750c4583447',processorForm)\" >i9-9980XE</a></li>\n                          <li><a (click)=\"onView('5cc28bf0d9c3c750c4583448',processorForm)\" >i9-9980XE</a></li>\n                          <li><a (click)=\"onView('5cc28c2ad9c3c750c4583449',processorForm)\" >Apple A6</a></li>\n\n                        </ul>\n                      </div></th>\n\n                  </tr>\n              <tr>\n                <th>#</th>\n                <th>Specifications</th>\n\n              </tr>\n            </thead>\n            <tbody>\n\n              <tr>\n              <th scope=\"row\"> pid </th>\n              <td  >{{processorService.selectedProcessor.pid}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">num_of_cores</th>\n              <td>{{processorService.selectedProcessor.num_of_cores}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">l1_Cache</th>\n              <td>{{processorService.selectedProcessor.l1_Cache}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">l2_Cache</th>\n              <td>{{processorService.selectedProcessor.l2_Cache}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">product_code</th>\n              <td>{{processorService.selectedProcessor.product_code}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">microarchitecture</th>\n              <td>{{processorService.selectedProcessor.microarchitecture}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">designed_by </th>\n\n              <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n\n              </tr>\n              <tr>\n                     <th scope=\"row\">max_CPU_clock_rate</th>\n                     <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\n\n              </tr>\n                  <tr>\n                       <th scope=\"row\">min_feature_size</th>\n                       <td>{{processorService.selectedProcessor.min_feature_size}}</td>\n\n                  </tr>\n                  <tr>\n                       <th scope=\"row\">instruction_set</th>\n                       <td>{{processorService.selectedProcessor.instruction_set}}</td>\n\n                  </tr>\n                  <tr>\n                       <th scope=\"row\">predecessor</th>\n                       <td>{{processorService.selectedProcessor.successor}}</td>\n\n                    </tr>\n                    <tr>\n                         <th scope=\"row\">successor </th>\n                         <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n                    </tr>\n                    <tr>\n                         <th scope=\"row\">gpu</th>\n                         <td>{{processorService.selectedProcessor.gpu}}</td>\n                    </tr>\n            </tbody>\n          </table>\n\n\n\n      </form>\n    </div>\n"

/***/ }),

/***/ "./src/app/compare1/compare1.component.ts":
/*!************************************************!*\
  !*** ./src/app/compare1/compare1.component.ts ***!
  \************************************************/
/*! exports provided: Compare1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compare1Component", function() { return Compare1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/processor.service */ "./src/app/shared/processor.service.ts");



var Compare1Component = /** @class */ (function () {
    function Compare1Component(processorService) {
        this.processorService = processorService;
    }
    Compare1Component.prototype.ngOnInit = function () {
    };
    Compare1Component.prototype.onView = function (_id, form) {
        var _this = this;
        this.processorService.getProcessor(_id).subscribe(function (res) {
            _this.processorService.selectedProcessor = res;
        });
    };
    Compare1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare1',
            template: __webpack_require__(/*! ./compare1.component.html */ "./src/app/compare1/compare1.component.html"),
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]],
            styles: [__webpack_require__(/*! ./compare1.component.css */ "./src/app/compare1/compare1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]])
    ], Compare1Component);
    return Compare1Component;
}());

/*
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

*/


/***/ }),

/***/ "./src/app/compare2/compare2.component.css":
/*!*************************************************!*\
  !*** ./src/app/compare2/compare2.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhcmUyL2NvbXBhcmUyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/compare2/compare2.component.html":
/*!**************************************************!*\
  !*** ./src/app/compare2/compare2.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form #processorForm=\"ngForm\" >\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th><div class=\"dropdown\">\n                        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Processor 2\n                       </button>\n                        <ul class=\"dropdown-menu\">\n                          <input class=\"form-control\" id=\"myInput\" type=\"text\" placeholder=\"Search..\">\n                          <li><a (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" >Apple A9</a></li>\n                          <li><a (click)=\"onView('5cc28b50d9c3c750c4583447',processorForm)\" >i9-9980XE</a></li>\n                          <li><a (click)=\"onView('5cc28bf0d9c3c750c4583448',processorForm)\" >i9-9980XE</a></li>\n                          <li><a (click)=\"onView('5cc28c2ad9c3c750c4583449',processorForm)\" >Apple A6</a></li>\n\n                        </ul>\n                      </div></th>\n\n                  </tr>\n              <tr>\n                <th>#</th>\n                <th>Specifications</th>\n\n              </tr>\n            </thead>\n            <tbody>\n\n              <tr>\n              <th scope=\"row\"> pid </th>\n              <td  >{{processorService.selectedProcessor.pid}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">num_of_cores</th>\n              <td>{{processorService.selectedProcessor.num_of_cores}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">l1_Cache</th>\n              <td>{{processorService.selectedProcessor.l1_Cache}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">l2_Cache</th>\n              <td>{{processorService.selectedProcessor.l2_Cache}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">product_code</th>\n              <td>{{processorService.selectedProcessor.product_code}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">microarchitecture</th>\n              <td>{{processorService.selectedProcessor.microarchitecture}}</td>\n              </tr>\n              <tr>\n              <th scope=\"row\">designed_by </th>\n\n              <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n\n              </tr>\n              <tr>\n                     <th scope=\"row\">max_CPU_clock_rate</th>\n                     <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\n\n              </tr>\n                  <tr>\n                       <th scope=\"row\">min_feature_size</th>\n                       <td>{{processorService.selectedProcessor.min_feature_size}}</td>\n\n                  </tr>\n                  <tr>\n                       <th scope=\"row\">instruction_set</th>\n                       <td>{{processorService.selectedProcessor.instruction_set}}</td>\n\n                  </tr>\n                  <tr>\n                       <th scope=\"row\">predecessor</th>\n                       <td>{{processorService.selectedProcessor.successor}}</td>\n\n                    </tr>\n                    <tr>\n                         <th scope=\"row\">successor </th>\n                         <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n                    </tr>\n                    <tr>\n                         <th scope=\"row\">gpu</th>\n                         <td>{{processorService.selectedProcessor.gpu}}</td>\n                    </tr>\n            </tbody>\n          </table>\n\n\n\n      </form>\n    </div>\n"

/***/ }),

/***/ "./src/app/compare2/compare2.component.ts":
/*!************************************************!*\
  !*** ./src/app/compare2/compare2.component.ts ***!
  \************************************************/
/*! exports provided: Compare2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compare2Component", function() { return Compare2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/processor.service */ "./src/app/shared/processor.service.ts");



var Compare2Component = /** @class */ (function () {
    function Compare2Component(processorService) {
        this.processorService = processorService;
    }
    Compare2Component.prototype.ngOnInit = function () {
    };
    Compare2Component.prototype.onView = function (_id, form) {
        var _this = this;
        this.processorService.getProcessor(_id).subscribe(function (res) {
            _this.processorService.selectedProcessor = res;
        });
    };
    Compare2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare2',
            template: __webpack_require__(/*! ./compare2.component.html */ "./src/app/compare2/compare2.component.html"),
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]],
            styles: [__webpack_require__(/*! ./compare2.component.css */ "./src/app/compare2/compare2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]])
    ], Compare2Component);
    return Compare2Component;
}());

/*
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

*/


/***/ }),

/***/ "./src/app/filter-table/filter-table-datasource.ts":
/*!*********************************************************!*\
  !*** ./src/app/filter-table/filter-table-datasource.ts ***!
  \*********************************************************/
/*! exports provided: FilterTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableDataSource", function() { return FilterTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the FilterTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var FilterTableDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FilterTableDataSource, _super);
    function FilterTableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    FilterTableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    FilterTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    FilterTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    FilterTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return FilterTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/filter-table/filter-table.component.css":
/*!*********************************************************!*\
  !*** ./src/app/filter-table/filter-table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLXRhYmxlL2ZpbHRlci10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyLXRhYmxlL2ZpbHRlci10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/filter-table/filter-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/filter-table/filter-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/filter-table/filter-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/filter-table/filter-table.component.ts ***!
  \********************************************************/
/*! exports provided: FilterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableComponent", function() { return FilterTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _filter_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-table-datasource */ "./src/app/filter-table/filter-table-datasource.ts");




var FilterTableComponent = /** @class */ (function () {
    function FilterTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    FilterTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource = new _filter_table_datasource__WEBPACK_IMPORTED_MODULE_3__["FilterTableDataSource"](this.paginator, this.sort);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], FilterTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], FilterTableComponent.prototype, "sort", void 0);
    FilterTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-table',
            template: __webpack_require__(/*! ./filter-table.component.html */ "./src/app/filter-table/filter-table.component.html"),
            styles: [__webpack_require__(/*! ./filter-table.component.css */ "./src/app/filter-table/filter-table.component.css")]
        })
    ], FilterTableComponent);
    return FilterTableComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  font-size:10px;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\n.bg-germany {\r\n  color: #fff;\r\n  background: linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #000000 66%, #000000 66%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFJWCxzSEFBc0g7QUFDeEgiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6MTBweDtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5iZy1nZXJtYW55IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMTBkZWcsICMwMDAgMzMlLCByZ2JhKDAsIDAsIDAsIDApIDMzJSksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzAwMDAwMCA2NiUsICMwMDAwMDAgNjYlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjMDAwIDMzJSwgcmdiYSgwLCAwLCAwLCAwKSAzMyUpLCAtby1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjMDAwMDAwIDY2JSwgIzAwMDAwMCA2NiUpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzAwMCAzMyUsIHJnYmEoMCwgMCwgMCwgMCkgMzMlKSwgLW1vei1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjMDAwMDAwIDY2JSwgIzAwMDAwMCA2NiUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICMwMDAgMzMlLCByZ2JhKDAsIDAsIDAsIDApIDMzJSksIGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICMwMDAwMDAgNjYlLCAjMDAwMDAwIDY2JSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n<div class=\"container\">\n  <table class=\"responsive-table highlight\">\n    <thead>\n      <tr>\n\n         <th scope=\"row\"> pid </th>\n         <th scope=\"row\">l1_Cache</th>\n         <th scope=\"row\">l2_Cache</th>\n         <th scope=\"row\">product_code</th>\n         <th scope=\"row\">microarchitecture</th>\n         <th scope=\"row\">designed_by</th>\n         <th scope=\"row\">max_CPU_clock_rate</th>\n         <th scope=\"row\">min_feature_size</th>\n         <th scope=\"row\">instruction_set</th>\n         <th scope=\"row\">predecessor</th>\n         <th scope=\"row\">successor </th>\n         <th scope=\"row\">gpu</th>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let pro of processorService.processors\">\n      <td>{{pro.pid}}</td>\n      <td>{{pro.num_of_cores}}</td>\n      <td>{{pro.l1_Cache}}</td>\n      <td>{{pro.l2_Cache}}</td>\n      <td>{{pro.product_code}}</td>\n      <td>{{pro.microarchitecture}}</td>\n      <td>{{pro.designed_by}}</td>\n      <td>{{pro.max_CPU_clock_rate}}</td>\n      <td>{{pro.min_feature_size}}</td>\n      <td>{{pro.instruction_set}}</td>\n      <td>{{pro.successor}}</td>\n      <td>{{pro.gpu}}</td>\n\n    </tr>\n</table>\n\n\n\n</div>\n\n<div class=\"container\">\n<mat-card class=\"example-card\">\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/book-create']\"><mat-icon>add</mat-icon></a>\n      </div>\n      <div class=\"example-container mat-elevation-z8\">\n        <table mat-table #table [dataSource]=\"dataSource\">\n\n\n          <ng-container matColumnDef=\"isbn\">\n            <th mat-header-cell *matHeaderCellDef> ISBN </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.isbn}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> Title </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"author\">\n            <th mat-header-cell *matHeaderCellDef> Author </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/book-details/', row._id]\"></tr>\n        </table>\n      </div>\n  </mat-card>\n</div>\n-->\n<div class=\"bg-germany\">\n\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n  <mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"pid\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>PID</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.pid}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"num_of_cores\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Number of Cores</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.num_of_cores}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"l1_Cache\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>L1 Cache</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.l1_Cache}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"l2_Cache\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>L2 Cache</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.l2_Cache}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"product_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Product Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.product_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"microarchitecture\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Microarchitecture</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.microarchitecture}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"designed_by\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Designed_by</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.designed_by}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"max_CPU_clock_rate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Max_CPU_clock_rate</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.max_CPU_clock_rate}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"min_feature_size\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>min_feature_size</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.min_feature_size}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"instruction_set\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>instruction_set</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.instruction_set}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"predecessor\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>predecessor</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.predecessor}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"successor\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>successor</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.successor}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"gpu\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>GPU</mat-header-cell>\n        <mat-cell *matCellDef=\"let pro\">{{pro.gpu}}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[2, 4, 6, 8]\"></mat-paginator>\n</div>\n\n"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/processor.service */ "./src/app/shared/processor.service.ts");




var FilterComponent = /** @class */ (function () {
    function FilterComponent(processorService) {
        this.processorService = processorService;
        //tslint:disable-next-line: max-line-length
        this.displayedColumns = ['pid', 'num_of_cores', 'l1_Cache', 'l2_Cache', 'product_code', 'microarchitecture', 'designed_by', 'max_CPU_clock_rate', 'min_feature_size', 'instruction_set', 'predecessor', 'successor', 'gpu'];
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], FilterComponent.prototype, "sort", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_3__["ProcessorService"]],
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_processor_service__WEBPACK_IMPORTED_MODULE_3__["ProcessorService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-5 bg-dark\">\n    <div class=\"container\">\n      <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2019</p>\n    </div>\n    <!-- /.container -->\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#hero {\r\n      background-image: url('/assets/img/home_background.jpg');\r\n      background-size: cover;\r\n      background-position: center center;\r\n      position: sticky;\r\n      top: 0;\r\n      bottom: 0;\r\n      min-height: 90vh;\r\n      min-width: 90vh;\r\n\r\n      z-index: -10;\r\n\r\n\r\n}\r\n\r\n#hero-overlay{\r\n  position: absolute;\r\n  background-color: rgba(0,0,0,0.5);\r\n  top: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: -5;\r\n\r\n}\r\n*/\r\n\r\n\r\n\r\n\r\n/* Responsive columns */\r\n\r\n\r\n\r\n\r\n.view{\r\n    height: 130%;\r\n    margin-top: -1%;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n#intro {\r\n  height: 110%;\r\n  max-width: 100%;\r\n  padding: 0 0 0 0;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.welcome input[type=text] {\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  font-size: 17px;\r\n  border: none;\r\n  width: 600px;\r\n}\r\n\r\n\r\n\r\n\r\n#intro {\r\n  background: url('/assets/img/home_background.jpg') no-repeat center center fixed;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.row{\r\n\r\n\r\n    font-size: 18px;\r\n    height : 100%;\r\n    width : 100%;\r\n  }\r\n\r\n\r\n\r\n\r\n.card-deck{\r\n\r\n\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n.column {\r\n    text-align: center;\r\n    width:  30.33%;\r\n    padding-left: 15%;\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n/* Style the counter cards */\r\n\r\n\r\n\r\n\r\n.card  {\r\n\r\n  box-shadow: 0 4px 8px 0 rgba(133, 127, 127, 0.2);\r\n\r\n  text-align: center;\r\n  -webkit-text-decoration-color: white;\r\n          text-decoration-color: white;\r\n  background-color: #ebebeb;\r\n  height: 400px;\r\n  width: 260px;\r\n  margin-top: 35%;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.card-img-top{\r\n  height: 220px;\r\n  width: 100%;\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.welcome{\r\n\r\n  text-align: center;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5QkM7Ozs7O0FBS0QsdUJBQXVCOzs7OztBQUV2QjtJQUNJLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7Ozs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCOztBQUVsQjs7Ozs7QUFHQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7Ozs7O0FBQ0E7RUFDRSxnRkFBZ0Y7OztBQUdsRjs7Ozs7QUFFRTs7O0lBR0UsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0VBQ2Q7Ozs7O0FBRUE7Ozs7RUFJQTs7Ozs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCOzs7SUFHakI7Ozs7O0FBQ0osNEJBQTRCOzs7OztBQUM1Qjs7RUFFRSxnREFBZ0Q7O0VBRWhELGtCQUFrQjtFQUNsQixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7O0FBRWpCOzs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7Ozs7QUFJYjs7Ozs7QUFLQTs7RUFFRSxrQkFBa0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNoZXJvIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9ob21lX2JhY2tncm91bmQuanBnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgICBtaW4td2lkdGg6IDkwdmg7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTA7XHJcblxyXG5cclxufVxyXG5cclxuI2hlcm8tb3ZlcmxheXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IC01O1xyXG5cclxufVxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBjb2x1bW5zICovXHJcblxyXG4udmlld3tcclxuICAgIGhlaWdodDogMTMwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xJTtcclxuXHJcbn1cclxuI2ludHJvIHtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDA7XHJcblxyXG59XHJcblxyXG5cclxuLndlbGNvbWUgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG4jaW50cm8ge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvaG9tZV9iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG5cclxuXHJcbn1cclxuXHJcbiAgLnJvd3tcclxuXHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgaGVpZ2h0IDogMTAwJTtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWRlY2t7XHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIC5jb2x1bW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6ICAzMC4zMyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxuXHJcblxyXG4gICAgfVxyXG4vKiBTdHlsZSB0aGUgY291bnRlciBjYXJkcyAqL1xyXG4uY2FyZCAge1xyXG5cclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDEzMywgMTI3LCAxMjcsIDAuMik7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzUlO1xyXG5cclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ud2VsY29tZXtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body >\r\n<div id=\"intro\" class=\"view\">\r\n\r\n  <div class=row>\r\n\r\n<!-- Card deck -->\r\n<div class=\"card-deck\">\r\n\r\n    <div class=\"column\">\r\n    <!-- Card -->\r\n    <div class=\"card mb-4  \">\r\n\r\n      <!--Card image-->\r\n      <div class=\"view overlay zoom\">\r\n        <img class=\"card-img-top\" src=\"assets/img/home/computers.jpg\" alt=\"Card image cap\">\r\n        <a href=\"#!\">\r\n          <div class=\"mask rgba-white-slight\"></div>\r\n        </a>\r\n      </div>\r\n\r\n      <!--Card content-->\r\n      <div class=\"card-body\">\r\n\r\n        <!--Title-->\r\n        <h4 class=\"card-title\">Learn About Computers</h4>\r\n        <!--Text-->\r\n        <p class=\"card-text\">Click the button to learn about Computers</p>\r\n        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\r\n        <button type=\"button\"  routerLink=\"/info-eng\" class=\"btn btn-primary\">Read More</button>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Card -->\r\n  </div>\r\n\r\n    <div class=\"column\">\r\n    <!-- Card -->\r\n    <div class=\"card mb-4  \">\r\n\r\n      <!--Card image-->\r\n      <div class=\"view overlay zoom\">\r\n        <img class=\"card-img-top\" src=\"assets/img/home/processors.jpg\" alt=\"Card image cap\">\r\n        <a href=\"#!\">\r\n          <div class=\"mask rgba-white-slight\"></div>\r\n        </a>\r\n      </div>\r\n\r\n      <!--Card content-->\r\n      <div class=\"card-body\">\r\n\r\n        <!--Title-->\r\n        <h4 class=\"card-title\">Learn About Processors</h4>\r\n        <!--Text-->\r\n        <p class=\"card-text\">Click the button to learn about Processors</p>\r\n        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\r\n        <button type=\"button\" routerLink=\"/processors\" class=\"btn btn-primary\">Read More</button>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Card -->\r\n  </div>\r\n\r\n    <div class=\"column\">\r\n    <!-- Card -->\r\n    <div class=\"card mb-4 \">\r\n\r\n      <!--Card image-->\r\n      <div class=\"view overlay zoom\">\r\n        <img class=\"card-img-top\" src=\"assets/img/home/compare.jpg\" alt=\"Card image cap\">\r\n        <a href=\"#!\">\r\n          <div class=\"mask rgba-white-slight\"></div>\r\n        </a>\r\n      </div>\r\n\r\n      <!--Card content-->\r\n      <div class=\"card-body\">\r\n\r\n        <!--Title-->\r\n        <h4 class=\"card-title\">Compare latest Proceesors</h4>\r\n        <!--Text-->\r\n        <p class=\"card-text\">Click the button to compare Proceesors</p>\r\n        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\r\n        <button type=\"button\" routerLink=\"/compare\" class=\"btn btn-primary\">Read More</button>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Card -->\r\n  </div>\r\n\r\n  <!-- Card deck -->\r\n\r\n</div>\r\n</div>\r\n<div class=\"welcome\">\r\n  <h1 style=\"color:white;\"> Welcome To Digi India</h1>\r\n  <h2 style=\"color:wheat;\">The One Place Destination to learn about computers...</h2>\r\n  <form >\r\n    <input type=\"text\" placeholder=\"Search..\" name=\"search\">\r\n    <button type=\"submit\">Submit</button>\r\n  </form>\r\n  <br>\r\n  <br>\r\n  <br>\r\n</div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info/info-eng/info-eng.component.css":
/*!******************************************************!*\
  !*** ./src/app/info/info-eng/info-eng.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Only for snippet */\r\n.sidenav-container {\r\n  height: 100%;\r\n  padding: 0 0 0 0;\r\n  margin: -50px ;\r\n }\r\n.sidenav {\r\n  height: 100%;\r\n  width: 18;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  margin-top: 60px ;\r\n\r\n\r\n}\r\n.sidenav a {\r\n  padding-left:10px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: rgb(0, 0, 0);\r\n  display: block;\r\n  transition: 0.3s;\r\n  left: 2;\r\n}\r\n.sidenav a:hover {\r\n  color: white;\r\n  background-color: rgba(77, 47, 243, 0.884);\r\n}\r\n.leftcolumn {\r\n  float: left;\r\n  width: 79%;\r\npadding: 14px 16px;\r\nmargin-top: 80px ;\r\n\r\n}\r\n.rightcolumn {\r\n  float: right;\r\n  width: 21%;\r\npadding: 14px 16px;\r\nmargin-top: 80px ;\r\n\r\n}\r\n.thumbnail {\r\n\r\n  width: 300px;\r\n  height: 240px;\r\n}\r\n.img{\r\n  width:100%;\r\n  height:100%;\r\n\r\n\r\n}\r\n.container-fluid {\r\n\r\n  color: #111;\r\n\r\n  height: 100%;\r\n\r\n}\r\n.bg-grey  {\r\n    background-color: #f6f6f6;\r\n    border-radius: 5px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n\r\n}\r\n.col-sm-4 {\r\n  text-align: center;\r\n\r\n}\r\n.info{\r\n\r\n  padding: 6px 6px 4px 20px;\r\n  font-size: 16px;\r\n\r\n}\r\n.Topic{\r\nbackground-color: rgb(165, 161, 161);\r\npadding-left: 0px;\r\n\r\n\r\n}\r\n.rightcolumn{\r\n\r\n  margin-top: 80px;\r\n}\r\n.row button{\r\n\r\n\r\n  float:right;\r\n\r\n\r\n}\r\n.data{\r\n\r\n  font: 22px;\r\n  float: right;\r\n  padding-left: 800px;\r\n\r\n\r\n}\r\n.bg-news {\r\n  background: linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);\r\n}\r\ntable{\r\n\r\n  font-size: 18px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLWVuZy9pbmZvLWVuZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmO0FBR0E7RUFDQyxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7OztBQUduQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsT0FBTztBQUNUO0FBRUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaLGtCQUFrQjtBQUNsQixpQkFBaUI7O0FBRWpCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaLGtCQUFrQjtBQUNsQixpQkFBaUI7O0FBRWpCO0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7OztBQUdiO0FBQ0E7O0VBRUUsV0FBVzs7RUFFWCxZQUFZOztBQUVkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRFQUE0RTs7O0FBR2hGO0FBQ0E7RUFDRSxrQkFBa0I7O0FBRXBCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGVBQWU7O0FBRWpCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsaUJBQWlCOzs7QUFHakI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0UsV0FBVzs7O0FBR2I7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjs7O0FBR3JCO0FBQ0E7RUFJRSw0REFBNEQ7QUFDOUQ7QUFDQTs7RUFFRSxlQUFlOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby1lbmcvaW5mby1lbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9ubHkgZm9yIHNuaXBwZXQgKi9cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAwIDAgMDtcclxuICBtYXJnaW46IC01MHB4IDtcclxuIH1cclxuXHJcblxyXG4gLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogNjBweCA7XHJcblxyXG5cclxufVxyXG5cclxuLnNpZGVuYXYgYSB7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbGVmdDogMjtcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDQ3LCAyNDMsIDAuODg0KTtcclxufVxyXG5cclxuLmxlZnRjb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA3OSU7XHJcbnBhZGRpbmc6IDE0cHggMTZweDtcclxubWFyZ2luLXRvcDogODBweCA7XHJcblxyXG59XHJcbi5yaWdodGNvbHVtbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAyMSU7XHJcbnBhZGRpbmc6IDE0cHggMTZweDtcclxubWFyZ2luLXRvcDogODBweCA7XHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcblxyXG59XHJcbi5jb250YWluZXItZmx1aWQge1xyXG5cclxuICBjb2xvcjogIzExMTtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG4uYmctZ3JleSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG5cclxufVxyXG4uY29sLXNtLTQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmluZm97XHJcblxyXG4gIHBhZGRpbmc6IDZweCA2cHggNHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG4uVG9waWN7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE2MSwgMTYxKTtcclxucGFkZGluZy1sZWZ0OiAwcHg7XHJcblxyXG5cclxufVxyXG4ucmlnaHRjb2x1bW57XHJcblxyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuLnJvdyBidXR0b257XHJcblxyXG5cclxuICBmbG9hdDpyaWdodDtcclxuXHJcblxyXG59XHJcbi5kYXRhe1xyXG5cclxuICBmb250OiAyMnB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6IDgwMHB4O1xyXG5cclxuXHJcbn1cclxuLmJnLW5ld3Mge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjZmY2NDY0IDQwJSwgIzVhYzhmYSA0MCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg3MGRlZywgI2ZmNjQ2NCA0MCUsICM1YWM4ZmEgNDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg3MGRlZywgI2ZmNjQ2NCA0MCUsICM1YWM4ZmEgNDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzBkZWcsICNmZjY0NjQgNDAlLCAjNWFjOGZhIDQwJSk7XHJcbn1cclxudGFibGV7XHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/info/info-eng/info-eng.component.html":
/*!*******************************************************!*\
  !*** ./src/app/info/info-eng/info-eng.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-news\">\n\n<div class=\"rightcolumn\">\n  <div>\n      <div  class=\"container\">\n\n        <table  class=\"data\">\n            <li  class=\"Topic\" >What is Computer</li>\n            <hr>\n            <li    class=\"Topic\">Types Of Computer</li>\n            <li    >PC (Personal Computer) </li>\n            <li   >Workstation</li>\n            <li  >Minicomputer </li>\n            <li   >Mainframe</li>\n            <li   >Supercomputer</li>\n            <hr>\n            <li  class=\"Topic\" >Computer Parts</li>\n            <li >Case</li>\n            <li >Desktop</li>\n            <li  >Key Board</li>\n            <li  >Mouse</li>\n            <li >UPS</li>\n            <hr>\n            <li  class=\"Topic\">Inside Computer</li>\n            <li  >Motherboard</li>\n            <li  >CPU/processor</li>\n            <li >RAM (random access memory)</li>\n            <li  >Hard drive</li>\n            <li  >Power supply unit</li>\n            <hr>\n            <li  class=\"Topic\">Buttons and Ports</li>\n\n\n        </table>\n      </div>\n\n      </div>\n\n\n</div>\n\n\n\n\n\n    <div class=\"leftcolumn\">\n\n\n\n\n          <div  class=\"bg-grey \">\n              <div class=\"row \">\n                  <div class=\"data\">\n                     <a class=\"btn btn-primary\"  routerLink=\"/info-eng\">English</a>\n                   <a class=\"btn btn-primary\" routerLink=\"/info-hin\">Hindi</a>\n                  <a class=\"btn btn-primary\" routerLink=\"/info-tel\">Telugu</a>\n\n                    </div>\n              </div>\n          </div>\n\n\n      <div class=\"container-fluid\">\n\n      </div>\n          <div id=\"pc\" class=\"bg-grey slideanim\">\n              <div class=\" info\">\n                <h1> What is Computer</h1>\n                <p>Computer is an electronic device that is designed to work with Information. The term computer is derived from the Latin term ‘computare’, this means to calculate or programmable machine. Computer can not do anything without a Program. It represents the decimal numbers through a string of binary digits. The Word 'Computer' usually refers to the Center Processor Unit plus Internal memory</p>\n                <p>Charles Babbage is called the \"Grand Father\" of the computer. The First mechanical computer designed by Charles Babbage was called Analytical Engine. It uses read-only memory in the form of punch cards.</p>\n                <p>Computer is an advanced electronic device that takes raw data as input from the user and processes these data under the control of set of instructions (called program) and gives the result (output) and saves output for the future use. It can process both numerical and non-numerical (arithmetic and logical) calculations.</p>\n              </div>\n\n            <div  class=\"text-center\">\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/comp_overview.jpg\" alt=\"personal_comp1\" class=\"img\" >\n\n                            </div>\n                            <p><strong>Computer Over View</strong></p>\n                        </div>\n\n                    </div>\n            </div>\n            </div>\n\n        <div id=\"types_of\" >\n          <h1 >Types Of Computers</h1><br>\n          <div id=\"pc\" class=\"bg-grey slideanim\">\n            <div class=\" info\"><h1> PC (Personal Computer)</h1>\n          <p>A personal computer is a general-purpose, cost-effective computer that is designed to be used by a single end-user. Every PC is dependent on microprocessor technology, which allows PC makers to set the entire central processing unit (CPU) on a single chip. </p>\n          <p>A PC can be a microcomputer, desktop computer, a laptop computer, a tablet PC or a handheld PC.</p>\n        </div>\n\n          <div  class=\"text-center\">\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"personal_comp1\" class=\"img\" >\n\n                          </div>\n                          <p><strong>Desktop PC</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp2.png\" alt=\"personal_comp2\" class=\"img\" >\n\n                          </div>\n                          <p><strong>Laptop PC</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp3.png\" alt=\"personal_comp3\" class=\"img\" >\n                            </div>\n                              <p><strong>Tablet PC</strong></p>\n\n                      </div>\n                  </div>\n          </div>\n          </div>\n\n\n      <div id=\"workstation\" class=\"bg-grey slideanim\">\n        <div class=\" info\">\n          <h1> Workstation</h1>\n          <p>A workstation (WS) is a computer dedicated to a user or group of users engaged in business or professional work. It includes one or more high resolution displays and a faster processor than a personal computer (PC). A workstation also has greater multitasking capability because of additional random access memory (RAM), drives and drive capacity. A workstation may also have a higher-speed graphics adapters and more connected peripherals.</p>\n          </div>\n          <div  class=\"text-center  \">\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/work_station1.png\" alt=\"personal_comp1\" class=\"img\">\n                        </div>\n                        <p><strong>Work Station 1</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/work_station2.png\" alt=\"personal_comp2\" class=\"img\">\n                        </div>\n                        <p><strong>Work Station 2</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/work_station3.png\" alt=\"personal_comp3\" class=\"img\">\n                        </div>\n                        <p><strong>Work Station 3</strong></p>\n                      </div>\n                  </div>\n          </div>\n      </div>\n      <div id=\"mini_computer\" class=\"bg-grey slideanim\">\n          <div class=\" info\">\n          <h1> Mini Computer</h1>\n          <p>A minicomputer is a type of computer that possesses most of the features and capabilities of a large computer but is smaller in physical size.</p>\n         </div>\n         <div  class=\"text-center\">\n              <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/mini_comp1.png\" alt=\"personal_comp1\" class=\"img\">\n                        </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/mini_comp2.png\" alt=\"personal_comp2\" class=\"img\">\n                        </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/mini_comp3.png\" alt=\"personal_comp3\" class=\"img\">\n                        </div>\n                      </div>\n              </div>\n              </div>\n          </div>\n\n      <div id=\"main_frame\" class=\"bg-grey slideanim\">\n        <div class=\" info\">\n          <h1> Main Frame</h1>\n          <p>Mainframes are a type of computer that generally are known for their large size, amount of storage, processing power and high level of reliability. They are primarily used by large organizations for mission-critical applications requiring high volumes of data processing. In general, there are a few characteristics of mainframes that are common among all mainframe vendors: Nearly all mainframes have the ability to run (or host) multiple operating systems. Mainframes can add or hot swap system capacity without disruption. Mainframes are designed to handle very high volume input and output (I/O) and emphasize throughput computing. A single mainframe can replace dozens or even hundreds of smaller servers.</p>\n         </div>\n\n              <div class=\"row text-center \">\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/main_frame1.png\" alt=\"personal_comp1\" class=\"img\">\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/main_frame2.png\" alt=\"personal_comp2\" class=\"img\">\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/main_frame3.png\" alt=\"personal_comp3\" class=\"img\">\n                    </div>\n                  </div>\n             </div>\n        </div>\n\n      <div id=\"super_computer\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1>Super computer</h1>\n          <p>A supercomputer is a type of computer that has the architecture, resources and components to achieve massive computing power. Today's supercomputers consists of tens of thousands of processors that are able to perform billions and trillions of calculations or computations per second.</p>\n         </div>\n\n              <div class=\"row text-center \">\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/super1.png\" alt=\"personal_comp1\" class=\"img\">\n                      <p><strong>Sunway TaihuLight</strong></p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/super2.png\" alt=\"personal_comp2\" class=\"img\">\n                      <p><strong>Param 8000</strong></p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/super3.png\" alt=\"personal_comp3\" class=\"img\">\n                      <p><strong>SIERA</strong></p>\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n          <div>\n          <h1 id=\"parts\" >Parts</h1><br>\n          <div id=\"case\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Case</h1>\n          <p>The computer case serves mainly as a way to physically mount and contain all of the actual components inside of a computer, like the motherboard, hard drive, optical drive, floppy disk drive, etc. They typically come bundled with a power supply.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/case.png\" alt=\"personal_comp1\" class=\"img\">\n                              <p><strong>CASE</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/case2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                              <p><strong>CASE 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/case3.jpeg\" alt=\"personal_comp1\" class=\"img\">\n                              <p><strong>CASE 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"desktop\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Desktop </h1>\n          <p>A desktop is a computer display area that represents the kinds of objects one might find on top of a physical desk, including documents, phone books, telephones, reference sources, writing and drawing tools, and project folders.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"Desktop1\" class=\"img\">\n                              <p><strong>Desktop</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"key_board\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> KeyBoard </h1>\n          <p>A keyboard is a peripheral device that enables a user to input text into a computer or any other electronic machinery. A keyboard is an input device and is the most basic way for the user to communicate with a computer.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/Keyboard.jpg\" alt=\"Desktop1\" class=\"img\">\n                              <p><strong>wired keyboard</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/Keyboard2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                              <p><strong>Wireless Keyboard</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/Keyboard3.jpg\" alt=\"personal_comp1\" class=\"img\">\n                              <p><strong>Apple Keyboard</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"mouse\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Mouse </h1>\n          <p>A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of a pointer on a display, which allows a smooth control of the graphical user interface.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/mouse1.jpg\" alt=\"Desktop1\" class=\"img\">\n                              <p><strong>wired Mouse</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/mouse2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                              <p><strong>Wireless Mouse</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/mouse3.jpg\" alt=\"personal_comp1\" class=\"img\">\n                              <p><strong>Gaming Mouse</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          </div>\n\n          <div id=\"ups\" class=\"bg-grey slideanim\">\n            <div class=\" info\">\n          <h1> UPS </h1>\n          <p>A device that provides battery backup when the electrical power fails or drops to an unacceptable voltage level.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ups1.jpg\" alt=\"ups1\" class=\"img\">\n                              <p><strong>UPS 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ups2.jpeg\" alt=\"ups2\" class=\"img\">\n                              <p><strong>UPS 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ups3.jpg\" alt=\"ups3\" class=\"img\">\n                              <p><strong>UPS 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"motherboard\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> MotherBoard </h1>\n          <p> A motherboard is one of the most essential parts of a computer system. It holds together many of the crucial components of a computer, including the central processing unit (CPU), memory and connectors for input and output devices.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/motherboard1.jpg\" alt=\"motherboard1\" class=\"img\">\n                              <p><strong>motherboard 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/motherboard2.jpg\" alt=\"motherboard2\" class=\"img\">\n                              <p><strong>motherboard 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/motherboard3.jpg\" alt=\"motherboard3\" class=\"img\">\n                              <p><strong>motherboard 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"cpu\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> CPU </h1>\n          <p> Random Access Memory is the memory or information storage in a computer that is used to store running programs and data for the programs. Data in the RAM can be read and written quickly in any order. Normally, the random access memory is in the form of computer chips.</p>\n\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/cpu1.jpg\" alt=\"cpu1\" class=\"img\">\n                              <p><strong>CPU 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/cpu3.jpg\" alt=\"cpu2\" class=\"img\">\n                              <p><strong>CPU 2</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          <div id=\"ram\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> RAM </h1>\n          <p> A central processing unit (CPU) is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logical, control and input/output (I/O) operations specified by the instructions.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ram1.jpg\" alt=\"ram1\" class=\"img\">\n                              <p><strong>ram 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ram2.jpg\" alt=\"ram2\" class=\"img\">\n                              <p><strong>ram 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ram3.jpg\" alt=\"ram3\" class=\"img\">\n                              <p><strong>ram 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          <div id=\"hd\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Hard Drive </h1>\n          <p> A hard disk drive is a non-volatile memory hardware device that permanently stores and retrieves data on a computer. Unlike RAM a hard drive keeps all stored information even with the power is turned off.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/hdrive1.jpg\" alt=\"Hard Drive\" class=\"img\">\n                              <p><strong>Hard Drive</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          <div id=\"ps\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Power Supply Unit </h1>\n          <p> A power supply unit converts mains AC to low-voltage regulated DC power for the internal components of a computer. Some power supplies have a manual switch for selecting input voltage, while others automatically adapt to the mains voltage.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ps1.jpg\" alt=\"Power Supply Unit\" class=\"img\">\n                              <p><strong>Power Supply Unit</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n  </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/info/info-eng/info-eng.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/info/info-eng/info-eng.component.ts ***!
  \*****************************************************/
/*! exports provided: InfoEngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoEngComponent", function() { return InfoEngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoEngComponent = /** @class */ (function () {
    function InfoEngComponent() {
    }
    InfoEngComponent.prototype.ngOnInit = function () {
    };
    InfoEngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-eng',
            template: __webpack_require__(/*! ./info-eng.component.html */ "./src/app/info/info-eng/info-eng.component.html"),
            styles: [__webpack_require__(/*! ./info-eng.component.css */ "./src/app/info/info-eng/info-eng.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoEngComponent);
    return InfoEngComponent;
}());



/***/ }),

/***/ "./src/app/info/info-hin/info-hin.component.css":
/*!******************************************************!*\
  !*** ./src/app/info/info-hin/info-hin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Only for snippet */\r\n.sidenav-container {\r\n  height: 100%;\r\n  padding: 0 0 0 0;\r\n  margin: -50px ;\r\n }\r\n.sidenav {\r\n  height: 100%;\r\n  width: 18;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  margin-top: 60px ;\r\n\r\n\r\n}\r\n.sidenav a {\r\n  padding-left:10px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: rgb(0, 0, 0);\r\n  display: block;\r\n  transition: 0.3s;\r\n  left: 2;\r\n}\r\n.sidenav a:hover {\r\n  color: white;\r\n  background-color: rgba(77, 47, 243, 0.884);\r\n}\r\n.leftcolumn {\r\n  float: left;\r\n  width: 79%;\r\npadding: 14px 16px;\r\nmargin-top: 80px ;\r\n\r\n}\r\n.rightcolumn {\r\n  float: right;\r\n  width: 21%;\r\npadding: 14px 16px;\r\nmargin-top: 80px ;\r\n\r\n}\r\n.thumbnail {\r\n\r\n  width: 300px;\r\n  height: 240px;\r\n}\r\n.img{\r\n  width:100%;\r\n  height:100%;\r\n\r\n\r\n}\r\n.container-fluid {\r\n\r\n  color: #111;\r\n\r\n  height: 100%;\r\n\r\n}\r\n.bg-grey  {\r\n    background-color: #f6f6f6;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n\r\n}\r\n.col-sm-4 {\r\n  text-align: center;\r\n\r\n}\r\n.info{\r\n\r\n  padding: 6px 6px 4px 20px;\r\n  font-size: 16px;\r\n\r\n}\r\n.Topic{\r\nbackground-color: rgb(165, 161, 161);\r\npadding-left: 0px;\r\n\r\n\r\n}\r\n.rightcolumn{\r\n\r\n  margin-top: 80px;\r\n}\r\n.row button{\r\n\r\n\r\n  float:right;\r\n\r\n\r\n}\r\n.data{\r\n\r\n  font: 22px;\r\n  float: right;\r\n  padding-left: 800px;\r\n\r\n\r\n}\r\ntable{\r\n\r\n  font-size: 18px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLWhpbi9pbmZvLWhpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmO0FBR0E7RUFDQyxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7OztBQUduQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsT0FBTztBQUNUO0FBRUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaLGtCQUFrQjtBQUNsQixpQkFBaUI7O0FBRWpCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaLGtCQUFrQjtBQUNsQixpQkFBaUI7O0FBRWpCO0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7OztBQUdiO0FBQ0E7O0VBRUUsV0FBVzs7RUFFWCxZQUFZOztBQUVkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDRFQUE0RTs7O0FBR2hGO0FBQ0E7RUFDRSxrQkFBa0I7O0FBRXBCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGVBQWU7O0FBRWpCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsaUJBQWlCOzs7QUFHakI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0UsV0FBVzs7O0FBR2I7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjs7O0FBR3JCO0FBQ0E7O0VBRUUsZUFBZTs7QUFFakIiLCJmaWxlIjoic3JjL2FwcC9pbmZvL2luZm8taGluL2luZm8taGluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPbmx5IGZvciBzbmlwcGV0ICovXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgbWFyZ2luOiAtNTBweCA7XHJcbiB9XHJcblxyXG5cclxuIC5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDE4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDYwcHggO1xyXG5cclxuXHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGxlZnQ6IDI7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCA0NywgMjQzLCAwLjg4NCk7XHJcbn1cclxuXHJcbi5sZWZ0Y29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNzklO1xyXG5wYWRkaW5nOiAxNHB4IDE2cHg7XHJcbm1hcmdpbi10b3A6IDgwcHggO1xyXG5cclxufVxyXG4ucmlnaHRjb2x1bW4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMjElO1xyXG5wYWRkaW5nOiAxNHB4IDE2cHg7XHJcbm1hcmdpbi10b3A6IDgwcHggO1xyXG5cclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcblxyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcblxyXG5cclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuXHJcbiAgY29sb3I6ICMxMTE7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuLmJnLWdyZXkgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHJcblxyXG59XHJcbi5jb2wtc20tNCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uaW5mb3tcclxuXHJcbiAgcGFkZGluZzogNnB4IDZweCA0cHggMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcbi5Ub3BpY3tcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTYxLCAxNjEpO1xyXG5wYWRkaW5nLWxlZnQ6IDBweDtcclxuXHJcblxyXG59XHJcbi5yaWdodGNvbHVtbntcclxuXHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4ucm93IGJ1dHRvbntcclxuXHJcblxyXG4gIGZsb2F0OnJpZ2h0O1xyXG5cclxuXHJcbn1cclxuLmRhdGF7XHJcblxyXG4gIGZvbnQ6IDIycHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctbGVmdDogODAwcHg7XHJcblxyXG5cclxufVxyXG50YWJsZXtcclxuXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/info/info-hin/info-hin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/info/info-hin/info-hin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rightcolumn\">\n    <div>\n        <div  class=\"container\">\n\n            <table  class=\"data\">\n                <li  class=\"Topic\" >What is Computer</li>\n                <hr>\n                <li    class=\"Topic\">Types Of Computer</li>\n                <li    >PC (Personal Computer) </li>\n                <li   >Workstation</li>\n                <li  >Minicomputer </li>\n                <li   >Mainframe</li>\n                <li   >Supercomputer</li>\n                <hr>\n                <li  class=\"Topic\" >Computer Parts</li>\n                <li >Case</li>\n                <li >Desktop</li>\n                <li  >Key Board</li>\n                <li  >Mouse</li>\n                <li >UPS</li>\n                <hr>\n                <li  class=\"Topic\">Inside Computer</li>\n                <li  >Motherboard</li>\n                <li  >CPU/processor</li>\n                <li >RAM (random access memory)</li>\n                <li  >Hard drive</li>\n                <li  >Power supply unit</li>\n                <hr>\n                <li  class=\"Topic\">Buttons and Ports</li>\n\n\n            </table>\n        </div>\n\n        </div>\n\n\n  </div>\n\n\n\n\n\n      <div class=\"leftcolumn\">\n\n\n\n\n            <div  class=\"bg-grey \">\n                <div class=\"row \">\n                    <div class=\"data\">\n                       <a class=\"btn btn-primary\"  routerLink=\"/info-eng\">English</a>\n                     <a class=\"btn btn-primary\" routerLink=\"/info-hin\">Hindi</a>\n                    <a class=\"btn btn-primary\" routerLink=\"/info-tel\">Telugu</a>\n\n                      </div>\n                </div>\n            </div>\n\n\n        <div class=\"container-fluid\">\n\n        </div>\n            <div id=\"pc\" class=\"bg-grey slideanim\">\n                <div class=\" info\">\n                  <h1> What is Computer</h1>\n                 <p> कंप्यूटर एक इलेक्ट्रॉनिक उपकरण है जिसे सूचना के साथ काम करने के लिए डिज़ाइन किया गया है। कंप्यूटर शब्द लैटिन शब्द computer कंप्यूटेर ’से लिया गया है, इसका मतलब है कि गणना करने योग्य मशीन या प्रोग्राम करने योग्य मशीन। बिना प्रोग्राम के कंप्यूटर कुछ भी नहीं कर सकता है। यह द्विआधारी अंकों की एक स्ट्रिंग के माध्यम से दशमलव संख्याओं का प्रतिनिधित्व करता है। शब्द 'कंप्यूटर' आमतौर पर केंद्र प्रोसेसर इकाई प्लस आंतरिक मेमोरी को संदर्भित करता है! </p>\n\n                 <p> चार्ल्स बैबेज को कंप्यूटर का \"ग्रैंड फादर\" कहा जाता है। चार्ल्स बैबेज द्वारा डिजाइन किए गए पहले मैकेनिकल कंप्यूटर को एनालिटिकल इंजन कहा जाता था। यह पंच कार्ड के रूप में रीड-ओनली मेमोरी का उपयोग करता है। </p>\n\n                 <p> कंप्यूटर एक उन्नत इलेक्ट्रॉनिक डिवाइस है जो उपयोगकर्ता से इनपुट के रूप में कच्चा डेटा लेता है और इन डेटा को निर्देशों के सेट (प्रोग्राम) के नियंत्रण में संसाधित करता है और परिणाम (आउटपुट) देता है और भविष्य के उपयोग के लिए आउटपुट बचाता है। यह संख्यात्मक और गैर-संख्यात्मक (अंकगणित और तार्किक) दोनों गणनाओं को संसाधित कर सकता है। </p>\n                </div>\n\n              <div  class=\"text-center\">\n                      <div class=\"row text-center \">\n                          <div class=\"col-sm-4\">\n                              <div class=\"thumbnail\">\n                                  <img src=\"assets/img/information-page/comp_overview.jpg\" alt=\"personal_comp1\" class=\"img\" >\n\n                              </div>\n                              <p><strong>Computer Over View</strong></p>\n                          </div>\n\n                      </div>\n              </div>\n              </div>\n\n          <div id=\"types_of\" >\n            <h1 >Types Of Computers</h1><br>\n            <div id=\"pc\" class=\"bg-grey slideanim\">\n              <div class=\" info\"><h1> PC (Personal Computer)</h1>\n\n<p> एक व्यक्तिगत कंप्यूटर एक सामान्य उद्देश्य, लागत प्रभावी कंप्यूटर है जिसे एकल एंड-यूज़र द्वारा उपयोग करने के लिए डिज़ाइन किया गया है। प्रत्येक पीसी माइक्रोप्रोसेसर तकनीक पर निर्भर है, जो पीसी निर्माताओं को एक चिप पर संपूर्ण केंद्रीय प्रसंस्करण इकाई (सीपीयू) सेट करने की अनुमति देता है। </ p>\n   <p>\n      एक पीसी एक माइक्रो कंप्यूटर, डेस्कटॉप कंप्यूटर, एक लैपटॉप कंप्यूटर, एक टैबलेट पीसी या एक हाथ में पीसी हो सकता है</p>\n          </div>\n\n            <div  class=\"text-center\">\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"personal_comp1\" class=\"img\" >\n\n                            </div>\n                            <p><strong>Desktop PC</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp2.png\" alt=\"personal_comp2\" class=\"img\" >\n\n                            </div>\n                            <p><strong>Laptop PC</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp3.png\" alt=\"personal_comp3\" class=\"img\" >\n                              </div>\n                                <p><strong>Tablet PC</strong></p>\n\n                        </div>\n                    </div>\n            </div>\n            </div>\n\n\n        <div id=\"workstation\" class=\"bg-grey slideanim\">\n          <div class=\" info\">\n            <h1> Workstation</h1>\n            <p>एक वर्कस्टेशन (WS) एक कंप्यूटर है जो उपयोगकर्ता या व्यवसाय या पेशेवर कार्य में लगे उपयोगकर्ताओं के समूह को समर्पित है। इसमें एक या अधिक उच्च रिज़ॉल्यूशन वाले डिस्प्ले और पर्सनल कंप्यूटर (पीसी) की तुलना में तेज़ प्रोसेसर शामिल है। अतिरिक्त यादृच्छिक अभिगम मेमोरी (RAM), ड्राइव और ड्राइव क्षमता के कारण वर्कस्टेशन में अधिक से अधिक मल्टीटास्किंग क्षमता होती है। एक कार्य केंद्र में उच्च गति वाले ग्राफिक्स एडेप्टर और अधिक जुड़े हुए बाह्य उपकरण भी हो सकते हैं।</p>\n            </div>\n            <div  class=\"text-center  \">\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/work_station1.png\" alt=\"personal_comp1\" class=\"img\">\n                          </div>\n                          <p><strong>Work Station 1</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/work_station2.png\" alt=\"personal_comp2\" class=\"img\">\n                          </div>\n                          <p><strong>Work Station 2</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/work_station3.png\" alt=\"personal_comp3\" class=\"img\">\n                          </div>\n                          <p><strong>Work Station 3</strong></p>\n                        </div>\n                    </div>\n            </div>\n        </div>\n        <div id=\"mini_computer\" class=\"bg-grey slideanim\">\n            <div class=\" info\">\n            <h1> Mini Computer</h1>\n            <p>एक मिनीकंप्यूटर एक प्रकार का कंप्यूटर होता है, जिसमें एक बड़े कंप्यूटर की अधिकांश विशेषताएं और क्षमताएं होती हैं, लेकिन भौतिक आकार में छोटा होता है।</p>\n           </div>\n           <div  class=\"text-center\">\n                <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/mini_comp1.png\" alt=\"personal_comp1\" class=\"img\">\n                          </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/mini_comp2.png\" alt=\"personal_comp2\" class=\"img\">\n                          </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/mini_comp3.png\" alt=\"personal_comp3\" class=\"img\">\n                          </div>\n                        </div>\n                </div>\n                </div>\n            </div>\n\n        <div id=\"main_frame\" class=\"bg-grey slideanim\">\n          <div class=\" info\">\n            <h1> Main Frame</h1>\n            <p>मेनफ्रेम एक प्रकार का कंप्यूटर है जो आम तौर पर अपने बड़े आकार, भंडारण की मात्रा, प्रसंस्करण शक्ति और उच्च स्तर की विश्वसनीयता के लिए जाना जाता है। वे मुख्य रूप से मिशन-महत्वपूर्ण अनुप्रयोगों के लिए बड़े संगठनों द्वारा उपयोग किए जाते हैं, जिन्हें डेटा प्रोसेसिंग के उच्च संस्करणों की आवश्यकता होती है। सामान्य तौर पर, मेनफ्रेम की कुछ विशेषताएं हैं जो सभी मेनफ्रेम विक्रेताओं के बीच आम हैं: लगभग सभी मेनफ्रेम में कई ऑपरेटिंग सिस्टम चलाने (या होस्ट) करने की क्षमता है। मेनफ्रेम विघटन के बिना स्वैप या हॉट स्वैप सिस्टम क्षमता को जोड़ सकते हैं। मेनफ्रेम बहुत उच्च मात्रा इनपुट और आउटपुट (I / O) को संभालने के लिए डिज़ाइन किए गए हैं और थ्रूपुट कंप्यूटिंग पर जोर देते हैं। एक एकल मेनफ्रेम दर्जनों या सैकड़ों छोटे सर्वरों को बदल सकता है।</p>     </div>\n\n                <div class=\"row text-center \">\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/main_frame1.png\" alt=\"personal_comp1\" class=\"img\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/main_frame2.png\" alt=\"personal_comp2\" class=\"img\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/main_frame3.png\" alt=\"personal_comp3\" class=\"img\">\n                      </div>\n                    </div>\n               </div>\n          </div>\n\n        <div id=\"super_computer\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1>Super computer</h1>\n            <p>एक सुपर कंप्यूटर एक प्रकार का कंप्यूटर है जिसमें विशाल कंप्यूटिंग शक्ति प्राप्त करने के लिए वास्तुकला, संसाधन और घटक होते हैं। आज के सुपर कंप्यूटरों में हजारों प्रोसेसर होते हैं जो प्रति सेकंड अरबों और खरबों की गणना या गणना करने में सक्षम होते हैं।</p>   </div>\n\n                <div class=\"row text-center \">\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/super1.png\" alt=\"personal_comp1\" class=\"img\">\n                        <p><strong>Sunway TaihuLight</strong></p>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/super2.png\" alt=\"personal_comp2\" class=\"img\">\n                        <p><strong>Param 8000</strong></p>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/super3.png\" alt=\"personal_comp3\" class=\"img\">\n                        <p><strong>SIERA</strong></p>\n                      </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n            <div>\n            <h1 id=\"parts\" >Parts</h1><br>\n            <div id=\"case\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Case</h1>\n            <p>कंप्यूटर केस मुख्य रूप से भौतिक रूप से माउंट करने के तरीके के रूप में कार्य करता है और इसमें कंप्यूटर के अंदर के सभी वास्तविक घटक होते हैं, जैसे कि मदरबोर्ड, हार्ड ड्राइव, ऑप्टिकल ड्राइव, फ्लॉपी डिस्क ड्राइव, आदि। ये आमतौर पर एक बिजली की आपूर्ति के साथ आते हैं।</p>   </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/case.png\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>CASE</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/case2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>CASE 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/case3.jpeg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>CASE 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"desktop\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Desktop </h1>\n            <p>एक डेस्कटॉप एक कंप्यूटर डिस्प्ले क्षेत्र है जो एक भौतिक डेस्क के शीर्ष पर मौजूद वस्तुओं के प्रकारों का प्रतिनिधित्व करता है, जिसमें दस्तावेज़, फोन बुक, टेलीफोन, संदर्भ स्रोत, लेखन और ड्राइंग टूल और प्रोजेक्ट फ़ोल्डर शामिल हैं।</p>      </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"Desktop1\" class=\"img\">\n                                <p><strong>Desktop</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"key_board\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> KeyBoard </h1>\n            <p>एक कीबोर्ड एक परिधीय उपकरण है जो उपयोगकर्ता को कंप्यूटर या किसी अन्य इलेक्ट्रॉनिक मशीनरी में टेक्स्ट इनपुट करने में सक्षम बनाता है। एक कीबोर्ड एक इनपुट डिवाइस है और उपयोगकर्ता के लिए कंप्यूटर के साथ संवाद करने का सबसे बुनियादी तरीका है।</p> </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/Keyboard.jpg\" alt=\"Desktop1\" class=\"img\">\n                                <p><strong>wired keyboard</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/Keyboard2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Wireless Keyboard</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/Keyboard3.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Apple Keyboard</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"mouse\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Mouse </h1>\n            <p>एक कंप्यूटर माउस एक हाथ से पकड़े जाने वाला सूचक उपकरण है जो सतह के सापेक्ष दो-आयामी गति का पता लगाता है। इस गति को आम तौर पर एक डिस्प्ले पर एक पॉइंटर की गति में अनुवाद किया जाता है, जो ग्राफिकल यूजर इंटरफेस के सुचारू नियंत्रण की अनुमति देता है।</p> </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/mouse1.jpg\" alt=\"Desktop1\" class=\"img\">\n                                <p><strong>wired Mouse</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/mouse2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Wireless Mouse</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/mouse3.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Gaming Mouse</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            </div>\n\n            <div id=\"ups\" class=\"bg-grey slideanim\">\n              <div class=\" info\">\n            <h1> UPS </h1>\n            <p>एक उपकरण जो विद्युत शक्ति विफल होने या अस्वीकार्य वोल्टेज स्तर तक गिर जाने पर बैटरी बैकअप प्रदान करता है।</p>\n           </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ups1.jpg\" alt=\"ups1\" class=\"img\">\n                                <p><strong>UPS 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ups2.jpeg\" alt=\"ups2\" class=\"img\">\n                                <p><strong>UPS 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ups3.jpg\" alt=\"ups3\" class=\"img\">\n                                <p><strong>UPS 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"motherboard\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> MotherBoard </h1>\n            <p>एक मदरबोर्ड कंप्यूटर सिस्टम के सबसे आवश्यक भागों में से एक है। यह कंप्यूटर के कई महत्वपूर्ण घटकों को एक साथ रखता है, जिसमें केंद्रीय प्रसंस्करण इकाई (सीपीयू), इनपुट और आउटपुट डिवाइस के लिए मेमोरी और कनेक्टर शामिल हैं।</p>  </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/motherboard1.jpg\" alt=\"motherboard1\" class=\"img\">\n                                <p><strong>motherboard 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/motherboard2.jpg\" alt=\"motherboard2\" class=\"img\">\n                                <p><strong>motherboard 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/motherboard3.jpg\" alt=\"motherboard3\" class=\"img\">\n                                <p><strong>motherboard 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"cpu\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> CPU </h1>\n            <p>रैंडम एक्सेस मेमोरी एक कंप्यूटर में मेमोरी या सूचना भंडारण है जिसका उपयोग कार्यक्रमों के लिए रनिंग प्रोग्राम और डेटा को स्टोर करने के लिए किया जाता है। रैम में डेटा किसी भी क्रम में जल्दी से पढ़ा और लिखा जा सकता है। सामान्य रूप से, रैंडम एक्सेस मेमोरी कंप्यूटर चिप्स के रूप में होती है।</p>\n\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/cpu1.jpg\" alt=\"cpu1\" class=\"img\">\n                                <p><strong>CPU 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/cpu3.jpg\" alt=\"cpu2\" class=\"img\">\n                                <p><strong>CPU 2</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            <div id=\"ram\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> RAM </h1>\n            <p>एक केंद्रीय प्रसंस्करण इकाई (सीपीयू) एक कंप्यूटर के भीतर इलेक्ट्रॉनिक सर्किटरी है जो निर्देशों द्वारा निर्दिष्ट बुनियादी अंकगणितीय, तार्किक, नियंत्रण और इनपुट / आउटपुट (I / O) संचालन को निष्पादित करके कंप्यूटर प्रोग्राम के निर्देशों को पूरा करती है।</p>\n           </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ram1.jpg\" alt=\"ram1\" class=\"img\">\n                                <p><strong>ram 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ram2.jpg\" alt=\"ram2\" class=\"img\">\n                                <p><strong>ram 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ram3.jpg\" alt=\"ram3\" class=\"img\">\n                                <p><strong>ram 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            <div id=\"hd\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Hard Drive </h1>\n            <p>एक हार्ड डिस्क ड्राइव एक गैर-वाष्पशील मेमोरी हार्डवेयर डिवाइस है जो कंप्यूटर पर डेटा को स्थायी रूप से संग्रहीत और पुनर्प्राप्त करता है। रैम के विपरीत हार्ड ड्राइव बिजली बंद होने के बावजूद सभी संग्रहीत जानकारी रखता है।</p>\n           </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/hdrive1.jpg\" alt=\"Hard Drive\" class=\"img\">\n                                <p><strong>Hard Drive</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            <div id=\"ps\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Power Supply Unit </h1>\n            <p>एक बिजली आपूर्ति इकाई कंप्यूटर के आंतरिक घटकों के लिए मेन एसी को लो-वोल्टेज विनियमित डीसी पावर में परिवर्तित करती है। कुछ बिजली की आपूर्ति में इनपुट वोल्टेज का चयन करने के लिए एक मैनुअल स्विच होता है, जबकि अन्य स्वचालित रूप से साधन वोल्टेज के लिए अनुकूल होते हैं।</p>   </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ps1.jpg\" alt=\"Power Supply Unit\" class=\"img\">\n                                <p><strong>Power Supply Unit</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n    </div>\n    </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/info/info-hin/info-hin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/info/info-hin/info-hin.component.ts ***!
  \*****************************************************/
/*! exports provided: InfoHinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoHinComponent", function() { return InfoHinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoHinComponent = /** @class */ (function () {
    function InfoHinComponent() {
    }
    InfoHinComponent.prototype.ngOnInit = function () {
    };
    InfoHinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-hin',
            template: __webpack_require__(/*! ./info-hin.component.html */ "./src/app/info/info-hin/info-hin.component.html"),
            styles: [__webpack_require__(/*! ./info-hin.component.css */ "./src/app/info/info-hin/info-hin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoHinComponent);
    return InfoHinComponent;
}());



/***/ }),

/***/ "./src/app/info/info-tel/info-tel.component.css":
/*!******************************************************!*\
  !*** ./src/app/info/info-tel/info-tel.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Only for snippet */\r\n.sidenav-container {\r\n  height: 100%;\r\n  padding: 0 0 0 0;\r\n  margin: -50px ;\r\n }\r\n.sidenav {\r\n  height: 100%;\r\n  width: 18;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  margin-top: 60px ;\r\n\r\n\r\n}\r\n.sidenav a {\r\n  padding-left:10px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: rgb(0, 0, 0);\r\n  display: block;\r\n  transition: 0.3s;\r\n  left: 2;\r\n}\r\n.sidenav a:hover {\r\n  color: white;\r\n  background-color: rgba(77, 47, 243, 0.884);\r\n}\r\n.leftcolumn {\r\n  float: left;\r\n  width: 79%;\r\npadding: 14px 16px;\r\nmargin-top: 80px ;\r\n\r\n}\r\n.rightcolumn {\r\n  float: right;\r\n  width: 21%;\r\npadding: 14px 16px;\r\nmargin-top: 80px ;\r\n\r\n}\r\n.thumbnail {\r\n\r\n  width: 300px;\r\n  height: 240px;\r\n}\r\n.img{\r\n  width:100%;\r\n  height:100%;\r\n\r\n\r\n}\r\n.container-fluid {\r\n\r\n  color: #111;\r\n\r\n  height: 100%;\r\n\r\n}\r\n.bg-grey  {\r\n    background-color: #f6f6f6;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n\r\n}\r\n.col-sm-4 {\r\n  text-align: center;\r\n\r\n}\r\n.info{\r\n\r\n  padding: 6px 6px 4px 20px;\r\n  font-size: 16px;\r\n}\r\n.Topic{\r\nbackground-color: rgb(165, 161, 161);\r\npadding-left: 0px;\r\n\r\n\r\n}\r\n.rightcolumn{\r\n\r\n  margin-top: 80px;\r\n}\r\n.row button{\r\n\r\n\r\n  float:right;\r\n\r\n\r\n}\r\n.data{\r\n\r\n  font: 22px;\r\n  float: right;\r\n  padding-left: 800px;\r\n\r\n\r\n}\r\ntable{\r\n\r\n  font-size: 18px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLXRlbC9pbmZvLXRlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmO0FBR0E7RUFDQyxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7OztBQUduQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsT0FBTztBQUNUO0FBRUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaLGtCQUFrQjtBQUNsQixpQkFBaUI7O0FBRWpCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaLGtCQUFrQjtBQUNsQixpQkFBaUI7O0FBRWpCO0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7OztBQUdiO0FBQ0E7O0VBRUUsV0FBVzs7RUFFWCxZQUFZOztBQUVkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDRFQUE0RTs7O0FBR2hGO0FBQ0E7RUFDRSxrQkFBa0I7O0FBRXBCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxpQkFBaUI7OztBQUdqQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxXQUFXOzs7QUFHYjtBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1COzs7QUFHckI7QUFDQTs7RUFFRSxlQUFlOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby10ZWwvaW5mby10ZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9ubHkgZm9yIHNuaXBwZXQgKi9cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAwIDAgMDtcclxuICBtYXJnaW46IC01MHB4IDtcclxuIH1cclxuXHJcblxyXG4gLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogNjBweCA7XHJcblxyXG5cclxufVxyXG5cclxuLnNpZGVuYXYgYSB7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbGVmdDogMjtcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDQ3LCAyNDMsIDAuODg0KTtcclxufVxyXG5cclxuLmxlZnRjb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA3OSU7XHJcbnBhZGRpbmc6IDE0cHggMTZweDtcclxubWFyZ2luLXRvcDogODBweCA7XHJcblxyXG59XHJcbi5yaWdodGNvbHVtbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAyMSU7XHJcbnBhZGRpbmc6IDE0cHggMTZweDtcclxubWFyZ2luLXRvcDogODBweCA7XHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcblxyXG59XHJcbi5jb250YWluZXItZmx1aWQge1xyXG5cclxuICBjb2xvcjogIzExMTtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG4uYmctZ3JleSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5cclxuXHJcbn1cclxuLmNvbC1zbS00IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5pbmZve1xyXG5cclxuICBwYWRkaW5nOiA2cHggNnB4IDRweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uVG9waWN7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE2MSwgMTYxKTtcclxucGFkZGluZy1sZWZ0OiAwcHg7XHJcblxyXG5cclxufVxyXG4ucmlnaHRjb2x1bW57XHJcblxyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuLnJvdyBidXR0b257XHJcblxyXG5cclxuICBmbG9hdDpyaWdodDtcclxuXHJcblxyXG59XHJcbi5kYXRhe1xyXG5cclxuICBmb250OiAyMnB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6IDgwMHB4O1xyXG5cclxuXHJcbn1cclxudGFibGV7XHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/info/info-tel/info-tel.component.html":
/*!*******************************************************!*\
  !*** ./src/app/info/info-tel/info-tel.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rightcolumn\">\n    <div>\n        <div  class=\"container\">\n\n            <table  class=\"data\">\n                <li  class=\"Topic\" >What is Computer</li>\n                <hr>\n                <li    class=\"Topic\">Types Of Computer</li>\n                <li    >PC (Personal Computer) </li>\n                <li   >Workstation</li>\n                <li  >Minicomputer </li>\n                <li   >Mainframe</li>\n                <li   >Supercomputer</li>\n                <hr>\n                <li  class=\"Topic\" >Computer Parts</li>\n                <li >Case</li>\n                <li >Desktop</li>\n                <li  >Key Board</li>\n                <li  >Mouse</li>\n                <li >UPS</li>\n                <hr>\n                <li  class=\"Topic\">Inside Computer</li>\n                <li  >Motherboard</li>\n                <li  >CPU/processor</li>\n                <li >RAM (random access memory)</li>\n                <li  >Hard drive</li>\n                <li  >Power supply unit</li>\n                <hr>\n                <li  class=\"Topic\">Buttons and Ports</li>\n\n\n            </table>\n        </div>\n\n        </div>\n\n\n  </div>\n\n\n\n\n\n      <div class=\"leftcolumn\">\n\n\n\n\n            <div  class=\"bg-grey \">\n                <div class=\"row \">\n                    <div class=\"data\">\n                       <a class=\"btn btn-primary\"  routerLink=\"/info-eng\">English</a>\n                     <a class=\"btn btn-primary\" routerLink=\"/info-hin\">Hindi</a>\n                    <a class=\"btn btn-primary\" routerLink=\"/info-tel\">Telugu</a>\n\n                      </div>\n                </div>\n            </div>\n\n\n        <div class=\"container-fluid\">\n\n        </div>\n            <div id=\"pc\" class=\"bg-grey slideanim\">\n                <div class=\" info\">\n                  <h1> What is Computer</h1>\n\n<p> కంప్యూటర్ అనేది ఒక ఎలక్ట్రానిక్ పరికరం, ఇది సమాచారంతో పని చేయడానికి రూపొందించబడింది. కంప్యూటర్ అనే పదాన్ని లాటిన్ పదం 'కంప్యుటరే' నుంచి తీసుకుంటారు, అనగా యంత్రాన్ని గణించడానికి లేదా ప్రోగ్రామ్ చేయదగినది. కంప్యూటర్ ప్రోగ్రామ్ లేకుండా ఏదైనా చేయలేరు. ఇది బైనరీ అంకెలు యొక్క స్ట్రింగ్ ద్వారా దశాంశ సంఖ్యలను సూచిస్తుంది. వర్డ్ 'కంప్యూటర్' సాధారణంగా సెంటర్ ప్రాసెసర్ యూనిట్ మరియు ఇంటర్నల్ మెమరీ ను సూచిస్తుంది</p>\n<p> చార్లెస్ బాబేజ్ను కంప్యూటర్ యొక్క \"గ్రాండ్ ఫాదర్\" అని పిలుస్తారు. చార్లెస్ బాబేజ్ రూపొందించిన మొట్టమొదటి యాంత్రిక కంప్యూటర్ను విశ్లేషణాత్మక ఇంజిన్ అంటారు. ఇది పంచ్ కార్డ్ రూపంలో చదవడానికి మాత్రమే మెమరీని ఉపయోగిస్తుంది. </p>\n  <p> కంప్యూటర్ ఒక ముందస్తు ఎలక్ట్రానిక్ పరికరం, ఇది ముడి సమాచారాన్ని యూజర్ నుండి ఇన్పుట్గా తీసుకుంటుంది మరియు ఈ డేటాను సూచనల సమితిలో (కార్యక్రమం అని పిలుస్తారు) నియంత్రిస్తుంది మరియు ఫలితాన్ని (అవుట్పుట్) ఇస్తుంది మరియు భవిష్యత్ వినియోగానికి అవుట్పుట్ను ఆదా చేస్తుంది. ఇది సంఖ్యా మరియు సంఖ్యా-కాని (అంకగణిత మరియు తార్కిక) గణనలను ప్రాసెస్ చేయవచ్చు. </p>\n              </div>\n\n              <div  class=\"text-center\">\n                      <div class=\"row text-center \">\n                          <div class=\"col-sm-4\">\n                              <div class=\"thumbnail\">\n                                  <img src=\"assets/img/information-page/comp_overview.jpg\" alt=\"personal_comp1\" class=\"img\" >\n\n                              </div>\n                              <p><strong>Computer Over View</strong></p>\n                          </div>\n\n                      </div>\n              </div>\n              </div>\n\n          <div id=\"types_of\" >\n            <h1 >Types Of Computers</h1><br>\n            <div id=\"pc\" class=\"bg-grey slideanim\">\n              <div class=\" info\"><h1> PC (Personal Computer)</h1>\n            <p>ఒక వ్యక్తిగత కంప్యూటర్ అనేది ఒక సాధారణ ప్రయోజనం, ఖర్చు-సమర్థవంతమైన కంప్యూటర్. ప్రతి PC మైక్రోప్రాసెసర్ టెక్నాలజీపై ఆధారపడి ఉంటుంది, ఇది PC తయారీదారులు మొత్తం కేంద్ర ప్రాసెసింగ్ యూనిట్ (CPU) ను ఒక్క చిప్లో సెట్ చేయడానికి అనుమతిస్తుంది. </p>\n            <p> ఒక PC ఒక మైక్రోకంప్యూటర్, డెస్క్టాప్ కంప్యూటర్, ల్యాప్టాప్ కంప్యూటర్, టాబ్లెట్ PC లేదా హ్యాండ్హెల్డ్ PC కావచ్చు.</p>\n          </div>\n\n            <div  class=\"text-center\">\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"personal_comp1\" class=\"img\" >\n\n                            </div>\n                            <p><strong>Desktop PC</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp2.png\" alt=\"personal_comp2\" class=\"img\" >\n\n                            </div>\n                            <p><strong>Laptop PC</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp3.png\" alt=\"personal_comp3\" class=\"img\" >\n                              </div>\n                                <p><strong>Tablet PC</strong></p>\n\n                        </div>\n                    </div>\n            </div>\n            </div>\n\n\n        <div id=\"workstation\" class=\"bg-grey slideanim\">\n          <div class=\" info\">\n            <h1> Workstation</h1>\n            <p> ఒక వర్క్స్టేషన్ (WS) వ్యాపార లేదా ప్రొఫెషనల్ పనిలో వాడుకలో ఉన్న యూజర్ లేదా సమూహ వినియోగదారునికి అంకితమైన కంప్యూటర్. ఇది వ్యక్తిగత కంప్యూటర్ (PC) కంటే ఒకటి లేదా అంతకన్నా ఎక్కువ రిజల్యూషన్ డిస్ప్లేలు మరియు వేగవంతమైన ప్రాసెసర్ను కలిగి ఉంటుంది. అదనపు రాండమ్ యాక్సెస్ మెమొరీ (RAM), డ్రైవులు మరియు డ్రైవ్ సామర్ధ్యం కారణంగా ఒక వర్క్స్టేషన్ కూడా ఎక్కువ బహువిధి సామర్ధ్యం కలిగివుంది. ఒక వర్క్స్టేషన్లో అధిక వేగం గ్రాఫిక్స్ ఎడాప్టర్లు మరియు మరింత అనుసంధానించబడిన పార్టులు ఉండవచ్చు. </p>\n            </div>\n            <div  class=\"text-center  \">\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/work_station1.png\" alt=\"personal_comp1\" class=\"img\">\n                          </div>\n                          <p><strong>Work Station 1</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/work_station2.png\" alt=\"personal_comp2\" class=\"img\">\n                          </div>\n                          <p><strong>Work Station 2</strong></p>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/work_station3.png\" alt=\"personal_comp3\" class=\"img\">\n                          </div>\n                          <p><strong>Work Station 3</strong></p>\n                        </div>\n                    </div>\n            </div>\n        </div>\n        <div id=\"mini_computer\" class=\"bg-grey slideanim\">\n            <div class=\" info\">\n            <h1> Mini Computer సూక్ష్మ కంప్యూటరు</h1>\n            <p>ఒక సూక్ష్మ కంప్యూటరు అనేది కంప్యూటర్ యొక్క ఒక రకం, ఇది ఒక పెద్ద కంప్యూటర్ యొక్క అనేక లక్షణాలను మరియు సామర్ధ్యాలను కలిగి ఉంటుంది, కానీ భౌతిక పరిమాణంలో చిన్నదిగా ఉంటుంది.</p>  </div>\n           <div  class=\"text-center\">\n                <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/mini_comp1.png\" alt=\"personal_comp1\" class=\"img\">\n                          </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/mini_comp2.png\" alt=\"personal_comp2\" class=\"img\">\n                          </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                            <img src=\"assets/img/information-page/mini_comp3.png\" alt=\"personal_comp3\" class=\"img\">\n                          </div>\n                        </div>\n                </div>\n                </div>\n            </div>\n\n        <div id=\"main_frame\" class=\"bg-grey slideanim\">\n          <div class=\" info\">\n            <h1> Main Frame</h1>\n            <p>మెయిన్ఫ్రేమ్స్ సాధారణంగా వారి పెద్ద పరిమాణం, నిల్వ పరిమాణం, ప్రాసెసింగ్ శక్తి మరియు అధిక స్థాయి విశ్వసనీయతకు ప్రసిద్ది చెందిన ఒక రకమైన కంప్యూటర్. వారు ప్రధానంగా డేటా ప్రాసెసింగ్ యొక్క అధిక వాల్యూమ్లను అవసరమైన మిషన్-క్లిష్టమైన అనువర్తనాలకు పెద్ద సంస్థలచే ఉపయోగిస్తారు. సాధారణంగా, అన్ని ప్రధాన మెయిన్ఫ్రేమ్ విక్రేతలలో సాధారణమైన కొన్ని ప్రధాన లక్షణాలు ఉన్నాయి: దాదాపు అన్ని మెయిన్ఫ్రేమ్లు బహుళ నిర్వహణ వ్యవస్థలను (లేదా హోస్ట్) అమలు చేసే సామర్థ్యాన్ని కలిగి ఉంటాయి. మెయిన్ఫ్రేమ్లు అంతరాయం లేకుండా వేడిగా ఉండే లేదా స్వాప్ వ్యవస్థ సామర్థ్యాన్ని జోడించవచ్చు. మెయిన్ఫ్రేమ్లు చాలా అధిక వాల్యూమ్ ఇన్పుట్ మరియు అవుట్పుట్ (I / O) నిర్వహించడానికి మరియు నిర్గమాంశ కంప్యూటింగ్ను నొక్కి రూపొందించబడ్డాయి. ఒకే మెయిన్ఫ్రేమ్ డజన్ల కొద్దీ లేదా వందల చిన్న సర్వర్లు కూడా భర్తీ చేయగలదు.</p>  </div>\n\n                <div class=\"row text-center \">\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/main_frame1.png\" alt=\"personal_comp1\" class=\"img\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/main_frame2.png\" alt=\"personal_comp2\" class=\"img\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/main_frame3.png\" alt=\"personal_comp3\" class=\"img\">\n                      </div>\n                    </div>\n               </div>\n          </div>\n\n        <div id=\"super_computer\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1>Super computer</h1>\n            <p>సూపర్ కంప్యూటరు అనేది ఒక కంప్యూటర్ రకం, ఇది భారీ కంప్యూటింగ్ శక్తిని సాధించడానికి వాస్తుశిల్పం, వనరులు మరియు భాగాలు. నేటి సూపర్కంప్యూటర్లు వేలాది మంది ప్రాసెసర్లు కలిగివుంటాయి, ఇది బిలియన్ల మరియు ట్రిలియన్ల లెక్కలు లేదా సెకనుకు గణనలను నిర్వహించగలవు.</p>   </div>\n\n                <div class=\"row text-center \">\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/super1.png\" alt=\"personal_comp1\" class=\"img\">\n                        <p><strong>Sunway TaihuLight</strong></p>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/super2.png\" alt=\"personal_comp2\" class=\"img\">\n                        <p><strong>Param 8000</strong></p>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/img/information-page/super3.png\" alt=\"personal_comp3\" class=\"img\">\n                        <p><strong>SIERA</strong></p>\n                      </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n            <div>\n            <h1 id=\"parts\" >Parts</h1><br>\n            <div id=\"case\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Case</h1>\n            <p>కంప్యూటర్ కేసు మదర్బోర్డు, హార్డు డ్రైవు, ఆప్టికల్ డ్రైవ్, ఫ్లాపీ డిస్క్ డ్రైవ్ మొదలైన వాటి వంటి భౌతికంగా మౌలిక సదుపాయాలను మౌంటు చేయటానికి మరియు కంప్యూటర్లోని అన్ని భాగాలను కలిగి ఉండటానికి ప్రధానంగా పనిచేస్తుంది. అవి సాధారణంగా విద్యుత్ సరఫరాతో కలిపి వస్తాయి.</p>    </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/case.png\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>CASE</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/case2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>CASE 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/case3.jpeg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>CASE 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"desktop\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Desktop </h1>\n            <p>ఒక డెస్క్టాప్ అనేది భౌతిక డెస్క్ పైన ఉన్న వస్తువులను ప్రతిబింబించే ఒక కంప్యూటర్ ప్రదర్శన ప్రాంతం, పత్రాలు, ఫోన్ పుస్తకాలు, టెలిఫోన్లు, రిఫరెన్స్ మూలాల, రచన మరియు చిత్రలేఖన సాధనాలు మరియు ప్రాజెక్ట్ ఫోల్డర్లతో సహా.</p>    </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"Desktop1\" class=\"img\">\n                                <p><strong>Desktop</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"key_board\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> KeyBoard </h1>\n            <p>కీబోర్డు అనేది ఒక ఇన్పుట్ టెక్స్ట్ కంప్యూటర్ లేదా ఏ ఇతర ఎలక్ట్రానిక్ యంత్రాంగంను అనుమతించే పరిధీయ పరికరం. ఒక కీబోర్డు ఒక ఇన్పుట్ పరికరం మరియు వినియోగదారు కంప్యూటర్తో కమ్యూనికేట్ చేయడానికి అత్యంత ప్రాధమిక మార్గం.</p>  </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/Keyboard.jpg\" alt=\"Desktop1\" class=\"img\">\n                                <p><strong>wired keyboard</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/Keyboard2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Wireless Keyboard</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/Keyboard3.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Apple Keyboard</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"mouse\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Mouse </h1>\n            <p>కంప్యూటర్ మౌస్ అనేది ఉపరితలంతో సంబంధించి ద్వి-మితీయ కదలికను గుర్తించే ఒక చేతితో పట్టుకున్న పాయింటింగ్ పరికరం. ఈ మోషన్ సాధారణంగా ఒక పాయింటర్ యొక్క చలనంలో ప్రదర్శనలో అనువదించబడింది, ఇది గ్రాఫికల్ యూజర్ ఇంటర్ఫేస్ యొక్క సున్నితమైన నియంత్రణను అనుమతిస్తుంది.</p>  </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/mouse1.jpg\" alt=\"Desktop1\" class=\"img\">\n                                <p><strong>wired Mouse</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/mouse2.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Wireless Mouse</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/mouse3.jpg\" alt=\"personal_comp1\" class=\"img\">\n                                <p><strong>Gaming Mouse</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            </div>\n\n            <div id=\"ups\" class=\"bg-grey slideanim\">\n              <div class=\" info\">\n            <h1> UPS </h1>\n            <p>బ్యాటరీ బ్యాకప్ అందించే ఒక పరికరం విద్యుత్ శక్తి విఫలమైతే లేదా అసమర్థమైన వోల్టేజ్ స్థాయికి పడిపోతుంది.</p>\n           </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ups1.jpg\" alt=\"ups1\" class=\"img\">\n                                <p><strong>UPS 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ups2.jpeg\" alt=\"ups2\" class=\"img\">\n                                <p><strong>UPS 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ups3.jpg\" alt=\"ups3\" class=\"img\">\n                                <p><strong>UPS 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"motherboard\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> MotherBoard </h1>\n            <p>కంప్యూటర్ వ్యవస్థ యొక్క అత్యంత ముఖ్యమైన భాగాలలో మదర్బోర్డు ఒకటి. ఇది సెంట్రల్ ప్రాసెసింగ్ యూనిట్ (CPU), మెమరీ మరియు ఇన్పుట్ మరియు అవుట్పుట్ పరికరాలకు అనుసంధకాలతో సహా ఒక కంప్యూటర్ యొక్క అనేక కీలకమైన అంశాలను కలిగి ఉంది.</p> </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/motherboard1.jpg\" alt=\"motherboard1\" class=\"img\">\n                                <p><strong>motherboard 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/motherboard2.jpg\" alt=\"motherboard2\" class=\"img\">\n                                <p><strong>motherboard 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/motherboard3.jpg\" alt=\"motherboard3\" class=\"img\">\n                                <p><strong>motherboard 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div id=\"cpu\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> CPU </h1>\n            <p>ఒక సెంట్రల్ ప్రాసెసింగ్ యూనిట్ (CPU) అనేది ఒక కంప్యూటర్లోని ఎలక్ట్రానిక్ సర్క్యూట్, ఇది కంప్యూటర్ ప్రోగ్రామ్ యొక్క సూచనలను నిర్వహిస్తుంది, ఇది ప్రాథమిక గణిత, తార్కిక, నియంత్రణ మరియు ఇన్పుట్ / అవుట్పుట్ (I / O) కార్యకలాపాలను సూచించడం ద్వారా సూచించబడుతుంది.</p>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/cpu1.jpg\" alt=\"cpu1\" class=\"img\">\n                                <p><strong>CPU 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/cpu3.jpg\" alt=\"cpu2\" class=\"img\">\n                                <p><strong>CPU 2</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            <div id=\"ram\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> RAM </h1>\n            <p>రాండమ్ యాక్సెస్ మెమరీ అనేది కంప్యూటర్లలో మెమరీ లేదా ఇన్ఫర్మేషన్ స్టోరేజ్, ఇది కార్యక్రమాలు కోసం నడుస్తున్న ప్రోగ్రామ్లను మరియు డేటాను నిల్వ చేయడానికి ఉపయోగించబడుతుంది. RAM లో డేటా ఏదైనా క్రమంలో త్వరగా చదవవచ్చు మరియు రాయవచ్చు. సాధారణంగా, రాండమ్ యాక్సెస్ మెమరీ కంప్యూటర్ చిప్స్ రూపంలో ఉంది.</p>  </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ram1.jpg\" alt=\"ram1\" class=\"img\">\n                                <p><strong>ram 1</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ram2.jpg\" alt=\"ram2\" class=\"img\">\n                                <p><strong>ram 2</strong></p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ram3.jpg\" alt=\"ram3\" class=\"img\">\n                                <p><strong>ram 3</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            <div id=\"hd\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Hard Drive </h1>\n            <p>ఒక హార్డ్ డిస్క్ డ్రైవ్ అనేది ఒక కాని అస్థిర మెమరీ హార్డ్వేర్ పరికరం, ఇది శాశ్వతంగా కంప్యూటర్లో డేటాను నిల్వ చేస్తుంది మరియు తిరిగి పొందుతుంది. RAM నుండి కాకుండా హార్డు డ్రైవు కూడా శక్తితో అన్ని నిల్వ సమాచారాన్ని ఉంచుతుంది.</p>       </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/hdrive1.jpg\" alt=\"Hard Drive\" class=\"img\">\n                                <p><strong>Hard Drive</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            <div id=\"ps\" class=\"bg-grey slideanim\"><div class=\" info\">\n            <h1> Power Supply Unit </h1>\n            <p>ఒక విద్యుత్ సరఫరా యూనిట్ మెయిన్స్ ఎసిస్ను కంప్యూటర్ యొక్క అంతర్గత భాగాల కోసం తక్కువ-వోల్టేజ్ నియంత్రిత DC శక్తికి మారుస్తుంది. కొన్ని విద్యుత్ సరఫరా ఇన్పుట్ వోల్టేజ్ని ఎంచుకోవడానికి మాన్యువల్ స్విచ్ కలిగి ఉంటుంది, అయితే ఇతరులు స్వయంచాలకంగా మెయిన్స్ వోల్టేజీకి అనుగుణంగా ఉంటాయి.</p>    </div>\n\n                    <div class=\"row text-center \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"thumbnail\">\n                                <img src=\"assets/img/information-page/ps1.jpg\" alt=\"Power Supply Unit\" class=\"img\">\n                                <p><strong>Power Supply Unit</strong></p>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n    </div>\n    </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/info/info-tel/info-tel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/info/info-tel/info-tel.component.ts ***!
  \*****************************************************/
/*! exports provided: InfoTelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTelComponent", function() { return InfoTelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoTelComponent = /** @class */ (function () {
    function InfoTelComponent() {
    }
    InfoTelComponent.prototype.ngOnInit = function () {
    };
    InfoTelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-tel',
            template: __webpack_require__(/*! ./info-tel.component.html */ "./src/app/info/info-tel/info-tel.component.html"),
            styles: [__webpack_require__(/*! ./info-tel.component.css */ "./src/app/info/info-tel/info-tel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoTelComponent);
    return InfoTelComponent;
}());



/***/ }),

/***/ "./src/app/information/information.component.css":
/*!*******************************************************!*\
  !*** ./src/app/information/information.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/information/information.component.html":
/*!********************************************************!*\
  !*** ./src/app/information/information.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/information/information.component.ts":
/*!******************************************************!*\
  !*** ./src/app/information/information.component.ts ***!
  \******************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/information/information.component.css")]
        })
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/interact/backcpu/backcpu.component.css":
/*!********************************************************!*\
  !*** ./src/app/interact/backcpu/backcpu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n  width:1000px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3QvYmFja2NwdS9iYWNrY3B1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJhY3QvYmFja2NwdS9iYWNrY3B1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWx7XHJcbiAgd2lkdGg6MTAwMHB4O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/interact/backcpu/backcpu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/interact/backcpu/backcpu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/interactive\"  class=\"btn btn-primary\">GO BACK</a>\n\n<div class=\"container\">\n                  <div class=\"card \">\n                      <h1 >Please Click on image to know that part</h1>\n\n                      <div class=\"view\">\n\n\n                          <div > <a>\n                              <img class= \"thumbnail\"src=\"assets/img/information-page/case_back1.jpg\" usemap=\"#Map\"/>\n                                   <map name=\"Map\" id=\"Map\">\n                                      <area   data-toggle=\"modal\" data-target=\"#myModal_ps\"  alt=\"PS port\" title=\"PS port\" href=\"#myModal_ps\" coords=\"153,540,268,600\" shape=\"rect\">\n                                      <area   data-toggle=\"modal\" data-target=\"#myModal_port\"  alt=\"Port\" title=\"Port\" href=\"#myModal_port\" coords=\"165,687,284,934\" shape=\"rect\">\n                                      <area   data-toggle=\"modal\" data-target=\"#myModal_fan\"  alt=\"FAN\" title=\"FAN\" href=\"#myModal_fan\" coords=\"497,244,152\" shape=\"circle\">\n\n\n\n                              </map>\n                                            </a></div>\n\n\n\n                    </div>\n\n                  </div>\n\n\n                <div class=\"modal fade\" id=\"myModal_ps\" role=\"dialog\" >\n                    <div class=\"modal-dialog modal-lg\">\n                    <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                           <h1>The PS Port</h1>\n                            <p>The PS/2 port is a 6-pin mini-DIN connector used for connecting keyboards and mice to a PC compatible computer system. </p>\n                    </div>\n                    <div class=\"modal-body\">\n                            <audio controls >\n                             <source src=\"assets/audio/ps.mp3\" type=\"audio/mpeg\">\n                              Your browser does not support the audio element.\n                            </audio>\n                    </div>\n                     </div>\n                     </div>\n                </div>\n\n                <div class=\"modal fade\" id=\"myModal_port\" role=\"dialog\">\n                      <div class=\"modal-dialog modal-lg\">\n                      <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                              <h1>VGA Port </h1>\n                              <p> A Video Graphics Array (VGA) connector is a three-row 15-pin DE-15 connector. The 15-pin VGA connector was provided on many video cards, computer monitors, laptop computers, projectors, and high definition television sets.</p>\n                       </div>\n                       <div class=\"modal-body\">\n                              <audio controls >\n\n                                  <source src=\"assets/audio/port.mp3\" type=\"audio/mpeg\">\n                                Your browser does not support the audio element.\n                                </audio>\n                        </div>\n                        </div>\n                        </div>\n                 </div>\n               <div class=\"modal fade\" id=\"myModal_fan\" role=\"dialog\">\n                     <div class=\"modal-dialog modal-lg\">\n                     <div class=\"modal-content\">\n                     <div class=\"modal-header\">\n                          <h1>The FAN</h1>\n                            <p>A computer fan is any fan inside, or attached to, a computer case used for active cooling.</p>\n                     </div>\n                     <div class=\"modal-body\">\n                            <audio controls >\n                             <source src=\"assets/audio/fan.mp3\" type=\"audio/mpeg\">\n                              Your browser does not support the audio element.\n                            </audio>\n                      </div>\n                     </div>\n                     </div>\n                </div>\n\n\n"

/***/ }),

/***/ "./src/app/interact/backcpu/backcpu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/interact/backcpu/backcpu.component.ts ***!
  \*******************************************************/
/*! exports provided: BackcpuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackcpuComponent", function() { return BackcpuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackcpuComponent = /** @class */ (function () {
    function BackcpuComponent() {
    }
    BackcpuComponent.prototype.ngOnInit = function () {
    };
    BackcpuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backcpu',
            template: __webpack_require__(/*! ./backcpu.component.html */ "./src/app/interact/backcpu/backcpu.component.html"),
            styles: [__webpack_require__(/*! ./backcpu.component.css */ "./src/app/interact/backcpu/backcpu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackcpuComponent);
    return BackcpuComponent;
}());



/***/ }),

/***/ "./src/app/interact/front/front.component.css":
/*!****************************************************!*\
  !*** ./src/app/interact/front/front.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\r\n    width:100%;\r\n    align: center;\r\n    text-align: center;\r\n}\r\n.view{\r\n  align-content: center;\r\n\r\n\r\n}\r\n.modal{\r\n  width:1000px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3QvZnJvbnQvZnJvbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UscUJBQXFCOzs7QUFHdkI7QUFDQTtFQUNFLFlBQVk7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9pbnRlcmFjdC9mcm9udC9mcm9udC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udmlld3tcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG4ubW9kYWx7XHJcbiAgd2lkdGg6MTAwMHB4O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/interact/front/front.component.html":
/*!*****************************************************!*\
  !*** ./src/app/interact/front/front.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/interactive\"  class=\"btn btn-primary\">GO BACK</a>\n\n<div class=\"container\">\n    <div class=\"card \">\n        <h1 >Please Click on image to know that part</h1>\n\n        <div class=\"view\">\n\n            <div > <a>\n                <img class= \"thumbnail\"src=\"assets/img/information-page/case_front1.jpg\" usemap=\"#Map\"/>\n                     <map name=\"Map\" id=\"Map\">\n                        <area   data-toggle=\"modal\" data-target=\"#myModal_usb\"  alt=\"USB\" title=\"USB\" href=\"#myModal_usb\" coords=\"520,220,548,284\" shape=\"rect\">\n                        <area   data-toggle=\"modal\" data-target=\"#myModal_cd\"  alt=\"CD\" title=\"CD\" href=\"#myModal_cd\" coords=\"444,80,469,330\" shape=\"rect\">\n                        <area   data-toggle=\"modal\" data-target=\"#myModal_aj\"  alt=\"Audio Jack\" title=\"Audio Jack\" href=\"#myModal_aj\" coords=\"540,150,560,200\" shape=\"rect\">\n\n\n                </map>\n                              </a></div>\n\n      </div>\n\n    </div>\n\n\n    <div class=\"modal fade\" id=\"myModal_usb\" role=\"dialog\" >\n        <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n               <h1>The USB</h1>\n                <p>A Universal Serial Bus (USB) is a common interface that enables communication between devices and a host controller such as a personal computer </p>\n        </div>\n        <div class=\"modal-body\">\n                <audio controls >\n                 <source src=\"assets/audio/usb.mp3\" type=\"audio/mpeg\">\n                  Your browser does not support the audio element.\n                </audio>\n        </div>\n         </div>\n         </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"myModal_cd\" role=\"dialog\">\n          <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n          <div class=\"modal-header\">\n                  <h1>CD Drive </h1>\n                  <p> CD drive is an optical disc drive that reads and writes all common CD and DVD formats.</p>\n           </div>\n           <div class=\"modal-body\">\n                  <audio controls >\n\n                      <source src=\"assets/audio/cd.mp3\" type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                    </audio>\n            </div>\n            </div>\n            </div>\n     </div>\n   <div class=\"modal fade\" id=\"myModal_aj\" role=\"dialog\">\n         <div class=\"modal-dialog modal-lg\">\n         <div class=\"modal-content\">\n         <div class=\"modal-header\">\n              <h1>The Audio Jack</h1>\n                <p>Audio jacks are found on many types of audio equipment and musical instruments that accept external sound sources.</p>\n         </div>\n         <div class=\"modal-body\">\n                <audio controls >\n                 <source src=\"assets/audio/aj.mp3\" type=\"audio/mpeg\">\n                  Your browser does not support the audio element.\n                </audio>\n          </div>\n         </div>\n         </div>\n    </div>\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/interact/front/front.component.ts":
/*!***************************************************!*\
  !*** ./src/app/interact/front/front.component.ts ***!
  \***************************************************/
/*! exports provided: FrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontComponent", function() { return FrontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrontComponent = /** @class */ (function () {
    function FrontComponent() {
    }
    FrontComponent.prototype.ngOnInit = function () {
    };
    FrontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-front',
            template: __webpack_require__(/*! ./front.component.html */ "./src/app/interact/front/front.component.html"),
            styles: [__webpack_require__(/*! ./front.component.css */ "./src/app/interact/front/front.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrontComponent);
    return FrontComponent;
}());



/***/ }),

/***/ "./src/app/interact/fullpc/fullpc.component.css":
/*!******************************************************!*\
  !*** ./src/app/interact/fullpc/fullpc.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\r\n  width:100%;\r\n  align: center;\r\n  text-align: center;\r\n}\r\n.view{\r\nalign-content: center;\r\n\r\n\r\n}\r\n.modal{\r\n  width:1000px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3QvZnVsbHBjL2Z1bGxwYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxxQkFBcUI7OztBQUdyQjtBQUNBO0VBQ0UsWUFBWTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2ludGVyYWN0L2Z1bGxwYy9mdWxscGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcblxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnZpZXd7XHJcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG59XHJcbi5tb2RhbHtcclxuICB3aWR0aDoxMDAwcHg7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/interact/fullpc/fullpc.component.html":
/*!*******************************************************!*\
  !*** ./src/app/interact/fullpc/fullpc.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <a routerLink=\"/interactive\"  class=\"btn btn-primary\">GO BACK</a>\n\n\n<div class=\"container\">\n    <div class=\"card \">\n        <h1 >Please Click on image to know that part</h1>\n        <!--Card image-->\n        <div class=\"view\">\n\n\n            <div > <a>\n                <img class= \"thumbnail\"src=\"assets/img/information-page/setup1.jpg\" usemap=\"#Map\"/>\n                     <map  name=\"Map\" id=\"Map\">\n                      <area  data-toggle=\"modal\" data-target=\"#myModal_case\"  alt=\"Case\" title=\"Case\" href=\"#myModal_case\" coords=\"62,433,230,55\" shape=\"rect\">\n                     <area   data-toggle=\"modal\" data-target=\"#myModal_mouse\"  alt=\"Mouse\"  title=\"Mouse\" href=\"#myModal_mouse\" coords=\"699,446,727,428,791,432,828,465,781,478,729,463\" shape=\"poly\">\n                      <area   data-toggle=\"modal\" data-target=\"#myModal_desktop\" alt=\"Desktop\" title=\"Desktop\" href=\"#myModal_desktop\" coords=\"265,320,674,87\" shape=\"rect\">\n                       <area   data-toggle=\"modal\" data-target=\"#myModal_keyborad\" alt=\"Key Board  \" title=\"Key Board\" href=\"#myModal_keyborad\" coords=\"   246,395,222,465,689,475,669,397\" shape=\"poly\">\n\n                </map>\n                              </a></div>\n\n        <!--Card content-->\n\n      </div>\n\n    </div>\n\n\n    <div id=\"myModal_desktop\" class=\"modal\">\n\n\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n\n            <h1>Desktop</h1>\n            <p>the working area of a computer screen regarded as a representation of a notional desktop and containing icons representing items such as files.</p>\n          </div>\n          <div class=\"modal-body\">\n            <audio controls >\n\n              <source src=\"assets/audio/desktop.mp3\" type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n            </audio>\n          </div>\n\n\n         </div>\n\n      </div>\n\n\n        <div id=\"myModal_case\" class=\"modal\">\n\n\n            <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\n              <h1>The case</h1>\n              <p>A computer case, also known as a computer chassis, tower, system unit, CPU (when referring to the desktop as a whole), or cabinet, is the enclosure that contains most of the components of a computer (usually excluding the display, keyboard, and mouse).</p>\n            </div>\n            <div class=\"modal-body\">\n              <audio controls >\n\n                <source src=\"assets/audio/case.mp3\" type=\"audio/mpeg\">\n              Your browser does not support the audio element.\n              </audio>\n            </div>\n\n\n            </div>\n\n          </div>\n\n\n          <div id=\"myModal_mouse\" class=\"modal\">\n\n\n            <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\n              <h1>The Mouse</h1>\n              <p>The mouse, sometimes called a pointer, is a hand-operated input device used to manipulate objects on a computer screen.</p>\n            </div>\n            <div class=\"modal-body\">\n              <audio controls >\n\n                <source src=\"assets/audio/mouse.mp3\" type=\"audio/mpeg\">\n              Your browser does not support the audio element.\n              </audio>\n            </div>\n\n\n            </div>\n\n          </div>\n\n\n\n          <div id=\"myModal_keyborad\" class=\"modal\">\n\n\n            <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\n              <h1>The KeyBoard</h1>\n              <p>The keyboard is the piece of computer hardware used to input text, characters, and other commands into a computer or similar device.</p>\n            </div>\n            <div class=\"modal-body\">\n              <audio controls >\n\n                <source src=\"assets/audio/keyboard.mp3\" type=\"audio/mpeg\">\n              Your browser does not support the audio element.\n              </audio>\n            </div>\n\n\n          </div>\n          </div>\n\n        </div>\n"

/***/ }),

/***/ "./src/app/interact/fullpc/fullpc.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/interact/fullpc/fullpc.component.ts ***!
  \*****************************************************/
/*! exports provided: FullpcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullpcComponent", function() { return FullpcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullpcComponent = /** @class */ (function () {
    function FullpcComponent() {
    }
    FullpcComponent.prototype.ngOnInit = function () {
    };
    FullpcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullpc',
            template: __webpack_require__(/*! ./fullpc.component.html */ "./src/app/interact/fullpc/fullpc.component.html"),
            styles: [__webpack_require__(/*! ./fullpc.component.css */ "./src/app/interact/fullpc/fullpc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FullpcComponent);
    return FullpcComponent;
}());



/***/ }),

/***/ "./src/app/interact/insidecpu/insidecpu.component.css":
/*!************************************************************!*\
  !*** ./src/app/interact/insidecpu/insidecpu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\r\n  width:100%;\r\n  align: center;\r\n  text-align: center;\r\n}\r\n.view{\r\nalign-content: center;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3QvaW5zaWRlY3B1L2luc2lkZWNwdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxxQkFBcUI7OztBQUdyQiIsImZpbGUiOiJzcmMvYXBwL2ludGVyYWN0L2luc2lkZWNwdS9pbnNpZGVjcHUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcblxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnZpZXd7XHJcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/interact/insidecpu/insidecpu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/interact/insidecpu/insidecpu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <a routerLink=\"/interactive\"  class=\"btn btn-primary\">GO BACK</a>\n<div class=\"container\">\n    <div class=\"card \">\n        <h1 >Please Click on image to know that part</h1>\n\n        <div class=\"view\">\n\n\n            <div > <a>\n                <img class= \"thumbnail\"src=\"assets/img/information-page/inside_case.jpg\" usemap=\"#Map\"/>\n                     <map name=\"Map\" id=\"Map\">\n                        <area   data-toggle=\"modal\" data-target=\"#myModal_ram\"  alt=\"RAM\" title=\"RAM\" href=\"#myModal_ram\" coords=\"336,180,400,360\" shape=\"rect\">\n                        <area   data-toggle=\"modal\" data-target=\"#myModal_cpu\"  alt=\"CPU\" title=\"CPU\" href=\"#myModal_cpu\" coords=\"196,124,304,281\" shape=\"rect\">\n                        <area   data-toggle=\"modal\" data-target=\"#myModal_psu\"  alt=\"PSU\" title=\"PSU\" href=\"#myModal_psu\" coords=\"199,660,90\" shape=\"circle\">\n\n\n\n                </map>\n                              </a></div>\n                            </div>\n      </div>\n\n\n\n    <div class=\"modal fade\" id=\"myModal_ram\" role=\"dialog\" >\n        <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n               <h1>The RAM </h1>\n                <p>RAM (Random Access Memory) is the hardware in a computing device where the operating system (OS), application programs and data in current use are kept so they can be quickly reached by the device's processor.</p>\n        </div>\n        <div class=\"modal-body\">\n                <audio controls >\n                 <source src=\"assets/audio/ram.mp3\" type=\"audio/mpeg\">\n                  Your browser does not support the audio element.\n                </audio>\n        </div>\n         </div>\n         </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"myModal_cpu\" role=\"dialog\">\n          <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n          <div class=\"modal-header\">\n                  <h1>The CPU </h1>\n                  <p> CPU is the abbreviation for central processing unit. the CPU is the brains of the computer where most calculations take place</p>\n           </div>\n           <div class=\"modal-body\">\n                  <audio controls >\n\n                      <source src=\"assets/audio/cpu.mp3\" type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                    </audio>\n            </div>\n            </div>\n            </div>\n     </div>\n   <div class=\"modal fade\" id=\"myModal_psu\" role=\"dialog\">\n         <div class=\"modal-dialog modal-lg\">\n         <div class=\"modal-content\">\n         <div class=\"modal-header\">\n              <h1>The PSU</h1>\n                <p>A power supply unit (or PSU) converts mains AC to low-voltage regulated DC power for the internal components of a computer.</p>\n         </div>\n         <div class=\"modal-body\">\n                <audio controls >\n                 <source src=\"assets/audio/psu.mp3\" type=\"audio/mpeg\">\n                  Your browser does not support the audio element.\n                </audio>\n          </div>\n         </div>\n         </div>\n    </div>\n\n        </div>\n\n"

/***/ }),

/***/ "./src/app/interact/insidecpu/insidecpu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/interact/insidecpu/insidecpu.component.ts ***!
  \***********************************************************/
/*! exports provided: InsidecpuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsidecpuComponent", function() { return InsidecpuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InsidecpuComponent = /** @class */ (function () {
    function InsidecpuComponent() {
    }
    InsidecpuComponent.prototype.ngOnInit = function () {
    };
    InsidecpuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insidecpu',
            template: __webpack_require__(/*! ./insidecpu.component.html */ "./src/app/interact/insidecpu/insidecpu.component.html"),
            styles: [__webpack_require__(/*! ./insidecpu.component.css */ "./src/app/interact/insidecpu/insidecpu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InsidecpuComponent);
    return InsidecpuComponent;
}());



/***/ }),

/***/ "./src/app/interactive/interactive.component.css":
/*!*******************************************************!*\
  !*** ./src/app/interactive/interactive.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n\r\n  width: 30%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-color: #f4511e;\r\n\r\n  text-align: center;\r\n  margin-right: 30px;\r\n  margin-left: 300px;\r\n  height: 350px;\r\n  width:400px;\r\n  margin-top: 70px;\r\n\r\n}\r\n\r\n\r\n\r\n.thumbnail img {\r\nwidth: 100%;\r\nheight: 200px;\r\n padding : 20px 20px;\r\n\r\n}\r\n\r\n\r\n\r\n.row .thumbnail{\r\n  width:100%;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n.bg-purple {\r\n  color: #fff;\r\n  background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3RpdmUvaW50ZXJhY3RpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsNEVBQTRFO0VBQzVFLHFCQUFxQjs7RUFFckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCOzs7O0FBSUE7QUFDQSxXQUFXO0FBQ1gsYUFBYTtDQUNaLG1CQUFtQjs7QUFFcEI7Ozs7QUFFQTtFQUNFLFVBQVU7OztBQUdaOzs7O0FBQ0E7RUFDRSxXQUFXO0VBSVgsMklBQTJJO0FBQzdJIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJhY3RpdmUvaW50ZXJhY3RpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG5cclxuICB3aWR0aDogMzAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjQ1MTFlO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi50aHVtYm5haWwgaW1nIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMjAwcHg7XHJcbiBwYWRkaW5nIDogMjBweCAyMHB4O1xyXG5cclxufVxyXG5cclxuLnJvdyAudGh1bWJuYWlse1xyXG4gIHdpZHRoOjEwMCU7XHJcblxyXG5cclxufVxyXG4uYmctcHVycGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNhNjBhZjMgNDAlLCByZ2JhKDAsIDAsIDAsIDApIDMwJSksIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LWNvcm5lciBhdCAwJSAwJSwgIzdhMDBjYyA3MCUsICNjMDNmZmYgNzAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjYTYwYWYzIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpLCAtby1yYWRpYWwtZ3JhZGllbnQoZmFydGhlc3QtY29ybmVyIGF0IDAlIDAlLCAjN2EwMGNjIDcwJSwgI2MwM2ZmZiA3MCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDExMGRlZywgI2E2MGFmMyA0MCUsIHJnYmEoMCwgMCwgMCwgMCkgMzAlKSwgLW1vei1yYWRpYWwtZ3JhZGllbnQoZmFydGhlc3QtY29ybmVyIGF0IDAlIDAlLCAjN2EwMGNjIDcwJSwgI2MwM2ZmZiA3MCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNhNjBhZjMgNDAlLCByZ2JhKDAsIDAsIDAsIDApIDMwJSksIHJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1jb3JuZXIgYXQgMCUgMCUsICM3YTAwY2MgNzAlLCAjYzAzZmZmIDcwJSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/interactive/interactive.component.html":
/*!********************************************************!*\
  !*** ./src/app/interactive/interactive.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div >\n\n<div class=\"row thumbnail bg-purple\">\n          <div class=\" card  col-sm-2\">\n              <div>\n                <h2>Case Front</h2>\n\n             <div>\n                <img  src=\"assets/img/information-page/setup1.jpg\" alt=\"Card image\" >\n                <div >\n\n\n                    <a routerLink=\"/app-fullpc\"  class=\"btn btn-primary\">CLICK HERE</a>\n                </div>\n              </div>\n             </div>\n        </div>\n        <div class=\" card  col-sm-2 \">\n              <div>\n                <h2>CPU</h2>\n\n              <div  >\n                <img  src=\"assets/img/information-page/case_front1.jpg\" alt=\"Card image\" style=\"width:100%\">\n                <div >\n\n\n                    <a routerLink=\"/app-front\"  class=\"btn btn-primary\">CLICK HERE</a>\n                </div>\n              </div>\n             </div>\n        </div>\n\n </div>\n\n<div class=\"row thumbnail bg-purple\">\n        <div class=\" card  col-sm-2 \">\n              <div>\n                <h2>Case Back</h2>\n\n              <div  >\n                <img  src=\"assets/img/information-page/case_back1.jpg\" alt=\"Card image\" style=\"width:40%\" >\n                <div >\n\n\n                  <a routerLink=\"/app-backcpu\"  class=\"btn btn-primary\">CLICK HERE</a>\n                </div>\n              </div>\n             </div>\n      </div>\n        <div class=\" card  col-sm-2\">\n              <div>\n                <h2>Inside Case</h2>\n\n             <div>\n                <img  src=\"assets/img/information-page/inside_case.jpg\" alt=\"Card image\"  style=\"width:100%\">\n                <div >\n\n\n                  <a routerLink=\"/app-insidecpu\"  class=\"btn btn-primary\">CLICK HERE</a>\n                </div>\n              </div>\n             </div>\n        </div>\n\n\n\n </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/interactive/interactive.component.ts":
/*!******************************************************!*\
  !*** ./src/app/interactive/interactive.component.ts ***!
  \******************************************************/
/*! exports provided: InteractiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveComponent", function() { return InteractiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InteractiveComponent = /** @class */ (function () {
    function InteractiveComponent() {
    }
    InteractiveComponent.prototype.ngOnInit = function () {
    };
    InteractiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interactive',
            template: __webpack_require__(/*! ./interactive.component.html */ "./src/app/interactive/interactive.component.html"),
            styles: [__webpack_require__(/*! ./interactive.component.css */ "./src/app/interactive/interactive.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InteractiveComponent);
    return InteractiveComponent;
}());



/***/ }),

/***/ "./src/app/lang.directive.ts":
/*!***********************************!*\
  !*** ./src/app/lang.directive.ts ***!
  \***********************************/
/*! exports provided: LangDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangDirective", function() { return LangDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LangDirective = /** @class */ (function () {
    function LangDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    LangDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appLAng]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], LangDirective);
    return LangDirective;
}());



/***/ }),

/***/ "./src/app/list-information/pc/pc.component.css":
/*!******************************************************!*\
  !*** ./src/app/list-information/pc/pc.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaW5mb3JtYXRpb24vcGMvcGMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-information/pc/pc.component.html":
/*!*******************************************************!*\
  !*** ./src/app/list-information/pc/pc.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pc works!\n</p>\n"

/***/ }),

/***/ "./src/app/list-information/pc/pc.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-information/pc/pc.component.ts ***!
  \*****************************************************/
/*! exports provided: PcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcComponent", function() { return PcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PcComponent = /** @class */ (function () {
    function PcComponent() {
    }
    PcComponent.prototype.ngOnInit = function () {
    };
    PcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pc',
            template: __webpack_require__(/*! ./pc.component.html */ "./src/app/list-information/pc/pc.component.html"),
            styles: [__webpack_require__(/*! ./pc.component.css */ "./src/app/list-information/pc/pc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PcComponent);
    return PcComponent;
}());



/***/ }),

/***/ "./src/app/list-information/typesofcomputer/typesofcomputer.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/list-information/typesofcomputer/typesofcomputer.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaW5mb3JtYXRpb24vdHlwZXNvZmNvbXB1dGVyL3R5cGVzb2Zjb21wdXRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-information/typesofcomputer/typesofcomputer.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/list-information/typesofcomputer/typesofcomputer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  typesofcomputer works!\n</p>\n"

/***/ }),

/***/ "./src/app/list-information/typesofcomputer/typesofcomputer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/list-information/typesofcomputer/typesofcomputer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TypesofcomputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesofcomputerComponent", function() { return TypesofcomputerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypesofcomputerComponent = /** @class */ (function () {
    function TypesofcomputerComponent() {
    }
    TypesofcomputerComponent.prototype.ngOnInit = function () {
    };
    TypesofcomputerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typesofcomputer',
            template: __webpack_require__(/*! ./typesofcomputer.component.html */ "./src/app/list-information/typesofcomputer/typesofcomputer.component.html"),
            styles: [__webpack_require__(/*! ./typesofcomputer.component.css */ "./src/app/list-information/typesofcomputer/typesofcomputer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypesofcomputerComponent);
    return TypesofcomputerComponent;
}());



/***/ }),

/***/ "./src/app/list-information/workstation/workstation.component.css":
/*!************************************************************************!*\
  !*** ./src/app/list-information/workstation/workstation.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaW5mb3JtYXRpb24vd29ya3N0YXRpb24vd29ya3N0YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-information/workstation/workstation.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/list-information/workstation/workstation.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  workstation works!\n</p>\n"

/***/ }),

/***/ "./src/app/list-information/workstation/workstation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/list-information/workstation/workstation.component.ts ***!
  \***********************************************************************/
/*! exports provided: WorkstationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkstationComponent", function() { return WorkstationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkstationComponent = /** @class */ (function () {
    function WorkstationComponent() {
    }
    WorkstationComponent.prototype.ngOnInit = function () {
    };
    WorkstationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workstation',
            template: __webpack_require__(/*! ./workstation.component.html */ "./src/app/list-information/workstation/workstation.component.html"),
            styles: [__webpack_require__(/*! ./workstation.component.css */ "./src/app/list-information/workstation/workstation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkstationComponent);
    return WorkstationComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n\r\n  width:100%;\r\n\r\n}\r\n\r\nnav{\r\n  background-color: rgb(30, 20, 56);\r\n  width:100%;\r\n  font-size: 26px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  -webkit-text-decoration-line: none;\r\n          text-decoration-line: none;\r\n  padding-left: 50px;\r\n\r\n\r\n\r\n}\r\n\r\n.logo{\r\n\r\n      float: left;\r\n      background-color: rgb(30, 20, 56);\r\n      padding-right:800px;\r\n      font-weight: bold;\r\n      font-size: 28px;\r\n  }\r\n\r\na:hover {\r\n      background: rgb(241, 240, 241);\r\n\r\n\r\n\r\n  }\r\n\r\n.dropdown-menu a{\r\n  background:rgb(98, 49, 231);\r\n\r\n\r\n }\r\n\r\n.dropdown-menu a:hover{\r\n  background: rgb(241, 240, 241);\r\n\r\n\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxVQUFVOztBQUVaOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixlQUFlO0VBQ2Ysd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGtCQUFrQjs7OztBQUlwQjs7QUFFQTs7TUFFTSxXQUFXO01BQ1gsaUNBQWlDO01BQ2pDLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZUFBZTtFQUNuQjs7QUFJQTtNQUNJLDhCQUE4Qjs7OztFQUlsQzs7QUFHRDtFQUNDLDJCQUEyQjs7O0NBRzVCOztBQUVBO0VBQ0MsOEJBQThCOzs7Q0FHL0IiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuXHJcbiAgd2lkdGg6MTAwJTtcclxuXHJcbn1cclxuXHJcbm5hdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDIwLCA1Nik7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5sb2dve1xyXG5cclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjAsIDU2KTtcclxuICAgICAgcGFkZGluZy1yaWdodDo4MDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MCwgMjQxKTtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuIC5kcm9wZG93bi1tZW51IGF7XHJcbiAgYmFja2dyb3VuZDpyZ2IoOTgsIDQ5LCAyMzEpO1xyXG5cclxuXHJcbiB9XHJcblxyXG4gLmRyb3Bkb3duLW1lbnUgYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDAsIDI0MSk7XHJcblxyXG5cclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n    <div class=\"navbar-fixed-top\">\r\n      <nav>    <div>\r\n          <ul class=\"logo\">\r\n          <li><a routerLink=\"/home\" >Digi India</a></li>\r\n          </ul>\r\n        </div>\r\n           <span class=\"fill-remaining-space\"></span>\r\n          <ul >\r\n          <li><a routerLink=\"/home\">Home</a></li>\r\n          <li><a routerLink=\"/{{test}}\">Information</a></li>\r\n          <li><a routerLink=\"/processors\">Processors</a></li>\r\n          <li><a routerLink=\"/interactive\">Interactive</a></li>\r\n          <li><a routerLink=\"/compare\">Compare</a></li>\r\n\r\n          </ul>\r\n        </nav>\r\n\r\n         </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
        this.lang = "Language";
        this.test = "info-eng";
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent.prototype.onclick1 = function () {
        this.lang = 'English';
        this.test = 'info-eng';
    };
    MainNavComponent.prototype.onclick2 = function () {
        this.lang = 'Hindi';
        this.test = 'info-hin';
    };
    MainNavComponent.prototype.onclick3 = function () {
        this.lang = 'Telugu';
        this.test = 'info-tel';
    };
    MainNavComponent.prototype.onclick4 = function () {
        this.lang = 'Malayalam';
        this.test = 'info-eng';
    };
    MainNavComponent.prototype.onclick5 = function () {
        this.lang = 'Bengali';
        this.test = 'info-eng';
    };
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/processor_companies/amd/amd.component.css":
/*!***********************************************************!*\
  !*** ./src/app/processor_companies/amd/amd.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.MultiCarousel\r\n{\r\n  float: left;\r\n  overflow: hidden;\r\n  padding: 15px;\r\n  width: 100%;\r\n  position:relative;\r\n }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner {\r\n  transition: 1s ease all;\r\n  float: left; }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item {\r\n   float: left;}\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item > div {\r\n  text-align: center;\r\n   padding:10px;\r\n    margin:10px;\r\n    background:#f1f1f1;\r\n     color:#666;}\r\n\r\n\r\n.MultiCarousel .leftLst, .MultiCarousel .rightLst {\r\n  position:absolute;\r\n   border-radius:60%;\r\n   top:calc(60% - 20px); }\r\n\r\n\r\n.MultiCarousel .leftLst { left:0; }\r\n\r\n\r\n.MultiCarousel .rightLst { right:0; }\r\n\r\n\r\n.MultiCarousel .leftLst.over, .MultiCarousel .rightLst.over {\r\n   pointer-events: none;\r\n   background:#ccc; }\r\n\r\n\r\n.img {\r\n\r\n    max-height:120px;\r\n\r\n\r\n   }\r\n\r\n\r\n.card{\r\n\r\n    height: 280x;\r\n\r\n   }\r\n\r\n\r\n.card-image-top{\r\n\r\n  max-height: 60%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n.modal{\r\n  width:1000px;\r\n  height:1500px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzc29yX2NvbXBhbmllcy9hbWQvYW1kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7OztBQUdEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBRTs7O0FBR2Y7R0FDRyxXQUFXLENBQUM7OztBQUdmO0VBQ0Usa0JBQWtCO0dBQ2pCLFlBQVk7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0tBQ2pCLFVBQVUsQ0FBQzs7O0FBQ2hCO0VBQ0UsaUJBQWlCO0dBQ2hCLGlCQUFpQjtHQUNqQixvQkFBb0IsRUFBRTs7O0FBQ3pCLDBCQUEwQixNQUFNLEVBQUU7OztBQUNsQywyQkFBMkIsT0FBTyxFQUFFOzs7QUFFcEM7R0FDRyxvQkFBb0I7R0FDcEIsZUFBZSxFQUFFOzs7QUFJakI7O0lBRUMsZ0JBQWdCOzs7R0FHakI7OztBQUNBOztJQUVDLFlBQVk7O0dBRWI7OztBQUtIOztFQUVFLGVBQWU7RUFDZixXQUFXOztBQUViOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzc29yX2NvbXBhbmllcy9hbWQvYW1kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLk11bHRpQ2Fyb3VzZWxcclxue1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuIH1cclxuXHJcblxyXG4uTXVsdGlDYXJvdXNlbCAuTXVsdGlDYXJvdXNlbC1pbm5lciB7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XHJcbiAgZmxvYXQ6IGxlZnQ7IH1cclxuXHJcblxyXG4uTXVsdGlDYXJvdXNlbCAuTXVsdGlDYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgIGZsb2F0OiBsZWZ0O31cclxuXHJcblxyXG4uTXVsdGlDYXJvdXNlbCAuTXVsdGlDYXJvdXNlbC1pbm5lciAuaXRlbSA+IGRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcclxuICAgICBjb2xvcjojNjY2O31cclxuLk11bHRpQ2Fyb3VzZWwgLmxlZnRMc3QsIC5NdWx0aUNhcm91c2VsIC5yaWdodExzdCB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6NjAlO1xyXG4gICB0b3A6Y2FsYyg2MCUgLSAyMHB4KTsgfVxyXG4uTXVsdGlDYXJvdXNlbCAubGVmdExzdCB7IGxlZnQ6MDsgfVxyXG4uTXVsdGlDYXJvdXNlbCAucmlnaHRMc3QgeyByaWdodDowOyB9XHJcblxyXG4uTXVsdGlDYXJvdXNlbCAubGVmdExzdC5vdmVyLCAuTXVsdGlDYXJvdXNlbCAucmlnaHRMc3Qub3ZlciB7XHJcbiAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICBiYWNrZ3JvdW5kOiNjY2M7IH1cclxuXHJcblxyXG5cclxuICAgLmltZyB7XHJcblxyXG4gICAgbWF4LWhlaWdodDoxMjBweDtcclxuXHJcblxyXG4gICB9XHJcbiAgIC5jYXJke1xyXG5cclxuICAgIGhlaWdodDogMjgweDtcclxuXHJcbiAgIH1cclxuXHJcblxyXG5cclxuXHJcbi5jYXJkLWltYWdlLXRvcHtcclxuXHJcbiAgbWF4LWhlaWdodDogNjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLm1vZGFse1xyXG4gIHdpZHRoOjEwMDBweDtcclxuICBoZWlnaHQ6MTUwMHB4O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/processor_companies/amd/amd.component.html":
/*!************************************************************!*\
  !*** ./src/app/processor_companies/amd/amd.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<div class=\"container\">\r\n    <h1>AMD</h1>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"MultiCarousel\" data-items=\"1,2,3,4\" data-slide=\"2\" id=\"MultiCarousel\"  data-interval=\"1000\">\r\n            <div class=\"MultiCarousel-inner\">\r\n\r\n                <div class=\"item\">\r\n                    <div class=\"card\">\r\n                      <img src=\"assets/img/processors/intel3i.jpg\" alt=\"img\" class=\"card-image-top\">\r\n                      <div class=\"card-body\">\r\n                        <h3>Intel 3i</h3>\r\n                        <mat-card-actions>\r\n                          <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\r\n                          <button mat-button>COMPARE</button>\r\n                        </mat-card-actions>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"item\">\r\n                    <div class=\"card\">\r\n                      <img src=\"assets/img/processors/intel5i.jpg\" alt=\"img\" class=\"card-image-top\">\r\n                      <div class=\"card-body\">\r\n                        <h3>Intel 5i</h3>\r\n\r\n                        <mat-card-actions>\r\n                          <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\r\n                          <button mat-button>COMPARE</button>\r\n                        </mat-card-actions>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"item\">\r\n                      <div class=\"card\">\r\n                        <img src=\"assets/img/processors/intel7i.jpg\" alt=\"img\" class=\"card-image-top\">\r\n                        <div class=\"card-body\">\r\n                          <h3>Intel 5i</h3>\r\n\r\n                          <mat-card-actions>\r\n                              <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\r\n                              <button mat-button>COMPARE</button>\r\n                            </mat-card-actions>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  <div class=\"item\">\r\n                    <div class=\"card\">\r\n                      <img src=\"assets/img/processors/intel9i.jpg\" alt=\"img\" class=\"card-image-top\">\r\n                      <div class=\"card-body\">\r\n                        <h3>Intel 9i</h3>\r\n\r\n                        <mat-card-actions>\r\n                          <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\r\n                          <button mat-button>COMPARE</button>\r\n                        </mat-card-actions>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"item\">\r\n                    <div class=\"card\">\r\n                      <img src=\"assets/img/processors/xeon.jpg\" alt=\"img\" class=\"card-image-top\">\r\n                      <div class=\"card-body\">\r\n                        <h3>Intel xeon</h3>\r\n\r\n                        <mat-card-actions>\r\n                          <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\r\n                          <button mat-button>COMPARE</button>\r\n                        </mat-card-actions>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"item\">\r\n                    <div class=\"card\">\r\n                      <img src=\"assets/img/processors/itanium.jpg\" alt=\"img\" class=\"card-image-top\">\r\n                      <div class=\"card-body\">\r\n                        <h3>Intel itanium</h3>\r\n\r\n                        <mat-card-actions>\r\n                          <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\r\n                          <button mat-button>COMPARE</button>\r\n                        </mat-card-actions>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"item\">\r\n                    <div class=\"card\">\r\n                      <img src=\"assets/img/processors/intel5i.jpg\" alt=\"img\" class=\"card-image-top\">\r\n                      <div class=\"card-body\">\r\n                        <h3>Intel 5i</h3>\r\n\r\n                        <mat-card-actions>\r\n                          <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\r\n                          <button mat-button>COMPARE</button>\r\n                        </mat-card-actions>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  </div>\r\n\r\n            <button class=\"btn btn-primary leftLst\"><</button>\r\n            <button class=\"btn btn-primary rightLst\">></button>\r\n        </div>\r\n\t</div>\r\n\r\n\t</div>\r\n\r\n\r\n\r\n\r\n   <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Modal Header</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form #processorForm=\"ngForm\" >\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>#</th>\r\n                        <th>Specifications</th>\r\n\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                      <tr>\r\n                      <th scope=\"row\"> pid </th>\r\n                      <td  >{{processorService.selectedProcessor.pid}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                      <th scope=\"row\">num_of_cores</th>\r\n                      <td>{{processorService.selectedProcessor.num_of_cores}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                      <th scope=\"row\">l1_Cache</th>\r\n                      <td>{{processorService.selectedProcessor.l1_Cache}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                      <th scope=\"row\">l2_Cache</th>\r\n                      <td>{{processorService.selectedProcessor.l2_Cache}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                      <th scope=\"row\">product_code</th>\r\n                      <td>{{processorService.selectedProcessor.product_code}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                      <th scope=\"row\">microarchitecture</th>\r\n                      <td>{{processorService.selectedProcessor.microarchitecture}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                      <th scope=\"row\">designed_by </th>\r\n\r\n                      <td>{{processorService.selectedProcessor.designed_by}}</td>\r\n\r\n\r\n                      </tr>\r\n                      <tr>\r\n                             <th scope=\"row\">max_CPU_clock_rate</th>\r\n                             <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\r\n\r\n                      </tr>\r\n                          <tr>\r\n                               <th scope=\"row\">min_feature_size</th>\r\n                               <td>{{processorService.selectedProcessor.min_feature_size}}</td>\r\n\r\n                          </tr>\r\n                          <tr>\r\n                               <th scope=\"row\">instruction_set</th>\r\n                               <td>{{processorService.selectedProcessor.instruction_set}}</td>\r\n\r\n                          </tr>\r\n                          <tr>\r\n                               <th scope=\"row\">predecessor</th>\r\n                               <td>{{processorService.selectedProcessor.successor}}</td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                                 <th scope=\"row\">successor </th>\r\n                                 <td>{{processorService.selectedProcessor.designed_by}}</td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                                 <th scope=\"row\">gpu</th>\r\n                                 <td>{{processorService.selectedProcessor.gpu}}</td>\r\n                            </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n\r\n\r\n              </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/processor_companies/amd/amd.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/processor_companies/amd/amd.component.ts ***!
  \**********************************************************/
/*! exports provided: AMDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMDComponent", function() { return AMDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/processor.service */ "./src/app/shared/processor.service.ts");



var AMDComponent = /** @class */ (function () {
    function AMDComponent(processorService) {
        this.processorService = processorService;
    }
    AMDComponent.prototype.ngOnInit = function () {
    };
    AMDComponent.prototype.onView = function (_id, form) {
        var _this = this;
        this.processorService.getProcessor(_id).subscribe(function (res) {
            _this.processorService.selectedProcessor = res;
        });
    };
    AMDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amd',
            template: __webpack_require__(/*! ./amd.component.html */ "./src/app/processor_companies/amd/amd.component.html"),
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]],
            styles: [__webpack_require__(/*! ./amd.component.css */ "./src/app/processor_companies/amd/amd.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]])
    ], AMDComponent);
    return AMDComponent;
}());



/***/ }),

/***/ "./src/app/processor_companies/apple/apple.component.css":
/*!***************************************************************!*\
  !*** ./src/app/processor_companies/apple/apple.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.MultiCarousel\r\n{\r\n  float: left;\r\n  overflow: hidden;\r\n  padding: 15px;\r\n  width: 100%;\r\n  position:relative;\r\n }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner {\r\n  transition: 1s ease all;\r\n  float: left; }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item {\r\n   float: left;}\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item > div {\r\n  text-align: center;\r\n   padding:10px;\r\n    margin:10px;\r\n    background:#f1f1f1;\r\n     color:#666;}\r\n\r\n\r\n.MultiCarousel .leftLst, .MultiCarousel .rightLst {\r\n  position:absolute;\r\n   border-radius:60%;\r\n   top:calc(60% - 20px); }\r\n\r\n\r\n.MultiCarousel .leftLst { left:0; }\r\n\r\n\r\n.MultiCarousel .rightLst { right:0; }\r\n\r\n\r\n.MultiCarousel .leftLst.over, .MultiCarousel .rightLst.over {\r\n   pointer-events: none;\r\n   background:#ccc; }\r\n\r\n\r\n.img {\r\n\r\n    max-height:120px;\r\n\r\n\r\n   }\r\n\r\n\r\n.card{\r\n\r\n    height: 280x;\r\n\r\n   }\r\n\r\n\r\n.card-image-top{\r\n\r\n  max-height: 60%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzc29yX2NvbXBhbmllcy9hcHBsZS9hcHBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCOzs7QUFHRDtFQUNFLHVCQUF1QjtFQUN2QixXQUFXLEVBQUU7OztBQUdmO0dBQ0csV0FBVyxDQUFDOzs7QUFHZjtFQUNFLGtCQUFrQjtHQUNqQixZQUFZO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtLQUNqQixVQUFVLENBQUM7OztBQUNoQjtFQUNFLGlCQUFpQjtHQUNoQixpQkFBaUI7R0FDakIsb0JBQW9CLEVBQUU7OztBQUN6QiwwQkFBMEIsTUFBTSxFQUFFOzs7QUFDbEMsMkJBQTJCLE9BQU8sRUFBRTs7O0FBRXBDO0dBQ0csb0JBQW9CO0dBQ3BCLGVBQWUsRUFBRTs7O0FBSWpCOztJQUVDLGdCQUFnQjs7O0dBR2pCOzs7QUFDQTs7SUFFQyxZQUFZOztHQUViOzs7QUFNSDs7RUFFRSxlQUFlO0VBQ2YsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3Nvcl9jb21wYW5pZXMvYXBwbGUvYXBwbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uTXVsdGlDYXJvdXNlbFxyXG57XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gfVxyXG5cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5NdWx0aUNhcm91c2VsLWlubmVyIHtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlIGFsbDtcclxuICBmbG9hdDogbGVmdDsgfVxyXG5cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5NdWx0aUNhcm91c2VsLWlubmVyIC5pdGVtIHtcclxuICAgZmxvYXQ6IGxlZnQ7fVxyXG5cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5NdWx0aUNhcm91c2VsLWlubmVyIC5pdGVtID4gZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgYmFja2dyb3VuZDojZjFmMWYxO1xyXG4gICAgIGNvbG9yOiM2NjY7fVxyXG4uTXVsdGlDYXJvdXNlbCAubGVmdExzdCwgLk11bHRpQ2Fyb3VzZWwgLnJpZ2h0THN0IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgYm9yZGVyLXJhZGl1czo2MCU7XHJcbiAgIHRvcDpjYWxjKDYwJSAtIDIwcHgpOyB9XHJcbi5NdWx0aUNhcm91c2VsIC5sZWZ0THN0IHsgbGVmdDowOyB9XHJcbi5NdWx0aUNhcm91c2VsIC5yaWdodExzdCB7IHJpZ2h0OjA7IH1cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5sZWZ0THN0Lm92ZXIsIC5NdWx0aUNhcm91c2VsIC5yaWdodExzdC5vdmVyIHtcclxuICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgIGJhY2tncm91bmQ6I2NjYzsgfVxyXG5cclxuXHJcblxyXG4gICAuaW1nIHtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OjEyMHB4O1xyXG5cclxuXHJcbiAgIH1cclxuICAgLmNhcmR7XHJcblxyXG4gICAgaGVpZ2h0OiAyODB4O1xyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jYXJkLWltYWdlLXRvcHtcclxuXHJcbiAgbWF4LWhlaWdodDogNjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/processor_companies/apple/apple.component.html":
/*!****************************************************************!*\
  !*** ./src/app/processor_companies/apple/apple.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container\">\n    <h1>APPLE</h1>\n\t<div class=\"row\">\n\t\t<div class=\"MultiCarousel\" data-items=\"1,2,3,4\" data-slide=\"2\" id=\"MultiCarousel\"  data-interval=\"1000\">\n            <div class=\"MultiCarousel-inner\">\n\n                <div class=\"item\">\n                    <div class=\"card\">\n                      <img src=\"assets/img/processors/apple7.jpg\" alt=\"img\" class=\"card-image-top\">\n                      <div class=\"card-body\">\n                        <h3>Apple A7</h3>\n\n                         <mat-card-actions>\n                              <button (click)=\"onView('5cc28c2ad9c3c750c4583449',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                              <button mat-button>COMPARE</button>\n                            </mat-card-actions>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\">\n                    <div class=\"card\">\n                      <img src=\"assets/img/processors/apple8.jpg\" alt=\"img\" class=\"card-image-top\">\n                      <div class=\"card-body\">\n                        <h3>Apple A8</h3>\n\n                         <mat-card-actions>\n                              <button (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                              <button mat-button>COMPARE</button>\n                            </mat-card-actions>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\">\n                    <div class=\"card\">\n                      <img src=\"assets/img/processors/apple9.jpg\" alt=\"img\" class=\"card-image-top\">\n                      <div class=\"card-body\">\n                        <h3>Apple A9</h3>\n\n                         <mat-card-actions>\n                              <button (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                              <button mat-button>COMPARE</button>\n                            </mat-card-actions>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\">\n                    <div class=\"card\">\n                      <img src=\"assets/img/processors/apple10.jpg\" alt=\"img\" class=\"card-image-top\">\n                      <div class=\"card-body\">\n                        <h3>Apple A10</h3>\n\n                         <mat-card-actions>\n                              <button (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                              <button mat-button>COMPARE</button>\n                            </mat-card-actions>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\">\n                    <div class=\"card\">\n                      <img src=\"assets/img/processors/apple11.jpg\" alt=\"img\" class=\"card-image-top\">\n                      <div class=\"card-body\">\n                        <h3>Apple A11</h3>\n\n                         <mat-card-actions>\n                              <button (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                              <button mat-button>COMPARE</button>\n                            </mat-card-actions>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\">\n                    <div class=\"card\">\n                      <img src=\"assets/img/processors/apple12.jpg\" alt=\"img\" class=\"card-image-top\">\n                      <div class=\"card-body\">\n                        <h3>Apple A12</h3>\n\n                         <mat-card-actions>\n                              <button (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                              <button mat-button>COMPARE</button>\n                            </mat-card-actions>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\">\n                    <div class=\"card\">\n                      <img src=\"assets/img/processors/apple7.jpg\" alt=\"img\" class=\"card-image-top\">\n                      <div class=\"card-body\">\n                        <h3>Apple A7</h3>\n\n                         <mat-card-actions>\n                              <button (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                              <button mat-button>COMPARE</button>\n                            </mat-card-actions>\n                      </div>\n                    </div>\n                  </div>\n\n                  </div>\n\n            <button class=\"btn btn-primary leftLst\"><</button>\n            <button class=\"btn btn-primary rightLst\">></button>\n        </div>\n\t</div>\n\n\t</div>\n\n\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Modal Header</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form #processorForm=\"ngForm\" >\n                  <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>Specifications</th>\n\n                        </tr>\n                      </thead>\n                      <tbody>\n\n                        <tr>\n                        <th scope=\"row\"> pid </th>\n                        <td  >{{processorService.selectedProcessor.pid}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">num_of_cores</th>\n                        <td>{{processorService.selectedProcessor.num_of_cores}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">l1_Cache</th>\n                        <td>{{processorService.selectedProcessor.l1_Cache}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">l2_Cache</th>\n                        <td>{{processorService.selectedProcessor.l2_Cache}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">product_code</th>\n                        <td>{{processorService.selectedProcessor.product_code}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">microarchitecture</th>\n                        <td>{{processorService.selectedProcessor.microarchitecture}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">designed_by </th>\n\n                        <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n\n                        </tr>\n                        <tr>\n                               <th scope=\"row\">max_CPU_clock_rate</th>\n                               <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\n\n                        </tr>\n                            <tr>\n                                 <th scope=\"row\">min_feature_size</th>\n                                 <td>{{processorService.selectedProcessor.min_feature_size}}</td>\n\n                            </tr>\n                            <tr>\n                                 <th scope=\"row\">instruction_set</th>\n                                 <td>{{processorService.selectedProcessor.instruction_set}}</td>\n\n                            </tr>\n                            <tr>\n                                 <th scope=\"row\">predecessor</th>\n                                 <td>{{processorService.selectedProcessor.successor}}</td>\n\n                              </tr>\n                              <tr>\n                                   <th scope=\"row\">successor </th>\n                                   <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n                              </tr>\n                              <tr>\n                                   <th scope=\"row\">gpu</th>\n                                   <td>{{processorService.selectedProcessor.gpu}}</td>\n                              </tr>\n                      </tbody>\n                    </table>\n\n\n\n                </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/processor_companies/apple/apple.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/processor_companies/apple/apple.component.ts ***!
  \**************************************************************/
/*! exports provided: AppleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppleComponent", function() { return AppleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/processor.service */ "./src/app/shared/processor.service.ts");



var AppleComponent = /** @class */ (function () {
    function AppleComponent(processorService) {
        this.processorService = processorService;
    }
    AppleComponent.prototype.ngOnInit = function () {
    };
    AppleComponent.prototype.onView = function (_id, form) {
        var _this = this;
        this.processorService.getProcessor(_id).subscribe(function (res) {
            console.log('onView');
            _this.processorService.selectedProcessor = res;
        });
    };
    AppleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apple',
            template: __webpack_require__(/*! ./apple.component.html */ "./src/app/processor_companies/apple/apple.component.html"),
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]],
            styles: [__webpack_require__(/*! ./apple.component.css */ "./src/app/processor_companies/apple/apple.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]])
    ], AppleComponent);
    return AppleComponent;
}());



/***/ }),

/***/ "./src/app/processor_companies/intel/intel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/processor_companies/intel/intel.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.MultiCarousel\r\n{\r\n  float: left;\r\n  overflow: hidden;\r\n  padding: 15px;\r\n  width: 100%;\r\n  position:relative;\r\n }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner {\r\n  transition: 1s ease all;\r\n  float: left; }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item {\r\n   float: left;}\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item > div {\r\n  text-align: center;\r\n   padding:10px;\r\n    margin:10px;\r\n    background:#f1f1f1;\r\n     color:#666;}\r\n\r\n\r\n.MultiCarousel .leftLst, .MultiCarousel .rightLst {\r\n  position:absolute;\r\n   border-radius:60%;\r\n   top:calc(60% - 20px); }\r\n\r\n\r\n.MultiCarousel .leftLst { left:0; }\r\n\r\n\r\n.MultiCarousel .rightLst { right:0; }\r\n\r\n\r\n.MultiCarousel .leftLst.over, .MultiCarousel .rightLst.over {\r\n   pointer-events: none;\r\n   background:#ccc; }\r\n\r\n\r\n.img {\r\n\r\n    max-height:120px;\r\n\r\n\r\n   }\r\n\r\n\r\n.card{\r\n\r\n    height: 280x;\r\n\r\n   }\r\n\r\n\r\n.card-image-top{\r\n\r\n  max-height:60% ;\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzc29yX2NvbXBhbmllcy9pbnRlbC9pbnRlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCOzs7QUFHRDtFQUNFLHVCQUF1QjtFQUN2QixXQUFXLEVBQUU7OztBQUdmO0dBQ0csV0FBVyxDQUFDOzs7QUFHZjtFQUNFLGtCQUFrQjtHQUNqQixZQUFZO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtLQUNqQixVQUFVLENBQUM7OztBQUNoQjtFQUNFLGlCQUFpQjtHQUNoQixpQkFBaUI7R0FDakIsb0JBQW9CLEVBQUU7OztBQUN6QiwwQkFBMEIsTUFBTSxFQUFFOzs7QUFDbEMsMkJBQTJCLE9BQU8sRUFBRTs7O0FBRXBDO0dBQ0csb0JBQW9CO0dBQ3BCLGVBQWUsRUFBRTs7O0FBSWpCOztJQUVDLGdCQUFnQjs7O0dBR2pCOzs7QUFDQTs7SUFFQyxZQUFZOztHQUViOzs7QUFLSDs7RUFFRSxlQUFlO0VBQ2YsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3Nvcl9jb21wYW5pZXMvaW50ZWwvaW50ZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uTXVsdGlDYXJvdXNlbFxyXG57XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gfVxyXG5cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5NdWx0aUNhcm91c2VsLWlubmVyIHtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlIGFsbDtcclxuICBmbG9hdDogbGVmdDsgfVxyXG5cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5NdWx0aUNhcm91c2VsLWlubmVyIC5pdGVtIHtcclxuICAgZmxvYXQ6IGxlZnQ7fVxyXG5cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5NdWx0aUNhcm91c2VsLWlubmVyIC5pdGVtID4gZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgYmFja2dyb3VuZDojZjFmMWYxO1xyXG4gICAgIGNvbG9yOiM2NjY7fVxyXG4uTXVsdGlDYXJvdXNlbCAubGVmdExzdCwgLk11bHRpQ2Fyb3VzZWwgLnJpZ2h0THN0IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgYm9yZGVyLXJhZGl1czo2MCU7XHJcbiAgIHRvcDpjYWxjKDYwJSAtIDIwcHgpOyB9XHJcbi5NdWx0aUNhcm91c2VsIC5sZWZ0THN0IHsgbGVmdDowOyB9XHJcbi5NdWx0aUNhcm91c2VsIC5yaWdodExzdCB7IHJpZ2h0OjA7IH1cclxuXHJcbi5NdWx0aUNhcm91c2VsIC5sZWZ0THN0Lm92ZXIsIC5NdWx0aUNhcm91c2VsIC5yaWdodExzdC5vdmVyIHtcclxuICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgIGJhY2tncm91bmQ6I2NjYzsgfVxyXG5cclxuXHJcblxyXG4gICAuaW1nIHtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OjEyMHB4O1xyXG5cclxuXHJcbiAgIH1cclxuICAgLmNhcmR7XHJcblxyXG4gICAgaGVpZ2h0OiAyODB4O1xyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxuLmNhcmQtaW1hZ2UtdG9we1xyXG5cclxuICBtYXgtaGVpZ2h0OjYwJSA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/processor_companies/intel/intel.component.html":
/*!****************************************************************!*\
  !*** ./src/app/processor_companies/intel/intel.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!------ Include the above in your HEAD tag ---------->\n\n  <div class=\"container\">\n      <h1>INTEL</h1>\n    <div class=\"row\">\n      <div class=\"MultiCarousel\" data-items=\"1,2,3,4\" data-slide=\"2\" id=\"MultiCarousel\"  data-interval=\"1000\">\n              <div class=\"MultiCarousel-inner\">\n\n                  <div class=\"item\">\n                      <div class=\"card\">\n                        <img src=\"assets/img/processors/intel3i.jpg\" alt=\"img\" class=\"card-image-top\">\n                        <div class=\"card-body\">\n                          <h3>Intel 3i</h3>\n                          <mat-card-actions>\n                                <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                                <button mat-button>COMPARE</button>\n                              </mat-card-actions>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"item\">\n                      <div class=\"card\">\n                        <img src=\"assets/img/processors/intel5i.jpg\" alt=\"img\" class=\"card-image-top\">\n                        <div class=\"card-body\">\n                          <h3>Intel 5i</h3>\n\n                          <mat-card-actions>\n                                <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                                <button mat-button>COMPARE</button>\n                              </mat-card-actions>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"item\">\n                        <div class=\"card\">\n                          <img src=\"assets/img/processors/intel7i.jpg\" alt=\"img\" class=\"card-image-top\">\n                          <div class=\"card-body\">\n                            <h3>Intel 5i</h3>\n\n                            <mat-card-actions>\n                                <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                                <button mat-button>COMPARE</button>\n                              </mat-card-actions>\n                          </div>\n                        </div>\n                      </div>\n\n                    <div class=\"item\">\n                      <div class=\"card\">\n                        <img src=\"assets/img/processors/intel9i.jpg\" alt=\"img\" class=\"card-image-top\">\n                        <div class=\"card-body\">\n                          <h3>Intel 9i</h3>\n\n                          <mat-card-actions>\n                                <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                                <button mat-button>COMPARE</button>\n                              </mat-card-actions>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"item\">\n                      <div class=\"card\">\n                        <img src=\"assets/img/processors/xeon.jpg\" alt=\"img\" class=\"card-image-top\">\n                        <div class=\"card-body\">\n                          <h3>Intel xeon</h3>\n\n                          <mat-card-actions>\n                                <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                                <button mat-button>COMPARE</button>\n                              </mat-card-actions>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"item\">\n                      <div class=\"card\">\n                        <img src=\"assets/img/processors/itanium.jpg\" alt=\"img\" class=\"card-image-top\">\n                        <div class=\"card-body\">\n                          <h3>Intel itanium</h3>\n\n                          <mat-card-actions>\n                                <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                                <button mat-button>COMPARE</button>\n                              </mat-card-actions>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"item\">\n                      <div class=\"card\">\n                        <img src=\"assets/img/processors/intel5i.jpg\" alt=\"img\" class=\"card-image-top\">\n                        <div class=\"card-body\">\n                          <h3>Intel 5i</h3>\n\n                          <mat-card-actions>\n                                <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" mat-button>VIEW</button>\n                                <button mat-button>COMPARE</button>\n                              </mat-card-actions>\n                        </div>\n                      </div>\n                    </div>\n                    </div>\n\n              <button class=\"btn btn-primary leftLst\"><</button>\n              <button class=\"btn btn-primary rightLst\">></button>\n          </div>\n    </div>\n\n    </div>\n\n\n   <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Modal Header</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form #processorForm=\"ngForm\" >\n                  <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>Specifications</th>\n\n                        </tr>\n                      </thead>\n                      <tbody>\n\n                        <tr>\n                        <th scope=\"row\"> pid </th>\n                        <td  >{{processorService.selectedProcessor.pid}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">num_of_cores</th>\n                        <td>{{processorService.selectedProcessor.num_of_cores}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">l1_Cache</th>\n                        <td>{{processorService.selectedProcessor.l1_Cache}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">l2_Cache</th>\n                        <td>{{processorService.selectedProcessor.l2_Cache}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">product_code</th>\n                        <td>{{processorService.selectedProcessor.product_code}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">microarchitecture</th>\n                        <td>{{processorService.selectedProcessor.microarchitecture}}</td>\n                        </tr>\n                        <tr>\n                        <th scope=\"row\">designed_by </th>\n\n                        <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n\n                        </tr>\n                        <tr>\n                               <th scope=\"row\">max_CPU_clock_rate</th>\n                               <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\n\n                        </tr>\n                            <tr>\n                                 <th scope=\"row\">min_feature_size</th>\n                                 <td>{{processorService.selectedProcessor.min_feature_size}}</td>\n\n                            </tr>\n                            <tr>\n                                 <th scope=\"row\">instruction_set</th>\n                                 <td>{{processorService.selectedProcessor.instruction_set}}</td>\n\n                            </tr>\n                            <tr>\n                                 <th scope=\"row\">predecessor</th>\n                                 <td>{{processorService.selectedProcessor.successor}}</td>\n\n                              </tr>\n                              <tr>\n                                   <th scope=\"row\">successor </th>\n                                   <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n                              </tr>\n                              <tr>\n                                   <th scope=\"row\">gpu</th>\n                                   <td>{{processorService.selectedProcessor.gpu}}</td>\n                              </tr>\n                      </tbody>\n                    </table>\n\n\n\n                </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/processor_companies/intel/intel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/processor_companies/intel/intel.component.ts ***!
  \**************************************************************/
/*! exports provided: IntelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntelComponent", function() { return IntelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/processor.service */ "./src/app/shared/processor.service.ts");



var IntelComponent = /** @class */ (function () {
    function IntelComponent(processorService) {
        this.processorService = processorService;
    }
    IntelComponent.prototype.ngOnInit = function () {
    };
    IntelComponent.prototype.onView = function (_id, form) {
        var _this = this;
        this.processorService.getProcessor(_id).subscribe(function (res) {
            console.log('onView');
            _this.processorService.selectedProcessor = res;
        });
    };
    IntelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intel',
            template: __webpack_require__(/*! ./intel.component.html */ "./src/app/processor_companies/intel/intel.component.html"),
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]],
            styles: [__webpack_require__(/*! ./intel.component.css */ "./src/app/processor_companies/intel/intel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]])
    ], IntelComponent);
    return IntelComponent;
}());



/***/ }),

/***/ "./src/app/processor_companies/nvidia/nvidia.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/processor_companies/nvidia/nvidia.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.MultiCarousel\r\n{\r\n  float: left;\r\n  overflow: hidden;\r\n  padding: 15px;\r\n  width: 100%;\r\n  position:relative;\r\n }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner {\r\n  transition: 1s ease all;\r\n  float: left; }\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item {\r\n   float: left;}\r\n\r\n\r\n.MultiCarousel .MultiCarousel-inner .item > div {\r\n  text-align: center;\r\n   padding:10px;\r\n    margin:10px;\r\n    background:#f1f1f1;\r\n     color:#666;}\r\n\r\n\r\n.MultiCarousel .leftLst, .MultiCarousel .rightLst {\r\n  position:absolute;\r\n   border-radius:60%;\r\n   top:calc(60% - 20px); }\r\n\r\n\r\n.MultiCarousel .leftLst { left:0; }\r\n\r\n\r\n.MultiCarousel .rightLst { right:0; }\r\n\r\n\r\n.MultiCarousel .leftLst.over, .MultiCarousel .rightLst.over {\r\n   pointer-events: none;\r\n   background:#ccc; }\r\n\r\n\r\n.img {\r\n\r\n    max-height:120px;\r\n\r\n\r\n   }\r\n\r\n\r\n.card{\r\n\r\n    height: 280x;\r\n\r\n   }\r\n\r\n\r\n.card-image-top{\r\n\r\n  height: 60%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzc29yX2NvbXBhbmllcy9udmlkaWEvbnZpZGlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7OztBQUdEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBRTs7O0FBR2Y7R0FDRyxXQUFXLENBQUM7OztBQUdmO0VBQ0Usa0JBQWtCO0dBQ2pCLFlBQVk7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0tBQ2pCLFVBQVUsQ0FBQzs7O0FBQ2hCO0VBQ0UsaUJBQWlCO0dBQ2hCLGlCQUFpQjtHQUNqQixvQkFBb0IsRUFBRTs7O0FBQ3pCLDBCQUEwQixNQUFNLEVBQUU7OztBQUNsQywyQkFBMkIsT0FBTyxFQUFFOzs7QUFFcEM7R0FDRyxvQkFBb0I7R0FDcEIsZUFBZSxFQUFFOzs7QUFJakI7O0lBRUMsZ0JBQWdCOzs7R0FHakI7OztBQUNBOztJQUVDLFlBQVk7O0dBRWI7OztBQUdIOztFQUVFLFdBQVc7RUFDWCxXQUFXOztBQUViIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzc29yX2NvbXBhbmllcy9udmlkaWEvbnZpZGlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLk11bHRpQ2Fyb3VzZWxcclxue1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuIH1cclxuXHJcblxyXG4uTXVsdGlDYXJvdXNlbCAuTXVsdGlDYXJvdXNlbC1pbm5lciB7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XHJcbiAgZmxvYXQ6IGxlZnQ7IH1cclxuXHJcblxyXG4uTXVsdGlDYXJvdXNlbCAuTXVsdGlDYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgIGZsb2F0OiBsZWZ0O31cclxuXHJcblxyXG4uTXVsdGlDYXJvdXNlbCAuTXVsdGlDYXJvdXNlbC1pbm5lciAuaXRlbSA+IGRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcclxuICAgICBjb2xvcjojNjY2O31cclxuLk11bHRpQ2Fyb3VzZWwgLmxlZnRMc3QsIC5NdWx0aUNhcm91c2VsIC5yaWdodExzdCB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6NjAlO1xyXG4gICB0b3A6Y2FsYyg2MCUgLSAyMHB4KTsgfVxyXG4uTXVsdGlDYXJvdXNlbCAubGVmdExzdCB7IGxlZnQ6MDsgfVxyXG4uTXVsdGlDYXJvdXNlbCAucmlnaHRMc3QgeyByaWdodDowOyB9XHJcblxyXG4uTXVsdGlDYXJvdXNlbCAubGVmdExzdC5vdmVyLCAuTXVsdGlDYXJvdXNlbCAucmlnaHRMc3Qub3ZlciB7XHJcbiAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICBiYWNrZ3JvdW5kOiNjY2M7IH1cclxuXHJcblxyXG5cclxuICAgLmltZyB7XHJcblxyXG4gICAgbWF4LWhlaWdodDoxMjBweDtcclxuXHJcblxyXG4gICB9XHJcbiAgIC5jYXJke1xyXG5cclxuICAgIGhlaWdodDogMjgweDtcclxuXHJcbiAgIH1cclxuXHJcblxyXG4uY2FyZC1pbWFnZS10b3B7XHJcblxyXG4gIGhlaWdodDogNjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/processor_companies/nvidia/nvidia.component.html":
/*!******************************************************************!*\
  !*** ./src/app/processor_companies/nvidia/nvidia.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n"

/***/ }),

/***/ "./src/app/processor_companies/nvidia/nvidia.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/processor_companies/nvidia/nvidia.component.ts ***!
  \****************************************************************/
/*! exports provided: NvidiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NvidiaComponent", function() { return NvidiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NvidiaComponent = /** @class */ (function () {
    function NvidiaComponent() {
    }
    NvidiaComponent.prototype.ngOnInit = function () {
    };
    NvidiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nvidia',
            template: __webpack_require__(/*! ./nvidia.component.html */ "./src/app/processor_companies/nvidia/nvidia.component.html"),
            styles: [__webpack_require__(/*! ./nvidia.component.css */ "./src/app/processor_companies/nvidia/nvidia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NvidiaComponent);
    return NvidiaComponent;
}());



/***/ }),

/***/ "./src/app/processors/processors.component.css":
/*!*****************************************************!*\
  !*** ./src/app/processors/processors.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#back{\r\n\r\n  background-color: rgb(99, 164, 218);\r\n\r\n}\r\n\r\n\r\n.card-holder {\r\n  margin: 2em 0;\r\n}\r\n\r\n\r\n.bg-gold {\r\n  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);\r\n}\r\n\r\n\r\n.bg-news {\r\n  background: linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);\r\n}\r\n\r\n\r\n.bg-germany {\r\n    color: #fff;\r\n    background: linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #dd0000 66%, #ffc608 66%);\r\n}\r\n\r\n\r\n.bg-aurora {\r\n    color: #fff;\r\n    background: linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');\r\n  background-size: cover;\r\n  background-position: 50% 21%;\r\n  text-align: right;\r\n}\r\n\r\n\r\n.bg-germany {\r\n    color: #fff;\r\n    background: linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #dd0000 66%, #ffc608 66%);\r\n}\r\n\r\n\r\n.bg-purple {\r\n    color: #fff;\r\n    background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);\r\n}\r\n\r\n\r\n.bg-spring {\r\n    background: linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzc29ycy9wcm9jZXNzb3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsbUNBQW1DOztBQUVyQzs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7OztBQUlBO0VBSUUsNkRBQTZEO0FBQy9EOzs7QUFFQTtFQUlFLDREQUE0RDtBQUM5RDs7O0FBRUE7SUFDSSxXQUFXO0lBSVgsc0hBQXNIO0FBQzFIOzs7QUFFQTtJQUNJLFdBQVc7SUFJWCx3SkFBd0o7RUFDMUosc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7OztBQUVBO0lBQ0ksV0FBVztJQUlYLHNIQUFzSDtBQUMxSDs7O0FBRUE7SUFDSSxXQUFXO0lBSVgsMklBQTJJO0FBQy9JOzs7QUFFQTtJQUlJLHFIQUFxSDtBQUN6SCIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3NvcnMvcHJvY2Vzc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2t7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMTY0LCAyMTgpO1xyXG5cclxufVxyXG5cclxuXHJcbi5jYXJkLWhvbGRlciB7XHJcbiAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG5cclxuXHJcblxyXG4uYmctZ29sZCB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZmRjZDNiIDYwJSwgI2ZmZWQ0YiA2MCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNmZGNkM2IgNjAlLCAjZmZlZDRiIDYwJSk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZmRjZDNiIDYwJSwgI2ZmZWQ0YiA2MCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNmZGNkM2IgNjAlLCAjZmZlZDRiIDYwJSk7XHJcbn1cclxuXHJcbi5iZy1uZXdzIHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg3MGRlZywgI2ZmNjQ2NCA0MCUsICM1YWM4ZmEgNDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNzBkZWcsICNmZjY0NjQgNDAlLCAjNWFjOGZhIDQwJSk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNzBkZWcsICNmZjY0NjQgNDAlLCAjNWFjOGZhIDQwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjZmY2NDY0IDQwJSwgIzVhYzhmYSA0MCUpO1xyXG59XHJcblxyXG4uYmctZ2VybWFueSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzAwMCAzMyUsIHJnYmEoMCwgMCwgMCwgMCkgMzMlKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZGQwMDAwIDY2JSwgI2ZmYzYwOCA2NiUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzAwMCAzMyUsIHJnYmEoMCwgMCwgMCwgMCkgMzMlKSwgLW8tbGluZWFyLWdyYWRpZW50KDExMGRlZywgI2RkMDAwMCA2NiUsICNmZmM2MDggNjYlKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzAwMCAzMyUsIHJnYmEoMCwgMCwgMCwgMCkgMzMlKSwgLW1vei1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZGQwMDAwIDY2JSwgI2ZmYzYwOCA2NiUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzAwMCAzMyUsIHJnYmEoMCwgMCwgMCwgMCkgMzMlKSwgbGluZWFyLWdyYWRpZW50KDExMGRlZywgI2RkMDAwMCA2NiUsICNmZmM2MDggNjYlKTtcclxufVxyXG5cclxuLmJnLWF1cm9yYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC03MGRlZywgI2ZhN2MzMCAzMCUsIHJnYmEoMCwgMCwgMCwgMCkgMzAlKSwgdXJsKCdodHRwczovL3d3dy5uYXNhLmdvdi9zaXRlcy9kZWZhdWx0L2ZpbGVzL3RodW1ibmFpbHMvaW1hZ2UvcGlhMjE0MjEtY3IuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTcwZGVnLCAjZmE3YzMwIDMwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpLCB1cmwoJ2h0dHBzOi8vd3d3Lm5hc2EuZ292L3NpdGVzL2RlZmF1bHQvZmlsZXMvdGh1bWJuYWlscy9pbWFnZS9waWEyMTQyMS1jci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC03MGRlZywgI2ZhN2MzMCAzMCUsIHJnYmEoMCwgMCwgMCwgMCkgMzAlKSwgdXJsKCdodHRwczovL3d3dy5uYXNhLmdvdi9zaXRlcy9kZWZhdWx0L2ZpbGVzL3RodW1ibmFpbHMvaW1hZ2UvcGlhMjE0MjEtY3IuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTcwZGVnLCAjZmE3YzMwIDMwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpLCB1cmwoJ2h0dHBzOi8vd3d3Lm5hc2EuZ292L3NpdGVzL2RlZmF1bHQvZmlsZXMvdGh1bWJuYWlscy9pbWFnZS9waWEyMTQyMS1jci5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAyMSU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5iZy1nZXJtYW55IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjMDAwIDMzJSwgcmdiYSgwLCAwLCAwLCAwKSAzMyUpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNkZDAwMDAgNjYlLCAjZmZjNjA4IDY2JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjMDAwIDMzJSwgcmdiYSgwLCAwLCAwLCAwKSAzMyUpLCAtby1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZGQwMDAwIDY2JSwgI2ZmYzYwOCA2NiUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjMDAwIDMzJSwgcmdiYSgwLCAwLCAwLCAwKSAzMyUpLCAtbW96LWxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNkZDAwMDAgNjYlLCAjZmZjNjA4IDY2JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjMDAwIDMzJSwgcmdiYSgwLCAwLCAwLCAwKSAzMyUpLCBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZGQwMDAwIDY2JSwgI2ZmYzYwOCA2NiUpO1xyXG59XHJcblxyXG4uYmctcHVycGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjYTYwYWYzIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpLCAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1jb3JuZXIgYXQgMCUgMCUsICM3YTAwY2MgNzAlLCAjYzAzZmZmIDcwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjYTYwYWYzIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpLCAtby1yYWRpYWwtZ3JhZGllbnQoZmFydGhlc3QtY29ybmVyIGF0IDAlIDAlLCAjN2EwMGNjIDcwJSwgI2MwM2ZmZiA3MCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjYTYwYWYzIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpLCAtbW96LXJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1jb3JuZXIgYXQgMCUgMCUsICM3YTAwY2MgNzAlLCAjYzAzZmZmIDcwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjYTYwYWYzIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpLCByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3QtY29ybmVyIGF0IDAlIDAlLCAjN2EwMGNjIDcwJSwgI2MwM2ZmZiA3MCUpO1xyXG59XHJcblxyXG4uYmctc3ByaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjZmZmODEwICAzMCUsIHJnYmEoMCwwLDAsMCkgMzAlKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsICM2M2U4OWUgNjAlLCAjZmY3ZWUzIDYwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNzBkZWcsICNmZmY4MTAgIDMwJSwgcmdiYSgwLDAsMCwwKSAzMCUpLCAtby1saW5lYXItZ3JhZGllbnQoMzBkZWcsICM2M2U4OWUgNjAlLCAjZmY3ZWUzIDYwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg3MGRlZywgI2ZmZjgxMCAgMzAlLCByZ2JhKDAsMCwwLDApIDMwJSksIC1tb3otbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjNjNlODllIDYwJSwgI2ZmN2VlMyA2MCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjZmZmODEwICAzMCUsIHJnYmEoMCwwLDAsMCkgMzAlKSwgbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjNjNlODllIDYwJSwgI2ZmN2VlMyA2MCUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/processors/processors.component.html":
/*!******************************************************!*\
  !*** ./src/app/processors/processors.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-gold\" id=\"back\">\n\n\n    <app-apple></app-apple>\n<app-intel></app-intel>\n\n<app-amd></app-amd>\n</div>\n\n"

/***/ }),

/***/ "./src/app/processors/processors.component.ts":
/*!****************************************************!*\
  !*** ./src/app/processors/processors.component.ts ***!
  \****************************************************/
/*! exports provided: ProcessorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorsComponent", function() { return ProcessorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProcessorsComponent = /** @class */ (function () {
    function ProcessorsComponent() {
    }
    ProcessorsComponent.prototype.ngOnInit = function () {
        /*
        
            $(document).ready(function () {
              var itemsMainDiv = ('.MultiCarousel');
              var itemsDiv = ('.MultiCarousel-inner');
              var itemWidth = "";
        
              $('.leftLst, .rightLst').click(function () {
                  var condition = $(this).hasClass("leftLst");
                  if (condition)
                      click(0, this);
                  else
                      click(1, this)
              });
        
              ResCarouselSize();
        
        
        
        
              $(window).resize(function () {
                  ResCarouselSize();
              });
        
              //this function define the size of the items
              function ResCarouselSize() {
                  var incno = 0;
                  var dataItems = ("data-items");
                  var itemClass = ('.item');
                  var id = 0;
                  var btnParentSb = '';
                  var itemsSplit = '';
                  var sampwidth = $(itemsMainDiv).width();
                  var bodyWidth = $('body').width();
                  $(itemsDiv).each(function () {
                      id = id + 1;
                      var itemNumbers = $(this).find(itemClass).length;
                      btnParentSb = $(this).parent().attr(dataItems);
                      itemsSplit = btnParentSb.split(',');
                      $(this).parent().attr("id", "MultiCarousel" + id);
        
        
                      if (bodyWidth >= 1200) {
                          incno = itemsSplit[3];
                          itemWidth = sampwidth / incno;
                      }
                      else if (bodyWidth >= 992) {
                          incno = itemsSplit[2];
                          itemWidth = sampwidth / incno;
                      }
                      else if (bodyWidth >= 768) {
                          incno = itemsSplit[1];
                          itemWidth = sampwidth / incno;
                      }
                      else {
                          incno = itemsSplit[0];
                          itemWidth = sampwidth / incno;
                      }
                      $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                      $(this).find(itemClass).each(function () {
                          $(this).outerWidth(itemWidth);
                      });
        
                      $(".leftLst").addClass("over");
                      $(".rightLst").removeClass("over");
        
                  });
              }
        
        
              //this function used to move the items
              function ResCarousel(e, el, s) {
                  var leftBtn = ('.leftLst');
                  var rightBtn = ('.rightLst');
                  var translateXval = '';
                  var divStyle = $(el + ' ' + itemsDiv).css('transform');
                  var values = divStyle.match(/-?[\d\.]+/g);
                  var xds = Math.abs(values[4]);
                  if (e == 0) {
                      translateXval = parseInt(xds) - parseInt(itemWidth * s);
                      $(el + ' ' + rightBtn).removeClass("over");
        
                      if (translateXval <= itemWidth / 2) {
                          translateXval = 0;
                          $(el + ' ' + leftBtn).addClass("over");
                      }
                  }
                  else if (e == 1) {
                      var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                      translateXval = parseInt(xds) + parseInt(itemWidth * s);
                      $(el + ' ' + leftBtn).removeClass("over");
        
                      if (translateXval >= itemsCondition - itemWidth / 2) {
                          translateXval = itemsCondition;
                          $(el + ' ' + rightBtn).addClass("over");
                      }
                  }
                  $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
              }
        
              //It is used to get some elements from btn
              function click(ell, ee) {
                  var Parent = "#" + $(ee).parent().attr("id");
                  var slide = $(Parent).attr("data-slide");
                  ResCarousel(ell, Parent, slide);
              }
        
          });
        */
    };
    ProcessorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-processors',
            template: __webpack_require__(/*! ./processors.component.html */ "./src/app/processors/processors.component.html"),
            styles: [__webpack_require__(/*! ./processors.component.css */ "./src/app/processors/processors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProcessorsComponent);
    return ProcessorsComponent;
}());



/***/ }),

/***/ "./src/app/shared/processor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/processor.service.ts ***!
  \*********************************************/
/*! exports provided: ProcessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorService", function() { return ProcessorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);





var ProcessorService = /** @class */ (function () {
    function ProcessorService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:3000/processors';
    }
    ProcessorService.prototype.postProcessor = function (pro) {
        return this.http.post(this.baseURL, pro);
    };
    ProcessorService.prototype.getProcessorList = function () {
        return this.http.get(this.baseURL);
    };
    ProcessorService.prototype.getProcessor = function (_id) {
        return this.http.get(this.baseURL + ("/" + _id));
    };
    ProcessorService.prototype.putProcessor = function (pro) {
        return this.http.put(this.baseURL + ("/" + pro._id), pro);
    };
    ProcessorService.prototype.deleteProcessor = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    ProcessorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProcessorService);
    return ProcessorService;
}());



/***/ }),

/***/ "./src/app/side-nav/side-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Only for snippet */\r\n.sidenav-container {\r\n  height: 100%;\r\n  padding: 0 0 0 0;\r\n  margin: -50px ;\r\n }\r\n.sidenav {\r\n  height: 100%;\r\n  width: 18;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  margin-top: 60px ;\r\n\r\n\r\n}\r\n.sidenav a {\r\n  padding-left:10px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: rgb(0, 0, 0);\r\n  display: block;\r\n  transition: 0.3s;\r\n  left: 2;\r\n}\r\n.sidenav a:hover {\r\n  color: white;\r\n  background-color: rgba(77, 47, 243, 0.884);\r\n}\r\n.rightcolumn {\r\n  float: right;\r\n  width: 79%;\r\npadding: 14px 16px;\r\nmargin-top: 80px ;\r\n\r\n}\r\n.thumbnail {\r\n\r\n  width: 300px;\r\n  height: 240px;\r\n}\r\n.img{\r\n  width:100%;\r\n  height:100%;\r\n\r\n\r\n}\r\n.bg-grey  {\r\n    background-color: #f6f6f6;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n\r\n}\r\n.col-sm-4 {\r\n  text-align: center;\r\n\r\n}\r\n.info{\r\n\r\n  padding: 6px 6px 4px 20px;\r\n\r\n}\r\n.Topic{\r\nbackground-color: rgb(165, 161, 161);\r\npadding-left: 0px;\r\n\r\n\r\n}\r\nbody{\r\n\r\n\r\n  font-size: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjtBQUdBO0VBQ0MsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AsaUJBQWlCOzs7QUFHbkI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLE9BQU87QUFDVDtBQUVBO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztBQUM1QztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWixrQkFBa0I7QUFDbEIsaUJBQWlCOztBQUVqQjtBQUdBOztFQUVFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXOzs7QUFHYjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw0RUFBNEU7OztBQUdoRjtBQUNBO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUNBOztFQUVFLHlCQUF5Qjs7QUFFM0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxpQkFBaUI7OztBQUdqQjtBQUNBOzs7RUFHRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9ubHkgZm9yIHNuaXBwZXQgKi9cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAwIDAgMDtcclxuICBtYXJnaW46IC01MHB4IDtcclxuIH1cclxuXHJcblxyXG4gLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogNjBweCA7XHJcblxyXG5cclxufVxyXG5cclxuLnNpZGVuYXYgYSB7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbGVmdDogMjtcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDQ3LCAyNDMsIDAuODg0KTtcclxufVxyXG5cclxuLnJpZ2h0Y29sdW1uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDc5JTtcclxucGFkZGluZzogMTRweCAxNnB4O1xyXG5tYXJnaW4tdG9wOiA4MHB4IDtcclxuXHJcbn1cclxuXHJcblxyXG4udGh1bWJuYWlsIHtcclxuXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcblxyXG59XHJcblxyXG4uYmctZ3JleSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5cclxuXHJcbn1cclxuLmNvbC1zbS00IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5pbmZve1xyXG5cclxuICBwYWRkaW5nOiA2cHggNnB4IDRweCAyMHB4O1xyXG5cclxufVxyXG4uVG9waWN7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE2MSwgMTYxKTtcclxucGFkZGluZy1sZWZ0OiAwcHg7XHJcblxyXG5cclxufVxyXG5ib2R5e1xyXG5cclxuXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <mat-sidenav-container class=\"sidenav-container\" >\n      <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n\n          [opened]=\"!(isHandset$ | async)\" >\n\n        <mat-nav-list>\n            <a mat-list-item href=\"#types_of\" class=\"Topic\">Types Of Computer</a>\n            <a mat-list-item href=\"#pc\" >PC (Personal Computer) </a>\n            <a mat-list-item href=\"#workstation\" >Workstation</a>\n            <a mat-list-item href=\"#mini_computer\" >Minicomputer </a>\n            <a mat-list-item href=\"#main_frame\" >Mainframe</a>\n            <a mat-list-item href=\"#super_computer\" >Supercomputer</a>\n            <a mat-list-item href=\"#parts\" class=\"Topic\">Computer Parts</a>\n            <a mat-list-item href=\"#case\">Case</a>\n            <a mat-list-item href=\"#desktop\">Desktop</a>\n            <a mat-list-item href=\"#key_board\">Key Board</a>\n            <a mat-list-item href=\"#mouse\">Mouse</a>\n            <a mat-list-item href=\"#ups\">UPS</a>\n            <a mat-list-item href=\"#inside\" class=\"Topic\">Inside Computer</a>\n            <a mat-list-item href=\"#motherboard\">Motherboard</a>\n            <a mat-list-item href=\"#cpu\">CPU/processor</a>\n            <a mat-list-item href=\"#ram\">RAM (random access memory)</a>\n            <a mat-list-item href=\"#hd\">Hard drive</a>\n            <a mat-list-item href=\"#ps\">Power supply unit</a>\n            <a mat-list-item href=\"#buttons\" class=\"Topic\">Buttons and Ports</a>\n\n\n        </mat-nav-list>\n      </mat-sidenav>\n\n    </mat-sidenav-container>\n\n<body>\n\n    <div class=\"rightcolumn\">\n      <div class=\"col\">\n\n\n\n      <div class=\"container-fluid\">\n\n        <div id=\"types_of\" >\n          <h1 >Types Of Computers</h1><br>\n          <div id=\"pc\" class=\"bg-grey slideanim\">\n            <div class=\" info\"><h1> PC (Personal Computer)</h1>\n          <p>A personal computer is a general-purpose, cost-effective computer that is designed to be used by a single end-user. Every PC is dependent on microprocessor technology, which allows PC makers to set the entire central processing unit (CPU) on a single chip. </p>\n          <p>A PC can be a microcomputer, desktop computer, a laptop computer, a tablet PC or a handheld PC.</p>\n        </div>\n\n          <div  class=\"text-center\">\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"personal_comp1\" class=\"img\" >\n\n                          </div>\n                          <p><strong>Desktop PC</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp2.png\" alt=\"personal_comp2\" class=\"img\" >\n\n                          </div>\n                          <p><strong>Laptop PC</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp3.png\" alt=\"personal_comp3\" class=\"img\" >\n                            </div>\n                              <p><strong>Tablet PC</strong></p>\n\n                      </div>\n                  </div>\n          </div>\n          </div>\n\n\n      <div id=\"workstation\" class=\"bg-grey slideanim\">\n        <div class=\" info\">\n          <h1> Workstation</h1>\n          <p>A workstation (WS) is a computer dedicated to a user or group of users engaged in business or professional work. It includes one or more high resolution displays and a faster processor than a personal computer (PC). A workstation also has greater multitasking capability because of additional random access memory (RAM), drives and drive capacity. A workstation may also have a higher-speed graphics adapters and more connected peripherals.</p>\n          </div>\n          <div  class=\"text-center  \">\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/work_station1.png\" alt=\"personal_comp1\" class=\"img\">\n                        </div>\n                        <p><strong>Work Station 1</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/work_station2.png\" alt=\"personal_comp2\" class=\"img\">\n                        </div>\n                        <p><strong>Work Station 2</strong></p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/work_station3.png\" alt=\"personal_comp3\" class=\"img\">\n                        </div>\n                        <p><strong>Work Station 3</strong></p>\n                      </div>\n                  </div>\n          </div>\n      </div>\n      <div id=\"mini_computer\" class=\"bg-grey slideanim\">\n          <div class=\" info\">\n          <h1> Mini Computer</h1>\n          <p>A minicomputer is a type of computer that possesses most of the features and capabilities of a large computer but is smaller in physical size.</p>\n         </div>\n         <div  class=\"text-center\">\n              <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/mini_comp1.png\" alt=\"personal_comp1\" >\n                        </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/mini_comp2.png\" alt=\"personal_comp2\" >\n                        </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"thumbnail\">\n                          <img src=\"assets/img/information-page/mini_comp3.png\" alt=\"personal_comp3\" >\n                        </div>\n                      </div>\n              </div>\n              </div>\n          </div>\n\n      <div id=\"main_frame\" class=\"bg-grey slideanim\">\n        <div class=\" info\">\n          <h1> Main Frame</h1>\n          <p>Mainframes are a type of computer that generally are known for their large size, amount of storage, processing power and high level of reliability. They are primarily used by large organizations for mission-critical applications requiring high volumes of data processing. In general, there are a few characteristics of mainframes that are common among all mainframe vendors: Nearly all mainframes have the ability to run (or host) multiple operating systems. Mainframes can add or hot swap system capacity without disruption. Mainframes are designed to handle very high volume input and output (I/O) and emphasize throughput computing. A single mainframe can replace dozens or even hundreds of smaller servers.</p>\n         </div>\n\n              <div class=\"row text-center \">\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/main_frame1.png\" alt=\"personal_comp1\" >\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/main_frame2.png\" alt=\"personal_comp2\" >\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/main_frame3.png\" alt=\"personal_comp3\" >\n                    </div>\n                  </div>\n             </div>\n        </div>\n\n      <div id=\"super_computer\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1>Super computer</h1>\n          <p>A supercomputer is a type of computer that has the architecture, resources and components to achieve massive computing power. Today's supercomputers consists of tens of thousands of processors that are able to perform billions and trillions of calculations or computations per second.</p>\n         </div>\n\n              <div class=\"row text-center \">\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/super1.png\" alt=\"personal_comp1\" >\n                      <p><strong>Sunway TaihuLight</strong></p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/super2.png\" alt=\"personal_comp2\" >\n                      <p><strong>Param 8000</strong></p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/img/information-page/super3.png\" alt=\"personal_comp3\" >\n                      <p><strong>SIERA</strong></p>\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n          <div>\n          <h1 id=\"parts\" >Parts</h1><br>\n          <div id=\"case\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Case</h1>\n          <p>The computer case serves mainly as a way to physically mount and contain all of the actual components inside of a computer, like the motherboard, hard drive, optical drive, floppy disk drive, etc. They typically come bundled with a power supply.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/case.png\" alt=\"personal_comp1\" >\n                              <p><strong>CASE</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/case2.jpg\" alt=\"personal_comp1\" >\n                              <p><strong>CASE 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/case3.jpeg\" alt=\"personal_comp1\" >\n                              <p><strong>CASE 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"desktop\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Desktop </h1>\n          <p>A desktop is a computer display area that represents the kinds of objects one might find on top of a physical desk, including documents, phone books, telephones, reference sources, writing and drawing tools, and project folders.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/personal_comp1.png\" alt=\"Desktop1\" >\n                              <p><strong>Desktop</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"key_board\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> KeyBoard </h1>\n          <p>A keyboard is a peripheral device that enables a user to input text into a computer or any other electronic machinery. A keyboard is an input device and is the most basic way for the user to communicate with a computer.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/Keyboard.jpg\" alt=\"Desktop1\" >\n                              <p><strong>wired keyboard</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/Keyboard2.jpg\" alt=\"personal_comp1\" >\n                              <p><strong>Wireless Keyboard</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/Keyboard3.jpg\" alt=\"personal_comp1\" >\n                              <p><strong>Apple Keyboard</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"mouse\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Mouse </h1>\n          <p>A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of a pointer on a display, which allows a smooth control of the graphical user interface.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/mouse1.jpg\" alt=\"Desktop1\" >\n                              <p><strong>wired Mouse</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/mouse2.jpg\" alt=\"personal_comp1\" >\n                              <p><strong>Wireless Mouse</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/mouse3.jpg\" alt=\"personal_comp1\" >\n                              <p><strong>Gaming Mouse</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          </div>\n\n          <div id=\"ups\" class=\"bg-grey slideanim\">\n            <div class=\" info\">\n          <h1> UPS </h1>\n          <p>A device that provides battery backup when the electrical power fails or drops to an unacceptable voltage level.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ups1.jpg\" alt=\"ups1\" >\n                              <p><strong>UPS 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ups2.jpeg\" alt=\"ups2\" >\n                              <p><strong>UPS 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ups3.jpg\" alt=\"ups3\" >\n                              <p><strong>UPS 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"motherboard\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> MotherBoard </h1>\n          <p> A motherboard is one of the most essential parts of a computer system. It holds together many of the crucial components of a computer, including the central processing unit (CPU), memory and connectors for input and output devices.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/motherboard1.jpg\" alt=\"motherboard1\" >\n                              <p><strong>motherboard 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/motherboard2.jpg\" alt=\"motherboard2\" >\n                              <p><strong>motherboard 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/motherboard3.jpg\" alt=\"motherboard3\" >\n                              <p><strong>motherboard 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n          <div id=\"cpu\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> CPU </h1>\n          <p> Random Access Memory is the memory or information storage in a computer that is used to store running programs and data for the programs. Data in the RAM can be read and written quickly in any order. Normally, the random access memory is in the form of computer chips.</p>\n\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/cpu1.jpg\" alt=\"cpu1\" >\n                              <p><strong>CPU 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/cpu3.jpg\" alt=\"cpu2\" >\n                              <p><strong>CPU 2</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          <div id=\"ram\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> RAM </h1>\n          <p> A central processing unit (CPU) is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logical, control and input/output (I/O) operations specified by the instructions.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ram1.jpg\" alt=\"ram1\" >\n                              <p><strong>ram 1</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ram2.jpg\" alt=\"ram2\" >\n                              <p><strong>ram 2</strong></p>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ram3.jpg\" alt=\"ram3\" >\n                              <p><strong>ram 3</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          <div id=\"hd\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Hard Drive </h1>\n          <p> A hard disk drive is a non-volatile memory hardware device that permanently stores and retrieves data on a computer. Unlike RAM a hard drive keeps all stored information even with the power is turned off.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/hdrive1.jpg\" alt=\"Hard Drive\" >\n                              <p><strong>Hard Drive</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          <div id=\"ps\" class=\"bg-grey slideanim\"><div class=\" info\">\n          <h1> Power Supply Unit </h1>\n          <p> A power supply unit converts mains AC to low-voltage regulated DC power for the internal components of a computer. Some power supplies have a manual switch for selecting input voltage, while others automatically adapt to the mains voltage.</p>\n         </div>\n\n                  <div class=\"row text-center \">\n                      <div class=\"col-sm-4\">\n                          <div class=\"thumbnail\">\n                              <img src=\"assets/img/information-page/ps1.jpg\" alt=\"Power Supply Unit\" >\n                              <p><strong>Power Supply Unit</strong></p>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n\n</div>\n</div>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.css */ "./src/app/side-nav/side-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/view-processor/view-processor.component.css":
/*!*************************************************************!*\
  !*** ./src/app/view-processor/view-processor.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n   .img {\r\n\r\n    max-height:120px;\r\n\r\n\r\n   }\r\n   .card{\r\n\r\n    height: 280x;\r\n\r\n   }\r\n   .card-image-top{\r\n\r\n  height: 60%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wcm9jZXNzb3Ivdmlldy1wcm9jZXNzb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztHQUVHOztJQUVDLGdCQUFnQjs7O0dBR2pCO0dBQ0E7O0lBRUMsWUFBWTs7R0FFYjtHQUtIOztFQUVFLFdBQVc7RUFDWCxXQUFXOztBQUViIiwiZmlsZSI6InNyYy9hcHAvdmlldy1wcm9jZXNzb3Ivdmlldy1wcm9jZXNzb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAgLmltZyB7XHJcblxyXG4gICAgbWF4LWhlaWdodDoxMjBweDtcclxuXHJcblxyXG4gICB9XHJcbiAgIC5jYXJke1xyXG5cclxuICAgIGhlaWdodDogMjgweDtcclxuXHJcbiAgIH1cclxuXHJcblxyXG5cclxuXHJcbi5jYXJkLWltYWdlLXRvcHtcclxuXHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/view-processor/view-processor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/view-processor/view-processor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<table class=\"responsive-table highlight\">\n                  <thead>\n                    <tr>\n\n                       <th scope=\"row\"> pid </th>\n                      c\n                       <th scope=\"row\">l1_Cache</th>\n                       <th scope=\"row\">l2_Cache</th>\n                       <th scope=\"row\">product_code</th>\n                       <th scope=\"row\">microarchitecture</th>\n                       <th scope=\"row\">designed_by</th>\n                       <th scope=\"row\">max_CPU_clock_rate</th>\n                       <th scope=\"row\">min_feature_size</th>\n                       <th scope=\"row\">instruction_set</th>\n                       <th scope=\"row\">predecessor</th>\n                       <th scope=\"row\">successor </th>\n                       <th scope=\"row\">gpu</th>\n                    </tr>\n                  </thead>\n                  <tr *ngFor=\"let pro of processorService.processors\">\n                    <td>{{processorService.selectedProcessor.pid}}</td>\n                    <td>{{processorService.selectedProcessor.num_of_cores}}</td>\n                    <td>{{processorService.selectedProcessor.l1_Cache}}</td>\n                    <td>{{processorService.selectedProcessor.l2_Cache}}</td>\n                    <td>{{processorService.selectedProcessor.product_code}}</td>\n                    <td>{{processorService.selectedProcessor.microarchitecture}}</td>\n                    <td>{{processorService.selectedProcessor.designed_by}}</td>\n                    <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\n                    <td>{{processorService.selectedProcessor.min_feature_size}}</td>\n                    <td>{{processorService.selectedProcessor.instruction_set}}</td>\n                    <td>{{processorService.selectedProcessor.successor}}</td>\n                    <td>{{processorService.selectedProcessor.gpu}}</td>\n                    <td>\n                        <a class=\"action-btn\" (click)=\"onEdit(pro)\">\n                          <i class=\"material-icons\">edit</i>\n                        </a>\n                        <a class=\"action-btn\" (click)=\"onDelete(processorService.selectedProcessor._id,processorForm)\">\n                          <i class=\"material-icons\">delete</i>\n                        </a>\n                      </td>\n                  </tr>\n</table>\n\n\n\n<div class=\"row\">\n\n\n    <div class=\"col s12\">\n      <div class=\"card\">\n       <div class=\"card-content white-text\">\n\n          <div class=\"row\">\n\n              <div class=\"card-pro\">\n\n                  <div>\n                    <h3>Intel 5i</h3>\n\n                    <mat-card-actions>\n\n                        <button  class=\"action-btn\"  (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" mat-button>VIEW</button>\n                        <button mat-button>COMPARE</button>\n                      </mat-card-actions>\n                  </div>\n                </div>\n\n\n<div class=\"container\">\n<h1>APPLE</h1>\n<div class=\"row\">\n<div class=\"MultiCarousel\" data-items=\"1,2,3,4\" data-slide=\"2\" id=\"MultiCarousel\"  data-interval=\"1000\">\n<div class=\"MultiCarousel-inner\">\n\n    <div class=\"item\">\n        <div class=\"card\">\n          <img src=\"assets/img/processors/apple7.jpg\" alt=\"img\" class=\"card-image-top\">\n          <div class=\"card-body\">\n            <h3>Apple A7</h3>\n\n             <mat-card-actions>\n                  <button (click)=\"onView('5cc28bf0d9c3c750c4583448',processorForm)\"  mat-button>VIEW</button>\n                  <button mat-button>COMPARE</button>\n                </mat-card-actions>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <div class=\"card\">\n          <img src=\"assets/img/processors/apple8.jpg\" alt=\"img\" class=\"card-image-top\">\n          <div class=\"card-body\">\n            <h3>Apple A8</h3>\n\n             <mat-card-actions>\n                  <button (click)=\"onView('5cc28c2ad9c3c750c4583449',processorForm)\"  mat-button>VIEW</button>\n                  <button mat-button>COMPARE</button>\n                </mat-card-actions>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <div class=\"card\">\n          <img src=\"assets/img/processors/apple9.jpg\" alt=\"img\" class=\"card-image-top\">\n          <div class=\"card-body\">\n            <h3>Apple A9</h3>\n\n             <mat-card-actions>\n                  <button (click)=\"onView('5cc28c3bd9c3c750c458344a',processorForm)\"  mat-button>VIEW</button>\n                  <button mat-button>COMPARE</button>\n                </mat-card-actions>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <div class=\"card\">\n          <img src=\"assets/img/processors/apple10.jpg\" alt=\"img\" class=\"card-image-top\">\n          <div class=\"card-body\">\n            <h3>Apple A10</h3>\n\n             <mat-card-actions>\n                  <button (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\"  mat-button>VIEW</button>\n                  <button mat-button>COMPARE</button>\n                </mat-card-actions>\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n      </div>\n\n\n\n\n<button class=\"btn btn-primary leftLst\"><</button>\n<button class=\"btn btn-primary rightLst\">></button>\n</div>\n</div>\n\n</div>\n\n </div>\n\n<form #processorForm=\"ngForm\" (ngSubmit)=\"onSubmit(processorForm)\">\n<table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Specifications</th>\n\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr>\n      <th scope=\"row\"> pid </th>\n      <td #_id=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor._id\" >{{processorService.selectedProcessor.pid}}</td>\n      </tr>\n      <tr>\n      <th scope=\"row\">num_of_cores</th>\n      <td>{{processorService.selectedProcessor.num_of_cores}}</td>\n      </tr>\n      <tr>\n      <th scope=\"row\">l1_Cache</th>\n      <td>{{processorService.selectedProcessor.l1_Cache}}</td>\n      </tr>\n      <tr>\n      <th scope=\"row\">l2_Cache</th>\n      <td>{{processorService.selectedProcessor.l2_Cache}}</td>\n      </tr>\n      <tr>\n      <th scope=\"row\">product_code</th>\n      <td>{{processorService.selectedProcessor.product_code}}</td>\n      </tr>\n      <tr>\n      <th scope=\"row\">microarchitecture</th>\n      <td>{{processorService.selectedProcessor.microarchitecture}}</td>\n      </tr>\n      <tr>\n      <th scope=\"row\">designed_by </th>\n\n            <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n\n      </tr>\n      <tr>\n             <th scope=\"row\">max_CPU_clock_rate</th>\n             <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\n\n      </tr>\n          <tr>\n               <th scope=\"row\">min_feature_size</th>\n               <td>{{processorService.selectedProcessor.min_feature_size}}</td>\n\n          </tr>\n          <tr>\n               <th scope=\"row\">instruction_set</th>\n               <td>{{processorService.selectedProcessor.instruction_set}}</td>\n\n          </tr>\n          <tr>\n               <th scope=\"row\">predecessor</th>\n               <td>{{processorService.selectedProcessor.successor}}</td>\n\n            </tr>\n            <tr>\n                 <th scope=\"row\">successor </th>\n                 <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n            </tr>\n            <tr>\n                 <th scope=\"row\">gpu</th>\n                 <td>{{processorService.selectedProcessor.gpu}}</td>\n            </tr>\n    </tbody>\n  </table>\n    <table let pro = \"processorService.selectedProcessor\">\n                                  <tr>\n                                      <th scope=\"row\">pid</th>\n                                      <td >{{processorService.selectedProcessor._id}}</td>\n\n                               </tr>\n\n\n                              <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor._id\">\n                              <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <label>pid :\n\n                                      </label>\n                                  <input type=\"text\" name=\"pid\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.pid\" >\n\n                                </div>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <label>Number of Cores :</label>\n                                  <input type=\"text\" name=\"num_of_cores\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.num_of_cores\" >\n\n                                </div>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <label>l1_Cache :</label>\n                                  <input type=\"text\" name=\"l1_Cache\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.l1_Cache\" >\n\n                                </div>\n                              </div>\n                              <div class=\"row\">\n                                  <label>l2_Cache :</label>\n\n                                <div class=\"input-field col s12\">\n                                  <input type=\"text\" name=\"l2_Cache\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.l2_Cache\" >\n                                </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"input-field col s12\">\n                                      <label>Product Code</label>\n                                    <input type=\"text\" name=\"product_code\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.product_code\" >\n\n                                  </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"input-field col s12\">\n                                        <label>Micro Architecture</label>\n                                      <input type=\"text\" name=\"microarchitecture\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.microarchitecture\">\n\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"input-field col s12\">\n                                        <label> Desgined By</label>\n                                      <input type=\"text\" name=\"designed_by\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.designed_by\" >\n\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"input-field col s12\">\n                                        <label>Max CPU Clock Rate</label>\n                                      <input type=\"text\" name=\"max_CPU_clock_rate\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.max_CPU_clock_rate\" >\n\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"input-field col s12\">\n                                        <label>Min Feature Size</label>\n                                      <input type=\"text\" name=\"min_feature_size\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.min_feature_size\" >\n\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"input-field col s12\">\n                                          <label>instruction_set :</label>\n                                        <input type=\"text\" name=\"instruction_set\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.instruction_set\" >\n\n                                      </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"input-field col s12\">\n                                            <label>predecessor :</label>\n                                          <input type=\"text\" name=\"predecessor\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.predecessor\" >\n\n                                        </div>\n                                      </div>\n                                      <div class=\"row\">\n                                        <div class=\"input-field col s12\">\n                                            <label>successor :</label>\n                                          <input type=\"text\" name=\"successor\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.successor\" >\n\n                                        </div>\n                                      </div>\n                                      <div class=\"row\">\n                                          <div class=\"input-field col s12\">\n                                              <label>GPU :</label>\n                                            <input type=\"text\" name=\"gpu\" #name=\"ngModel\" [(ngModel)]=\"processorService.selectedProcessor.gpu\">\n\n                                          </div>\n                                        </div>\n                              <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                  <button class=\"btn btn-custom right\" type=\"button\" (click)=\"resetForm(processorForm)\">Reset</button>\n                                  <button class=\"btn btn-custom right\" type=\"submit\" [disabled]=\"!processorForm.valid\">Submit</button>\n                                </div>\n                              </div>\n\n                            </table>\n\n</form>\n-->\n\n\n\n\n<div class=\"row\">\n    <div class=\"col s12\">\n     <div class=\"card\">\n       <div class=\"card-content white-text\">\n                        <div class=\"row\">\n\n                                            <div class=\"card-pro\">\n\n                                                <div>\n                                                  <h3>Intel 5i</h3>\n\n                                                  <mat-card-actions>\n\n                                                      <button  class=\"action-btn\"  (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" mat-button>VIEW</button>\n                                                      <button mat-button>COMPARE</button>\n                                                    </mat-card-actions>\n                                                </div>\n                                              </div>\n\n\n\n                       </div>\n\n          </div>\n      </div>\n\n      <button type=\"button\"  class=\"action-btn\"  (click)=\"onView('5cc2760bd9c3c750c4583446',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>\n      <button type=\"button\"  class=\"action-btn\"  (click)=\"onView('5cc28bf0d9c3c750c4583448',processorForm)\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>\n      <!-- Modal -->\n      <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Modal Header</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form #processorForm=\"ngForm\" (ngSubmit)=\"onSubmit(processorForm)\">\n                    <table class=\"table table-hover\">\n                        <thead>\n                          <tr>\n                            <th>#</th>\n                            <th>Specifications</th>\n\n                          </tr>\n                        </thead>\n                        <tbody>\n\n                          <tr>\n                          <th scope=\"row\"> pid </th>\n                          <td  >{{processorService.selectedProcessor.pid}}</td>\n                          </tr>\n                          <tr>\n                          <th scope=\"row\">num_of_cores</th>\n                          <td>{{processorService.selectedProcessor.num_of_cores}}</td>\n                          </tr>\n                          <tr>\n                          <th scope=\"row\">l1_Cache</th>\n                          <td>{{processorService.selectedProcessor.l1_Cache}}</td>\n                          </tr>\n                          <tr>\n                          <th scope=\"row\">l2_Cache</th>\n                          <td>{{processorService.selectedProcessor.l2_Cache}}</td>\n                          </tr>\n                          <tr>\n                          <th scope=\"row\">product_code</th>\n                          <td>{{processorService.selectedProcessor.product_code}}</td>\n                          </tr>\n                          <tr>\n                          <th scope=\"row\">microarchitecture</th>\n                          <td>{{processorService.selectedProcessor.microarchitecture}}</td>\n                          </tr>\n                          <tr>\n                          <th scope=\"row\">designed_by </th>\n\n                          <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n\n                          </tr>\n                          <tr>\n                                 <th scope=\"row\">max_CPU_clock_rate</th>\n                                 <td>{{processorService.selectedProcessor.max_CPU_clock_rate}}</td>\n\n                          </tr>\n                              <tr>\n                                   <th scope=\"row\">min_feature_size</th>\n                                   <td>{{processorService.selectedProcessor.min_feature_size}}</td>\n\n                              </tr>\n                              <tr>\n                                   <th scope=\"row\">instruction_set</th>\n                                   <td>{{processorService.selectedProcessor.instruction_set}}</td>\n\n                              </tr>\n                              <tr>\n                                   <th scope=\"row\">predecessor</th>\n                                   <td>{{processorService.selectedProcessor.successor}}</td>\n\n                                </tr>\n                                <tr>\n                                     <th scope=\"row\">successor </th>\n                                     <td>{{processorService.selectedProcessor.designed_by}}</td>\n\n                                </tr>\n                                <tr>\n                                     <th scope=\"row\">gpu</th>\n                                     <td>{{processorService.selectedProcessor.gpu}}</td>\n                                </tr>\n                        </tbody>\n                      </table>\n\n\n\n                  </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n     </div>\n   </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/view-processor/view-processor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/view-processor/view-processor.component.ts ***!
  \************************************************************/
/*! exports provided: ViewProcessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProcessorComponent", function() { return ViewProcessorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/processor.service */ "./src/app/shared/processor.service.ts");



//  declare var _id: '5cc18a55f623cf448016caf1';
var ViewProcessorComponent = /** @class */ (function () {
    function ViewProcessorComponent(processorService) {
        this.processorService = processorService;
    }
    ViewProcessorComponent.prototype.ngOnInit = function () {
        var id;
        this.resetForm();
        this.refreshProcessorList();
    };
    ViewProcessorComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.processorService.selectedProcessor = {
            _id: "",
            pid: "",
            num_of_cores: "",
            l1_Cache: "",
            l2_Cache: "",
            product_code: "",
            microarchitecture: "",
            designed_by: "",
            max_CPU_clock_rate: "",
            min_feature_size: "",
            instruction_set: "",
            predecessor: "",
            successor: "",
            gpu: "",
        };
    };
    ViewProcessorComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.processorService.postProcessor(form.value).subscribe(function (res) {
                console.log('43233');
                _this.resetForm(form);
                _this.refreshProcessorList();
                M.toast({ html: 'Saved successfully', classes: 'rounded' });
            });
        }
        else {
            this.processorService.putProcessor(form.value).subscribe(function (res) {
                console.log('hgfgfjh');
                _this.resetForm(form);
                _this.refreshProcessorList();
                M.toast({ html: 'Updated successfully', classes: 'rounded' });
            });
        }
    };
    ViewProcessorComponent.prototype.refreshProcessorList = function () {
        var _this = this;
        this.processorService.getProcessorList().subscribe(function (res) {
            _this.processorService.processors = res;
        });
    };
    ViewProcessorComponent.prototype.onEdit = function (pro) {
        this.processorService.selectedProcessor = pro;
    };
    ViewProcessorComponent.prototype.onDelete = function (_id, form) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.processorService.deleteProcessor(_id).subscribe(function (res) {
                _this.refreshProcessorList();
                _this.resetForm(form);
                M.toast({ html: 'Deleted successfully', classes: 'rounded' });
            });
        }
    };
    ViewProcessorComponent.prototype.onView = function (_id, form) {
        var _this = this;
        this.processorService.getProcessor(_id).subscribe(function (res) {
            console.log('onView');
            _this.processorService.selectedProcessor = res;
        });
    };
    ViewProcessorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-processor',
            template: __webpack_require__(/*! ./view-processor.component.html */ "./src/app/view-processor/view-processor.component.html"),
            providers: [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]],
            styles: [__webpack_require__(/*! ./view-processor.component.css */ "./src/app/view-processor/view-processor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_processor_service__WEBPACK_IMPORTED_MODULE_2__["ProcessorService"]])
    ], ViewProcessorComponent);
    return ViewProcessorComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"comparePro()\">Compare1</button>\r\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.comparePro = function () {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ng\digi-india\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map