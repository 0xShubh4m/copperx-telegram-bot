import { Telegraf, Context } from "telegraf";
import axios from "axios";

export function setupAuthCommands(bot: Telegraf<Context>) {
  bot.command("login", async (ctx) => {
    ctx.reply("Enter your email to receive an OTP:");

    bot.on("text", async (msg) => {
      const email = msg.message.text;
      try {
        await axios.post("https://income-api.copperx.io/api/auth/email-otp/request", { email });
        ctx.reply("OTP sent! Please enter it now.");
      } catch (error) {
        ctx.reply("Error sending OTP. Try again.");
      }
    });
  });

  bot.command("verify", async (ctx) => {
    ctx.reply("Enter the OTP you received:");

    bot.on("text", async (msg) => {
      const otp = msg.message.text;
      try {
        const response = await axios.post("https://income-api.copperx.io/api/auth/email-otp/authenticate", { otp });
        const token = response.data.token;
        ctx.reply("✅ Login successful!");
      } catch (error) {
        ctx.reply("Invalid OTP. Try again.");
      }
    });
  });
}
