"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContasPagar = void 0;
var typeorm_1 = require("typeorm");
var Financeiro_1 = require("./Financeiro");
var ContasPagar = /** @class */ (function () {
    function ContasPagar() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idContasPagar" })
    ], ContasPagar.prototype, "idContasPagar", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFinanceiro" })
    ], ContasPagar.prototype, "idFinanceiro", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "valor", precision: 12 })
    ], ContasPagar.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "vencimento" })
    ], ContasPagar.prototype, "vencimento", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Financeiro_1.Financeiro; }, function (financeiro) { return financeiro.contasPagars; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
    ], ContasPagar.prototype, "idFinanceiro2", void 0);
    ContasPagar = __decorate([
        typeorm_1.Index("fk_TB_contasPagar_TB_financeiro1_idx", ["idFinanceiro"], {}),
        typeorm_1.Index("idContasPagar_UNIQUE", ["idContasPagar"], { unique: true }),
        typeorm_1.Entity("ContasPagar", { schema: "TCC" })
    ], ContasPagar);
    return ContasPagar;
}());
exports.ContasPagar = ContasPagar;
