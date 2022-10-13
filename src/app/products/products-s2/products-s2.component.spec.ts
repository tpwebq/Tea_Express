import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsS2Component } from './products-s2.component';

describe('ProductsS2Component', () => {
  let component: ProductsS2Component;
  let fixture: ComponentFixture<ProductsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
