import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './components/Dons/ajout/ajout.component';
import { HomeComponent } from './components/home/home.component';
import { AffichageComponent } from './components/Dons/affichage/affichage.component';
import { AjoutAssociationComponent } from './components/Association/ajout-association/ajout-association.component';
import { AfficherAssociationComponent } from './components/Association/afficher-association/afficher-association.component';
const routes: Routes = [
 { path:'',component:HomeComponent },
 { path:'Don/Ajout',component:AjoutComponent },
 { path:'Don/Afficher',component:AffichageComponent },
 { path:'Association/Ajout',component:AjoutAssociationComponent },
 { path:'Association/Afficher',component:AfficherAssociationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
