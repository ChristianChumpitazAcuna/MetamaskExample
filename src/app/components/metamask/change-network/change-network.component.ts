import { Component, inject } from '@angular/core';
import { MetamaskService } from '../../../service/metamask.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-network',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <select
        class="w-2/6 p-2 bg-white/20 shadow-xl shadow-zinc-700 rounded-lg
        border-none placeholder-gray-400 text-sm text-zinc-200"
        id="network-select"
        (change)="onChange($event)"
        [value]="metamaskService.currentNetwork()?.id"
      >
        <option class="bg-neutral-900" value="">Seleccione una red</option>
        <option class="bg-neutral-900"
          *ngFor="let network of metamaskService.supportedNetworks"
          [value]="network.id"
        >
          {{ network.name }}
        </option>
      </select>
    </div>
  `,
  styles: ``,
})
export class ChangeNetworkComponent {
  public metamaskService = inject(MetamaskService);

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const networkId = target.value;

    this.metamaskService.changeNetwork(networkId).then((success) => {
      if (success) {
        console.log('Cambio de red exitoso');
      } else {
        console.log('Error al cambiar de red');
      }
    });
  }
}
