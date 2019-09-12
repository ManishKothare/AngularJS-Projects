import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePartsComponent } from './mobile-parts.component';

describe('MobilePartsComponent', () => {
  let component: MobilePartsComponent;
  let fixture: ComponentFixture<MobilePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
