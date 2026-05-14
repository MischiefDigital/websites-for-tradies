# WFT — Websites for Tradies

Websites That Get Jobs. A static website for tradies.

## Development

### Building the Project

This project includes Vercel Speed Insights for performance monitoring. To build the Speed Insights bundle:

```bash
npm install
npm run build
```

This will:
1. Install dependencies including `@vercel/speed-insights`
2. Bundle the Speed Insights script to `dist/speed-insights.min.js`

### Vercel Speed Insights

Speed Insights is configured to track web performance metrics automatically. The implementation:

- Uses the official `@vercel/speed-insights` package (v2.0.0)
- Bundled using esbuild for optimal performance
- Loaded with `defer` attribute for non-blocking page load
- Debug mode enabled in development environment

The script will only collect data when deployed to Vercel. In local development, it will run in debug mode without sending any data.

### Project Structure

- `index.html` - Main website file
- `speed-insights.js` - Speed Insights initialization script
- `dist/speed-insights.min.js` - Bundled and minified Speed Insights script
- `Images/` - Website images and assets
- `package.json` - Project dependencies and scripts

## Deployment

Deploy to Vercel for best results. Speed Insights will automatically start tracking performance metrics once deployed.

```bash
vercel deploy
```

Make sure Speed Insights is enabled in your Vercel project dashboard.
