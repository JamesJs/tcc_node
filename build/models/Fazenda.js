"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fazenda = void 0;
var typeorm_1 = require("typeorm");
var Cocho_1 = require("./Cocho");
var Estoque_1 = require("./Estoque");
var Localizacao_1 = require("./Localizacao");
var Financeiro_1 = require("./Financeiro");
var Funcionario_1 = require("./Funcionario");
var Gado_1 = require("./Gado");
var Maquinario_1 = require("./Maquinario");
var Fazenda = /** @class */ (function () {
    function Fazenda() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idFazenda" })
    ], Fazenda.prototype, "idFazenda", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nome", unique: true, length: 100 })
    ], Fazenda.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "tamanho" })
    ], Fazenda.prototype, "tamanho", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "quantFuncionarios" })
    ], Fazenda.prototype, "quantFuncionarios", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idLocalizacao" })
    ], Fazenda.prototype, "idLocalizacao", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Cocho_1.Cocho; }, function (cocho) { return cocho.idFazenda2; })
    ], Fazenda.prototype, "cochos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Estoque_1.Estoque; }, function (estoque) { return estoque.idFazenda2; })
    ], Fazenda.prototype, "estoques", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Localizacao_1.Localizacao; }, function (localizacao) { return localizacao.fazendas; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([
            { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
        ])
    ], Fazenda.prototype, "idLocalizacao2", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Financeiro_1.Financeiro; }, function (financeiro) { return financeiro.idFazenda2; })
    ], Fazenda.prototype, "financeiros", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Funcionario_1.Funcionario; }, function (funcionario) { return funcionario.fazendas; }),
        typeorm_1.JoinTable({
            name: "Funcionario_has_Fazenda",
            joinColumns: [{ name: "idFazenda", referencedColumnName: "idFazenda" }],
            inverseJoinColumns: [
                { name: "idFuncionario", referencedColumnName: "idFuncionario" },
            ],
            schema: "TCC",
        })
    ], Fazenda.prototype, "funcionarios", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Gado_1.Gado; }, function (gado) { return gado.idFazenda2; })
    ], Fazenda.prototype, "gados", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Maquinario_1.Maquinario; }, function (maquinario) { return maquinario.idFazenda2; })
    ], Fazenda.prototype, "maquinarios", void 0);
    Fazenda = __decorate([
        typeorm_1.Index("fk_TB_fazenda_TB_localizacao1_idx", ["idLocalizacao"], {}),
        typeorm_1.Index("idFazenda_UNIQUE", ["idFazenda"], { unique: true }),
        typeorm_1.Index("nome_UNIQUE", ["nome"], { unique: true }),
        typeorm_1.Entity("Fazenda", { schema: "TCC" })
    ], Fazenda);
    return Fazenda;
}());
exports.Fazenda = Fazenda;
