import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormessageComponent } from './errormessage.component';

describe('ErrormessageComponent', () => {
  let component: ErrormessageComponent;
  let fixture: ComponentFixture<ErrormessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrormessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrormessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
