import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/first-enums.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Refrigerator';
    this.description = 'NoFrost';
    this.price = 10000;
    this.isAvailable = true;
    this.category = Category.first;
  }

}
