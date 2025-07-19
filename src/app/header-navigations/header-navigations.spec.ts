import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavigations } from './header-navigations';

describe('HeaderNavigations', () => {
  let component: HeaderNavigations;
  let fixture: ComponentFixture<HeaderNavigations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavigations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavigations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
