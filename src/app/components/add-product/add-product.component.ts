import { ProductsService } from 'src/app/services/products.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product = {
    id: '',
    Name: '',
    Type: '',
    Color: '',
    Price: 0
  };

  constructor(private productsService: ProductsService, private router: Router){}

  addProducts(){
    this.productsService.addProduct(this.newProduct)
      .subscribe({
        next: (product) => {
          this.router.navigate(['products']);
        },
        error: (response) =>{
          console.log(response)
        }
      })
  }
}

