import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'binco-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /*conActive=false ; 
  inscription=false; 
  acActive = false ; */
  constructor(private router: Router) { }/*

  active($event):void{
    console.log($event.srcElement.innerText);
    var inner = $event.srcElement.innerText ; 
    this.conActive =inner == "Connexion";
    this.acActive = inner == "Accueil" ; 
    this.inscription = inner == "Inscription" ;
  }*/
  ngOnInit(): void {
  }

}
