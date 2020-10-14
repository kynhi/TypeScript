var GenericMap = /** @class */ (function () {
    function GenericMap() {
        this.items = {};
    }
    GenericMap.prototype.setItem = function (key, item) {
        this.items[key] = item;
    };
    GenericMap.prototype.getItem = function (key) {
        return this.items[key];
    };
    GenericMap.prototype.clear = function () {
        this.items = {};
    };
    GenericMap.prototype.printMap = function () {
        var _this = this;
        var itemsAsString = Object
            .getOwnPropertyNames(this.items)
            .map(function (key) { return "'" + key + "': " + _this.getItem(key); })
            .join(", ");
        return "{ " + itemsAsString + " }";
    };
    return GenericMap;
}());
var numb = new GenericMap();
numb.setItem('alpha', 7);
numb.setItem('beta', 14);
console.log(numb.printMap());
numb.clear();
console.log(numb.printMap());
var strMap = new GenericMap();
strMap.setItem('color', 'Blue');
strMap.setItem('height', '54 cm');
console.log(strMap.printMap());
