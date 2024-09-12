import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  private mockRestaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Restaurant A',
      location: 'Location A',
      phone: '1234567890',
      email: 'contact@resta.com',
    },
    { id: 2, name: 'Restaurant B', location: 'Location B' },
  ];

  getRestaurants(): Observable<Restaurant[]> {
    return of(this.mockRestaurants); // Mocking the API call
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    restaurant.id = this.mockRestaurants.length + 1;
    this.mockRestaurants.push(restaurant);
    return of(restaurant);
  }

  deleteRestaurant(id: number): Observable<void> {
    this.mockRestaurants = this.mockRestaurants.filter((r) => r.id !== id);
    return of();
  }

  modifyRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    const index = this.mockRestaurants.findIndex((r) => r.id === restaurant.id);
    if (index !== -1) {
      this.mockRestaurants[index] = restaurant;
    }
    return of(restaurant);
  }
}
