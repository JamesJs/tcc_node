"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
var typeorm_1 = require("typeorm");
var Comprador_1 = require("./Comprador");
var Funcionario_1 = require("./Funcionario");
var Contato = /** @class */ (function () {
    function Contato() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idContato" })
    ], Contato.prototype, "idContato", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "numeroCel", nullable: true, length: 45 })
    ], Contato.prototype, "numeroCel", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "numeroFixo", nullable: true, length: 45 })
    ], Contato.prototype, "numeroFixo", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "email", nullable: true, length: 150 })
    ], Contato.prototype, "email", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Comprador_1.Comprador; }, function (comprador) { return comprador.idContato2; })
    ], Contato.prototype, "compradors", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Funcionario_1.Funcionario; }, function (funcionario) { return funcionario.idContato2; })
    ], Contato.prototype, "funcionarios", void 0);
    Contato = __decorate([
        typeorm_1.Index("idContato_UNIQUE", ["idContato"], { unique: true }),
        typeorm_1.Entity("Contato", { schema: "TCC" })
    ], Contato);
    return Contato;
}());
exports.Contato = Contato;
