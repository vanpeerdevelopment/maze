import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mz-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AppComponent {}
