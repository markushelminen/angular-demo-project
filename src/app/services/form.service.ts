import { Injectable } from "@angular/core";
import { ZIP_CODES } from "src/assets/models/zipCodes";

@Injectable()
export class FormService {

    searchForCity(zipcode: string) {
        if (zipcode.toString().length === 5 && ZIP_CODES[zipcode.toString()]) {
            return ZIP_CODES[zipcode.toString()].city
        } else return ''
    }
}