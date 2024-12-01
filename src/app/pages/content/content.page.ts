import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  page: number = 1;
  chapter: any;

  chapters = [
    {
      title: 'Chapter 1: Introduction',
      content:
        'In a quiet village nestled in a valley, an old storyteller spoke of ancient tales by the fire. The villagers gathered around him every night to listen, their eyes glimmering with wonder. Among them was a curious traveler who yearned to uncover the secrets hidden in the mountains beyond the village. This is where the journey begins.',
      image: 'assets/ch1.jpg',
    },
    {
      title: 'Chapter 2: Exploring the World',
      content:
        'The traveler packed his bag with essentials: a map, a compass, and a journal. As he ventured into the mountains, the world opened up to him like a book waiting to be read. Towering peaks, crystal-clear rivers, and hidden paths led him to places he had only dreamed of. Each step brought him closer to the mysteries he sought.',
      image: 'assets/ch2.jpg',
    },
    {
      title: 'Chapter 3: The Journey Continues',
      content:
        'The journey was far from over. The traveler encountered ancient ruins buried in the forest, whispering stories of forgotten civilizations. Along the way, he befriended a wandering merchant who shared tales of distant lands. Together, they charted a path that promised new adventures, with the horizon stretching endlessly before them.',
      image: 'assets/ch3.jpg',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.page = parseInt(this.route.snapshot.paramMap.get('page') ?? '1', 10);
    this.chapter = this.chapters[this.page - 1] || {};
  }
}
