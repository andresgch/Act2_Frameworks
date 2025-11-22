import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css'
})

export class News {
  title = 'Novedades'; //Título principal
  news = 'Nuevo'; //Texto badge
  
  images = {
    img1: '../../assets/img/1.webp',
    img2: '../../assets/img/2.webp',
    img3: '../../assets/img/3.webp',
    img4: '../../assets/img/4.webp'
  }
}
