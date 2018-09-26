import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { FirebaseService   } from './firebase.service';

@NgModule({
  
  declarations: [
    AppComponent,
    QuestionComponent
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
