import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEtudiantComponent } from './ViewEtudiantComponent';

describe('ViewEtudiantComponent', () => {
  let component: ViewEtudiantComponent;
  let fixture: ComponentFixture<ViewEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEtudiantComponent]
    });
    fixture = TestBed.createComponent(ViewEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
