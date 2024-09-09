import { Component, inject } from '@angular/core';
import { MetamaskService } from '../../../service/metamask.service';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [],
  template: `
    <section class="flex justify-center items-center w-full h-screen">
      <button
        (click)="connectToMetaMask()"
        class="flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-gray-300
           hover:bg-neutral-950 hover:text-gray-50 hover:scale-95 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
          />
          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
        Conectar a MetaMask
      </button>
    </section>
  `,
  styles: ``,
})
export class ConnectComponent {
  public metamaskService = inject(MetamaskService);

  async connectToMetaMask() {
    await this.metamaskService.connectToMetaMask();
  }
}
