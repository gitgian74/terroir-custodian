import { useState } from 'react'
import { useTranslation } from '../contexts/LanguageContext.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Wine, Star, Award, Shield, ArrowLeft, Calendar, MapPin } from 'lucide-react'

// Import delle immagini
import barrelCellar from '../assets/qoRaqAiOcQ0h.jpg'

const UsedBarrels = ({ onNavigate }) => {
  const { t } = useTranslation()
  const [selectedBarrel, setSelectedBarrel] = useState(null)

  const barrels = [
    {
      id: 1,
      title: "Legacy Barrique 2019",
      winery: "Château Premium",
      price: 1200,
      image: barrelCellar,
      vintage: "2019 Cabernet Sauvignon",
      capacity: "225L French Oak",
      cooperage: "Tonnellerie François Frères",
      toastLevel: "Medium Plus",
      previousWines: ["2019 Cabernet Sauvignon", "2020 Merlot"],
      condition: "Excellent - 2 vintages",
      certification: "Authenticated by Winery",
      features: [
        "Certificate of authenticity",
        "Complete vintage history",
        "Personalized engraving available",
        "Shipping included",
        "Winery documentation",
        "Professional inspection report"
      ],
      story: "This barrel housed the award-winning 2019 Cabernet Sauvignon that scored 95 points from Wine Spectator."
    },
    {
      id: 2,
      title: "Icon Auction - Vintage 2015",
      winery: "Opus One",
      price: 3500,
      image: barrelCellar,
      vintage: "2015 Bordeaux Blend",
      capacity: "225L French Oak",
      cooperage: "Tonnellerie Taransaud",
      toastLevel: "Medium",
      previousWines: ["2015 Bordeaux Blend"],
      condition: "Museum Quality - 1 vintage",
      certification: "Opus One Certificate",
      features: [
        "Opus One authentication",
        "Limited edition release",
        "Premium collection piece",
        "White glove delivery",
        "Provenance documentation",
        "Investment grade certificate"
      ],
      story: "From the legendary 2015 vintage, this barrel produced wine that became part of Opus One's most celebrated release."
    },
    {
      id: 3,
      title: "Heritage Reserve 2018",
      winery: "Screaming Eagle",
      price: 5000,
      image: barrelCellar,
      vintage: "2018 Cabernet Sauvignon",
      capacity: "225L French Oak",
      cooperage: "Tonnellerie Demptos",
      toastLevel: "Heavy",
      previousWines: ["2018 Cabernet Sauvignon"],
      condition: "Pristine - Single vintage",
      certification: "Screaming Eagle Certified",
      features: [
        "Screaming Eagle provenance",
        "Single vintage barrel",
        "Collector's documentation",
        "Museum-quality condition",
        "Investment certificate",
        "Exclusive ownership rights"
      ],
      story: "This barrel crafted the ultra-premium 2018 Screaming Eagle Cabernet, one of Napa's most sought-after wines."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header con breadcrumb */}
      <div className="bg-white border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => onNavigate('home')}
              className="text-amber-700 hover:bg-amber-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('common.backToHome')}
            </Button>
            <span className="text-amber-400">/</span>
            <span className="text-amber-900 font-medium">{t('pages.usedBarrels.title')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${barrelCellar})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600/90 text-white border-amber-400">
            {t('pages.usedBarrels.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('pages.usedBarrels.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {t('pages.usedBarrels.heroDescription')}
          </p>
        </div>
      </section>

      {/* Perché Scegliere Botti Usate */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              {t('pages.usedBarrels.whyChoose.title')}
            </h2>
            <p className="text-xl text-amber-700">
              {t('pages.usedBarrels.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {t('pages.usedBarrels.benefits.authenticity.title')}
              </h3>
              <p className="text-amber-700">
                {t('pages.usedBarrels.benefits.authenticity.description')}
              </p>
            </div>

            <div className="text-center">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {t('pages.usedBarrels.benefits.heritage.title')}
              </h3>
              <p className="text-amber-700">
                {t('pages.usedBarrels.benefits.heritage.description')}
              </p>
            </div>

            <div className="text-center">
              <Wine className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {t('pages.usedBarrels.benefits.investment.title')}
              </h3>
              <p className="text-amber-700">
                {t('pages.usedBarrels.benefits.investment.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogo Barrels */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              {t('pages.usedBarrels.catalog.title')}
            </h2>
            <p className="text-xl text-amber-700">
              {t('pages.usedBarrels.catalog.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {barrels.map((barrel) => (
              <Card key={barrel.id} className="border-amber-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={barrel.image} 
                    alt={barrel.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                    {barrel.condition}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-purple-600 text-white">
                    {barrel.certification}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{barrel.title}</h3>
                  <p className="text-amber-600 mb-4 flex items-center">
                    <Wine className="w-4 h-4 mr-1" />
                    {barrel.winery}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-amber-700">
                      <strong>Vintage:</strong> {barrel.vintage}
                    </div>
                    <div className="text-sm text-amber-700">
                      <strong>Capacity:</strong> {barrel.capacity}
                    </div>
                    <div className="text-sm text-amber-700">
                      <strong>Cooperage:</strong> {barrel.cooperage}
                    </div>
                    <div className="text-sm text-amber-700">
                      <strong>Toast Level:</strong> {barrel.toastLevel}
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-amber-800 italic">
                      "{barrel.story}"
                    </p>
                  </div>

                  <div className="space-y-1 mb-6">
                    {barrel.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-amber-700">
                        <Star className="w-3 h-3 text-amber-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                    {barrel.features.length > 3 && (
                      <div className="text-sm text-amber-600">
                        +{barrel.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-amber-900">
                      ${barrel.price.toLocaleString()}
                    </div>
                    <Button 
                      onClick={() => setSelectedBarrel(barrel)}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {t('common.viewDetails')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo di Autenticazione */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              {t('pages.usedBarrels.authentication.title')}
            </h2>
            <p className="text-xl text-amber-700">
              {t('pages.usedBarrels.authentication.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Winery Verification
              </h3>
              <p className="text-amber-700">
                Direct authentication from the original winery
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Expert Inspection
              </h3>
              <p className="text-amber-700">
                Professional cooper evaluation and condition report
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Vintage Documentation
              </h3>
              <p className="text-amber-700">
                Complete history of wines aged in the barrel
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Blockchain Registry
              </h3>
              <p className="text-amber-700">
                Immutable digital certificate of ownership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal dettagli barrel */}
      {selectedBarrel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-amber-900">{selectedBarrel.title}</h2>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedBarrel(null)}
                  className="text-amber-700"
                >
                  ✕
                </Button>
              </div>
              
              <img 
                src={selectedBarrel.image} 
                alt={selectedBarrel.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Barrel Specifications</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Capacity:</strong> {selectedBarrel.capacity}
                    </div>
                    <div>
                      <strong>Cooperage:</strong> {selectedBarrel.cooperage}
                    </div>
                    <div>
                      <strong>Toast Level:</strong> {selectedBarrel.toastLevel}
                    </div>
                    <div>
                      <strong>Condition:</strong> {selectedBarrel.condition}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Wine History</h3>
                  <p className="text-amber-700 mb-2">{selectedBarrel.vintage}</p>
                  <div className="text-sm text-amber-600">
                    <strong>Previous Wines:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {selectedBarrel.previousWines.map((wine, index) => (
                        <li key={index}>{wine}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Story & Provenance</h3>
                  <p className="text-amber-700 italic">"{selectedBarrel.story}"</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">What's Included</h3>
                  <ul className="space-y-2">
                    {selectedBarrel.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-amber-700">
                        <Star className="w-4 h-4 text-amber-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-3xl font-bold text-amber-900">
                    ${selectedBarrel.price.toLocaleString()}
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    {t('common.buyNow')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UsedBarrels

