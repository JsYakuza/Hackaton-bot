import env from "./env.js";
import TelegramApi from 'node-telegram-bot-api';

const token = env.token;
const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Инфо'}
    ]);

    bot.on('message', async (msg) => {
        const text = msg.text;
        const chatID = msg.chat.id

        if (text === '/start') {
            return await bot.sendMessage(chatID, 'Ты отправил мне' + text);
        }
    });

    bot.on('callback_query', async (msg) => {
        const callbackData = msg.data;
        const chatId = msg.message.chat.id;
    });
}

start();