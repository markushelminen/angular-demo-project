import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';
import { Joke } from './chuck.model';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {
  currentJoke: Joke = {
    value: '',
    id: '',
    url: '',
    iconUrl: ''
  };
  iconUrl: string = '';

  constructor(private service: ChuckService) {
    this.getJoke(true)
   }

  ngOnInit(): void {
  }

  refresh() {
    this.getJoke();
  }

  getJoke(firstTime: boolean = false): void {
    console.log('new joke incoming')
    this.service.getChuck().subscribe((joke: Joke) => {
      this.currentJoke = joke;
      if(firstTime) this.iconUrl = joke.iconUrl;
    })
  }

}
