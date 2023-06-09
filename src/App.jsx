import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className="flex w-full">
      <Navbar />
      <div className="w-full bg-veryDarkGray overflow-hidden">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
