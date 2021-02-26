import { Component, OnInit } from '@angular/core';
import {Skill} from '../model/skill';
import {SkillService} from '../service/skill.service';
 @Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills:Skill[];
  constructor(private skillService:SkillService ) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
    console.log(this.skills);
  }

}
