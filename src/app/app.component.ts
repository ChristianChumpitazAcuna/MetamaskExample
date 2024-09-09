import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetamaskPageComponent } from './pages/metamask-page/metamask-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MetamaskPageComponent],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
  title = 'MetaMaskExample';
}
