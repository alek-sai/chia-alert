# ChiaAlert

Tiny tool to be automatically notificated when your Chia reward has come.

## Install:

```
cd ~
git clone https://github.com/lenyapugachev/chia-alert.git
cd chia-alert
npm i
cp config.js.example config.js
```

Edit `config.js` with your telegram bot token and your telegram ID. Don't forget to start a bot chat in Telegram.
Also, change `logFolder` to Chia log folder path in your system. It should be configured to contain INFO messages.

## Start:

```
node .
```
