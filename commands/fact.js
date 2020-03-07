// Water facts
const water_facts = require('../water_facts.json')

module.exports = {
    name: 'fact',
    bot_owner_only: false,
    args: false,
	description: 'Command to spread facts about water!',
	execute(message, args) {
        var fact = water_facts['water_facts'][Math.floor(Math.random() * water_facts['water_facts'].length)]
		message.channel.send(fact);
	},
};
