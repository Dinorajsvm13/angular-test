import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsGetterComponent } from './params-getter.component';

describe('ParamsGetterComponent', () => {
  let component: ParamsGetterComponent;
  let fixture: ComponentFixture<ParamsGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParamsGetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
