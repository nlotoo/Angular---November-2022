import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecComponentExamplesComponent } from './lec-component-examples.component';

describe('LecComponentExamplesComponent', () => {
  let component: LecComponentExamplesComponent;
  let fixture: ComponentFixture<LecComponentExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecComponentExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecComponentExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
