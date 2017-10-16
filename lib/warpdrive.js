var PlasmaReactor = require('./reactor');

function WarpDrive() {
    // WarDrive defaults
    this.__lightSpeed = 100;
}

WarpDrive.prototype.calculate = function(lightSpeed, damageA, damageB, damageC) {
    var requiredPlasma = lightSpeed * 300 / this.__lightSpeed;
    var overload = 0;
    var iter = 0;
    var returnData = { flowA: null, flowB: null, flowC: null, time: 0 };

    var reactorA = new PlasmaReactor();
    var reactorB = new PlasmaReactor();
    var reactorC = new PlasmaReactor();

    while (true) {
        var dataA = reactorA.calculate(damageA, overload, lightSpeed);
        var dataB = reactorB.calculate(damageB, overload, lightSpeed);
        var dataC = reactorC.calculate(damageC, overload, lightSpeed);

        returnData.flowA = dataA.flow;
        returnData.flowB = dataB.flow;
        returnData.flowC = dataC.flow;

        if (null === dataA.flow || null === dataB.flow || null === dataC.flow){
            return returnData;
        }

        if (dataA.flow + dataB.flow + dataC.flow >= requiredPlasma) {
            break;
        }

        if (iter >= 100) {
            break;
        }

        iter++;
        overload += 10;
    }

    var i = 0;
    var time = 0
    var flow_times = [dataA.time, dataB.time, dataC.time];
    flow_times.forEach(function(t) {
        if ( null === t ) {
            i++;
            return;
        }
        time += t;
    });

    returnData.time = time / (3 - i);

    return returnData;
};

module.exports = WarpDrive;
