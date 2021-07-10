"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maquinario = void 0;
var typeorm_1 = require("typeorm");
var Fazenda_1 = require("./Fazenda");
var Maquinario = /** @class */ (function () {
    function Maquinario() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idMaquinario" })
    ], Maquinario.prototype, "idMaquinario", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFazenda" })
    ], Maquinario.prototype, "idFazenda", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "quant", length: 45 })
    ], Maquinario.prototype, "quant", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nome", length: 45 })
    ], Maquinario.prototype, "nome", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Fazenda_1.Fazenda; }, function (fazenda) { return fazenda.maquinarios; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
    ], Maquinario.prototype, "idFazenda2", void 0);
    Maquinario = __decorate([
        typeorm_1.Index("fk_TB_maquinario_TB_fazenda1_idx", ["idFazenda"], {}),
        typeorm_1.Index("idMaquinario_UNIQUE", ["idMaquinario"], { unique: true }),
        typeorm_1.Entity("Maquinario", { schema: "TCC" })
    ], Maquinario);
    return Maquinario;
}());
exports.Maquinario = Maquinario;
