"use strict";
var Translate = (function () {
    function Translate(translate) {
        this.translate = translate;
        this.translate.addLangs(["en", "fr", "ar"]);
        this.translate.setDefaultLang('ar');
        this.translate.currentLang = this.translate.getDefaultLang();
    }
    Translate.prototype.ChangeLanguage = function (str) {
        this.translate.use(str);
    };
    return Translate;
}());
exports.Translate = Translate;
//# sourceMappingURL=translate.js.map