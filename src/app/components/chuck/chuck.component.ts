import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';
import { Joke } from './chuck.model';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {
  jokesArr: Array<Joke> = [];

  constructor(private service: ChuckService) {
    this.service.getChuck().subscribe((joke: Joke) => {
      this.jokesArr.push(joke);
    })
   }

  ngOnInit(): void {
  }

}
