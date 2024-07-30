const TelegramBot = require("node-telegram-bot-api");

const TELE_TOKEN = "7287903861:AAEca78HJ75oRAUyrgXxeB6b8ope2JEsSPI";

const bot = new TelegramBot(TELE_TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, chatId.toString(), {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Sharks Web App",
            web_app: { url: "https://telegram-web-app-omega.vercel.app/" },
          },
        ],
      ],
    },
  });
});
