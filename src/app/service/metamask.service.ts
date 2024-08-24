import { effect, Injectable, signal } from '@angular/core';
import { MetaMaskInpageProvider } from '@metamask/providers';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

@Injectable({
  providedIn: 'root',
})
export class MetamaskService {
  private web3: Web3 | null = null;
  isMetaMaskInstalled = signal(false);
  isConnected = signal(false);
  address = signal('');
  balance = signal('');

  constructor() {
    this.checkMetaMaskInstallation();
  }

  private checkMetaMaskInstallation() {
    this.isMetaMaskInstalled.set(typeof window.ethereum !== 'undefined');
  }

  async connectToMetaMask(): Promise<boolean> {
    if (!this.isMetaMaskInstalled()) {
      console.log('MetaMask no está instalado');
      return false;
    }

    try {
      await window.ethereum!.request({ method: 'eth_requestAccounts' });
      this.web3 = new Web3(window.ethereum as any);

      const accounts = await this.web3.eth.getAccounts();
      this.address.set(accounts[0]);
      this.isConnected.set(true);

      await this.updateBalance();
      return true;
    } catch (error) {
      console.error('Error al conectar con MetaMask:', error);
      return false;
    }
  }

  private async updateBalance() {
    if (this.web3 && this.address()) {
      const balanceWei = await this.web3.eth.getBalance(this.address());
      const balanceEth = this.web3.utils.fromWei(balanceWei, 'ether');
      this.balance.set(balanceEth);
    }
  }
}
