import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CompanyProvider } from './context/CompanyContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <CompanyProvider>
  <App />
</CompanyProvider>
)
