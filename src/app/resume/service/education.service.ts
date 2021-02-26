import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducation(){
    return {
      university:"Chulalongkorn University",
      level:"B.A. Degree in Industrial Engineering",
      from:2013 ,
      to:2017,
      gpax:3.22
    }
  }

}
