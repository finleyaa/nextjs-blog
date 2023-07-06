import Head from "next/head"
import { useEffect, useState } from "react"

export default function Layout({ children }) {
  const [query, setQuery] = useState('')

  const keyDown = (e) => {
    if (e.key === 'k' && e.metaKey) {
      e.preventDefault()
      document.querySelector('#search-input')?.focus()
    }
  }
  const searchChange = (e) => {
    setQuery(e.target.value)
  }
  useEffect(() => {
    document.addEventListener('keydown', keyDown)
    return () => {
      document.removeEventListener('keydown', keyDown)
    }
  })
  return (
    <>
      <Head>
        <title>fin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <header className="flex flex-col p-6 pb-0 mb-12 gap-4">
          <h1 className="text-2xl font-light leading-none">fin</h1>
          <div className="flex flex-row items-center gap-2 pr-2.5 w-80 bg-gradient-to-r focus:outline-2 focus:outline outline-offset-2 focus:outline-indigo-500 from-slate-100 to-slate-50 rounded-lg border border-slate-300">
            <input
              id="search-input"
              className="w-full shrink grow text-sm text-slate-600 p-2.5 bg-transparent focus:outline-none"
              placeholder="Search"
              value={query}
              onChange={searchChange}
            />
            <p className="bg-slate-200 text-slate-500 opacity-70 text-xs p-1 text-center rounded h-full w-max">
              ⌘K
            </p>
          </div>
        </header>
      </div>
    </>
  )
}