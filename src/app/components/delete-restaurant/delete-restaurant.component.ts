import { Component } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css'],
})
export class DeleteRestaurantComponent {
  constructor(private restaurantService: RestaurantService) {}

  deleteRestaurant(id: number) {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.restaurantService.deleteRestaurant(id).subscribe(
        () => console.log('Restaurant deleted'),
        (error) => console.error('Error deleting restaurant', error)
      );
    }
  }
}
