import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css'],
})
export class ListRestaurantComponent implements OnInit {
  searchQuery: string = '';
  restaurants: any[] = [
    { name: 'Restaurant A', location: 'City A' },
    { name: 'Restaurant B', location: 'City B' },
  ];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }

  filterRestaurants() {
    return this.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
