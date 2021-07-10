"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localizacao = void 0;
var typeorm_1 = require("typeorm");
var Cocho_1 = require("./Cocho");
var Fazenda_1 = require("./Fazenda");
var Gado_1 = require("./Gado");
var LocalizacaoGadoLog_1 = require("./LocalizacaoGadoLog");
var Localizacao = /** @class */ (function () {
    function Localizacao() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idLocalizacao" })
    ], Localizacao.prototype, "idLocalizacao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "latitude", length: 45 })
    ], Localizacao.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "longitude", length: 45 })
    ], Localizacao.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Cocho_1.Cocho; }, function (cocho) { return cocho.idLocalizacao2; })
    ], Localizacao.prototype, "cochos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Fazenda_1.Fazenda; }, function (fazenda) { return fazenda.idLocalizacao2; })
    ], Localizacao.prototype, "fazendas", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Gado_1.Gado; }, function (gado) { return gado.idLocalizacao2; })
    ], Localizacao.prototype, "gados", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return LocalizacaoGadoLog_1.LocalizacaoGadoLog; }, function (localizacaoGadoLog) { return localizacaoGadoLog.idLocalizacao2; })
    ], Localizacao.prototype, "localizacaoGadoLogs", void 0);
    Localizacao = __decorate([
        typeorm_1.Index("idLocalizacao_UNIQUE", ["idLocalizacao"], { unique: true }),
        typeorm_1.Entity("Localizacao", { schema: "TCC" })
    ], Localizacao);
    return Localizacao;
}());
exports.Localizacao = Localizacao;
