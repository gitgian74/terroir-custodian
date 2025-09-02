import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation.js'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Settings, Cookie, X, Check } from 'lucide-react'

const CookieBanner = () => {
  const { t } = useTranslation()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Sempre true, non modificabile
    analytics: false,
    marketing: false,
    personalization: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('terroir-cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const preferences = JSON.parse(consent)
      setCookiePreferences(preferences)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    }
    setCookiePreferences(allAccepted)
    localStorage.setItem('terroir-cookie-consent', JSON.stringify(allAccepted))
    localStorage.setItem('terroir-cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    }
    setCookiePreferences(necessaryOnly)
    localStorage.setItem('terroir-cookie-consent', JSON.stringify(necessaryOnly))
    localStorage.setItem('terroir-cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const savePreferences = () => {
    localStorage.setItem('terroir-cookie-consent', JSON.stringify(cookiePreferences))
    localStorage.setItem('terroir-cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const updatePreference = (type, value) => {
    if (type === 'necessary') return // Non modificabile
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <Card className="max-w-4xl mx-auto border-amber-200 shadow-2xl">
          <CardContent className="p-6">
            {!showSettings ? (
              // Banner principale
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Cookie className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-amber-900 mb-2">
                      {t('privacy.cookieBanner.title')}
                    </h3>
                    <p className="text-amber-700 text-sm mb-4">
                      {t('privacy.cookieBanner.description')}
                    </p>
                    
                    {/* Compliance Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                        <Shield className="w-3 h-3 mr-1" />
                        GDPR Compliant
                      </Badge>
                      <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
                        CCPA Compliant
                      </Badge>
                      <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                        LGPD Compliant
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(true)}
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {t('privacy.cookieBanner.customize')}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={acceptNecessaryOnly}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    {t('privacy.cookieBanner.necessary')}
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    {t('privacy.cookieBanner.acceptAll')}
                  </Button>
                </div>
              </div>
            ) : (
              // Impostazioni dettagliate
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-amber-900">
                    {t('privacy.cookieSettings.title')}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Cookie Necessari */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {t('privacy.cookieSettings.necessary.title')}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {t('privacy.cookieSettings.necessary.description')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <Badge className="bg-green-100 text-green-800">
                        {t('privacy.cookieSettings.required')}
                      </Badge>
                    </div>
                  </div>

                  {/* Cookie Analytics */}
                  <div className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-amber-900">
                        {t('privacy.cookieSettings.analytics.title')}
                      </h4>
                      <p className="text-sm text-amber-600 mt-1">
                        {t('privacy.cookieSettings.analytics.description')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button
                        variant={cookiePreferences.analytics ? "default" : "outline"}
                        size="sm"
                        onClick={() => updatePreference('analytics', !cookiePreferences.analytics)}
                        className={cookiePreferences.analytics ? "bg-amber-600 text-white" : "border-amber-300 text-amber-700"}
                      >
                        {cookiePreferences.analytics ? t('common.enabled') : t('common.disabled')}
                      </Button>
                    </div>
                  </div>

                  {/* Cookie Marketing */}
                  <div className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-amber-900">
                        {t('privacy.cookieSettings.marketing.title')}
                      </h4>
                      <p className="text-sm text-amber-600 mt-1">
                        {t('privacy.cookieSettings.marketing.description')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button
                        variant={cookiePreferences.marketing ? "default" : "outline"}
                        size="sm"
                        onClick={() => updatePreference('marketing', !cookiePreferences.marketing)}
                        className={cookiePreferences.marketing ? "bg-amber-600 text-white" : "border-amber-300 text-amber-700"}
                      >
                        {cookiePreferences.marketing ? t('common.enabled') : t('common.disabled')}
                      </Button>
                    </div>
                  </div>

                  {/* Cookie Personalizzazione */}
                  <div className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-amber-900">
                        {t('privacy.cookieSettings.personalization.title')}
                      </h4>
                      <p className="text-sm text-amber-600 mt-1">
                        {t('privacy.cookieSettings.personalization.description')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button
                        variant={cookiePreferences.personalization ? "default" : "outline"}
                        size="sm"
                        onClick={() => updatePreference('personalization', !cookiePreferences.personalization)}
                        className={cookiePreferences.personalization ? "bg-amber-600 text-white" : "border-amber-300 text-amber-700"}
                      >
                        {cookiePreferences.personalization ? t('common.enabled') : t('common.disabled')}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-amber-200">
                  <Button
                    variant="outline"
                    onClick={acceptNecessaryOnly}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    {t('privacy.cookieBanner.necessary')}
                  </Button>
                  <Button
                    onClick={savePreferences}
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    {t('privacy.cookieSettings.save')}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default CookieBanner

