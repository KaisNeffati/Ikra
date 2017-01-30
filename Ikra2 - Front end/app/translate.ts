import {TranslateService} from 'ng2-translate';
export class Translate  {

    constructor(private translate: TranslateService) {
        this.translate.addLangs(["en", "fr","ar"]);
        this.translate.setDefaultLang('ar');
        this.translate.currentLang=this.translate.getDefaultLang();  
    }
    ChangeLanguage(str:string):void{
        this.translate.use(str);
    }
}