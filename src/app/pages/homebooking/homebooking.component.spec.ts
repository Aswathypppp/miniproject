import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebookingComponent } from './homebooking.component';

describe('HomebookingComponent', () => {
  let component: HomebookingComponent;
  let fixture: ComponentFixture<HomebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
