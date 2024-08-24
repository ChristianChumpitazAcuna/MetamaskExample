import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetamaskComponent } from './components/metamask/metamask.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MetamaskComponent],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
  title = 'MetaMaskExample';
}
