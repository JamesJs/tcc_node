"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compras = void 0;
var typeorm_1 = require("typeorm");
var Estoque_1 = require("./Estoque");
var Produtos_1 = require("./Produtos");
var Compras = /** @class */ (function () {
    function Compras() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idCompras" })
    ], Compras.prototype, "idCompras", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "data" })
    ], Compras.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idEstoque" })
    ], Compras.prototype, "idEstoque", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Estoque_1.Estoque; }, function (estoque) { return estoque.compras; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idEstoque", referencedColumnName: "idEstoque" }])
    ], Compras.prototype, "idEstoque2", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Produtos_1.Produtos; }, function (produtos) { return produtos.idCompras2; })
    ], Compras.prototype, "produtos", void 0);
    Compras = __decorate([
        typeorm_1.Index("fk_TB_compras_TB_estoque1_idx", ["idEstoque"], {}),
        typeorm_1.Index("idCompras_UNIQUE", ["idCompras"], { unique: true }),
        typeorm_1.Entity("Compras", { schema: "TCC" })
    ], Compras);
    return Compras;
}());
exports.Compras = Compras;
