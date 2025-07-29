import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../../model/country.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  http = inject(HttpClient)

  getCountries(){
    const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,cca3'
    return this.http.get<Array<Country>>(url)
  }

  getSelectedCountry(code: String){
    const url = `https://restcountries.com/v3.1/alpha?codes=${code}`
    return this.http.get<Country[]>(url)
  }
}
