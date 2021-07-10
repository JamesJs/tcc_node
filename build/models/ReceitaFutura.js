"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitaFutura = void 0;
var typeorm_1 = require("typeorm");
var Financeiro_1 = require("./Financeiro");
var ReceitaFutura = /** @class */ (function () {
    function ReceitaFutura() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idFutura" })
    ], ReceitaFutura.prototype, "idFutura", void 0);
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "idFinanceiro" })
    ], ReceitaFutura.prototype, "idFinanceiro", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "valor", precision: 12 })
    ], ReceitaFutura.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "dataPrevisao" })
    ], ReceitaFutura.prototype, "dataPrevisao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Financeiro_1.Financeiro; }, function (financeiro) { return financeiro.receitaFuturas; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
    ], ReceitaFutura.prototype, "idFinanceiro2", void 0);
    ReceitaFutura = __decorate([
        typeorm_1.Index("fk_TB_receitaFutura_TB_financeiro1_idx", ["idFinanceiro"], {}),
        typeorm_1.Entity("ReceitaFutura", { schema: "TCC" })
    ], ReceitaFutura);
    return ReceitaFutura;
}());
exports.ReceitaFutura = ReceitaFutura;
