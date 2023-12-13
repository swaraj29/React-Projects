import './App.css'
import Home from './Home'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
      <div className='min-h-screen'>
        <div className='grid grid-cols-12'>
          <section className='col-span-12 sm:col-span-4 md:col-span-2'>
            <Sidebar />
          </section>
          <main className='col-span-12 sm:col-span-8 md:col-span-10'>
            <Home />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App