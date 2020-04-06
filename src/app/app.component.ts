import { Component,
  Input,
  Output,
  AfterViewInit,
  ElementRef,
  ViewChild,
  EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
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

}
