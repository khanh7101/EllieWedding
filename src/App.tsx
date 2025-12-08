import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { HomePage } from './pages/Home'
import { ContactPage } from './pages/Contact'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-ivory text-[#2f2a25]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
