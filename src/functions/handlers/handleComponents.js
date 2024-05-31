const { readdirSync } = require("fs")

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolders = readdirSync("./src/components")
        for (const folder of componentFolders) {
            const componentFiles = readdirSync(`./src/components/${folder}`)
            .filter(file => file.endsWith(".js"))
            
            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`)

                        const { buttons } = client
                        buttons.set(button.data.name, button)
                        // client.on("interactionCreate", async (interaction) => {
                        //     if (!interaction.isButton()) return
                        //     if (interaction.customId === button.customId) {
                        //         try {
                        //             await button.execute(interaction, client)
                        //         } catch (error) {
                        //             console.error(error)
                        //             await interaction.reply({content: "There was an error while executing this button... oops!", ephemeral: true})
                        //         }
                        //     }
                        // })
                    }
                    break
                // case "selectMenus":
                //     for (const file of componentFiles) {
                //         const component = require(`../../components/${folder}/${file}`)
                //         client.on("interactionCreate", async (interaction) => {
                //             if (!interaction.isSelectMenu()) return
                //             if (interaction.customId === component.customId) {
                //                 try {
                //                     await component.execute(interaction, client)
                //                 } catch (error) {
                //                     console.error(error)
                //                     await interaction.reply({content: "There was an error while executing this select menu... oops!", ephemeral: true})
                //                 }
                //             }
                //         })
                //     }
                //     break
                default:
                    break
            }
        }
    }
}