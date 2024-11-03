import { Injectable } from '@angular/core';
// import { cards } from "fab-cards";
import { CardsGateway } from '../../../core/infra/gateway/cards/cards-gateway';

@Injectable({
  providedIn: 'root'
})
export class CardsService
{
  private all_cards: any;
  public card: any

  constructor(private gatewayCards: CardsGateway)
  {

  }

  init()
  {
    this.gatewayCards.get().subscribe(
      (response) => this.all_cards = response,
      (error) => console.log(error)
    )
  }

  getByID( id: string )
  {
    return this.all_cards.find( (card: any) => card.printings.find( (printing_card: any) => printing_card.id == id ) );
  }
}
