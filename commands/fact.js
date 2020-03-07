// Water facts
water_facts = [
    "30% of fresh water is in the ground.",
    "1.7% of the world’s water is frozen and therefore unusable.",
    "Approximately 400 billion gallons of water are used in the United States per day.",
    "To create one pint of beer it takes 20 gallons of water.",
    "Unsafe water kills 200 children every hour.",
    "80% of all illness in the developing world is water related.",
    "40 billion hours are spent collecting water in Africa alone.",
    "Water expands by 9% when it freezes.",
    "300 tons of water are required to manufacture 1 ton of steel."
]

module.exports = {
    name: 'fact',
    bot_owner_only: false,
    args: false,
	description: 'Command to spread facts about water!',
	execute(message, args) {
        var fact = water_facts[Math.floor(Math.random() * water_facts.length)]
		message.channel.send(fact);
	},
};
