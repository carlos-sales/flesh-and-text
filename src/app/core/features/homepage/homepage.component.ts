import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CardsService } from '../../../shared/services/cards/cards.service';
import { ScreenService } from '../../../shared/services/screen/screen.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent
{
  public current_size?: string = '';
  public form!: FormGroup;
  readonly dialog = inject(MatDialog);

  constructor(private serviceScreen: ScreenService,
              private serviceCards: CardsService,
              private formBuilder: NonNullableFormBuilder)
  {
    this.serviceScreen.get().subscribe( ( value ) => {
      this.current_size = value;
    });
    this.serviceCards.init();
  }

  ngOnInit()
  {
    this.initForm();
  }

  initForm()
  {
    this.form = this.formBuilder.group({
      card_id: [''],
    });
  }

  openDialog()
  {
    const card = this.serviceCards.getByID(this.form.value.card_id);
    // console.log(card)
    // console.log(this.serviceCards.getByID(this.form.value.card_id))
    const dialogRef = this.dialog.open(CardComponent, {
      data: card,
    });
  }
}
