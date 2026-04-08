import { useEffect, useState } from 'react'
import yaml from 'js-yaml'
import Card from './components/Card'
import type { SitesConfig } from './types'
import './App.css'

export default function App() {
  const [config, setConfig] = useState<SitesConfig | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const base = import.meta.env.BASE_URL
    fetch(`${base}sites.yaml`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load sites.yaml (${res.status})`)
        return res.text()
      })
      .then((text) => {
        const parsed = yaml.load(text) as SitesConfig
        setConfig(parsed)
      })
      .catch((err: Error) => setError(err.message))
  }, [])

  if (error) {
    return <div className="status-message error">{error}</div>
  }

  if (!config) {
    return <div className="status-message">Loading...</div>
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>{config.title ?? 'My Web Hub'}</h1>
      </header>
      <main className="card-grid">
        {config.cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </main>
    </div>
  )
}
