"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movimentacao = void 0;
var typeorm_1 = require("typeorm");
var Estoque_1 = require("./Estoque");
var Funcionario_1 = require("./Funcionario");
var Movimentacao = /** @class */ (function () {
    function Movimentacao() {
    }
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "idMovimentacao" })
    ], Movimentacao.prototype, "idMovimentacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idEstoque" })
    ], Movimentacao.prototype, "idEstoque", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFuncionario" })
    ], Movimentacao.prototype, "idFuncionario", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Estoque_1.Estoque; }, function (estoque) { return estoque.movimentacaos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idEstoque", referencedColumnName: "idEstoque" }])
    ], Movimentacao.prototype, "idEstoque2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Funcionario_1.Funcionario; }, function (funcionario) { return funcionario.movimentacaos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([
            { name: "idFuncionario", referencedColumnName: "idFuncionario" },
        ])
    ], Movimentacao.prototype, "idFuncionario2", void 0);
    Movimentacao = __decorate([
        typeorm_1.Index("fk_TB_movimentacao_TB_estoque1_idx", ["idEstoque"], {}),
        typeorm_1.Index("fk_TB_movimentacao_TB_funcionario1_idx", ["idFuncionario"], {}),
        typeorm_1.Index("idMovimentacao_UNIQUE", ["idMovimentacao"], { unique: true }),
        typeorm_1.Entity("Movimentacao", { schema: "TCC" })
    ], Movimentacao);
    return Movimentacao;
}());
exports.Movimentacao = Movimentacao;
