import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState<string>('Checking...')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setApiStatus(data.status === 'ok' ? '✅ Connected' : '❌ Error'))
      .catch(() => setApiStatus('❌ Disconnected'))
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">🥋 Judoka Network</h1>
        <p className="text-xl text-muted-foreground">
          Your Judo Social Platform
        </p>
        <div className="mt-8 p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground">API Status</p>
          <p className="text-lg font-semibold">{apiStatus}</p>
        </div>
      </div>
    </div>
  )
}

export default App
