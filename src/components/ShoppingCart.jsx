import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { ShoppingCart, Trash2, Plus, Minus, CreditCard, Shield, Truck } from 'lucide-react'

const ShoppingCartComponent = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''))
    return sum + (price * item.quantity)
  }, 0)

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Simulazione processo di checkout
    setTimeout(() => {
      onCheckout(cartItems)
      setIsCheckingOut(false)
      setIsOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Carrello
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-amber-900 flex items-center">
            <ShoppingCart className="w-6 h-6 mr-2" />
            Carrello ({totalItems} {totalItems === 1 ? 'articolo' : 'articoli'})
          </DialogTitle>
          <DialogDescription className="text-amber-700">
            Rivedi i tuoi prodotti premium selezionati
          </DialogDescription>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-amber-900 mb-2">Il tuo carrello è vuoto</h3>
            <p className="text-amber-600 mb-6">Aggiungi alcuni prodotti premium per iniziare</p>
            <Button 
              onClick={() => setIsOpen(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Continua lo Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Lista Prodotti */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={`${item.id}-${item.certificateUrl}`} className="border-amber-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-amber-900 truncate">{item.title}</h4>
                        <p className="text-sm text-amber-600 mb-2">{item.location || item.winery}</p>
                        
                        {/* Certificato */}
                        <div className="flex items-center text-xs text-amber-600 mb-3">
                          <Shield className="w-3 h-3 mr-1" />
                          Certificato: TC-{item.id}-{item.certificateUrl?.slice(-6)}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 p-0 border-amber-300"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center font-medium text-amber-900">
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 p-0 border-amber-300"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <span className="font-bold text-amber-900">
                              ${(parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity).toLocaleString()}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => onRemoveItem(item.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Riepilogo Ordine */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg text-amber-900">Riepilogo Ordine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-amber-700">
                  <span>Subtotale ({totalItems} {totalItems === 1 ? 'articolo' : 'articoli'})</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-amber-700">
                  <span>Spedizione</span>
                  <span className="text-green-600 font-medium">Gratuita</span>
                </div>
                <div className="flex justify-between text-amber-700">
                  <span>Certificazione digitale</span>
                  <span>Inclusa</span>
                </div>
                <div className="border-t border-amber-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-amber-900">
                    <span>Totale</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informazioni Spedizione */}
            <Card className="border-amber-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Truck className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-900">Spedizione Premium</h4>
                    <p className="text-sm text-amber-600">
                      • Souvenir Plot: Certificato digitale immediato<br/>
                      • Botti Usate: Spedizione LTL specializzata (5-7 giorni)<br/>
                      • Memorabilia: Spedizione standard (3-5 giorni)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pulsanti Azione */}
            <div className="flex space-x-3">
              <Button 
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                Continua lo Shopping
              </Button>
              <Button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
              >
                {isCheckingOut ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Elaborazione...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Procedi al Pagamento
                  </div>
                )}
              </Button>
            </div>

            {/* Garanzie */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-amber-200">
              <div className="text-center">
                <Shield className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-amber-600">Autenticità Garantita</p>
              </div>
              <div className="text-center">
                <CreditCard className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-amber-600">Pagamenti Sicuri</p>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-amber-600">Spedizione Tracciata</p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ShoppingCartComponent

