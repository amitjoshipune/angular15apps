import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterhomeComponent } from './testerhome.component';

describe('TesterhomeComponent', () => {
  let component: TesterhomeComponent;
  let fixture: ComponentFixture<TesterhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
