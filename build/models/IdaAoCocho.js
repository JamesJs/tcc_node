"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdaAoCocho = void 0;
var typeorm_1 = require("typeorm");
var Gado_1 = require("./Gado");
var IdaAoCocho = /** @class */ (function () {
    function IdaAoCocho() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idIdaAoCocho" })
    ], IdaAoCocho.prototype, "idIdaAoCocho", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "data" })
    ], IdaAoCocho.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idGado" })
    ], IdaAoCocho.prototype, "idGado", void 0);
    __decorate([
        typeorm_1.Column("time", { name: "duracao" })
    ], IdaAoCocho.prototype, "duracao", void 0);
    __decorate([
        typeorm_1.Column("tinyint", { name: "isDoente" })
    ], IdaAoCocho.prototype, "isDoente", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gado_1.Gado; }, function (gado) { return gado.idaAoCochos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
    ], IdaAoCocho.prototype, "idGado2", void 0);
    IdaAoCocho = __decorate([
        typeorm_1.Index("fk_TB_idaAoCocho_TB_gado1_idx", ["idGado"], {}),
        typeorm_1.Index("idTB_idaAoCocho_UNIQUE", ["idIdaAoCocho"], { unique: true }),
        typeorm_1.Entity("IdaAoCocho", { schema: "TCC" })
    ], IdaAoCocho);
    return IdaAoCocho;
}());
exports.IdaAoCocho = IdaAoCocho;
