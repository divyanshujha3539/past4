const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000'

export async function checkBackendHealth() {
  const response = await fetch(`${API_BASE_URL}/health`, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Backend health check failed')
  }

  const health = await response.json()

  if (health.status !== 'ok') {
    throw new Error('Unexpected backend health response')
  }

  return health
}
