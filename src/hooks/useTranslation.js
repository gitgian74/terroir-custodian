import { useState, useEffect } from 'react'

// Import delle traduzioni
import it from '../i18n/locales/it.json'
import en from '../i18n/locales/en.json'
import es from '../i18n/locales/es.json'
import de from '../i18n/locales/de.json'
import zh from '../i18n/locales/zh.json'
import ja from '../i18n/locales/ja.json'
import ru from '../i18n/locales/ru.json'

const translations = {
  it,
  en,
  es,
  de,
  zh,
  ja,
  ru
}

const defaultLanguage = 'it'

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('terroir-language') || defaultLanguage
  })

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode)
    localStorage.setItem('terroir-language', langCode)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        // Fallback alla lingua di default se la chiave non esiste
        value = translations[defaultLanguage]
        for (const k of keys) {
          if (value && typeof value === 'object') {
            value = value[k]
          } else {
            return key // Ritorna la chiave se non trova la traduzione
          }
        }
        break
      }
    }
    
    return value || key
  }

  return {
    t,
    i18n: {
      language: currentLanguage,
      changeLanguage
    }
  }
}

