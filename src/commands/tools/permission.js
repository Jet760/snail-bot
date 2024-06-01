const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField, PermissionOverwrites } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('permission')
    .setDescription('This command requires permissions to run!')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction, client) {
        const { roles } = interaction.member
        const role = await interaction.guild.roles.fetch('1246452091132575855').catch(console.error)

        const testRole = await interaction.guild.roles.create({
            name: 'Test Role',
            permissions:[ PermissionsBitField.Flags.KickMembers]
        }).catch(console.error)

        if (roles.cache.has("1246452091132575855")) {
            await interaction.deferReply({fetchReply: true})

            await roles.remove(role).catch
            await interaction.editReply({content: `Removed ${role.name} role from you`})
        }
        else {
            await interaction.reply({content: `You do not have ${role.name} role`})
        }

        await roles.add(testRole).catch(console.error)

        await testRole.setPermissions([PermissionsBitField.Flags.BanMembers]).catch(console.error)

        const channel = await interaction.guild.channels.create({
            name: 'test-channel',
            PermissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel]
                },
                {
                    id: interaction.guild.id,
                    allow: [PermissionsBitField.Flags.ViewChannel]
                }
            ]
    }).catch(console.error)

    await channel.PermissionOverwrites.edit(testRole.id, { SendMessages: false }).catch(console.error)
}

}