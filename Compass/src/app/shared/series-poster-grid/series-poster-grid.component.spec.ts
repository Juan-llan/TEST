import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPosterGridComponent } from './series-poster-grid.component';

describe('SeriesPosterGridComponent', () => {
  let component: SeriesPosterGridComponent;
  let fixture: ComponentFixture<SeriesPosterGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesPosterGridComponent]
    });
    fixture = TestBed.createComponent(SeriesPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
