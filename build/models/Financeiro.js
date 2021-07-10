"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
var typeorm_1 = require("typeorm");
var ContasGado_1 = require("./ContasGado");
var ContasInvestimento_1 = require("./ContasInvestimento");
var ContasPagar_1 = require("./ContasPagar");
var Fazenda_1 = require("./Fazenda");
var ReceitaFutura_1 = require("./ReceitaFutura");
var TbNegociacao_1 = require("./TbNegociacao");
var Financeiro = /** @class */ (function () {
    function Financeiro() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idFinanceiro" })
    ], Financeiro.prototype, "idFinanceiro", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFazenda" })
    ], Financeiro.prototype, "idFazenda", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ContasGado_1.ContasGado; }, function (contasGado) { return contasGado.idFinanceiro2; })
    ], Financeiro.prototype, "contasGados", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ContasInvestimento_1.ContasInvestimento; }, function (contasInvestimento) { return contasInvestimento.idFinanceiro2; })
    ], Financeiro.prototype, "contasInvestimentos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ContasPagar_1.ContasPagar; }, function (contasPagar) { return contasPagar.idFinanceiro2; })
    ], Financeiro.prototype, "contasPagars", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Fazenda_1.Fazenda; }, function (fazenda) { return fazenda.financeiros; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
    ], Financeiro.prototype, "idFazenda2", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ReceitaFutura_1.ReceitaFutura; }, function (receitaFutura) { return receitaFutura.idFinanceiro2; })
    ], Financeiro.prototype, "receitaFuturas", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return TbNegociacao_1.TbNegociacao; }, function (tbNegociacao) { return tbNegociacao.idFinanceiro2; })
    ], Financeiro.prototype, "tbNegociacaos", void 0);
    Financeiro = __decorate([
        typeorm_1.Index("fk_TB_financeiro_TB_fazenda1_idx", ["idFazenda"], {}),
        typeorm_1.Index("idFinanceiro_UNIQUE", ["idFinanceiro"], { unique: true }),
        typeorm_1.Entity("Financeiro", { schema: "TCC" })
    ], Financeiro);
    return Financeiro;
}());
exports.Financeiro = Financeiro;
