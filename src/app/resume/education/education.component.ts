import { Component, OnInit } from '@angular/core';
import {Education} from '../model/education';
import {EducationService} from '../service/education.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education:Education;
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    
    this.education = this.educationService.getEducation();
  }

}
