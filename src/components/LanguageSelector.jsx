import { useState } from 'react'
import { useTranslation } from '../contexts/LanguageContext.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Globe, ChevronDown } from 'lucide-react'

const LanguageSelector = () => {
  const { language, changeLanguage, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  const handleChangeLanguage = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="border-amber-300 text-amber-700 hover:bg-amber-50 flex items-center space-x-2"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <ChevronDown className="w-3 h-3" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-amber-200 rounded-lg shadow-lg z-50 min-w-[200px]">
          <div className="p-2">
            <div className="text-xs text-amber-600 font-medium mb-2 px-2">
              {t('common.language')}
            </div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleChangeLanguage(lang.code)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left hover:bg-amber-50 transition-colors ${
                  language === lang.code ? 'bg-amber-100 text-amber-900' : 'text-amber-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <Badge className="ml-auto bg-amber-600 text-white text-xs">
                    ✓
                  </Badge>
                )}
              </button>
            ))}
          </div>
          
          {/* Informazioni aggiuntive */}
          <div className="border-t border-amber-200 p-3 bg-amber-50">
            <div className="text-xs text-amber-600">
              <div className="flex items-center space-x-1 mb-1">
                <Globe className="w-3 h-3" />
                <span>Supporto globale</span>
              </div>
              <div className="text-amber-500">
                Certificazioni e spedizioni disponibili nelle regioni supportate
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay per chiudere il menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default LanguageSelector

