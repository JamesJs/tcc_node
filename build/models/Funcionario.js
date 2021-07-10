"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var typeorm_1 = require("typeorm");
var Contato_1 = require("./Contato");
var Endereco_1 = require("./Endereco");
var Fazenda_1 = require("./Fazenda");
var Funcao_1 = require("./Funcao");
var Movimentacao_1 = require("./Movimentacao");
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idFuncionario" })
    ], Funcionario.prototype, "idFuncionario", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nome", length: 255 })
    ], Funcionario.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column("tinyint", { name: "isADM" })
    ], Funcionario.prototype, "isAdm", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "quantCochos" })
    ], Funcionario.prototype, "quantCochos", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idEndereco" })
    ], Funcionario.prototype, "idEndereco", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idContato" })
    ], Funcionario.prototype, "idContato", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Contato_1.Contato; }, function (contato) { return contato.funcionarios; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idContato", referencedColumnName: "idContato" }])
    ], Funcionario.prototype, "idContato2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Endereco_1.Endereco; }, function (endereco) { return endereco.funcionarios; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idEndereco", referencedColumnName: "idEndereco" }])
    ], Funcionario.prototype, "idEndereco2", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Fazenda_1.Fazenda; }, function (fazenda) { return fazenda.funcionarios; })
    ], Funcionario.prototype, "fazendas", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Funcao_1.Funcao; }, function (funcao) { return funcao.funcionarios; })
    ], Funcionario.prototype, "funcaos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Movimentacao_1.Movimentacao; }, function (movimentacao) { return movimentacao.idFuncionario2; })
    ], Funcionario.prototype, "movimentacaos", void 0);
    Funcionario = __decorate([
        typeorm_1.Index("fk_TB_funcionario_TB_contato1_idx", ["idContato"], {}),
        typeorm_1.Index("fk_TB_funcionario_TB_endereco_idx", ["idEndereco"], {}),
        typeorm_1.Index("idFuncionario_UNIQUE", ["idFuncionario"], { unique: true }),
        typeorm_1.Entity("Funcionario", { schema: "TCC" })
    ], Funcionario);
    return Funcionario;
}());
exports.Funcionario = Funcionario;
