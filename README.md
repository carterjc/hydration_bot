## hydration_bot
A Discord bot with the sole goal of the proliferation of hydration.

# Set up
To use all the features of the bot, make sure you install MongoDB and have it running on the same client as the bot.

After cloning the repo, use `yarn install` to get all the dependencies.
Use `yarn start` to run the bot and develop it.

# Features
Add water
-
Use `.h add (amount)` to add a certain amount of water to your user.

___

Example: `.h add 8`

Output: `8 ounces of water added.`

Show water
-

Use `.h show` or `.h show [@user]` to show the water intake for you or your friend.

___

Example: `.h show`

Output: `carter has drank 25 ounces of water!`

Example: `.h show @Hydration Bot`

Output: `Hydration Bot has drank 0 ounces of water!`

Give water fact
-
Use `.h fact` to display a random water fact.

___

Example: `.h fact`

Output: `Water expands by 9% when it freezes.`

Water reminder
-
Every 20 minutes, Hydration Bot will automatically send a message to remind members to drink some water!

