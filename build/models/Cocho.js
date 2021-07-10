"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cocho = void 0;
var typeorm_1 = require("typeorm");
var Fazenda_1 = require("./Fazenda");
var Localizacao_1 = require("./Localizacao");
var MateriaPrima_1 = require("./MateriaPrima");
var Cocho = /** @class */ (function () {
    function Cocho() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idCocho" })
    ], Cocho.prototype, "idCocho", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "altura", precision: 12 })
    ], Cocho.prototype, "altura", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "largura", precision: 12 })
    ], Cocho.prototype, "largura", void 0);
    __decorate([
        typeorm_1.Column("tinyint", { name: "isCoberto" })
    ], Cocho.prototype, "isCoberto", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idMateriaPrima" })
    ], Cocho.prototype, "idMateriaPrima", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFazenda" })
    ], Cocho.prototype, "idFazenda", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idLocalizacao" })
    ], Cocho.prototype, "idLocalizacao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Fazenda_1.Fazenda; }, function (fazenda) { return fazenda.cochos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
    ], Cocho.prototype, "idFazenda2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Localizacao_1.Localizacao; }, function (localizacao) { return localizacao.cochos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([
            { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
        ])
    ], Cocho.prototype, "idLocalizacao2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return MateriaPrima_1.MateriaPrima; }, function (materiaPrima) { return materiaPrima.cochos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([
            { name: "idMateriaPrima", referencedColumnName: "idMateriaPrima" },
        ])
    ], Cocho.prototype, "idMateriaPrima2", void 0);
    Cocho = __decorate([
        typeorm_1.Index("fk_TB_cocho_TB_fazenda1_idx", ["idFazenda"], {}),
        typeorm_1.Index("fk_TB_cocho_TB_localizacao1_idx", ["idLocalizacao"], {}),
        typeorm_1.Index("fk_TB_cocho_TB_materiaPrima1_idx", ["idMateriaPrima"], {}),
        typeorm_1.Index("idCocho_UNIQUE", ["idCocho"], { unique: true }),
        typeorm_1.Entity("Cocho", { schema: "TCC" })
    ], Cocho);
    return Cocho;
}());
exports.Cocho = Cocho;
