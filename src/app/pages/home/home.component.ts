import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
