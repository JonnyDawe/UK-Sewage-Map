# UK Sewage Map

<p align="center">
  <img src="public/favicon/favicon.svg" alt="UK Sewage Map Logo" width="100" height="132">
</p>

A real-time visualization tool showing river sections affected by sewage discharges from combined sewer overflows across the UK. The application combines Event Duration Monitoring (EDM) data with a basic hydrological model to track sewage discharges downstream along non-tidal river networks.

[Live Site](https://www.sewagemap.co.uk) | [Design Files](https://www.figma.com/file/EOJLW1aVdvAh9sTzbQK1uk/App-UI?type=design&node-id=0%3A1&mode=design&t=JhhOq4y180yDKHd3-1)

## Overview

The map highlights areas downstream of active and recent discharges, providing near real-time data from water companies' monitoring systems. The application uses a basic hydrological model based on the Center for Ecology and Hydrology's Integrated Hydrological Digital Terrain Model to track sewage movement.

**Note:** This tool should not be used in isolation to assess pollution or health risks at specific locations, as it does not account for dilution, river flow, or dispersion effects on pollutant concentration.

## Architecture

### Frontend Stack
- React application built with Vite
- ArcGIS JavaScript API for mapping
- TypeScript for type safety
- Radix UI and Emotion for styling

### Map Features
- Interactive map with zoom constraints and custom extent
- Geolocation support
- Custom search functionality
- Dark mode support
- Rain radar overlay
- Mobile-responsive layout.
- Custom popup handling for discharge points

### Data Architecture
- Discharge source points are served via ArcGIS hosted feature services
- Discharge affected river sections are fetched as GeoJSON and rendered as a client-side layer
- Historical discharge data is fetched from water company APIs
- Rain radar data is sourced from RainViewer's API

### Development Features
- Type checking with TypeScript
- ESLint and Prettier for code formatting
- Husky for git hooks
- Vitest for testing
- Path aliases for clean imports

### Deployment Architecture
The application is deployed as a static site on Vercel:
- Frontend assets are built using Vite and deployed to Vercel's edge network
- Environment variables are managed through Vercel's configuration
- Automatic branch deployments with unique preview URLs
- Production deployments triggered by main branch updates
- Edge caching and CDN distribution for optimal performance
- Automatic SSL/TLS certificate management
- Analytics via @vercel/analytics

### API Dependencies
- **ArcGIS Services**: The application uses ArcGIS JavaScript API services (free tier) for:
  - Base maps and feature layers
  - Spatial analysis and queries
  - Geocoding services
  - Location services
- **RainViewer API**: For precipitation radar visualization
- **Water Company APIs**: For real-time EDM data

## Development Setup

### Prerequisites
- Node.js 18.0.0 or higher
- ArcGIS API key (for map services)

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/JonnyDawe/UK-Sewage-Map.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your ArcGIS API key:
```
VITE_ARCGIS_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint and fix code
- `npm run check-types` - Type check TypeScript

## Data Sources

The application combines several data sources:

### Event Duration Monitoring (EDM)
Real-time data is collected through Event Duration Monitoring by individual water companies, providing near-real time data on storm overflows. This data is accessed via the [Storm Overflow Hub](https://www.streamwaterdata.co.uk/pages/storm-overflows-data) maintained by Water UK. Storm overflows release untreated, diluted sewage into the environment. Currently, only Thames Water provides an API for accessing historical sewage spill data. For more context, read our article about [why water companies need to be more transparent](https://theconversation.com/water-companies-now-have-to-release-live-sewage-spill-data-heres-why-more-transparency-is-the-key-to-cleaner-rivers-239444) with environmental models and data.

### Other Data Sources
- Center for Ecology and Hydrology's Integrated Hydrological Digital Terrain Model
- Environment Agency discharge data
- RainViewer precipitation data

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## Authors

- [Alex Lipp (UCL)](https://alexlipp.github.io/) - Backend Development
- [Jonny Dawe](https://bsky.app/profile/did:plc:yxxm76jvxcsuzg6ahfjiek3y) - Frontend Development

## Related Repositories
- [Backend Repository](https://github.com/AlexLipp/sewage-map)
- [Frontend Repository](https://github.com/JonnyDawe/UK-Sewage-Map/)

## Disclaimer

While every effort has been made to ensure accuracy, this is experimental software and errors may occur. Please report any issues through our GitHub repositories.
