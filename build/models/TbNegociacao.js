"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbNegociacao = void 0;
var typeorm_1 = require("typeorm");
var Comprador_1 = require("./Comprador");
var Gado_1 = require("./Gado");
var Financeiro_1 = require("./Financeiro");
var TbNegociacao = /** @class */ (function () {
    function TbNegociacao() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idNegociacao" })
    ], TbNegociacao.prototype, "idNegociacao", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "valor", precision: 12 })
    ], TbNegociacao.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "data" })
    ], TbNegociacao.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFinanceiro" })
    ], TbNegociacao.prototype, "idFinanceiro", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Comprador_1.Comprador; }, function (comprador) { return comprador.idNegociacao2; })
    ], TbNegociacao.prototype, "compradors", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Gado_1.Gado; }, function (gado) { return gado.idNegociacao2; })
    ], TbNegociacao.prototype, "gados", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Financeiro_1.Financeiro; }, function (financeiro) { return financeiro.tbNegociacaos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
    ], TbNegociacao.prototype, "idFinanceiro2", void 0);
    TbNegociacao = __decorate([
        typeorm_1.Index("fk_TB_negociacao_TB_financeiro1_idx", ["idFinanceiro"], {}),
        typeorm_1.Index("idNegociacao_UNIQUE", ["idNegociacao"], { unique: true }),
        typeorm_1.Entity("TB_negociacao", { schema: "TCC" })
    ], TbNegociacao);
    return TbNegociacao;
}());
exports.TbNegociacao = TbNegociacao;
