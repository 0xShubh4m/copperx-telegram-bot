import { Telegraf, Context } from "telegraf";

export function setupTransactionCommands(bot: Telegraf<Context>) {
  bot.command("send", (ctx) => {
    ctx.reply("Send command triggered.");
  });

  bot.command("withdraw", (ctx) => {
    ctx.reply("Withdraw command triggered.");
  });
}
