import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsS1Component } from './products-s1.component';

describe('ProductsS1Component', () => {
  let component: ProductsS1Component;
  let fixture: ComponentFixture<ProductsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
