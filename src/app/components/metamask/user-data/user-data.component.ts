import { Component, inject } from '@angular/core';
import { MetamaskService } from '../../../service/metamask.service';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  template: `
    <section class="w-[500px] h-auto bg-white/20 shadow-xl shadow-zinc-700 rounded-lg">
      <div class="w-full px-6 py-12">
        <div class="text-zinc-300 text-center font-bold uppercase">
          <h2>Mis Datos de Metamask</h2>
        </div>
        <div class=" mt-4 space-y-8">
          <div class="grid gap-2">
            <label class="text-zinc-300">Dirección</label>
            <input
              class="w-full px-3 py-2 bg-neutral-900 text-zinc-200 rounded-md"
              [value]="metamaskService.address()"
              readOnly
            />
          </div>
          <div class="grid gap-2">
            <label class="text-zinc-300">Saldo</label>
            <div
              class="w-full px-3 py-2 bg-neutral-900 text-zinc-200 rounded-md"
            >
              <span class="text-xs">Saldo Actual</span>
              <div class=" text-2xl">{{ metamaskService.balance() }} ETH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class UserDataComponent {
  public metamaskService = inject(MetamaskService);
}
