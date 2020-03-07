const mongoose = require('mongoose')
// Connection to db
mongoose.connect(
    'mongodb://localhost/water_bot',
    { useNewUrlParser: true },
);

const waterLog = require('../models/waterLog')

module.exports = {
    name: 'add',
    bot_owner_only: false,
    args: true,
	description: 'Add water',
	execute(message, args) {

        // Only need one argument
        if (args.length > 1) return message.channel.send("Please only enter one argument.");

        // Checks if water is a number greater than 0
        if (!parseInt(args[0]).isNaN && parseInt(args[0]) > 0) {
            water = parseInt(args[0])
        } else {
            return message.channel.send("Please enter a valid input.")
        }

        const water_log = new waterLog({
            user_id: message.author.id,
            water_amount: water
        })
        water_log.save()
            // .then(result => console.log(result))
            .catch(err => console.log(err))

		message.channel.send(water + ' ounces of water added.');
	},
};
