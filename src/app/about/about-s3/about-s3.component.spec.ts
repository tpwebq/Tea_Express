import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutS3Component } from './about-s3.component';

describe('AboutS3Component', () => {
  let component: AboutS3Component;
  let fixture: ComponentFixture<AboutS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutS3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
