describe("Plasma Reactor Tests", function() {
    var PlasmaReactor = require('../lib/reactor');
    var reactor;

    beforeEach(function() {
        reactor = new PlasmaReactor();
    });

    it("must return fully operational values with no damage", function() {
        var data = reactor.calculate(0);
        expect(data.flow).toEqual(100);
        expect(data.time).toEqual(-1);
    });

    it("must return overloaded values with no damage and 10 overload", function() {
        var data = reactor.calculate(0, 10);
        expect(data.flow).toEqual(110);
        expect(data.time).toEqual(90);
    });

    it("must not be operational if fully damaged", function() {
        var data = reactor.calculate(100);
        expect(data.flow).toEqual(0);
        expect(data.time).toEqual(null);
    });

});
