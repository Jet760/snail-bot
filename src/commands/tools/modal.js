const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('modal')
    .setDescription('Returns a modal 🎨'),

    async execute(interaction, client) {
        const modal = new ModalBuilder()
        .setCustomId('fav-colour')
        .setTitle('Favourite Colour?')

        const textInput = new TextInputBuilder()
        .setCustomId('favColourInput')
        .setLabel('What is your favourite colour?')
        .setRequired(true)
        .setStyle(TextInputStyle.Short)

        modal.addComponents(new ActionRowBuilder().addComponents(textInput))
        await interaction.showModal(modal)
    }
}