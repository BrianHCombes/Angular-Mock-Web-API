import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Mock-Web-API';
  
    
    sQuestions = [
      { "id": "0", "desc": "singleQuestion0" },
      { "id": "1", "desc": "singleQuestion1" },
      { "id": "2", "desc": "singleQuestion2" },
      { "id": "3", "desc": "singleQuestion3" },
      { "id": "4", "desc": "singleQuestion4" },
      { "id": "5", "desc": "singleQuestion5" },
      { "id": "6", "desc": "singleQuestion6" },
      { "id": "7", "desc": "singleQuestion7" },
      { "id": "8", "desc": "singleQuestion8" },
      { "id": "9", "desc": "singleQuestion9" }
    ];
        
  constructor(private firebaseService: FirebaseService){}
  
  onSaveQuestions() {
      
        console.log(JSON.stringify(this.sQuestions));

        this.firebaseService.storeQuestions(this.sQuestions)
        .subscribe(
          (response) => console.log("-- " + response),
          (error) => console.log("** " + JSON.stringify(error))
        );
  };
  
  onGetQuestions(){
        this.firebaseService.getQuestions()
        .subscribe(
            //(response) => console.log(response),
            
            (response: HttpResponse<any[]>) => { 
             const data = response;
             console.log(data);
            },
        
            //(theQuestions: any[]) => {
            //    console.log(theQuestions) 
            //},
            (error) => console.log("get error is: " + JSON.stringify(error))
        )
  }
}
// This error shows when I try to use the map feature as per its use in firebase.service.ts 
/* 
ERROR in src/app/app.component.ts(65,13): error TS2345: Argument of type '(theQuestions: any[]) => void' is not assignable to parameter of type '(value: HttpResponse<any[]>) => void'.
  Types of parameters 'theQuestions' and 'value' are incompatible.
    Type 'HttpResponse<any[]>' is not assignable to type 'any[]'.
      Property 'includes' is missing in type 'HttpResponse<any[]>'.
*/
            