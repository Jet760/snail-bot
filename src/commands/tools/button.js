const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('Returns a mystery button 👀'),

    async execute(interaction, client) {
        const button = new ButtonBuilder({
            custom_id: "sticked",
            label: "Click me!",
            style: ButtonStyle.Primary
        })

        await interaction.reply({components: [new ActionRowBuilder().addComponents(button)]})
    }
}