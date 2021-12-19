import { Component } from '@angular/core';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  chapters;
  constructor(public rest: RestService) {
    this.getAllChapters();
  }

  getAllChapters() {
    this.rest.getChapters().subscribe((res: any) => {
      console.log(res);
      this.chapters = res.chapters;
    });
  }

}
