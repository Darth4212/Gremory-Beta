const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');
const musicconfig = require("./musicconfig.json")
var apikey = require('./musicconfig.json');

Music.start(client, {
  youtubeKey: musicconfig.key,
  prefix: "g!",
  leaveAlt: ["quit", "exit"],
  helpCmd: "help"
});

client.login(config.token)


var objToday = new Date(),
	day = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	month = months[objToday.getMonth()],
	year = objToday.getFullYear(),
	hour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	minute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	seconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	meridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = hour + ":" + minute + ":" + seconds + " " + meridiem + " " + month + " " + day + ", " + year;
const activities_list = [
    "a bunch of randomass numbers, letters, and wars.", 
    "with the developers console",
    "with some code", 
    "with JavaScript"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("with JavaScript")
})

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    // List channels
    console.log("Channels:")
    guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
})


client.on('ready', () => {
    var generalChannel = client.channels.get("503674467919200256")
    const localFileAttachment = new Discord.Attachment('C:\\Users\\Lil Grease\\Pictures\\gremorysealvector2.png')
    generalChannel.send('**-------------------------------------------------------------------------------------------------------------------------**')
    generalChannel.send('Started successfully!')
    generalChannel.send(localFileAttachment)
    generalChannel.send(today)
    generalChannel.send("Servers:")
    client.guilds.forEach((guild) => {
        generalChannel.send(" - *" + guild.name + "*")
    })
})

client.on('message', message => {
 if (message.content.startsWith(config.prefix + "avatar")) {
    message.reply(message.author.avatarURL);
  }
});



client.on('message', message => {
      
if (!message.guild) return;

if (message.content.startsWith(config.prefix + "ljoin")) {
    if (message.member.voiceChannel) {
    var voiceChannel = message.member.voiceChannel;
    message.member.voiceChannel.join()
        .then(connection => {
        const dispatcher = connection.playFile('./start.mp3');
        message.reply('I have successfully connected to the channel!');
        })
        .catch(err => console.log(err));
    } 
    else {
            message.reply('You need to join a voice channel first!');
          }
    }
});


client.on('message', message => {

  if(!message.guild) return;
  if (msg.author.id !== "302255088427204608") return; 

  if (message.content.startsWith(config.prefix + "lplay")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          const file = message.content.split(" ").splice(1).join(" ");
          const dispatcher = connection.playFile(`C:/Users/Lil Grease/Music/Music/${file}`);
          message.reply(`Playing now!`);
          })
        .catch(err => console.log(err));
    }

    else {
          message.reply('You need to be in Voice Channel in order to play music')
    }
  }
});



client.on('message', message => {
 if (message.content.startsWith(config.prefix + "kill")) {
    process.exit();
  }
});