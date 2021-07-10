"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcao = void 0;
var typeorm_1 = require("typeorm");
var Funcionario_1 = require("./Funcionario");
var Funcao = /** @class */ (function () {
    function Funcao() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idFuncao" })
    ], Funcao.prototype, "idFuncao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nome", length: 100 })
    ], Funcao.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "salario", precision: 12 })
    ], Funcao.prototype, "salario", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Funcionario_1.Funcionario; }, function (funcionario) { return funcionario.funcaos; }),
        typeorm_1.JoinTable({
            name: "Funcionario_has_Funcao",
            joinColumns: [{ name: "idFuncao", referencedColumnName: "idFuncao" }],
            inverseJoinColumns: [
                { name: "idFuncionario", referencedColumnName: "idFuncionario" },
            ],
            schema: "TCC",
        })
    ], Funcao.prototype, "funcionarios", void 0);
    Funcao = __decorate([
        typeorm_1.Index("idFuncao_UNIQUE", ["idFuncao"], { unique: true }),
        typeorm_1.Entity("Funcao", { schema: "TCC" })
    ], Funcao);
    return Funcao;
}());
exports.Funcao = Funcao;
