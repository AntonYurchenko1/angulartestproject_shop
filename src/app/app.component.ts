import { Component,
  Input,
  Output,
  AfterViewInit,
  ElementRef,
  ViewChild,
  EventEmitter } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CartService } from './cart/services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(
    public cartService: CartService,
    private router: Router) { }

  @ViewChild('appTitle')
  appTitleField: ElementRef<HTMLInputElement>;

  private title = 'shop';

  ngAfterViewInit() {
    this.appTitleField.nativeElement.textContent = 'Welcome to the ' + this.title + '!';
  }

  onActivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {
      console.log('Deactivated Component', $event, routerOutlet);
  }

  onDisplayCart(): void {
    this.router.navigate([{ outlets: { cart: ['cart'] } }]);
    this.cartService.isDisplayed = true;
    console.log('cart is displayed ', this.cartService.isDisplayed);
  }


}
