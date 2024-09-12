import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRestaurantComponent } from './modify-restaurant.component';

describe('ModifyRestaurantComponent', () => {
  let component: ModifyRestaurantComponent;
  let fixture: ComponentFixture<ModifyRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyRestaurantComponent]
    });
    fixture = TestBed.createComponent(ModifyRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
