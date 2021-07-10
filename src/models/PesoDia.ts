import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gado } from "./Gado";

@Index("fk_TB_pesoDia_TB_gado1_idx", ["idGado"], {})
@Index("idPesoDia_UNIQUE", ["idPesoDia"], { unique: true })
@Entity("PesoDia", { schema: "TCC" })
export class PesoDia {
  
  @PrimaryGeneratedColumn({ type: "int", name: "idPesoDia" })
  idPesoDia!: number;
  @ManyToOne(() => Gado, (gado) => gado.pesoDias, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  @Column("int", { name: "idGado" })
  idGado!: Gado;

  @Column("timestamp", { name: "dia" })
  dia!: Date;

  @Column("float", { name: "ganhoPeso", precision: 12 })
  ganhoPeso!: number;
}
