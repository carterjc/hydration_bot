module.exports = {
    name: 'help',
    bot_owner_only: false,
    args: false,
	description: 'The only way to understand the enemy is to become them',
	execute(message, args) {
        const help = {
            color: 0x0099ff,
            title: "Hydration Bot Help",
            url: "https://discord.js.org/",
            author: {
                name: "Costic, Inc.",
                icon_url: "https://i.imgur.com/gE7GcTi.jpg",
                url: "https://discord.js.org"
            },
            description: "The only way to understand the enemy is to become them",
            thumbnail: {
                url: "https://i.imgur.com/gE7GcTi.jpg"
            },
            fields: [
                {
                    name: "Water fact",
                    value: "Use `.h fact` to get a random water fact!"
                },
                {
                    name: "Show water",
                    value: "Use `.h show [ @user ]` to get the water intake for you or a friend."
                },
                {
                    name: "Add water",
                    value: "Use `.h add ( amount )` to add the amount of water you drank."
                }
            ],
            timestamp: new Date(),
            footer: {
                text: "Hydration Bot 2020",
                icon_url: "https://i.imgur.com/gE7GcTi.jpg"
            },
        };

		message.channel.send({ embed: help });
	},
};
