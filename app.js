const { App, LogLevel } = require('@slack/bolt');
const { config } = require('dotenv');

config();

/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
});

/** Sample Function Listener */
app.function('sample_function', async ({ client, inputs, fail }) => {
  try {
    const { user_id } = inputs;

    const emojis = await fetchEmojis();
    console.log('✅ fetchEmojis ran successfully');
    const randomEmojis = pickRandomEmojis(emojis, 5); // Let's say X=5
    console.log('✅ randomEmojis ran successfully');
    await app.client.chat.postMessage({
      channel: user_id,
      text: `Random emojis - ${randomEmojis.join(' ')}`
    });
    console.log('✅ postMessage ran successfully');

  } catch (error) {
    console.error(error);
    fail({ error: `Failed to handle a function request: ${error}` });
  }
});

async function fetchEmojis() {
  try {
    const result = await app.client.emoji.list({
      token: process.env.SLACK_BOT_TOKEN // Bot token with `emoji:read` scope
    });

    return result.emoji; // This is an object with emoji names as keys
  } catch (error) {
    console.error(error);
  }
}

function pickRandomEmojis(emojis, x) {
  const emojiKeys = Object.keys(emojis); // Assuming emojis is an object with keys being the emoji names
  const randomEmojis = [];
  const X = 5; // For example, picking 5 random emojis
  
  for (let i = 0; i < X; i++) {
    const randomIndex = Math.floor(Math.random() * emojiKeys.length);
    const randomEmojiName = emojiKeys[randomIndex];
    const formattedEmoji = `:${randomEmojiName}:`; // Formatting the emoji
    console.log(formattedEmoji)
    randomEmojis.push(formattedEmoji);
  }  
  return randomEmojis
}

/** Start Bolt App */
(async () => {
  try {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running! ⚡️');
  } catch (error) {
    console.error('Unable to start App', error);
  }
})();


