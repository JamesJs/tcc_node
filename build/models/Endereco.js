"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var typeorm_1 = require("typeorm");
var Funcionario_1 = require("./Funcionario");
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idEndereco" })
    ], Endereco.prototype, "idEndereco", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CEP", length: 11 })
    ], Endereco.prototype, "cep", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "numero" })
    ], Endereco.prototype, "numero", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "bairro", length: 100 })
    ], Endereco.prototype, "bairro", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "complemento", nullable: true, length: 100 })
    ], Endereco.prototype, "complemento", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "estado", length: 3 })
    ], Endereco.prototype, "estado", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "cidade", length: 100 })
    ], Endereco.prototype, "cidade", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Funcionario_1.Funcionario; }, function (funcionario) { return funcionario.idEndereco2; })
    ], Endereco.prototype, "funcionarios", void 0);
    Endereco = __decorate([
        typeorm_1.Index("idRndereco_UNIQUE", ["idEndereco"], { unique: true }),
        typeorm_1.Entity("Endereco", { schema: "TCC" })
    ], Endereco);
    return Endereco;
}());
exports.Endereco = Endereco;
