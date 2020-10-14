var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ValidationType;
(function (ValidationType) {
    ValidationType[ValidationType["NotNull"] = 0] = "NotNull";
})(ValidationType || (ValidationType = {}));
function validate(...types) {
    return function (target, propertyKey) {
        Validator2.registerValidators(target, propertyKey, types);
    };
}
class Validator2 {
    //todo add more validator maps
    static registerValidators(target, property, types) {
        for (const type of types) {
            if (type == ValidationType.NotNull) {
                let keys = this.notNullValidatorMap.get(target);
                if (!keys) {
                    keys = [];
                    this.notNullValidatorMap.set(target, keys);
                }
                keys.push(property);
            }
        } //todo add more validators if else
    }
    static validate(target) {
        let notNullProps = this.notNullValidatorMap.get(Object.getPrototypeOf(target));
        if (!notNullProps) {
            return true;
        }
        let hasErrors = false;
        for (const property of notNullProps) {
            let value = target[property];
            if (!value) {
                console.error(property + " value cannot be null");
                hasErrors = true;
            }
        }
        return hasErrors;
    }
}
Validator2.notNullValidatorMap = new Map();
class Person2 {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    validate(ValidationType.NotNull)
], Person2.prototype, "name", void 0);
console.log("-- creating instance --");
let person3 = new Person2(null);
console.log(person3);
let b2 = Validator2.validate(person3);
console.log("validation passed: " + !b2);
console.log("-- creating another instance --");
let person4 = new Person2("Tina");
console.log(person4);
b2 = Validator2.validate(person4);
console.log("validation passed: " + !b2);
