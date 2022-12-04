import { Component } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';
import { Joke } from '../../models/chuck.model';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent{
  currentJoke: Joke = {
    value: '',
    id: '',
    url: '',
    iconUrl: ''
  };
  categories: Array<string> = [];

  constructor(private service: ChuckService) {
    this.getJoke();
    this.getCategories();
  }

  selectCategory(item: string) {
    this.service.getCategorizedChuck(item).subscribe((joke: Joke) => {
      this.currentJoke = joke;
    });
  }

  getCategories() {
    this.service.getCategories().subscribe((result: any) => {
      this.categories = result
    })
  }

  getJoke(): void {
    this.service.getChuck().subscribe((joke: Joke) => {
      this.currentJoke = joke;
    });
  }

}
