const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('reactor')
    .setDescription('Returns reactions'),

    async execute(interaction, client) {
        const message = await interaction.reply({content: 'React here!', fetchReply: true})

        const filter = (reaction, user) => {
            return reaction.emoji.name === '👍' && user.id === interaction.user.id
        }

        message
            .awaitReactions({filter, max: 4, time: 10000, errors: ['time']})
            .then(collected => console.log(`Collected ${collected.size} reactions`))
            .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 reacted`))

        // const emoji = client.emojis.cache.find(emoji => emoji.id == '1220029935033516083')
        
        // message.react(emoji)
        // message.react('👍')

        // const filter = (reaction, user) => {
        //     return reaction.emoji.name === '👍' && user.id === interaction.user.id
        // }

        // const collector = message.createReactionCollector({filter, time: 15000})

        // collector.on('collect', (reaction, user) => {
        //     console.log(`Collected ${reaction.emoji.name} from ${user.tag}`)
        // })

        // collector.on('end', collected => {
        //     console.log(`Collected ${collected.size} items`)
        // })
    },

    
}