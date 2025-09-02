import { useState } from 'react'
import { useTranslation } from './contexts/LanguageContext.jsx'

// Import delle pagine
import HomePage from './pages/HomePage.jsx'
import SouvenirPlot from './pages/SouvenirPlot.jsx'
import UsedBarrels from './pages/UsedBarrels.jsx'

// Import dei componenti
import LanguageSelector from './components/LanguageSelector.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Wine, ShoppingCart } from 'lucide-react'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState('home')
  const [cartItems, setCartItems] = useState([])

  const navigate = (page) => {
    setCurrentPage(page)
  }

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'souvenir-plot':
        return <SouvenirPlot onNavigate={navigate} onAddToCart={addToCart} />
      case 'used-barrels':
        return <UsedBarrels onNavigate={navigate} onAddToCart={addToCart} />
      case 'home':
      default:
        return <HomePage onNavigate={navigate} onAddToCart={addToCart} />
    }
  }

  // Header comune per tutte le pagine
  const renderHeader = () => (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('home')}>
            <Wine className="w-8 h-8 text-amber-600" />
            <div>
              <h1 className="text-xl font-bold text-amber-900">{t('header.title')}</h1>
              <p className="text-xs text-amber-600">{t('header.subtitle')}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('souvenir-plot')}
              className="text-amber-700 hover:text-amber-900 font-medium"
            >
              {t('header.nav.products')}
            </button>
            <a href="#heritage" className="text-amber-700 hover:text-amber-900 font-medium">
              {t('header.nav.heritage')}
            </a>
            <a href="#wineries" className="text-amber-700 hover:text-amber-900 font-medium">
              {t('header.nav.wineries')}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button
              variant="outline"
              className="border-amber-300 text-amber-700 hover:bg-amber-50 relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              {t('header.nav.login')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {renderHeader()}
      {renderPage()}
      <CookieBanner />
    </div>
  )
}

export default App

