import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherAssociationComponent } from './afficher-association.component';

describe('AfficherAssociationComponent', () => {
  let component: AfficherAssociationComponent;
  let fixture: ComponentFixture<AfficherAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherAssociationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
