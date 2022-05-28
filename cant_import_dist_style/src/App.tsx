import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
/**
 * only one of the improts will work!
 * but cat node_modules/@test/ui/dist/styles.css 
 * shows the file EXISTS!
 */
//  import '@test/ui/dist/styles.css';
// import 'node_modules/@test/ui/dist/styles.css'; // <-- doesn't work
import '/node_modules/@test/ui/dist/styles.css'; // <-- works! 
// import './node_modules/@test/ui/dist/styles.css'; /// <--- doesn't work!

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
