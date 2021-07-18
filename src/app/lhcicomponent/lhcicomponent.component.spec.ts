import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhcicomponentComponent } from './lhcicomponent.component';

describe('LhcicomponentComponent', () => {
  let component: LhcicomponentComponent;
  let fixture: ComponentFixture<LhcicomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhcicomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhcicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
