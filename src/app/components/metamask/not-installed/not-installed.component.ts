import { Component } from '@angular/core';

@Component({
  selector: 'app-not-installed',
  standalone: true,
  imports: [],
  template: `
    <section
      class="w-3/6 h-screen flex justify-center items-center p-6 m-auto text-neutral-900"
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
  `,
  styles: ``,
})
export class NotInstalledComponent {}
