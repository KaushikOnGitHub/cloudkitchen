import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menupage',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})
export class MenupageComponent {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');

    }

  }

}
