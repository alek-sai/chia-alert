const telegram = require("telegram-bot-api")
const config = require("./config")

const telegrambot = new telegram({ token: config.telegramToken })
telegrambot.setMessageProvider(new telegram.GetUpdateMessageProvider())

telegrambot.start().then(() => {
	console.log("Telegram ✅")
})

module.exports = function (message) {
	telegrambot.sendMessage({
		chat_id: config.telegramUserId,
		text: message
	})
}	