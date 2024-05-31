const { name } = require("../../events/client/ready");
const stickBugVideo = process.env.stickBugVideo

module.exports = {
    data: {
        name: "sticked"
    },
    async execute(interaction, client) {
        await interaction.reply({content: `Get stick bugged lol ${stickBugVideo} 🐌`, ephemeral: true})
    }
}