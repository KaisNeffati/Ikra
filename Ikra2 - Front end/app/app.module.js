"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home/home.component");
var path_component_1 = require("./path/path.component");
var pathLevel1_component_1 = require("./path/levels/level1/pathLevel1.component");
var events_component_1 = require("./events/events.component");
var courses_component_1 = require("./courses/courses.component");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
var ng2_translate_2 = require("ng2-translate");
var ng2_translate_3 = require("ng2-translate");
var angular2_mdl_1 = require("angular2-mdl");
var app_routing_module_1 = require("./routing/app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            angular2_mdl_1.MdlModule,
            ng2_translate_3.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: function (http) { return new ng2_translate_2.TranslateStaticLoader(http, 'app/assets/translate', '.json'); },
                deps: [http_1.Http]
            }),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            path_component_1.PathComponent,
            courses_component_1.CoursesComponent,
            events_component_1.EventsComponent,
            pathLevel1_component_1.PathLevel1Component,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map