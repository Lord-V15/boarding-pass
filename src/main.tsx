import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

declare global {
	interface Window {
		BarcodeDetector: any
	}
}

const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm('New content available. Reload?')) {
			updateSW(true)
		}
	},
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
