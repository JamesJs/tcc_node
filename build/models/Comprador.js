"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comprador = void 0;
var typeorm_1 = require("typeorm");
var Contato_1 = require("./Contato");
var TbNegociacao_1 = require("./TbNegociacao");
var Comprador = /** @class */ (function () {
    function Comprador() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idComprador" })
    ], Comprador.prototype, "idComprador", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idNegociacao" })
    ], Comprador.prototype, "idNegociacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idContato" })
    ], Comprador.prototype, "idContato", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Contato_1.Contato; }, function (contato) { return contato.compradors; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idContato", referencedColumnName: "idContato" }])
    ], Comprador.prototype, "idContato2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return TbNegociacao_1.TbNegociacao; }, function (tbNegociacao) { return tbNegociacao.compradors; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idNegociacao", referencedColumnName: "idNegociacao" }])
    ], Comprador.prototype, "idNegociacao2", void 0);
    Comprador = __decorate([
        typeorm_1.Index("fk_TB_comprador_TB_contato1_idx", ["idContato"], {}),
        typeorm_1.Index("fk_TB_comprador_TB_negociacao1_idx", ["idNegociacao"], {}),
        typeorm_1.Index("idComprador_UNIQUE", ["idComprador"], { unique: true }),
        typeorm_1.Entity("Comprador", { schema: "TCC" })
    ], Comprador);
    return Comprador;
}());
exports.Comprador = Comprador;
