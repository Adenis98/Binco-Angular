import { Component, OnInit } from '@angular/core';

import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-a-homme',
  templateUrl: './a-homme.component.html',
  styleUrls: ['./a-homme.component.css']
})
export class AHommeComponent implements OnInit {
  articleHomme :ArticleService;
  boucle1 ;
  boucle2 ; 
  constructor(article:ArticleService) {
    this.articleHomme = article ;
   }
  ngOnInit(): void {
    console.log(this.articleHomme.art); 
  }
}
