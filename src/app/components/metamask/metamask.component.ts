import { Component, inject } from '@angular/core';
import { MetamaskService } from '../../service/metamask.service';

@Component({
  selector: 'app-metamask',
  standalone: true,
  imports: [],
  template: `
    @if (!metamaskService.isMetaMaskInstalled()) {
    <section
      class="w-3/6 h-screen flex justify-center m-auto items-center text-neutral-900 p-6"
    >
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="bg-neutral-900 px-4 py-2 rounded-full">
          <svg
            class="stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
            />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold">Metamask es requerido</h2>
        <p class="text-zinc-900 text-center">
          Para utilizar esta aplicación, es necesario tener Metamask instalado y
          conectado a su billetera.
        </p>
        <a
          href="https://metamask.io/download.html"
          target="_blank"
          class="inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch="{false}"
        >
          Download Metamask
        </a>
      </div>
    </section>
    } @else if (metamaskService.isConnected()) {
    <section class="w-1/4 h-screen flex justify-center m-auto items-center">
      <div class="w-full px-6 py-12 border-2 rounded-md shadow-md">
        <div class="text-zinc-900 text-center font-bold uppercase">
          <h2>Mis Datos de Metamask</h2>
        </div>
        <div class=" mt-4 space-y-8">
          <div class="grid gap-2">
            <label>Dirección</label>
            <input
              class="w-full px-3 py-2 bg-neutral-900 text-gray-300 rounded-md"
              [value]="metamaskService.address()"
              readOnly
            />
          </div>
          <div class="grid gap-2">
            <label>Saldo</label>
            <div
              class="w-full px-3 py-2 bg-neutral-900 text-gray-300 rounded-md"
            >
              <span class="text-xs">Saldo Actual</span>
              <div class=" text-2xl">{{ metamaskService.balance() }} ETH</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    } @else {
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
    }
  `,

  styles: ``,
})
export class MetamaskComponent {
  public metamaskService = inject(MetamaskService);

  async connectToMetaMask() {
    await this.metamaskService.connectToMetaMask();
  }
}
