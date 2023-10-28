import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './utils/QueryClient'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </QueryClientProvider>
)
