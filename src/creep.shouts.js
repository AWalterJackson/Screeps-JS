var creepShouts = {
    harvest: function(creep) {
        creep.say('⛏');
    },

    upgrade: function(creep) {
        creep.say('⏫');
    },

    build: function(creep) {
        creep.say('🔨');
    }

};

module.exports = creepShouts;
