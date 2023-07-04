import Head from "next/head"

export default function Layout({ children }) {
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
          <h1 className="text-4xl font-light leading-none">fin</h1>
          <div className="flex flex-row items-center gap-2 pr-2.5 w-64 bg-gradient-to-r focus:outline-2 focus:outline outline-offset-2 focus:outline-indigo-500 from-slate-100 to-slate-50 rounded-lg border border-slate-300">
            <input
              className="w-full shrink grow text-sm text-slate-600 p-2.5 bg-transparent focus:outline-none"
              placeholder="Search"
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