var mine = require('mineflayer');

var options = {
    host: 'mc.mineberry.net',
    username: 'StingEucliffe_',
    version: "1.8.9",
};

var bot = mine.createBot(options);
bindEvents(bot);

function bindEvents(bot) {

    bot.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mine.createBot(options);
        bindEvents(bot);
    }
}
