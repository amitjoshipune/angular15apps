import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaisComponent } from './myais.component';

describe('MyaisComponent', () => {
  let component: MyaisComponent;
  let fixture: ComponentFixture<MyaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
