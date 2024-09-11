import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

// fooddetails

foodDetails = [
  {
    id:1,
    foodName:"Paneer Grilled Sandwich",
    foodDetails:"Pan-fried masala paneer.",
    foodPrice:200,
    foodImg:"https://res.cloudinary.com/dkqf56lcp/image/upload/v1725966347/istockphoto-1362101397-612x612_fmm1zt.webp"
  },
  {
    id:2,
    foodName:"Veggie Supreme",
    foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
    foodPrice:369,
    foodImg:"https://res.cloudinary.com/dkqf56lcp/image/upload/v1725969803/istockphoto-989261146-612x612_qnbvg7.jpg"
  },
  {
    id:3,
    foodName:"Paneer Burger",
    foodDetails:"panner",
    foodPrice:149,
    foodImg:"https://res.cloudinary.com/dkqf56lcp/image/upload/v1725969929/istockphoto-1164080693-612x612_lkxfuh.jpg"
  },
  {
    id:4,
    foodName:"Veg Masala Roll In Naan",
    foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
    foodPrice:140,
    foodImg:"https://res.cloudinary.com/dkqf56lcp/image/upload/v1725970083/istockphoto-1051065210-612x612_zla405.jpg"
  },
  {
    id:5,
    foodName:"Indulgence Brownie",
    foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
    foodPrice:105,
    foodImg:"https://res.cloudinary.com/dkqf56lcp/image/upload/v1725970277/photo-1707070040174-7fd69fe69643_hsnh6y.avif"
  },
  {
    id:6,
    foodName:"Oreo Cheesecake Ice Cream",
    foodDetails:"Oreo ice cream",
    foodPrice:219,
    foodImg:"https://res.cloudinary.com/dkqf56lcp/image/upload/v1725970399/istockphoto-1150289647-612x612_gw6ltq.webp"
  }
]



}
