const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const stickBugVideo = process.env.stickBugVideo

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed 🤓'),

    async execute(interaction, client) {
        const embed = new EmbedBuilder({
            title: "This is an example embed!",
            description: "This is a description 🐌",
            color: client.color,
            image: {
                url: client.user.displayAvatarURL()
            },
            thumbnail: {
                url: client.user.displayAvatarURL()
            },
            timestamp: new Date(),
            author: {
                name: interaction.user.tag,
                icon_url: interaction.user.displayAvatarURL(),
                url: stickBugVideo
            },
            url: stickBugVideo,
            fields: [
                {
                    name: "Field 1",
                    value: "This is the first field"
                },
                {
                    name: "Field 2",
                    value: "This is the second field"
                },
                {
                    name: "Field 3",
                    value: "This is the third field",
                    inline: true
                },
                {
                    name: "Field 4",
                    value: "This is the fourth field",
                    inline: true
                }
            ],
            footer: {
                icon_url: client.user.displayAvatarURL(),
                text: client.user.tag
            }
        })

        await interaction.reply({embeds: [embed]})
        }
    }
