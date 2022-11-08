import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecComponetsListUserComponent } from './lec-componets-list-user.component';

describe('LecComponetsListUserComponent', () => {
  let component: LecComponetsListUserComponent;
  let fixture: ComponentFixture<LecComponetsListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecComponetsListUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecComponetsListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
