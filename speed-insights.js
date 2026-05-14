// Vercel Speed Insights - Performance tracking
// This script initializes Vercel Speed Insights for this static website
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: true // Enable debug mode in development
});
