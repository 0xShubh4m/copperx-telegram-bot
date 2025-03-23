import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import { setupAuthCommands } from "./commands/auth";
import { setupBalanceCommand } from "./commands/balance";
import { setupTransactionCommands } from "./commands/transactions";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Default bot commands
bot.start((ctx) => ctx.reply("Welcome to Copperx Payout Bot! Use /help for commands."));
bot.command("help", (ctx) => {
  ctx.reply("Available commands:\n/login - Get OTP\n/verify - Verify OTP\n/balance - Check balance\n/send - Send funds\n/withdraw - Withdraw funds");
});

// Register command handlers
setupAuthCommands(bot);  // Connect Auth Commands

bot.launch();
console.log("Bot is running...");



