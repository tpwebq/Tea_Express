import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutS4Component } from './about-s4.component';

describe('AboutS4Component', () => {
  let component: AboutS4Component;
  let fixture: ComponentFixture<AboutS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutS4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
