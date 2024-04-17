import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkresultComponent } from './markresult.component';

describe('MarkresultComponent', () => {
  let component: MarkresultComponent;
  let fixture: ComponentFixture<MarkresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
