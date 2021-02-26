import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LayoutModule} from './layout/layout.module';
import {ResumeModule} from './resume/resume.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from '../app/resume/basic-info/basic-info.component';
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes =  [
  {
    path : '',
    component:BasicInfoComponent
  },
  {
    path:'**',
    component:BasicInfoComponent
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    BrowserAnimationsModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
