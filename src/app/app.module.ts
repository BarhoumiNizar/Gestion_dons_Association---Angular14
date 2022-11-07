import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './components/Dons/ajout/ajout.component';
import { AffichageComponent } from './components/Dons/affichage/affichage.component';
import { ModifierDonComponent } from './components/Dons/modifier-don/modifier-don.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AjoutAssociationComponent } from './components/Association/ajout-association/ajout-association.component';
import { AfficherAssociationComponent } from './components/Association/afficher-association/afficher-association.component';
// Pour la gestion des Formulaires en angular
import {  FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    AffichageComponent,
    ModifierDonComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AjoutAssociationComponent,
    AfficherAssociationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
