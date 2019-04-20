var harvesterCreep = require('creep.types.harvester');
var upgraderCreep = require('creep.types.upgrader');

var creepRules = {

    /** @param {Creep} creep **/
    atPeace: function(creep) {
        switch(creep.memory.role){
            case 'harvester':
                harvesterCreep.run(creep);
                break;
            default:
                break;
        }
    },

    onGuard: function(creep) {

    },

    atWar: function(creep) {

    }
};

module.exports = creepRules;
