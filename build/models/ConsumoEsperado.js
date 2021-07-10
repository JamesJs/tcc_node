"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoEsperado = void 0;
var typeorm_1 = require("typeorm");
var Gado_1 = require("./Gado");
var Produtos_1 = require("./Produtos");
var ConsumoEsperado = /** @class */ (function () {
    function ConsumoEsperado() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idCnsumoEsperado" })
    ], ConsumoEsperado.prototype, "idCnsumoEsperado", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idGado" })
    ], ConsumoEsperado.prototype, "idGado", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "data" })
    ], ConsumoEsperado.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "quant", precision: 12 })
    ], ConsumoEsperado.prototype, "quant", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idProdutos" })
    ], ConsumoEsperado.prototype, "idProdutos", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gado_1.Gado; }, function (gado) { return gado.consumoEsperados; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
    ], ConsumoEsperado.prototype, "idGado2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Produtos_1.Produtos; }, function (produtos) { return produtos.consumoEsperados; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idProdutos", referencedColumnName: "idProdutos" }])
    ], ConsumoEsperado.prototype, "idProdutos2", void 0);
    ConsumoEsperado = __decorate([
        typeorm_1.Index("fk_TB_consumoEsperado_TB_gado1_idx", ["idGado"], {}),
        typeorm_1.Index("fk_TB_consumoEsperado_TB_produtos1_idx", ["idProdutos"], {}),
        typeorm_1.Index("idCnsumoEsperado_UNIQUE", ["idCnsumoEsperado"], { unique: true }),
        typeorm_1.Entity("ConsumoEsperado", { schema: "TCC" })
    ], ConsumoEsperado);
    return ConsumoEsperado;
}());
exports.ConsumoEsperado = ConsumoEsperado;
