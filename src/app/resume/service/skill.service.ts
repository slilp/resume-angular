import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getSkills(){
      return [{
        img:"../../../assets/img/dotnet_logo.png"
      },{
        img:"../../../assets/img/html-css-js.jpeg"
      },{
        img:"../../../assets/img/microsoft-sql-server-logo.png"

      }
      ]
  }

}
