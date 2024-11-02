import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService
{
  currentScreenSize: BehaviorSubject<string>

  constructor()
  {
    this.currentScreenSize = new BehaviorSubject<string>('');
  }

  set( value: string )
  {
    this.currentScreenSize?.next( value );;
  }

  get(): Observable<string>
  {
    return this.currentScreenSize!.asObservable();
  }
}
