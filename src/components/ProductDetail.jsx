import { useState } from 'react'
import { useTranslation } from '../contexts/LanguageContext.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { MapPin, Award, Shield, Star, QrCode, Calendar, Grape, Wine } from 'lucide-react'

const ProductDetail = ({ product, onAddToCart }) => {
  const { t } = useTranslation()
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [showCertificate, setShowCertificate] = useState(false)

  const generateQRCode = (productId) => {
    // Simulazione di un QR code per la certificazione
    return `https://terroir-custodian.com/verify/${productId}-${Date.now()}`
  }

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity: selectedQuantity,
      certificateUrl: generateQRCode(product.id)
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
          {t('common.viewDetails')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-3xl md:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl md:text-2xl text-amber-900">{product.title}</DialogTitle>
          <DialogDescription className="text-sm md:text-base text-amber-700">
            {product.location || product.winery}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Immagine Prodotto */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <Badge className="absolute top-2 right-2 md:top-4 md:right-4 bg-amber-600 text-white text-xs md:text-sm">
                {t('productDetail.certified')}
              </Badge>
            </div>
            
            {/* Gallery */}
            <div className="grid grid-cols-3 gap-2">
              <img src={product.image} alt={`${product.title} 1`} className="w-full h-16 md:h-20 object-cover rounded" />
              <img src={product.image} alt={`${product.title} 2`} className="w-full h-16 md:h-20 object-cover rounded" />
              <img src={product.image} alt={`${product.title} 3`} className="w-full h-16 md:h-20 object-cover rounded" />
            </div>
          </div>

          {/* Dettagli Prodotto */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl md:text-3xl font-bold text-amber-900">${product.price}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-amber-600 ml-2">(4.9)</span>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-amber-700 mb-4">
                {product.description || t('productDetail.defaultDescription')}
              </p>
            </div>

            {/* Features */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-base md:text-lg text-amber-900">{t('productDetail.features')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-sm md:text-base text-amber-700">
                      <Shield className="w-4 h-4 mr-2 md:mr-3 text-amber-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-base md:text-lg text-amber-900">{t('productDetail.specifications')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {product.yield && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-amber-700">
                      <Grape className="w-4 h-4 mr-2" />
                      Resa Media
                    </span>
                    <span className="font-medium text-amber-900">{product.yield}</span>
                  </div>
                )}
                {product.vintage && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-amber-700">
                      <Wine className="w-4 h-4 mr-2" />
                      Annata
                    </span>
                    <span className="font-medium text-amber-900">{product.vintage}</span>
                  </div>
                )}
                {product.duration && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-amber-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Durata
                    </span>
                    <span className="font-medium text-amber-900">{product.duration}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-amber-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    Origine
                  </span>
                  <span className="font-medium text-amber-900">{product.location || product.winery}</span>
                </div>
              </CardContent>
            </Card>

            {/* Certificazione */}
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <QrCode className="w-8 h-8 text-amber-600" />
                    <div>
                      <h4 className="font-bold text-amber-900">Certificazione Digitale</h4>
                      <p className="text-sm text-amber-700">Autenticità garantita con QR code</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowCertificate(true)}
                    className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                  >
                    Anteprima
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Selezione Quantità e Acquisto */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">
                  Quantità
                </label>
                <select 
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                  className="w-full p-2 border border-amber-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Aggiungi al Carrello
                </Button>
                <Button 
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  Acquista Ora
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Certificato Preview Modal */}
        {showCertificate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCertificate(false)}>
            <div className="bg-white p-8 rounded-lg max-w-md mx-4" onClick={e => e.stopPropagation()}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Certificato di Autenticità</h3>
                <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
                  <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded">
                    <QrCode className="w-16 h-16 text-amber-600" />
                  </div>
                  <p className="text-sm text-amber-700 mb-2">
                    <strong>Prodotto:</strong> {product.title}
                  </p>
                  <p className="text-sm text-amber-700 mb-2">
                    <strong>ID Certificato:</strong> TC-{product.id}-{Date.now().toString().slice(-6)}
                  </p>
                  <p className="text-sm text-amber-700 mb-4">
                    <strong>Data:</strong> {new Date().toLocaleDateString('it-IT')}
                  </p>
                  <Badge className="bg-amber-600 text-white">
                    Certificato Autentico
                  </Badge>
                </div>
                <Button 
                  onClick={() => setShowCertificate(false)}
                  className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Chiudi
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetail

