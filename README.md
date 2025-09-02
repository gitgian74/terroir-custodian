# Terroir Custodian™ - Premium Vineyard Heritage Marketplace

Un marketplace premium innovativo per la vendita di metri lineari di filari, botti usate certificate e adozioni di botti in uso dalle cantine più prestigiose della California.

## 🌟 Caratteristiche Principali

### 🍇 Tre Categorie di Prodotti Premium
- **Souvenir Plot**: Metri lineari certificati di filari con certificazione digitale
- **Botti Usate**: Barriques autentiche da 225L con storia completa dell'annata
- **Adopt-a-Barrel**: Programma di adozione botti in produzione con esperienza VIP

### 🌍 Supporto Multilingue Completo
- 🇮🇹 Italiano (lingua base)
- 🇺🇸 Inglese
- 🇪🇸 Spagnolo  
- 🇩🇪 Tedesco
- 🇨🇳 Cinese (Semplificato)
- 🇯🇵 Giapponese
- 🇷🇺 Russo

### 🔒 Privacy & Compliance Globale
- **GDPR** (Unione Europea)
- **CCPA** (California, USA)
- **LGPD** (Brasile)
- **PIPEDA** (Canada)
- **PDPA** (Singapore)
- **DPA** (Regno Unito)

### 🛒 E-commerce Avanzato
- Catalogo prodotti interattivo con filtri
- Carrello della spesa con gestione quantità
- Sistema di certificazione QR code
- Checkout sicuro con Stripe integration
- Gestione ordini e tracking spedizioni

### 🎨 Design Premium
- Palette colori bordeaux/oro elegante
- Responsive design mobile-first
- Animazioni fluide e micro-interazioni
- Tipografia premium (Playfair Display + Inter)
- Asset fotografici di alta qualità

## 🚀 Tecnologie Utilizzate

### Frontend
- **React 18** con Vite
- **Tailwind CSS** per styling
- **Shadcn/UI** per componenti
- **Lucide React** per icone
- **Framer Motion** per animazioni

### Funzionalità
- Sistema i18n personalizzato
- Gestione stato con React hooks
- LocalStorage per preferenze utente
- Responsive design completo
- SEO ottimizzato

## 📁 Struttura del Progetto

```
terroir-custodian/
├── public/                     # File statici
├── src/
│   ├── assets/                # Immagini e media
│   ├── components/            # Componenti React
│   │   ├── ui/               # Componenti UI base (shadcn)
│   │   ├── CookieBanner.jsx  # Banner cookie compliance
│   │   ├── LanguageSelector.jsx # Selettore lingua
│   │   ├── PrivacyPolicy.jsx # Privacy policy completa
│   │   ├── ProductDetail.jsx # Dettagli prodotto
│   │   └── ShoppingCart.jsx  # Carrello spesa
│   ├── hooks/                # Custom hooks
│   │   └── useTranslation.js # Hook per traduzioni
│   ├── i18n/                 # Sistema internazionalizzazione
│   │   └── locales/          # File traduzioni (7 lingue)
│   ├── App.jsx               # Componente principale
│   ├── App.css               # Stili globali
│   └── main.jsx              # Entry point
├── components.json           # Configurazione shadcn/ui
├── package.json              # Dipendenze progetto
├── tailwind.config.js        # Configurazione Tailwind
└── vite.config.js            # Configurazione Vite
```

## 🎯 Funzionalità Implementate

### 1. Homepage Premium
- Hero section con call-to-action
- Sezione value proposition (3 categorie)
- Catalogo prodotti con tab interattivi
- Sezione heritage e certificazione
- Statistiche aziendali
- Footer completo con link

### 2. Sistema Prodotti
- **ProductDetail**: Modal dettagliato con:
  - Galleria immagini
  - Specifiche tecniche
  - Sistema certificazione QR
  - Selezione quantità
  - Aggiunta al carrello

### 3. E-commerce
- **ShoppingCart**: Carrello completo con:
  - Gestione quantità prodotti
  - Calcolo totali e spedizioni
  - Informazioni certificazione
  - Processo checkout
  - Garanzie e sicurezza

### 4. Internazionalizzazione
- Sistema traduzioni personalizzato
- Selettore lingua con bandiere
- Traduzioni complete per tutte le sezioni
- Fallback automatico alla lingua base
- Persistenza preferenze in localStorage

### 5. Privacy & Compliance
- **CookieBanner**: Banner conformità con:
  - Gestione granulare cookie
  - Impostazioni personalizzabili
  - Conformità normative globali
  - Salvataggio preferenze

- **PrivacyPolicy**: Informativa completa con:
  - Sezioni per ogni normativa
  - Descrizione tipi di dati
  - Diritti dell'utente
  - Misure di sicurezza
  - Contatti DPO

## 🎨 Design System

### Palette Colori
- **Primario**: Bordeaux scuro (#722F37)
- **Secondario**: Oro antico (#D4AF37)  
- **Neutri**: Crema (#F5F5DC), Grigio carbone (#36454F)
- **Accenti**: Verde vigna (#355E3B)

### Tipografia
- **Headings**: Playfair Display (serif elegante)
- **Body**: Inter (sans-serif leggibile)
- **Accenti**: Cinzel (per certificati)

### Componenti UI
- Card con bordi amber
- Button con hover states
- Badge per certificazioni
- Modal responsive
- Form elements styled

## 🚀 Come Avviare il Progetto

### Prerequisiti
- Node.js 18+
- npm o pnpm

### Installazione
```bash
cd terroir-custodian
npm install
```

### Sviluppo
```bash
npm run dev
```
Il sito sarà disponibile su `http://localhost:5173`

### Build Produzione
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 🌐 Deployment

Il progetto è pronto per il deployment su:
- **Vercel** (raccomandato per React)
- **Netlify**
- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **GitHub Pages**

### Configurazione Deployment
1. Build del progetto: `npm run build`
2. Upload cartella `dist/` al provider
3. Configurare redirects per SPA
4. Impostare variabili ambiente se necessario

## 📊 Performance & SEO

### Ottimizzazioni Implementate
- Lazy loading immagini
- Code splitting automatico (Vite)
- Compressione asset
- Meta tags dinamici
- Structured data per prodotti
- Sitemap automatica

### Metriche Target
- **Lighthouse Score**: 90+
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <3s
- **Cumulative Layout Shift**: <0.1

## 🔧 Configurazioni Avanzate

### Personalizzazione Traduzioni
Modificare i file in `src/i18n/locales/` per aggiornare le traduzioni.

### Aggiunta Nuove Lingue
1. Creare nuovo file in `src/i18n/locales/`
2. Aggiungere import in `src/hooks/useTranslation.js`
3. Aggiungere lingua in `LanguageSelector.jsx`

### Personalizzazione Tema
Modificare `tailwind.config.js` e `src/App.css` per cambiare colori e stili.

## 📈 Roadmap Futuro

### Fase 2 (Prossimi 3 mesi)
- [ ] Sistema aste online in tempo reale
- [ ] Integrazione pagamenti Stripe completa
- [ ] Dashboard cliente avanzata
- [ ] Sistema notifiche push
- [ ] App mobile React Native

### Fase 3 (6 mesi)
- [ ] Blockchain per certificazioni
- [ ] AR per visualizzazione prodotti
- [ ] Sistema recensioni e rating
- [ ] Programma fedeltà
- [ ] API per partner esterni

## 🤝 Supporto e Contributi

### Contatti Tecnici
- **Email**: dev@terroir-custodian.com
- **GitHub**: [repository-link]
- **Documentazione**: [docs-link]

### Segnalazione Bug
Utilizzare il sistema di issue GitHub con:
- Descrizione dettagliata
- Steps per riprodurre
- Screenshot se applicabile
- Informazioni browser/device

## 📄 Licenza

© 2024 Terroir Custodian™. Tutti i diritti riservati.

Questo progetto è proprietario e confidenziale. La distribuzione, modifica o uso commerciale senza autorizzazione esplicita è vietata.

---

**Sviluppato con ❤️ per il mercato premium del vino californiano**

