import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mz-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to maze!</h1>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}
