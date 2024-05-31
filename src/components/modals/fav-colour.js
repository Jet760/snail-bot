module.exports = {
    data: {
        name: "fav-colour"
    },
    async execute(interaction, client) {
        let favColour = interaction.fields.getTextInputValue("favColourInput");
        let message = `You said your favourite colour is ${favColour}.\n`;
        switch (favColour.toLowerCase()) {
            case "red":
                message += "Red is a nice colour! ❤️";
                break;
            case "blue":
                message += "Blue is a nice colour! 💙";
                break;
            case "green":
                message += "Green is a nice colour! 💚";
                break;
            case "yellow":
                message += "Yellow is a nice colour! 💛";
                break;
            case "purple":
                message += "Purple is a nice colour! 💜";
                break;
            case "orange":
                message += "Orange is a nice colour! 🧡";
                break;
            case "pink":
                message += "Pink is a nice colour! 💗";
                break;
            case "black":
                message += "Black is a nice colour! 🖤";
                break;
            case "white":
                message += "White is a nice colour! 🤍";
                break;
            default:
                message += "That's a nice colour! 😊";
            break;
        }
        await interaction.reply({content: message});
    }
}