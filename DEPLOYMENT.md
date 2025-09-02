# Deployment Guide - Terroir Custodian

## 🚀 Quick Deploy to Vercel

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gitgian74/terroir-custodian)

### Manual Deploy

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deploy**
   ```bash
   vercel --prod
   ```

## ⚙️ Environment Variables

Set these in your Vercel Dashboard (Settings → Environment Variables):

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_VIAM_API_KEY` | VIAM platform API key for IoT integration | No (future) |
| `VITE_VIAM_API_KEY_ID` | VIAM API key identifier | No (future) |
| `VITE_APPWRITE_ENDPOINT` | Appwrite backend endpoint | No (future) |
| `VITE_APPWRITE_PROJECT_ID` | Appwrite project ID | No (future) |

## 📝 Configuration Notes

### Why Minimal `vercel.json`?
- Vercel auto-detects Vite framework
- Build settings are inferred from `package.json`
- Caching is handled automatically for hashed assets
- Only SPA routing rewrite is explicitly needed

### Adding API Routes
Create files in `/api` directory:
```javascript
// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Vercel!' })
}
```

### Custom Domains
1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records as instructed

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/guides/deploying-vite-with-vercel)
- [Environment Variables](https://vercel.com/docs/environment-variables)