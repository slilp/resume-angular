import { Component, OnInit } from '@angular/core';
import {Work} from '../model/work';
import {WorkService} from '../service/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  works:Work[];
  constructor(private workService:WorkService) { }

  ngOnInit(): void {
    this.works = this.workService.getWorks();
  }

}
