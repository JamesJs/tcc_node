"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizacaoGadoLog = void 0;
var typeorm_1 = require("typeorm");
var Gado_1 = require("./Gado");
var Localizacao_1 = require("./Localizacao");
var LocalizacaoGadoLog = /** @class */ (function () {
    function LocalizacaoGadoLog() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idLocalizacaoGadoLog" })
    ], LocalizacaoGadoLog.prototype, "idLocalizacaoGadoLog", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idGado" })
    ], LocalizacaoGadoLog.prototype, "idGado", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "data" })
    ], LocalizacaoGadoLog.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idLocalizacao" })
    ], LocalizacaoGadoLog.prototype, "idLocalizacao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gado_1.Gado; }, function (gado) { return gado.localizacaoGadoLogs; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
    ], LocalizacaoGadoLog.prototype, "idGado2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Localizacao_1.Localizacao; }, function (localizacao) { return localizacao.localizacaoGadoLogs; }, { onDelete: "NO ACTION", onUpdate: "NO ACTION" }),
        typeorm_1.JoinColumn([
            { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
        ])
    ], LocalizacaoGadoLog.prototype, "idLocalizacao2", void 0);
    LocalizacaoGadoLog = __decorate([
        typeorm_1.Index("fk_TB_localizacaoGadoLog_TB_gado1_idx", ["idGado"], {}),
        typeorm_1.Index("fk_TB_localizacaoGadoLog_TB_localizacao1_idx", ["idLocalizacao"], {}),
        typeorm_1.Index("idLocalizacaoGadoLog_UNIQUE", ["idLocalizacaoGadoLog"], {
            unique: true,
        }),
        typeorm_1.Entity("LocalizacaoGadoLog", { schema: "TCC" })
    ], LocalizacaoGadoLog);
    return LocalizacaoGadoLog;
}());
exports.LocalizacaoGadoLog = LocalizacaoGadoLog;
