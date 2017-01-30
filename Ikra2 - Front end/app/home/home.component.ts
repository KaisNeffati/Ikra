import {Component,OnInit} from '@angular/core';

import { IStudent } from '../students/student';
import { StudentsService } from '../services/students.service';

@Component({
    moduleId:module.id,
    selector:"home",
    templateUrl:"./home.component.html",
    styleUrls:['./home.component.css'],
    providers:[StudentsService]
})
export class HomeComponent implements OnInit{
    listFilter: string="";
    index: number=0;
    students: IStudent[];
    errorMessage: string;
    word: string[]= ["ب","س","م"," ","ا","ل","ل","ه"," ","ا","ل","ر","ح","م","ن"," ","ا","ل","ر","ح","ي","م"];
    

    constructor(private _StudentsService: StudentsService) {

    }

    ngOnInit():void{
        this._StudentsService.getProducts()
                .subscribe(students => this.students = students,
                           error => this.errorMessage = <any>error);
        let audio=new Audio();
        audio.src="app/assets/audio/bismilah.mp3";
        audio.load();
        audio.play();
        this.show();
    }
        show():void{
        if(this.word.length==this.index){
        console.log("done");
        }else{
        setTimeout(()=>{
            this.listFilter+=this.word[this.index];
            this.index++;
            this.show();
                },140);
        }
    }

}