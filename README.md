# EASY DRIVE - E-Hailing Driver Platform for Western Cape

A modern web platform for the EASY DRIVE e-hailing driver service in Western Cape.

## Features

- Driver registration and onboarding
- Real-time ride management
- Driver earnings dashboard
- Safety and support resources
- Responsive design for all devices

## Tech Stack

- **Frontend Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Linting:** ESLint
- **Formatting:** Prettier

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/easydrivecpt-pixel/easydrive-website.git
cd easydrive-website

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create a production build
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── pages/           # Next.js pages and API routes
├── components/      # Reusable React components
├── styles/          # CSS modules and global styles
├── lib/            # Utility functions
└── types/          # TypeScript type definitions
```

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT

## Support

For support, contact the development team.
