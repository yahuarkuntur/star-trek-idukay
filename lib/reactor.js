function PlasmaReactor() { 

    // Reactor defaults
    this.__maxFlow = 100;
    this.__overload = 0;
    this.__lightSpeed = 100;
    this.__maxDamage = 100;

}

PlasmaReactor.prototype.calculate = function(damage, overload, lightSpeed) {
    // init defaults
    var maxFlow = this.__maxFlow;
    var lightSpeed = lightSpeed || this.__lightSpeed;
    var overload = overload || this.__overload;
    var returnData = { flow: 0, time: null }; 

    if (damage >= this.__maxDamage) {
        return returnData;
    }
        
    if (lightSpeed > maxFlow) {
        overload = Math.abs(lightSpeed - maxFlow) + overload;
    }

    if (lightSpeed < maxFlow) {
        maxFlow = lightSpeed;
    }

    returnData.time = Math.abs(overload - maxFlow);
    returnData.flow = Math.abs(damage - maxFlow) + overload;

    if (overload == 0) {
        returnData.time = -1;
    }

    if (overload >= 99) {
        returnData.flow = null;
        returnData.time = null;
    }

    return returnData;
};

module.exports = PlasmaReactor;
