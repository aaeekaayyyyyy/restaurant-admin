import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRestaurantComponent } from './add-restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddRestaurantComponent', () => {
  let component: AddRestaurantComponent;
  let fixture: ComponentFixture<AddRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRestaurantComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate the form when empty', () => {
    expect(component.restaurantForm.valid).toBeFalsy();
  });

  it('should validate the form when filled', () => {
    component.restaurantForm.controls['name'].setValue('Test Restaurant');
    component.restaurantForm.controls['location'].setValue('Test Location');
    expect(component.restaurantForm.valid).toBeTruthy();
  });
});
