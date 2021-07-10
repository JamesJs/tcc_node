import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gado } from "./Gado";
import { Localizacao } from "./Localizacao";

@Index("fk_TB_localizacaoGadoLog_TB_gado1_idx", ["idGado"], {})
@Index("fk_TB_localizacaoGadoLog_TB_localizacao1_idx", ["idLocalizacao"], {})
@Index("idLocalizacaoGadoLog_UNIQUE", ["idLocalizacaoGadoLog"], {
  unique: true,
})
@Entity("LocalizacaoGadoLog", { schema: "TCC" })
export class LocalizacaoGadoLog {
  @PrimaryGeneratedColumn({ type: "int", name: "idLocalizacaoGadoLog" })
  idLocalizacaoGadoLog!: number;

  @Column("int", { name: "idGado" })
  idGado!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;

  @Column("int", { name: "idLocalizacao" })
  idLocalizacao!: number;

  @ManyToOne(() => Gado, (gado) => gado.localizacaoGadoLogs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  idGado2!: Gado;

  @ManyToOne(
    () => Localizacao,
    (localizacao) => localizacao.localizacaoGadoLogs,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
  ])
  idLocalizacao2!: Localizacao;
}
