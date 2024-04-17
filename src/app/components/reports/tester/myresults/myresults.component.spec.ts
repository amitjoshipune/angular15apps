import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresultsComponent } from './myresults.component';

describe('MyresultsComponent', () => {
  let component: MyresultsComponent;
  let fixture: ComponentFixture<MyresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyresultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
