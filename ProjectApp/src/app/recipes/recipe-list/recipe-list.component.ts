import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is only a test', 'https://www.topgear.com/sites/default/files/cars-car/image/2021/07/rimacnevera-26_0.jpg'),
    new Recipe('Test Recipe', 'This is only a test', 'https://www.topgear.com/sites/default/files/cars-car/image/2021/07/rimacnevera-26_0.jpg'),
    new Recipe('Test Recipe', 'This is only a test', 'https://www.topgear.com/sites/default/files/cars-car/image/2021/07/rimacnevera-26_0.jpg')
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
