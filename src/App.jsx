import './App.css'

function App() {
  let info = 'React is an internet superpower that drives me to create beautiful interfaces.';
  return (
    <>
      <div className="w-1/4 bg-orange-300 rounded-xl h-1/3">
        <h1 className="p-8 text-3xl font-bold underline animate-bounce text-emerald-600">
          Hello world!
        </h1>
        <p className='p-8 font-bold animate-bounce text-emerald-600'>
          {info}
        </p>
      </div>
    </>
  )
}

export default App
