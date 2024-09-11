import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {


  constructor(private service: OrderDetailsService) {}
  foodData:any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;

  }
}
