import { Component } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage {
  chapters = [
    { title: 'Chapter 1: Introduction', page: 1 },
    { title: 'Chapter 2: Exploring the World', page: 2 },
    { title: 'Chapter 3: The Journey Continues', page: 3 },
  ];
}
