import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsGateway
{
  private readonly API: string;

  constructor(private httpClient: HttpClient )
  {
    this.API = 'https://the-fab-cube.github.io/flesh-and-blood-cards/json/english/card.json';
  }

  get()
  {
    return this.httpClient.get<any>(this.API).pipe( first() );
  }
}
