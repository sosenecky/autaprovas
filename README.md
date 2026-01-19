# Autaprovas - Luxury Car Rental Website
## Complete Ready-to-Deploy Package

### What's Included:
✅ **Frontend**: React + TypeScript + Tailwind CSS  
✅ **Backend**: Express server with API routes  
✅ **Database**: In-memory storage with authentic vehicle data  
✅ **Images**: All real vehicle photos in attached_assets/  
✅ **Configuration**: Production-ready setup  

### Vehicles Available:
- **Aston Martin DB11 V12** (630 HP, 3.9s 0-100, 335 km/h)
- **Ferrari 812 GTS** (800 HP, 2.9s 0-100, 340 km/h) 
- **Mercedes AMG GT S** (515 HP, 3.9s 0-100, 311 km/h)
- **Maserati Ghibli SQ4** (424 HP, 4.9s 0-100, 286 km/h)

### Features:
- Czech language interface
- Email booking system (autaprovas@centrum.cz)
- Wedding packages with pricing
- Mobile responsive design
- Metric specifications (km/h, 0-100 acceleration)

## Local Development:
```bash
npm install
npm run dev
```
Runs on http://localhost:5000

## Deploy on Render.com:

### 1. Upload to GitHub
- Create repository: "autaprovas-website"
- Upload all files from this COMPLETE_WEBSITE folder

### 2. Render Configuration
- **Build Command**: `npm run build`
- **Start Command**: `npm start`  
- **Environment**: `NODE_ENV=production`
- **Root Directory**: Leave empty

### 3. Domain Setup
- Get Render URL: `https://autaprovas-xyz.onrender.com`
- Point autaprovas.com DNS to this URL

## Email System:
Booking forms automatically open customer's email client with pre-filled messages to autaprovas@centrum.cz with all booking details.

## Technical Notes:
- Server automatically uses Render's PORT environment variable
- All vehicle images included and properly referenced
- Production build compiles frontend and bundles server
- No external database required - uses in-memory storage