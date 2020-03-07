const mongoose = require('mongoose')
// Connection to db
mongoose.connect(
    'mongodb://localhost/water_bot',
    { useNewUrlParser: true },
);

const waterLog = require('../models/waterLog')

module.exports = {
    name: 'show',
    bot_owner_only: false,
    args: true,
	description: 'Show water',
	execute(message, args) {

        // Only need one argument
        if (args.length === 0) {
            // If no user is specified, get info for you
            selected_user_id = message.author.id.toString();
            select_user_username = message.author.username
        } else if (args.length === 1) {
            // If user is specified, get info for them
            selected_user_id =  message.mentions.members.first().id;
            select_user_username = message.mentions.members.first().nickname || message.mentions.members.first().user.username
        } else {
            return message.channel.send("Please only enter 1-2 arguments.")
        }

        waterLog.find({ user_id: selected_user_id })
            .then(waterlogs => {
                var total_water = 0;
                waterlogs.forEach( (log) => {
                    total_water += log.water_amount;
                }
            )
            return message.channel.send(select_user_username + ' has drank ' + total_water + ' ounces of water!');
        })

		// message.channel.send('Sorry, ' + select_user_username + ' had not drank any water.');
	},
};
