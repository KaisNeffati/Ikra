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
var core_1 = require("@angular/core");
var students_service_1 = require("../services/students.service");
var HomeComponent = (function () {
    function HomeComponent(_StudentsService) {
        this._StudentsService = _StudentsService;
        this.listFilter = "";
        this.index = 0;
        this.word = ["ب", "س", "م", " ", "ا", "ل", "ل", "ه", " ", "ا", "ل", "ر", "ح", "م", "ن", " ", "ا", "ل", "ر", "ح", "ي", "م"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._StudentsService.getProducts()
            .subscribe(function (students) { return _this.students = students; }, function (error) { return _this.errorMessage = error; });
        var audio = new Audio();
        audio.src = "app/assets/audio/bismilah.mp3";
        audio.load();
        audio.play();
        this.show();
    };
    HomeComponent.prototype.show = function () {
        var _this = this;
        if (this.word.length == this.index) {
            console.log("done");
        }
        else {
            setTimeout(function () {
                _this.listFilter += _this.word[_this.index];
                _this.index++;
                _this.show();
            }, 140);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "home",
        templateUrl: "./home.component.html",
        styleUrls: ['./home.component.css'],
        providers: [students_service_1.StudentsService]
    }),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map