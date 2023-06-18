import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  updateProductRequest: Product = {
    id: '',
    Name: '',
    Type: '',
    Color: '',
    Price: 0
  };

  constructor(private router: Router, 
    private productsService: ProductsService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.productsService.getProduct(id)
            .subscribe({
              next: (response) => {
                this.updateProductRequest = response;
              }
            })
        }
      }
    })
  }

  updateProducts(){
    this.productsService.updateProduct(this.updateProductRequest.id, this.updateProductRequest)
      .subscribe({
        next: (response) => {
          this.router.navigate(['products']);
        },
        error: (error) => {
          console.log(error)
        }
      })
  }

}
