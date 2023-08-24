import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomkeComponent } from './somke.component';

describe('SomkeComponent', () => {
  let component: SomkeComponent;
  let fixture: ComponentFixture<SomkeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomkeComponent]
    });
    fixture = TestBed.createComponent(SomkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
