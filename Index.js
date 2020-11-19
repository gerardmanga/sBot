const Discord = require('discord.js')
const fetch = require('node-fetch')
const axios = require('axios')

const bot = new Discord.Client()
const token =
'Nzc4NTU1MDg0ODU3NTQwNjI4.X7Tr7Q.ItaAyPW9rdkDuNKEjCmAf7zonOM'

bot.on('ready', () => {
  console.log('bot logged in')
})

const prefix = '*'

bot.on('message', async (msg) => {
  if(msg.content[0] !==prefix){
    console.log('no prefix)')
    return
  }

  const args = msg.content.slice(prefix.length).trim().split(' ')
  console.log(args)
  const command = args.shift().toLowerCase()
  console.log(command)

  if(command === 'nice'){
    msg.react("😎")
    msg.reply('LETS GO! :PogChamp:')
  }

  if(command === "motivation"){
    msg.reply('LMAO good luck')
  }

  if(command === "sase"){
    msg.reply('\nSASE Socials: \nhttps://linktr.ee/sase.sjsu')
  }

  if(command === "roll"){
    msg.reply(Math.floor((Math.random() * 1000) + 1))
  }


  if(command === 'embed'){
    let embed = new Discord.MessageEmbed()
    .setTitle('test embed')
    .setDescription('description here')
    .addField('field 1', 100)
    .setColor('BLUE')

    msg.channel.send(embed)
  }

  if(command === 'joke'){
    let getJoke = async () => {
      let response = await axios.get('https://official-joke-api.appspot.com/random_joke')
      let joke = response.data
      return joke
    }
    let jokeValue = await getJoke()
    console.log(jokeValue)
    msg.reply(`\n ${jokeValue.setup} \n\n ${jokeValue.punchline}\n 😆`)
  }

})

bot.login(token)
