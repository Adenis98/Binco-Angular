import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './component/carousel/carousel.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FirstSectionComponent } from './component/first-section/first-section.component';
import { SecondSectionComponent } from './component/second-section/second-section.component';
import { AvisSectionComponent } from './component/avis-section/avis-section.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from './service/article.service';
import { AHommeComponent } from './component/article/a-homme/a-homme.component';
import { AFemmeComponent } from './component/article/a-femme/a-femme.component';
import { AEnfantComponent } from './component/article/a-enfant/a-enfant.component';
import { DetailComponent } from './component/article/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    AvisSectionComponent,
    ConnexionComponent,
    AccueilComponent,
    NotfoundComponent,
    InscriptionComponent,
    AHommeComponent,
    AFemmeComponent,
    AEnfantComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    { path: '', component: AccueilComponent },
    { path: 'acceuil', component: AccueilComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'article/homme', component: AHommeComponent },
    { path: 'article/femme', component: AFemmeComponent },
    { path: 'article/enfant', component: AEnfantComponent },
    { path: 'article/homme/:id', component: DetailComponent },
    { path: '**', component: NotfoundComponent }])
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
