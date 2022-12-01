import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Joke } from "../components/chuck/chuck.model";

@Injectable()
export class ChuckService {
    constructor(private http: HttpClient) {}
    getChuck(): Observable<Joke> {
        return this.http.get<Joke>('https://api.chucknorris.io/jokes/random')
    }
}
