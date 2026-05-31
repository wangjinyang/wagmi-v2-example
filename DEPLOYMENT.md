# GitHub Pages Deployment Guide

## Automatic Deployment Steps

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable Pages in GitHub repository**
   - Visit your repo: `https://github.com/username/repo-name/settings/pages`
   - Source: Select "GitHub Actions"

3. **Configure Secrets** (for WalletConnect)
   - Visit `https://github.com/username/repo-name/settings/secrets/actions`
   - Add secret: `NEXT_PUBLIC_WC_PROJECT_ID` = your WalletConnect Project ID
   - Get free Project ID at: https://cloud.walletconnect.com/

4. **Trigger deployment**
   - Push to main branch will automatically trigger deployment
   - Or manually run workflow in Actions tab

## Local Environment Setup

1. **Copy environment file**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit `.env.local` and add your WalletConnect Project ID**

## Test Static Export Locally

```bash
# Build static files
npm run build

# Preview (requires serve)
npx serve@latest out
```

## Access Your Website

After successful deployment, visit:
- `https://username.github.io/repo-name/` (for project repository)
- `https://username.github.io/` (for user/organization repository)

## Important Notes

### If Deploying to Subpath
If your site is at `https://username.github.io/repo-name/`, you need to set `basePath` in `next.config.js`:

```js
basePath: '/repo-name',
```

### SSR Limitations
GitHub Pages only supports static websites, therefore:
- ✅ Client-side rendering works normally
- ✅ API Routes need external services
- ✅ All wagmi hooks work properly (client-side)

### RPC Endpoints
RPC endpoints are configured in the code to use public nodes. For production, consider using dedicated RPC providers like Alchemy or Infura.
