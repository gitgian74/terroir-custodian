import { useState } from 'react'
import { useTranslation } from '../contexts/LanguageContext.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Star, Award, MapPin, Calendar, Users, BarChart3, Shield, QrCode, Camera, Gift, Wine, Grape, ChevronRight } from 'lucide-react'

// Import delle immagini
import vineyardHero from '../assets/Advi5m8oEq1x.jpg'
import barrelCellar from '../assets/qoRaqAiOcQ0h.jpg'
import premiumWinery from '../assets/S4ZiRpJouhDf.jpg'
import certificateGold from '../assets/DmjHzrihmFtI.jpg'

const HomePage = ({ onNavigate, onAddToCart }) => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('souvenirPlot')

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
        category: 'souvenirPlot'
      }
    ],
    usedBarrels: [
      {
        id: 3,
        title: "Legacy Barrique 2019",
        location: "Château Premium",
        price: 1200,
        image: barrelCellar,
        features: [
          t('valueProposition.usedBarrels.features.0'),
          t('valueProposition.usedBarrels.features.1'),
          t('valueProposition.usedBarrels.features.2')
        ],
        category: 'usedBarrels'
      },
      {
        id: 4,
        title: "Icon Auction - Vintage 2015",
        location: "Opus One",
        price: 3500,
        image: barrelCellar,
        features: [
          "Certificato Opus One",
          "Edizione limitata",
          "Consegna premium"
        ],
        category: 'usedBarrels'
      }
    ],
    adoptBarrel: [
      {
        id: 5,
        title: "Adopt Premium - Cabernet 2024",
        location: "Screaming Eagle",
        price: 10000,
        image: premiumWinery,
        features: [
          t('valueProposition.adoptBarrel.features.0'),
          t('valueProposition.adoptBarrel.features.1'),
          t('valueProposition.adoptBarrel.features.2')
        ],
        category: 'adoptBarrel'
      }
    ]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: `url(${vineyardHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <Badge className="mb-6 bg-amber-600/90 text-white border-amber-400 text-lg px-4 py-2">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t('hero.title.part1')} <span className="text-amber-400">{t('hero.title.highlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4"
              onClick={() => onNavigate('souvenir-plot')}
            >
              {t('hero.cta.explore')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-amber-900 text-lg px-8 py-4"
            >
              {t('hero.cta.howItWorks')}
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              {t('valueProposition.title')}
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              {t('valueProposition.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Souvenir Plot */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('souvenir-plot')}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-amber-900">
                  {t('valueProposition.souvenirPlot.title')}
                </CardTitle>
                <p className="text-amber-600">
                  {t('valueProposition.souvenirPlot.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-center text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-3" />
                      {t(`valueProposition.souvenirPlot.features.${index}`)}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">
                    {t('valueProposition.souvenirPlot.price')}
                  </div>
                  <div className="text-amber-600">
                    {t('valueProposition.souvenirPlot.unit')}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Used Barrels */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('used-barrels')}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wine className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-amber-900">
                  {t('valueProposition.usedBarrels.title')}
                </CardTitle>
                <p className="text-amber-600">
                  {t('valueProposition.usedBarrels.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-center text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-3" />
                      {t(`valueProposition.usedBarrels.features.${index}`)}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">
                    {t('valueProposition.usedBarrels.price')}
                  </div>
                  <div className="text-amber-600">
                    {t('valueProposition.usedBarrels.unit')}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adopt-a-Barrel */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-amber-900">
                  {t('valueProposition.adoptBarrel.title')}
                </CardTitle>
                <p className="text-amber-600">
                  {t('valueProposition.adoptBarrel.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-center text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-3" />
                      {t(`valueProposition.adoptBarrel.features.${index}`)}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">
                    {t('valueProposition.adoptBarrel.price')}
                  </div>
                  <div className="text-amber-600">
                    {t('valueProposition.adoptBarrel.unit')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Catalog */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
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
            <div className="bg-white rounded-lg p-2 shadow-md">
              <button
                onClick={() => setSelectedCategory('souvenirPlot')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  selectedCategory === 'souvenirPlot'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                {t('valueProposition.souvenirPlot.title')}
              </button>
              <button
                onClick={() => setSelectedCategory('usedBarrels')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  selectedCategory === 'usedBarrels'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                {t('valueProposition.usedBarrels.title')}
              </button>
              <button
                onClick={() => setSelectedCategory('adoptBarrel')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  selectedCategory === 'adoptBarrel'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                {t('valueProposition.adoptBarrel.title')}
              </button>
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
                    Premium
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{product.title}</h3>
                  <p className="text-amber-600 mb-4">{product.location}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
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
                      onClick={() => onAddToCart(product)}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {t('common.buyNow')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage & Authenticity */}
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
              <p className="text-lg text-amber-700 mb-8">
                {t('heritage.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-amber-700">{t('heritage.stats.authenticity')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-amber-700">{t('heritage.stats.verification')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={certificateGold} 
                alt="Digital Certificate"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-amber-200">{t('stats.wineries')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-amber-200">{t('stats.linearMeters')}</div>
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
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wine className="w-6 h-6 text-amber-400" />
                <span className="text-xl font-bold">{t('header.title')}</span>
              </div>
              <p className="text-amber-200 text-sm">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t('footer.products.title')}</h3>
              <ul className="space-y-2 text-sm text-amber-200">
                <li><button onClick={() => onNavigate('souvenir-plot')} className="hover:text-white">{t('footer.products.souvenirPlot')}</button></li>
                <li><a href="#" className="hover:text-white">{t('footer.products.usedBarrels')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.products.adoptBarrel')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t('footer.support.title')}</h3>
              <ul className="space-y-2 text-sm text-amber-200">
                <li><a href="#" className="hover:text-white">{t('footer.support.howItWorks')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.support.faq')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.support.contact')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t('footer.legal.title')}</h3>
              <ul className="space-y-2 text-sm text-amber-200">
                <li><a href="#" className="hover:text-white">{t('footer.legal.terms')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.legal.privacy')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.legal.certifications')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

