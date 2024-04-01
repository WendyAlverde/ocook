import './lib/style/reset.css'
import './lib/style/app.scss'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
