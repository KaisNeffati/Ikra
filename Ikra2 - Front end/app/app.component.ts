import {Component,OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {Translate} from './translate';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    
})

export class AppComponent extends Translate implements OnInit{
    orientation:Boolean;
  constructor(private trans: TranslateService) {
      super(trans);
  }
    ngOnInit() {
        console.log(this.trans.currentLang);
    }
}