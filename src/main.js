//Body part types
// WORK MOVE CARRY ATTACK RANGED_ATTACK HEAL CLAIM TOUGH
var creepRules = require('creep.rules');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        creepRules.atPeace(creep);
    }
}
