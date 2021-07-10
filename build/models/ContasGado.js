"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContasGado = void 0;
var typeorm_1 = require("typeorm");
var Financeiro_1 = require("./Financeiro");
var ContasGado = /** @class */ (function () {
    function ContasGado() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idInvestimento" })
    ], ContasGado.prototype, "idInvestimento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFinanceiro" })
    ], ContasGado.prototype, "idFinanceiro", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "valor", precision: 12 })
    ], ContasGado.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "vencimento" })
    ], ContasGado.prototype, "vencimento", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Financeiro_1.Financeiro; }, function (financeiro) { return financeiro.contasGados; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
    ], ContasGado.prototype, "idFinanceiro2", void 0);
    ContasGado = __decorate([
        typeorm_1.Index("fk_TB_contasPagar_TB_financeiro1_idx", ["idFinanceiro"], {}),
        typeorm_1.Index("idContasPagar_UNIQUE", ["idInvestimento"], { unique: true }),
        typeorm_1.Entity("ContasGado", { schema: "TCC" })
    ], ContasGado);
    return ContasGado;
}());
exports.ContasGado = ContasGado;
