import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App' // <--- Calea corectată
import './index.css'

import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// Importăm constanta (named export) de la Pasul 1
import { networkConfig } from './hooks/useNetworkConfig' 

const queryClient = new QueryClient()

const RootComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider 
        defaultNetwork='devnet' 
        networks={networkConfig} // Folosește constanta statică
      >
        <WalletProvider>
          <App />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
)