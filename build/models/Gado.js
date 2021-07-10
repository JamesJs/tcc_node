"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gado = void 0;
var typeorm_1 = require("typeorm");
var Consumo_1 = require("./Consumo");
var ConsumoAgua_1 = require("./ConsumoAgua");
var ConsumoEsperado_1 = require("./ConsumoEsperado");
var Fazenda_1 = require("./Fazenda");
var Localizacao_1 = require("./Localizacao");
var TbNegociacao_1 = require("./TbNegociacao");
var IdaAoCocho_1 = require("./IdaAoCocho");
var LocalizacaoGadoLog_1 = require("./LocalizacaoGadoLog");
var PesoDia_1 = require("./PesoDia");
var ProducaoLeite_1 = require("./ProducaoLeite");
var Vacina_1 = require("./Vacina");
var Gado = /** @class */ (function () {
    function Gado() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idGado" })
    ], Gado.prototype, "idGado", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idFazenda" })
    ], Gado.prototype, "idFazenda", void 0);
    __decorate([
        typeorm_1.Column("tinyint", { name: "isVaca" })
    ], Gado.prototype, "isVaca", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "sexo", length: 1 })
    ], Gado.prototype, "sexo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idade" })
    ], Gado.prototype, "idade", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "dataNascimento" })
    ], Gado.prototype, "dataNascimento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idLocalizacao" })
    ], Gado.prototype, "idLocalizacao", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "peso", precision: 12 })
    ], Gado.prototype, "peso", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "QuantFilhos" })
    ], Gado.prototype, "quantFilhos", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idNegociacao" })
    ], Gado.prototype, "idNegociacao", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Consumo_1.Consumo; }, function (consumo) { return consumo.idGado2; })
    ], Gado.prototype, "consumos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ConsumoAgua_1.ConsumoAgua; }, function (consumoAgua) { return consumoAgua.idGado2; })
    ], Gado.prototype, "consumoAguas", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ConsumoEsperado_1.ConsumoEsperado; }, function (consumoEsperado) { return consumoEsperado.idGado2; })
    ], Gado.prototype, "consumoEsperados", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Fazenda_1.Fazenda; }, function (fazenda) { return fazenda.gados; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
    ], Gado.prototype, "idFazenda2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Localizacao_1.Localizacao; }, function (localizacao) { return localizacao.gados; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([
            { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
        ])
    ], Gado.prototype, "idLocalizacao2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return TbNegociacao_1.TbNegociacao; }, function (tbNegociacao) { return tbNegociacao.gados; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idNegociacao", referencedColumnName: "idNegociacao" }])
    ], Gado.prototype, "idNegociacao2", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return IdaAoCocho_1.IdaAoCocho; }, function (idaAoCocho) { return idaAoCocho.idGado2; })
    ], Gado.prototype, "idaAoCochos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return LocalizacaoGadoLog_1.LocalizacaoGadoLog; }, function (localizacaoGadoLog) { return localizacaoGadoLog.idGado2; })
    ], Gado.prototype, "localizacaoGadoLogs", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return PesoDia_1.PesoDia; }, function (pesoDia) { return pesoDia.idGado2; })
    ], Gado.prototype, "pesoDias", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ProducaoLeite_1.ProducaoLeite; }, function (producaoLeite) { return producaoLeite.idGado2; })
    ], Gado.prototype, "producaoLeites", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Vacina_1.Vacina; }, function (vacina) { return vacina.idGado2; })
    ], Gado.prototype, "vacinas", void 0);
    Gado = __decorate([
        typeorm_1.Index("fk_TB_gado_TB_fazenda1_idx", ["idFazenda"], {}),
        typeorm_1.Index("fk_TB_gado_TB_localizacao1_idx", ["idLocalizacao"], {}),
        typeorm_1.Index("fk_TB_gado_TB_negociacao1_idx", ["idNegociacao"], {}),
        typeorm_1.Index("idGado_UNIQUE", ["idGado"], { unique: true }),
        typeorm_1.Entity("Gado", { schema: "TCC" })
    ], Gado);
    return Gado;
}());
exports.Gado = Gado;
