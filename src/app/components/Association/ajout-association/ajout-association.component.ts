import { Component, OnInit } from '@angular/core';
import { Association } from 'src/app/model/associations';
@Component({
  selector: 'app-ajout-association',
  templateUrl: './ajout-association.component.html',
  styleUrls: ['./ajout-association.component.css']
})
export class AjoutAssociationComponent implements OnInit {
  association=new Association()
  constructor() { }

  ngOnInit(): void {
  }

}
