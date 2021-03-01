import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms' ; 
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CustomValid } from './customValid.validtors';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form = new FormGroup ({
    nom: new FormControl('' ,[Validators.required , Validators.minLength(3) , CustomValid.onlyLetters , CustomValid.cannotContainSpace]) ,
    prenom: new FormControl('',[Validators.required , Validators.minLength(3) , CustomValid.onlyLetters , CustomValid.cannotContainSpace]),
    mail: new FormControl('', [Validators.required,Validators.email , CustomValid.emailDomainName]),
    mdp : new FormControl('',[Validators.required ,Validators.minLength(10)]),
    adr : new FormControl('' ,[Validators.required,Validators.minLength(10)]),
  }) ; 
  get nom(){
    return this.form.get('nom');
  }
  get prenom()
  {
    return this.form.get('prenom');
  }
  get mail()
  {
    return this.form.get('mail');
  }
  get mdp()
  {
    return this.form.get('mdp');
  }
  get adr()
  {
    return this.form.get('adr');
  }
 mdpError:boolean =false; 
  constructor(private auth : AuthService,private router: Router) {}

  verifMdp(mdp1:any,mdp2:any)
  {
    this.mdpError = (mdp1.value!=mdp2.value)?true:false; 
    console.log("mdp1 value : ",mdp1);
  }
  ngOnInit(): void {
  }
  inscrire()
  {
    let user = {
      "nom":this.nom.value,
      "prenom":this.prenom.value,
      "mail": this.mail.value,
      "mdp": this.mdp.value,
      "adr":this.adr.value
    };
    this.auth.inscription(user);
    this.router.navigate(['/connexion']);
  }
  /*
  nomErreur:boolean=false ;
  prenErreur:boolean=false ;
  mdpErreur:boolean=false ; 
  verifierChaine($event):boolean
  {
    var val = $event.target.value ; 
    var i:number;
    if(val.length==0)
    {
      if($event.target.name=="nom")
        this.nomErreur=true; 
      else
        this.prenErreur=true ; 
      return false ;
    }
    for(i =0; i<val.length ; i++)
      if((val[i]>'z'||val[i]<'a')&&(val[i]>'Z'||val[i]<'A'))
      {
        if($event.target.name=="nom")
          this.nomErreur=true; 
        else
          this.prenErreur=true ;
        return false ;
      }
    if($event.target.name=="nom")
        this.nomErreur=false ;  
      else
        this.prenErreur=false ;
    return true ; 
  }
  verifierMdp($event):boolean
  {
    var val = $event.target.value ; 
    return true ;
  }
  verifierSubmit()
  {
    
  }*/
  

}
