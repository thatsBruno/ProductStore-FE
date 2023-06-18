import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: '23232323',
      Name: "T-shirt",
      Type: "Garment",
      Color: "red",
      Price: 9.99
    },
    {
      id: '23222223',
      Name: "Shirt",
      Type: "Garment",
      Color: "red",
      Price: 19.99
    }
  ];
}
