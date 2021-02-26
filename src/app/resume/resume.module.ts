import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import {SkillService} from './service/skill.service';
import {EducationService} from './service/education.service';
import {WorkService} from './service/work.service';

@NgModule({
  declarations: [
    BasicInfoComponent,
    EducationComponent,
    SkillComponent,
    WorkComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BasicInfoComponent,
    EducationComponent,
    SkillComponent,
    WorkComponent
  ],
  providers:[
    SkillService,
    EducationService,
    WorkService
  ]
})
export class ResumeModule { }
