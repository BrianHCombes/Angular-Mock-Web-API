import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
//import { QuestionComponent } from './question/question.component';
//import { FirebaseService   } from './firebase.service';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';
import { FirebaseService   } from './create-question-page/firebase.service';

@NgModule({
  
  declarations: [
    AppComponent,
    CreateQuestionPageComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    EditorModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
