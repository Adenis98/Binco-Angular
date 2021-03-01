import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private auth:AuthService,private router :Router) { }

  ngOnInit(): void {
  }
  connect(f)
  {
    let user = {
      "mail": f.value.mail,
      "mdp": f.value.mdp,
    };
    let js = this.auth.connecter(user) ;
    (js)?this.router.navigate(['/acceuil']):console.log("errrrrrreur");
  }
}
