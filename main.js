const { Client, Intents } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = process.env.DISCORD_API_KEY;

const prefix = '!'

bot.on('message', async (msg) => {

  const args = msg.content.slice(prefix.length).trim().split(' ')
  const command = args.shift().toLowerCase();


  if(command === 'get-joke') {
    //async API call using async/await syntax
    let getJoke = async () => {
      //make API call
      let result = await fetch('https://api.alternative.me/fng/?limit=10');
      //convert to object we can work with
      let json = await result.json();
      console.log(json);
      return json
    }
    //call function defined above
    let indexfg = await getJoke();
    const valuearray = indexfg.data.map(x => parseInt(x.value));
    console.log(valuearray)
    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
    const averagevalue = average(valuearray);
    
    //have our bot reply using the data returned from our API call
    msg.reply(`
    Fear and Greed Index
    ${indexfg.data[0].value_classification}
    ${indexfg.data[0].value}
    The average index over the last 10 days has been ${averagevalue}
    `)
  }
    
    
  
})

bot.login(token);