import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLocations } from './about-locations';

describe('AboutLocations', () => {
  let component: AboutLocations;
  let fixture: ComponentFixture<AboutLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLocations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
