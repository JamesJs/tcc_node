"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContasInvestimento = void 0;
var typeorm_1 = require("typeorm");
var Financeiro_1 = require("./Financeiro");
var Investimento_1 = require("./Investimento");
var ContasInvestimento = /** @class */ (function () {
    function ContasInvestimento() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idContasInvestimento" })
    ], ContasInvestimento.prototype, "idContasInvestimento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFinanceiro" })
    ], ContasInvestimento.prototype, "idFinanceiro", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "valor", precision: 12 })
    ], ContasInvestimento.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "vencimento" })
    ], ContasInvestimento.prototype, "vencimento", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "investimento", length: 45 })
    ], ContasInvestimento.prototype, "investimento", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Financeiro_1.Financeiro; }, function (financeiro) { return financeiro.contasInvestimentos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
    ], ContasInvestimento.prototype, "idFinanceiro2", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Investimento_1.Investimento; }, function (investimento) { return investimento.idContasInvestimento2; })
    ], ContasInvestimento.prototype, "investimentos", void 0);
    ContasInvestimento = __decorate([
        typeorm_1.Index("fk_TB_contasPagar_TB_financeiro1_idx", ["idFinanceiro"], {}),
        typeorm_1.Index("idContasPagar_UNIQUE", ["idContasInvestimento"], { unique: true }),
        typeorm_1.Entity("ContasInvestimento", { schema: "TCC" })
    ], ContasInvestimento);
    return ContasInvestimento;
}());
exports.ContasInvestimento = ContasInvestimento;
