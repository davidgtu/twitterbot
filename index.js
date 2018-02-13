const Twit = require('twit');

const bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,
});

// bot.post('statuses/update', {status: 'test'}, (err, data, response) => {
//   if (err) console.log(err)
//   else console.log(`${data.text} was tweeted`)
// });

// bot.get('friends/list', {screen_name: 'davidgtu'}, (err, data, res) => {
//   if (err) console.log(err)
//   else data.users.forEach(user => console.log(user.screen_name));
// });

const getBotTimeline = () => {
  bot.get('statuses/home_timeline', {count: 10}, (err, data, res) => {
    if (err) console.log(err)
    else
      data.forEach(post => {
        console.log(post);
        console.log(post.user.screen_name);
        console.log(post.id_str);
        console.log('\n');
      });
  });
}

getBotTimeline();
