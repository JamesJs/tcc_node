"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
var typeorm_1 = require("typeorm");
var Compras_1 = require("./Compras");
var Fazenda_1 = require("./Fazenda");
var Movimentacao_1 = require("./Movimentacao");
var Estoque = /** @class */ (function () {
    function Estoque() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idEstoque" })
    ], Estoque.prototype, "idEstoque", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFazenda" })
    ], Estoque.prototype, "idFazenda", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Compras_1.Compras; }, function (compras) { return compras.idEstoque2; })
    ], Estoque.prototype, "compras", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Fazenda_1.Fazenda; }, function (fazenda) { return fazenda.estoques; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
    ], Estoque.prototype, "idFazenda2", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Movimentacao_1.Movimentacao; }, function (movimentacao) { return movimentacao.idEstoque2; })
    ], Estoque.prototype, "movimentacaos", void 0);
    Estoque = __decorate([
        typeorm_1.Index("fk_TB_estoque_TB_fazenda1_idx", ["idFazenda"], {}),
        typeorm_1.Index("idEstoque_UNIQUE", ["idEstoque"], { unique: true }),
        typeorm_1.Entity("Estoque", { schema: "TCC" })
    ], Estoque);
    return Estoque;
}());
exports.Estoque = Estoque;
