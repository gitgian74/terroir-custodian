import { useState } from 'react'
import { useTranslation } from './contexts/LanguageContext.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ShoppingCart, Star, Award, MapPin, Calendar, Users, BarChart3, Shield, QrCode, Camera, Gift, Wine, Grape, ChevronRight } from 'lucide-react'
import LanguageSelector from './components/LanguageSelector.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import ShoppingCartComponent from './components/ShoppingCart.jsx'
import './App.css'

// Import delle immagini
import vineyardHero from './assets/Advi5m8oEq1x.jpg'
import barrelCellar from './assets/qoRaqAiOcQ0h.jpg'
import premiumWinery from './assets/S4ZiRpJouhDf.jpg'
import certificateGold from './assets/DmjHzrihmFtI.jpg'

function App() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('souvenirPlot')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const products = {
    souvenirPlot: [
      {
        id: 1,
        title: "Custode 1m - Cabernet Sauvignon",
        location: "Napa Valley, Oakville AVA",
        price: 200,
        image: vineyardHero,
        features: [
          t('valueProposition.souvenirPlot.features.0'),
          t('valueProposition.souvenirPlot.features.1'),
          t('valueProposition.souvenirPlot.features.2')
        ],
        yield: "1.9-2.4 kg/ceppo",
        category: 'souvenirPlot'
      },
      {
        id: 2,
        title: "Cru 5m - Pinot Noir Premium",
        location: "Sonoma Coast",
        price: 800,
        image: vineyardHero,
        features: [
          "Targhetta fisica",
          "Visita VIP",
          "Harvest Day"
        ],
        yield: "2.1-2.6 kg/ceppo",
        category: 'souvenirPlot'
      }
    ],
    usedBarrels: [
      {
        id: 3,
        title: "Legacy Barrique 2019",
        winery: "Château Premium",
        price: 1200,
        image: barrelCellar,
        features: [
          t('valueProposition.usedBarrels.features.0'),
          t('valueProposition.usedBarrels.features.1'),
          t('valueProposition.usedBarrels.features.2')
        ],
        vintage: "2019 Cabernet Sauvignon",
        category: 'usedBarrels'
      },
      {
        id: 4,
        title: "Icon Auction - Vintage 2015",
        winery: "Opus One",
        price: 3500,
        image: barrelCellar,
        features: [
          "Certificato Opus One",
          "Edizione limitata",
          "Collezione premium"
        ],
        vintage: "2015 Bordeaux Blend",
        category: 'usedBarrels'
      }
    ],
    adoptBarrel: [
      {
        id: 5,
        title: "Adopt Premium - Cabernet 2024",
        winery: "Screaming Eagle",
        price: 10000,
        image: premiumWinery,
        features: [
          t('valueProposition.adoptBarrel.features.0'),
          t('valueProposition.adoptBarrel.features.1'),
          t('valueProposition.adoptBarrel.features.2')
        ],
        duration: "24 mesi",
        category: 'adoptBarrel'
      }
    ]
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

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== productId))
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      )
    }
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Wine className="w-8 h-8 text-amber-600" />
              <div>
                <h1 className="text-xl font-bold text-amber-900">{t('header.title')}</h1>
                <p className="text-xs text-amber-600">{t('header.subtitle')}</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-amber-700 hover:text-amber-900 font-medium">
                {t('header.nav.products')}
              </a>
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
                onClick={() => setShowCart(true)}
                className="border-amber-300 text-amber-700 hover:bg-amber-50 relative"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                {t('header.nav.login')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${vineyardHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600/90 text-white border-amber-400">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')} <span className="text-amber-400">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              {t('hero.cta.catalog')}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3">
              {t('hero.cta.howItWorks')}
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              {t('valueProposition.title')}
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              {t('valueProposition.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Souvenir Plot */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">{t('valueProposition.souvenirPlot.title')}</CardTitle>
                <p className="text-amber-600">{t('valueProposition.souvenirPlot.subtitle')}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {[0, 1, 2, 3].map(i => (
                    <li key={i} className="flex items-center text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-2" />
                      {t(`valueProposition.souvenirPlot.features.${i}`)}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{t('valueProposition.souvenirPlot.priceFrom')}</div>
                  <div className="text-amber-600">{t('valueProposition.souvenirPlot.priceUnit')}</div>
                </div>
              </CardContent>
            </Card>

            {/* Used Barrels */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Wine className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">{t('valueProposition.usedBarrels.title')}</CardTitle>
                <p className="text-amber-600">{t('valueProposition.usedBarrels.subtitle')}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {[0, 1, 2, 3].map(i => (
                    <li key={i} className="flex items-center text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-2" />
                      {t(`valueProposition.usedBarrels.features.${i}`)}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{t('valueProposition.usedBarrels.priceFrom')}</div>
                  <div className="text-amber-600">{t('valueProposition.usedBarrels.priceUnit')}</div>
                </div>
              </CardContent>
            </Card>

            {/* Adopt-a-Barrel */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">{t('valueProposition.adoptBarrel.title')}</CardTitle>
                <p className="text-amber-600">{t('valueProposition.adoptBarrel.subtitle')}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {[0, 1, 2, 3].map(i => (
                    <li key={i} className="flex items-center text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-2" />
                      {t(`valueProposition.adoptBarrel.features.${i}`)}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{t('valueProposition.adoptBarrel.priceFrom')}</div>
                  <div className="text-amber-600">{t('valueProposition.adoptBarrel.priceUnit')}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              {t('catalog.title')}
            </h2>
            <p className="text-xl text-amber-700">
              {t('catalog.subtitle')}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 border border-amber-200">
              {['souvenirPlot', 'usedBarrels', 'adoptBarrel'].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-amber-600 text-white" 
                    : "text-amber-700 hover:bg-amber-50"
                  }
                >
                  {t(`catalog.tabs.${category}`)}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[selectedCategory]?.map((product) => (
              <Card key={product.id} className="border-amber-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                    {t('catalog.product.premium')}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{product.title}</h3>
                  <p className="text-amber-600 mb-4">{product.location || product.winery}</p>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-amber-700">
                        <Star className="w-3 h-3 text-amber-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-amber-900">
                      ${product.price.toLocaleString()}
                    </div>
                    <Button 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {t('catalog.product.buyNow')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">
                {t('heritage.badge')}
              </Badge>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                {t('heritage.title')}
              </h2>
              <p className="text-xl text-amber-700 mb-8">
                {t('heritage.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{t('heritage.stats.authenticity')}</div>
                  <div className="text-amber-700">{t('heritage.stats.authenticityLabel')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{t('heritage.stats.verification')}</div>
                  <div className="text-amber-700">{t('heritage.stats.verificationLabel')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={certificateGold} 
                alt="Digital Certificate"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              <QrCode className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-amber-200">{t('stats.wineries')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-amber-200">{t('stats.meters')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-amber-200">{t('stats.barrels')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-amber-200">{t('stats.adoptions')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wine className="w-6 h-6 text-amber-400" />
                <span className="text-xl font-bold text-white">{t('header.title')}</span>
              </div>
              <p className="text-amber-300 mb-4">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.products.title')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.products.souvenirPlot')}</a></li>
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.products.usedBarrels')}</a></li>
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.products.adoptBarrel')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.support.title')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.support.howItWorks')}</a></li>
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.support.faq')}</a></li>
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.support.contact')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.legal.title')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.legal.terms')}</a></li>
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.legal.privacy')}</a></li>
                <li><a href="#" className="text-amber-300 hover:text-white">{t('footer.legal.certifications')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-12 pt-8 text-center">
            <p className="text-amber-300">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <ShoppingCartComponent
          items={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateCartQuantity}
          total={cartTotal}
        />
      )}

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  )
}

export default App

