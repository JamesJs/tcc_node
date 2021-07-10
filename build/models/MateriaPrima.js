"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaPrima = void 0;
var typeorm_1 = require("typeorm");
var Cocho_1 = require("./Cocho");
var MateriaPrima = /** @class */ (function () {
    function MateriaPrima() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idMateriaPrima" })
    ], MateriaPrima.prototype, "idMateriaPrima", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nome", length: 100 })
    ], MateriaPrima.prototype, "nome", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Cocho_1.Cocho; }, function (cocho) { return cocho.idMateriaPrima2; })
    ], MateriaPrima.prototype, "cochos", void 0);
    MateriaPrima = __decorate([
        typeorm_1.Index("idMateriaPrima_UNIQUE", ["idMateriaPrima"], { unique: true }),
        typeorm_1.Entity("MateriaPrima", { schema: "TCC" })
    ], MateriaPrima);
    return MateriaPrima;
}());
exports.MateriaPrima = MateriaPrima;
