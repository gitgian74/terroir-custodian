import { useState } from 'react'
import { useTranslation } from '../contexts/LanguageContext.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { MapPin, Star, Award, QrCode, Camera, Calendar, Users, ArrowLeft } from 'lucide-react'

// Import delle immagini
import vineyardHero from '../assets/Advi5m8oEq1x.jpg'

const SouvenirPlot = ({ onNavigate }) => {
  const { t } = useTranslation()
  const [selectedPlot, setSelectedPlot] = useState(null)

  const plots = [
    {
      id: 1,
      title: "Custode 1m - Cabernet Sauvignon",
      location: "Napa Valley, Oakville AVA",
      price: 200,
      image: vineyardHero,
      coordinates: "38.4161° N, 122.4044° W",
      elevation: "45m above sea level",
      soilType: "Volcanic ash and clay",
      plantingYear: 2018,
      expectedYield: "1.9-2.4 kg per vine",
      features: [
        "Digital certificate with QR code",
        "Interactive vineyard map",
        "Seasonal yield updates",
        "Exclusive Harvest Day invitations",
        "Monthly photo updates",
        "Personalized vine tag"
      ],
      winemaker: "Robert Mondavi",
      vintage: "2024 Harvest",
      certification: "Organic & Biodynamic"
    },
    {
      id: 2,
      title: "Cru 5m - Pinot Noir Premium",
      location: "Sonoma Coast",
      price: 800,
      image: vineyardHero,
      coordinates: "38.5816° N, 123.0681° W",
      elevation: "120m above sea level",
      soilType: "Marine sedimentary",
      plantingYear: 2015,
      expectedYield: "2.1-2.6 kg per vine",
      features: [
        "Physical vineyard plaque",
        "VIP winery visits",
        "Harvest Day participation",
        "Premium wine allocation",
        "Winemaker dinner invitation",
        "Annual vineyard report"
      ],
      winemaker: "Helen Turley",
      vintage: "2024 Harvest",
      certification: "Sustainable & Organic"
    },
    {
      id: 3,
      title: "Estate 10m - Bordeaux Blend",
      location: "Stags Leap District",
      price: 1500,
      image: vineyardHero,
      coordinates: "38.4097° N, 122.3625° W",
      elevation: "85m above sea level",
      soilType: "Volcanic and alluvial",
      plantingYear: 2012,
      expectedYield: "2.8-3.2 kg per vine",
      features: [
        "Engraved stone marker",
        "Private tasting sessions",
        "Harvest participation",
        "Custom wine blend",
        "Annual vineyard tour",
        "Collector's wine library"
      ],
      winemaker: "Philippe Melka",
      vintage: "2024 Harvest",
      certification: "Estate Grown & Certified"
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
            <span className="text-amber-900 font-medium">{t('pages.souvenirPlot.title')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${vineyardHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600/90 text-white border-amber-400">
            {t('pages.souvenirPlot.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('pages.souvenirPlot.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {t('pages.souvenirPlot.heroDescription')}
          </p>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              {t('pages.souvenirPlot.howItWorks.title')}
            </h2>
            <p className="text-xl text-amber-700">
              {t('pages.souvenirPlot.howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                {t('pages.souvenirPlot.steps.select')}
              </h3>
              <p className="text-amber-700">
                {t('pages.souvenirPlot.steps.selectDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                {t('pages.souvenirPlot.steps.certify')}
              </h3>
              <p className="text-amber-700">
                {t('pages.souvenirPlot.steps.certifyDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                {t('pages.souvenirPlot.steps.follow')}
              </h3>
              <p className="text-amber-700">
                {t('pages.souvenirPlot.steps.followDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                {t('pages.souvenirPlot.steps.enjoy')}
              </h3>
              <p className="text-amber-700">
                {t('pages.souvenirPlot.steps.enjoyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogo Plots */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              {t('pages.souvenirPlot.catalog.title')}
            </h2>
            <p className="text-xl text-amber-700">
              {t('pages.souvenirPlot.catalog.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plots.map((plot) => (
              <Card key={plot.id} className="border-amber-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={plot.image} 
                    alt={plot.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                    {plot.certification}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                    {plot.vintage}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{plot.title}</h3>
                  <p className="text-amber-600 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {plot.location}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-amber-700">
                      <strong>Coordinates:</strong> {plot.coordinates}
                    </div>
                    <div className="text-sm text-amber-700">
                      <strong>Elevation:</strong> {plot.elevation}
                    </div>
                    <div className="text-sm text-amber-700">
                      <strong>Soil:</strong> {plot.soilType}
                    </div>
                    <div className="text-sm text-amber-700">
                      <strong>Expected Yield:</strong> {plot.expectedYield}
                    </div>
                    <div className="text-sm text-amber-700">
                      <strong>Winemaker:</strong> {plot.winemaker}
                    </div>
                  </div>

                  <div className="space-y-1 mb-6">
                    {plot.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-amber-700">
                        <Star className="w-3 h-3 text-amber-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                    {plot.features.length > 3 && (
                      <div className="text-sm text-amber-600">
                        +{plot.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-amber-900">
                      ${plot.price.toLocaleString()}
                    </div>
                    <Button 
                      onClick={() => setSelectedPlot(plot)}
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

      {/* Vantaggi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              {t('pages.souvenirPlot.benefits.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <QrCode className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {t('pages.souvenirPlot.benefits.digital.title')}
              </h3>
              <p className="text-amber-700">
                {t('pages.souvenirPlot.benefits.digital.description')}
              </p>
            </div>

            <div className="text-center">
              <Camera className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {t('pages.souvenirPlot.benefits.updates.title')}
              </h3>
              <p className="text-amber-700">
                {t('pages.souvenirPlot.benefits.updates.description')}
              </p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {t('pages.souvenirPlot.benefits.community.title')}
              </h3>
              <p className="text-amber-700">
                {t('pages.souvenirPlot.benefits.community.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal dettagli plot */}
      {selectedPlot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-amber-900">{selectedPlot.title}</h2>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedPlot(null)}
                  className="text-amber-700"
                >
                  ✕
                </Button>
              </div>
              
              <img 
                src={selectedPlot.image} 
                alt={selectedPlot.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Location Details</h3>
                  <p className="text-amber-700">{selectedPlot.location}</p>
                  <p className="text-sm text-amber-600">{selectedPlot.coordinates}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Vineyard Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Elevation:</strong> {selectedPlot.elevation}
                    </div>
                    <div>
                      <strong>Soil Type:</strong> {selectedPlot.soilType}
                    </div>
                    <div>
                      <strong>Planting Year:</strong> {selectedPlot.plantingYear}
                    </div>
                    <div>
                      <strong>Expected Yield:</strong> {selectedPlot.expectedYield}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">What You Get</h3>
                  <ul className="space-y-2">
                    {selectedPlot.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-amber-700">
                        <Star className="w-4 h-4 text-amber-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-3xl font-bold text-amber-900">
                    ${selectedPlot.price.toLocaleString()}
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

export default SouvenirPlot

