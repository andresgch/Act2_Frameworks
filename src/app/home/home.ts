import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Carousel } from '../carousel/carousel';
import { News } from '../news/news';
import { Categories } from '../categories/categories';
import { Pagination } from '../pagination/pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, News, Pagination, Categories],
  templateUrl: './home.html', 
  styleUrl: './home.css',
})
export class Home {

}
