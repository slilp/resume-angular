import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() { }

  getWorks(){
    return [
      {
        company: "Hatari wireless Co.,Ltd.",
        position:"Software engineer",
        from:2019,
        to:2020,
        description:["Designing solution from customer requirement include database , API , software architecture",
      "Planning task to a developer team in role of team lead",
    "Front-end development with MVC .NET core",
  "Back-end development with .NET core API"]
      },
      {
        company: "Hatari wireless Co.,Ltd.",
        position:"Programmer Analyst",
        from: 2017,
        to:2019,
        description:[
          "Back-end developement with .NET core API",
          "Schedule task with .NET core console app",
          "API document",
          "Designing sequence diagram"
        ]
      }
    ]
  }
}
