var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function usuario(data) {
    return data;
}
console.log(usuario({ nome: 'romario' }));
console.log(usuario(['romario', 26]));
console.log(usuario('romario'));
console.log(usuario(26));
console.log('====================================');
var OperacaoBinaria = /** @class */ (function () {
    function OperacaoBinaria(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
    return OperacaoBinaria;
}());
var SomaBinaria = /** @class */ (function (_super) {
    __extends(SomaBinaria, _super);
    function SomaBinaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomaBinaria.prototype.executar = function () {
        return this.operador1 + this.operador2;
    };
    return SomaBinaria;
}(OperacaoBinaria));
console.log(new SomaBinaria(3, 4).executar());
