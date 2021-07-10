import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gado } from "./Gado";

@Index("fk_TB_idaAoCocho_TB_gado1_idx", ["idGado"], {})
@Index("idTB_idaAoCocho_UNIQUE", ["idIdaAoCocho"], { unique: true })
@Entity("IdaAoCocho", { schema: "TCC" })
export class IdaAoCocho {
  @PrimaryGeneratedColumn({ type: "int", name: "idIdaAoCocho" })
  idIdaAoCocho!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;

  @Column("int", { name: "idGado" })
  idGado!: number;

  @Column("time", { name: "duracao" })
  duracao!: string;

  @Column("tinyint", { name: "isDoente" })
  isDoente!: number;

  @ManyToOne(() => Gado, (gado) => gado.idaAoCochos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  idGado2!: Gado;
}
