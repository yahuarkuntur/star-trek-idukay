describe("WarpDrive Test Case 1", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(100, 0, 0, 0);

    it("must have engine A to return a flow of 100 mg/s ", function() {
        expect(data.flowA).toEqual(100);
    });

    it("must have engine B to return a flow of 100 mg/s ", function() {
        expect(data.flowB).toEqual(100);
    });

    it("must have engine C to return a flow of 100 mg/s ", function() {
        expect(data.flowC).toEqual(100);
    });

    it("must have infinite operational time ", function() {
        expect(data.time).toEqual(-1);
    });

});

describe("WarpDrive Test Case 2", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(90, 0, 0, 0);

    it("must have engine A to return a flow of 90 mg/s ", function() {
        expect(data.flowA).toEqual(90);
    });

    it("must have engine B to return a flow of 90 mg/s ", function() {
        expect(data.flowB).toEqual(90);
    });

    it("must have engine C to return a flow of 90 mg/s ", function() {
        expect(data.flowC).toEqual(90);
    });

    it("must have infinite operational time ", function() {
        expect(data.time).toEqual(-1);
    });

});


describe("WarpDrive Test Case 3", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(30, 0, 0, 0);

    it("must have engine A to return a flow of 30 mg/s ", function() {
        expect(data.flowA).toEqual(30);
    });

    it("must have engine B to return a flow of 30 mg/s ", function() {
        expect(data.flowB).toEqual(30);
    });

    it("must have engine C to return a flow of 30 mg/s ", function() {
        expect(data.flowC).toEqual(30);
    });

    it("must have infinite operational time ", function() {
        expect(data.time).toEqual(-1);
    });

});


describe("WarpDrive Test Case 4", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(100, 20, 10, 0);

    it("must have engine A to return a flow of 90 mg/s ", function() {
        expect(data.flowA).toEqual(90);
    });

    it("must have engine B to return a flow of 100 mg/s ", function() {
        expect(data.flowB).toEqual(100);
    });

    it("must have engine C to return a flow of 110 mg/s ", function() {
        expect(data.flowC).toEqual(110);
    });

    it("must be operational for 90 minutes ", function() {
        expect(data.time).toEqual(90);
    });

});


describe("WarpDrive Test Case 5", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(80, 0, 0, 100);

    it("must have engine A to return a flow of 120 mg/s ", function() {
        expect(data.flowA).toEqual(120);
    });

    it("must have engine B to return a flow of 120 mg/s ", function() {
        expect(data.flowB).toEqual(120);
    });

    it("must have engine C to be fully damaged and not operational ", function() {
        expect(data.flowC).toEqual(0);
    });

    it("must be operational for 80 minutes ", function() {
        expect(data.time).toEqual(80);
    });

});


describe("WarpDrive Test Case 6", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(150, 0, 0, 0);

    it("must have engine A to return a flow of 150 mg/s ", function() {
        expect(data.flowA).toEqual(150);
    });

    it("must have engine B to return a flow of 150 mg/s ", function() {
        expect(data.flowB).toEqual(150);
    });

    it("must have engine C to return a flow of 150 mg/s ", function() {
        expect(data.flowC).toEqual(150);
    });

    it("must be operational for 50 minutes ", function() {
        expect(data.time).toEqual(50);
    });

});

describe("WarpDrive Test Case 7", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(140, 0, 0, 30);

    it("must have engine A to return a flow of 150 mg/s ", function() {
        expect(data.flowA).toEqual(150);
    });

    it("must have engine B to return a flow of 150 mg/s ", function() {
        expect(data.flowB).toEqual(150);
    });

    it("must have engine C to return a flow of 120 mg/s ", function() {
        expect(data.flowC).toEqual(120);
    });

    it("must be operational for 50 minutes ", function() {
        expect(data.time).toEqual(50);
    });

});

describe("WarpDrive Test Case 8", function() {
    var WarpDrive = require('../lib/warpdrive');
    var wd = new WarpDrive();
    var data = wd.calculate(170, 20, 50, 40);

    it("must be unable to comply ", function() {
        expect(data.flowA).toEqual(null);
    });

    it("must be unable to comply ", function() {
        expect(data.flowB).toEqual(null);
    });

    it("must be unable to comply ", function() {
        expect(data.flowC).toEqual(null);
    });

    it("must not be able to operate ", function() {
        expect(data.time).toEqual(0);
    });

});
