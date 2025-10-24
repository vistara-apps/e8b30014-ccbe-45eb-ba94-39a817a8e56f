# LighterBot Hub

A social and gamified platform for Farcaster users to discover, share, build, and simulate trading bot strategies for 'lighter' assets on Base.

## Features

- 🤖 **Community Strategy Vault**: Share and discover trading strategies
- 🏆 **Simulated Trading Challenges**: Compete in virtual trading competitions
- 🎖️ **On-Chain Reputation Badges**: Earn NFT badges for achievements
- 📊 **Real-time Performance Metrics**: Track strategy performance
- 🔗 **Farcaster Integration**: Seamless social features

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
lighterbot-hub/
├── app/
│   ├── components/     # Reusable UI components
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   ├── providers.tsx   # OnchainKit & React Query providers
│   └── globals.css     # Global styles with Coinbase theme
├── public/
│   └── .well-known/
│       └── farcaster.json  # Farcaster manifest
└── package.json
```

## Theme

The app uses the **Coinbase theme** with:
- Dark navy background (#0a1929)
- Light text (#e3f2fd)
- Coinbase blue accents (#0052ff)
- Subtle rounded borders

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Make sure to set environment variables in your deployment platform.

## License

MIT
