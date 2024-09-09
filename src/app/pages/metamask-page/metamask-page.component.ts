import { Component, inject } from '@angular/core';
import { MetamaskService } from '../../service/metamask.service';
import { NotInstalledComponent } from '../../components/metamask/not-installed/not-installed.component';
import { UserDataComponent } from '../../components/metamask/user-data/user-data.component';
import { ConnectComponent } from '../../components/metamask/connect/connect.component';
import { ChangeNetworkComponent } from '../../components/metamask/change-network/change-network.component';

@Component({
  selector: 'app-metamask-page',
  standalone: true,
  imports: [
    NotInstalledComponent,
    UserDataComponent,
    ConnectComponent,
    ChangeNetworkComponent,
  ],
  template: `
    <section
      class="w-full h-screen flex items-center justify-center bg-zinc-800"
    >
      @if (!metamaskService.isMetaMaskInstalled()) {
      <app-not-installed />
      }@else if (metamaskService.isConnected()) {
      <section class="flex flex-col gap-y-6">
        <app-change-network />
        <app-user-data />
      </section>
      }@else {
      <app-connect />
      }
    </section>
  `,
  styles: ``,
})
export class MetamaskPageComponent {
  public metamaskService = inject(MetamaskService);
}
