import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
    <App />
    </QueryClientProvider>
   
  </React.StrictMode>,
)
