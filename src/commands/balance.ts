import { Telegraf, Context } from "telegraf";
import axios from "axios";

export function setupBalanceCommand(bot: Telegraf<Context>) {
  bot.command("balance", async (ctx) => {
    try {
      // Replace with actual API call
      const response = await axios.get("https://income-api.copperx.io/api/wallets/balances");
      ctx.reply(`Your balance: ${response.data.balance} USDC`);
    } catch (error) {
      ctx.reply("Error fetching balance.");
    }
  });
}