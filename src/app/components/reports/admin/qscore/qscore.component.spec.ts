import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QscoreComponent } from './qscore.component';

describe('QscoreComponent', () => {
  let component: QscoreComponent;
  let fixture: ComponentFixture<QscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
