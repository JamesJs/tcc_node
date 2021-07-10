"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
var typeorm_1 = require("typeorm");
var Consumo_1 = require("./Consumo");
var ConsumoEsperado_1 = require("./ConsumoEsperado");
var Compras_1 = require("./Compras");
var Produtos = /** @class */ (function () {
    function Produtos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idProdutos" })
    ], Produtos.prototype, "idProdutos", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idCompras" })
    ], Produtos.prototype, "idCompras", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "valor", precision: 12 })
    ], Produtos.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nome", length: 100 })
    ], Produtos.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "quant" })
    ], Produtos.prototype, "quant", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Consumo_1.Consumo; }, function (consumo) { return consumo.idProdutos2; })
    ], Produtos.prototype, "consumos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ConsumoEsperado_1.ConsumoEsperado; }, function (consumoEsperado) { return consumoEsperado.idProdutos2; })
    ], Produtos.prototype, "consumoEsperados", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Compras_1.Compras; }, function (compras) { return compras.produtos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idCompras", referencedColumnName: "idCompras" }])
    ], Produtos.prototype, "idCompras2", void 0);
    Produtos = __decorate([
        typeorm_1.Index("fk_TB_produtos_TB_compras1_idx", ["idCompras"], {}),
        typeorm_1.Index("idProdutos_UNIQUE", ["idProdutos"], { unique: true }),
        typeorm_1.Entity("Produtos", { schema: "TCC" })
    ], Produtos);
    return Produtos;
}());
exports.Produtos = Produtos;
