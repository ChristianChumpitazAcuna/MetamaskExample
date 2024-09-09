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
  currentNetwork = signal<{ id: string; name: string } | null>(null);

  supportedNetworks = [
    { id: '0x1', name: 'Ethereum Mainnet' },
    { id: '0x14a34', name: 'Base Sepolia' },
    { id: '0x4268', name: 'Ethereum Holesky' },
  ];

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

  async changeNetwork(networkId: string): Promise<boolean> {
    if (!this.web3 || !window.ethereum) {
      return false;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkId }],
      });

      const network = this.supportedNetworks.find((n) => n.id === networkId);
      if (network) {
        this.currentNetwork.set(network);
        this.updateBalance();
      } else {
        this.currentNetwork.set(null);
      }

      return true;
    } catch (error) {
      console.error('Error al cambiar de red:', error);
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
