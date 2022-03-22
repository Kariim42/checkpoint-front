import { Component} from '@angular/core';
import { Product } from '../shared/services/model/Product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
    products : Product[] | undefined;

  constructor( private productService: ProductService) {
    this.productService.getProduct().subscribe((response:Product[] | undefined) => {
      response = this.products;
      console.log(response);
    }
    )}

}
