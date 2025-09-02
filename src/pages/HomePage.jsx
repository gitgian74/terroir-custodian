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
  const [selectedCategory, setSelectedCategory] = useState('wineFutures')

  const products = {
    wineFutures: [
      {
        id: 1,
        title: "2024 Reserve Cabernet Futures",
        location: "Heritage Valley Estate",
        price: 150,
        image: vineyardHero,
        features: [
          t('valueProposition.wineFutures.features.0'),
          t('valueProposition.wineFutures.features.1'),
          t('valueProposition.wineFutures.features.2')
        ],
        category: 'wineFutures'
      },
      {
        id: 2,
        title: "2024 Premier Pinot Noir Futures",
        location: "Coastal Ridge Vineyards",
        price: 95,
        image: vineyardHero,
        features: [
          t('valueProposition.wineFutures.features.0'),
          t('valueProposition.wineFutures.features.1'),
          t('valueProposition.wineFutures.features.3')
        ],
        category: 'wineFutures'
      }
    ],
    barrelInvestment: [
      {
        id: 3,
        title: "2023 Barrel Share - Bordeaux Blend",
        location: "Estate Reserve Program",
        price: 2500,
        image: barrelCellar,
        features: [
          t('valueProposition.barrelInvestment.features.0'),
          t('valueProposition.barrelInvestment.features.1'),
          t('valueProposition.barrelInvestment.features.2')
        ],
        category: 'barrelInvestment'
      },
      {
        id: 4,
        title: "2023 Single Vineyard Barrel Share",
        location: "Mountain Crest Winery",
        price: 3500,
        image: barrelCellar,
        features: [
          t('valueProposition.barrelInvestment.features.0'),
          t('valueProposition.barrelInvestment.features.1'),
          t('valueProposition.barrelInvestment.features.3')
        ],
        category: 'barrelInvestment'
      }
    ],
    membership: [
      {
        id: 5,
        title: "Elite Annual Membership 2024",
        location: "Terroir Collective",
        price: 3000,
        image: premiumWinery,
        features: [
          t('valueProposition.membership.features.0'),
          t('valueProposition.membership.features.1'),
          t('valueProposition.membership.features.2')
        ],
        category: 'membership'
      }
    ]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: `url(${vineyardHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 py-16 md:py-0">
          <Badge className="mb-4 md:mb-6 bg-amber-600/90 text-white border-amber-400 text-sm md:text-lg px-3 py-1 md:px-4 md:py-2">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            {t('hero.title.part1')} <span className="text-amber-400">{t('hero.title.highlight')}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white text-base md:text-lg px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto"
              onClick={() => onNavigate('wine-futures')}
            >
              {t('hero.cta.explore')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-amber-900 text-base md:text-lg px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto"
            >
              {t('hero.cta.howItWorks')}
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-4 md:mb-6">
              {t('valueProposition.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-700 max-w-3xl mx-auto px-4">
              {t('valueProposition.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

            {/* Elite Membership */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('membership')}>
              <CardHeader className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-amber-900">
                  {t('valueProposition.membership.title')}
                </CardTitle>
                <p className="text-sm md:text-base text-amber-600">
                  {t('valueProposition.membership.subtitle')}
                </p>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <ul className="space-y-2 md:space-y-3 mb-6">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-start text-sm md:text-base text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                      {t(`valueProposition.membership.features.${index}`)}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-900 mb-1 md:mb-2">
                    {t('valueProposition.membership.price')}
                  </div>
                  <div className="text-sm md:text-base text-amber-600">
                    {t('valueProposition.membership.unit')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Catalog */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 md:mb-4">
              {t('catalog.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-700">
              {t('catalog.subtitle')}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-white rounded-lg p-1 md:p-2 shadow-md flex flex-col sm:flex-row">
              <button
                onClick={() => setSelectedCategory('wineFutures')}
                className={`px-3 py-2 sm:px-4 md:px-6 sm:py-2 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base ${
                  selectedCategory === 'wineFutures'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                {t('valueProposition.wineFutures.title')}
              </button>
              <button
                onClick={() => setSelectedCategory('barrelInvestment')}
                className={`px-3 py-2 sm:px-4 md:px-6 sm:py-2 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base ${
                  selectedCategory === 'barrelInvestment'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                {t('valueProposition.barrelInvestment.title')}
              </button>
              <button
                onClick={() => setSelectedCategory('membership')}
                className={`px-3 py-2 sm:px-4 md:px-6 sm:py-2 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base ${
                  selectedCategory === 'membership'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                {t('valueProposition.membership.title')}
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
      <section id="heritage" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="mb-3 md:mb-4 bg-green-100 text-green-800 text-xs md:text-sm">
                {t('heritage.badge')}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-4 md:mb-6">
                {t('heritage.title')}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-amber-700 mb-6 md:mb-8">
                {t('heritage.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">100%</div>
                  <div className="text-xs md:text-base text-amber-700">{t('heritage.stats.authenticityLabel')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">24/7</div>
                  <div className="text-xs md:text-base text-amber-700">{t('heritage.stats.verificationLabel')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={certificateGold} 
                alt="Professional Authentication"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 md:py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">25+</div>
              <div className="text-xs sm:text-sm md:text-base text-amber-200">{t('stats.wineries')}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">$2.5M+</div>
              <div className="text-xs sm:text-sm md:text-base text-amber-200">{t('stats.investments')}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-amber-200">{t('stats.barrels')}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">150+</div>
              <div className="text-xs sm:text-sm md:text-base text-amber-200">{t('stats.members')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Wine className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                <span className="text-lg md:text-xl font-bold">{t('header.title')}</span>
              </div>
              <p className="text-amber-200 text-xs md:text-sm">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('footer.products.title')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-amber-200">
                <li><button onClick={() => onNavigate('wine-futures')} className="hover:text-white">{t('footer.products.wineFutures')}</button></li>
                <li><button onClick={() => onNavigate('barrel-investment')} className="hover:text-white">{t('footer.products.barrelInvestment')}</button></li>
                <li><button onClick={() => onNavigate('membership')} className="hover:text-white">{t('footer.products.membership')}</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('footer.support.title')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-amber-200">
                <li><a href="#" className="hover:text-white">{t('footer.support.howItWorks')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.support.faq')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.support.contact')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('footer.legal.title')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-amber-200">
                <li><a href="#" className="hover:text-white">{t('footer.legal.terms')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.legal.privacy')}</a></li>
                <li><a href="#" className="hover:text-white">{t('footer.legal.certifications')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-amber-200 text-xs md:text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

