import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public id :any;
  public myObj:any ; 
  ar :any;
  constructor(private route:ActivatedRoute,private article:ArticleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
    });
    for(let i=0 ;i< this.article.art.length ; i++)
      if(this.article.art[i].id==this.id)
        this.myObj = this.article.art[i] ; 
    console.log(this.myObj);
  }
  

}
