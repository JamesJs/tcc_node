import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Consumo } from "./Consumo";
import { ConsumoAgua } from "./ConsumoAgua";
import { ConsumoEsperado } from "./ConsumoEsperado";
import { Fazenda } from "./Fazenda";
import { Localizacao } from "./Localizacao";
import { Negociacao } from "./Negociacao";
import { IdaAoCocho } from "./IdaAoCocho";
import { LocalizacaoGadoLog } from "./LocalizacaoGadoLog";
import { PesoDia } from "./PesoDia";
import { ProducaoLeite } from "./ProducaoLeite";
import { Vacina } from "./Vacina";

@Index("fk_TB_gado_TB_fazenda1_idx", ["idFazenda"], {})
@Index("fk_TB_gado_TB_localizacao1_idx", ["idLocalizacao"], {})
@Index("fk_TB_gado_TB_negociacao1_idx", ["idNegociacao"], {})
@Index("idGado_UNIQUE", ["idGado"], { unique: true })
@Entity("Gado", { schema: "TCC" })
export class Gado {
  @PrimaryGeneratedColumn({ type: "int", name: "idGado" })
  idGado!: number;
  @ManyToOne(() => Fazenda, (fazenda) => fazenda.gados, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
  @Column("int", { name: "idFazenda" })
  idFazenda!: Fazenda;

  @Column("tinyint", { name: "isVaca" })
  isVaca!: number;

  @Column("char", { name: "sexo", length: 1 })
  sexo!: string;

  @Column("char", { name: "nome", length: 100 })
  nome!: string;

  @Column("int", { name: "idade" })
  idade!: number;

  @Column("timestamp", { name: "dataNascimento" })
  dataNascimento!: Date;
  @ManyToOne(() => Localizacao, (localizacao) => localizacao.gados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
  ])

  @Column("int", { name: "idLocalizacao" })
  idLocalizacao!: Localizacao;

  @Column("float", { name: "peso", precision: 12 })
  peso!: number;

  @Column("int", { name: "QuantFilhos" })
  quantFilhos!: number;

  @ManyToOne(() => Negociacao, (negociacao) => negociacao.gados, {
    cascade:true,
    onDelete: "SET NULL",
    onUpdate: "DEFAULT",
  })
  @JoinColumn([{ name: "idNegociacao", referencedColumnName: "idNegociacao" }])

  @Column("int", { name: "idNegociacao" })
  idNegociacao!: Negociacao;


  @OneToMany(() => Consumo, (consumo) => consumo.idGado2)
  consumos!: Consumo[];

  @OneToMany(() => ConsumoAgua, (consumoAgua) => consumoAgua.idGado2)
  consumoAguas!: ConsumoAgua[];

  @OneToMany(
    () => ConsumoEsperado,
    (consumoEsperado) => consumoEsperado.idGado2
  )
  consumoEsperados!: ConsumoEsperado[];







  @OneToMany(() => IdaAoCocho, (idaAoCocho) => idaAoCocho.idGado2)
  idaAoCochos!: IdaAoCocho[];

  @OneToMany(
    () => LocalizacaoGadoLog,
    (localizacaoGadoLog) => localizacaoGadoLog.idGado2
  )
  localizacaoGadoLogs!: LocalizacaoGadoLog[];

  @OneToMany(() => PesoDia, (pesoDia) => pesoDia.idGado)
  pesoDias!: PesoDia[];

  @OneToMany(() => ProducaoLeite, (producaoLeite) => producaoLeite.idGado2)
  producaoLeites!: ProducaoLeite[];

  @OneToMany(() => Vacina, (vacina) => vacina.idGado2)
  vacinas!: Vacina[];
}
