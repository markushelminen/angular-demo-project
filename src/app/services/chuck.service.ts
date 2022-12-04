import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Joke } from "../models/chuck.model";

@Injectable()
export class ChuckService {
    constructor(private http: HttpClient) {}
    
    getChuck(): Observable<Joke> {
        return this.http.get<Joke>('https://api.chucknorris.io/jokes/random')
    }

   getCategorizedChuck(category: string): Observable<Joke> {
        return this.http.get<Joke>(`https://api.chucknorris.io/jokes/random?category=${category}`)
   }
   
   getCategories() {
        return this.http.get('https://api.chucknorris.io/jokes/categories') 
   }
}
