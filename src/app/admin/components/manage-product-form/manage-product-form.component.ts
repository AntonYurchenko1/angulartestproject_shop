import { Component, OnInit } from '@angular/core';
import { Product } from './../../../products/models/product.model';
import { ProductsService } from './../../../products/services/products.service';
import { ActivatedRoute, ParamMap, Router, UrlTree } from '@angular/router';
import { DialogService, CanComponentDeactivate } from './../../../core';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

// rxjs
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-manage-product-form',
  templateUrl: './manage-product-form.component.html',
  styleUrls: ['./manage-product-form.component.css']
})
export class ManageProductFormComponent implements OnInit, CanComponentDeactivate {
  product: Product;
  originalProduct: Product;


  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService

  ) { }

  ngOnInit(): void {
    /*this.product = new Product(null, '', '' , 0, false);
    // it is not necessary to save subscription to route.paramMap
    // when router destroys this component, it handles subscriptions automatically
    const observer = {
      next: (p: Product) => (this.product = { ...p }),
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productService.getProduct(+params.get('productID'))))
      .subscribe(observer);
      */

      this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
        this.product = { ...product };
        this.originalProduct = { ...product };
      });

  }

  onSaveProduct() {
    console.log('onSaveProduct');
    const product = { ...this.product } as Product;

    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.createProduct(product);
    }

    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const flags = Object.keys(this.originalProduct).map(key => {
      if (this.originalProduct[key] === this.product[key]) {
        return true;
      }
      return false;
    });

    if (flags.every(el => el)) {
      return true;
    }

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }


}

