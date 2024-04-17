import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytestsComponent } from './mytests.component';

describe('MytestsComponent', () => {
  let component: MytestsComponent;
  let fixture: ComponentFixture<MytestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
