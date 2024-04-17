import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmessageComponent } from './generalmessage.component';

describe('GeneralmessageComponent', () => {
  let component: GeneralmessageComponent;
  let fixture: ComponentFixture<GeneralmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
