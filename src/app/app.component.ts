import { Component, inject, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';

import { FooterComponent } from './core/layouts/templates/footer/footer.component';
import { HeaderComponent } from './core/layouts/templates/header/header.component';
import { Subject, takeUntil } from 'rxjs';
import { ScreenService } from './shared/services/screen/screen.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy
{
  title = 'flesh-and-text';
  destroyed = new Subject<void>();

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'xsmall'],
    [Breakpoints.Small, 'small'],
    [Breakpoints.Medium, 'medium'],
    [Breakpoints.Large, 'large'],
    [Breakpoints.XLarge, 'xlarge'],
  ]);

  constructor(public serviceScreen: ScreenService)
  {
    inject(BreakpointObserver)
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints))
        {
          if (result.breakpoints[query])
          {
            this.serviceScreen.set( this.displayNameMap.get(query) ?? 'Unknown' );
          }
        }
      });
  }

  ngOnDestroy()
  {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
