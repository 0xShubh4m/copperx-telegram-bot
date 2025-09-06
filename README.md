# CopperX Telegram Bot

A Telegram bot built with TypeScript and Telegraf for CopperX platform integration.

## Features

- Telegram bot integration using Telegraf
- TypeScript support
- Environment variable configuration
- Axios for HTTP requests
- Pusher integration for real-time updates

## Installation

1. Clone the repository:
```bash
git clone https://github.com/0xShubh4m/copperx-telegram-bot.git
cd copperx-telegram-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and configure your environment variables:
```env
BOT_TOKEN=your_telegram_bot_token
# Add other required environment variables
```

## Usage

```bash
npm start
```

## Dependencies

- **telegraf**: Telegram bot framework
- **axios**: HTTP client
- **dotenv**: Environment variable loader
- **pusher-js**: Real-time communication
- **@types/node**: TypeScript definitions for Node.js

## License

ISC