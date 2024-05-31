const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('Returns a menu if bugs 🐛'),

    async execute(interaction) {
		const select = new StringSelectMenuBuilder()
			.setCustomId('bug-menu')
			.setPlaceholder('Make a selection!')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('Snail')
					.setDescription('🐌')
					.setValue('snail'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Ladybug')
					.setDescription('🐞')
					.setValue('ladybug'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Ant')
					.setDescription('🐜')
					.setValue('ant'),
			);

		const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.reply({
			content: 'Choose your bug!',
			components: [row],
		})
	},
}