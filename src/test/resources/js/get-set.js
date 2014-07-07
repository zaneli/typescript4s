var GetSet = (function () {
    function GetSet(name) {
        this.name = name;
    }
    Object.defineProperty(GetSet.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return GetSet;
})();
