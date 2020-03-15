import { Component,
  Input,
  Output,
  AfterViewInit,
  ElementRef,
  ViewChild,
  EventEmitter } from '@angular/core';

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
}
