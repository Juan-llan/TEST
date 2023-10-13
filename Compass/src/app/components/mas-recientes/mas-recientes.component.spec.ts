import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasRecientesComponent } from './mas-recientes.component';

describe('MasRecientesComponent', () => {
  let component: MasRecientesComponent;
  let fixture: ComponentFixture<MasRecientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasRecientesComponent]
    });
    fixture = TestBed.createComponent(MasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
