var harvesterCreep = require('creep.types.harvester');
var upgraderCreep = require('creep.types.upgrader');
var builderCreep = require('creep.types.builder');

var creepRules = {

    /** @param {Creep} creep **/
    atPeace: function(creep) {
        switch(creep.memory.role){
            case 'harvester':
                harvesterCreep.run(creep);
                break;
            case 'upgrader':
                upgraderCreep.run(creep);
            case 'builder':
                builderCreep.run(creep);
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
