"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacina = void 0;
var typeorm_1 = require("typeorm");
var Gado_1 = require("./Gado");
var Vacina = /** @class */ (function () {
    function Vacina() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idVacina" })
    ], Vacina.prototype, "idVacina", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "data" })
    ], Vacina.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "descricao", length: 255 })
    ], Vacina.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idGado" })
    ], Vacina.prototype, "idGado", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gado_1.Gado; }, function (gado) { return gado.vacinas; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
    ], Vacina.prototype, "idGado2", void 0);
    Vacina = __decorate([
        typeorm_1.Index("fk_TB_vacina_TB_gado1_idx", ["idGado"], {}),
        typeorm_1.Index("idVacina_UNIQUE", ["idVacina"], { unique: true }),
        typeorm_1.Entity("Vacina", { schema: "TCC" })
    ], Vacina);
    return Vacina;
}());
exports.Vacina = Vacina;
