import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gado } from "./Gado";

@Index("fk_TB_consumoAgua_TB_gado1_idx", ["idGado"], {})
@Index("idConsumoAgua_UNIQUE", ["idConsumoAgua"], { unique: true })
@Entity("ConsumoAgua", { schema: "TCC" })
export class ConsumoAgua {
  @PrimaryGeneratedColumn({ type: "int", name: "idConsumoAgua" })
  idConsumoAgua!: number;

  @Column("float", { name: "litros", precision: 12 })
  litros!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;

  @Column("int", { name: "idGado" })
  idGado!: number;

  @ManyToOne(() => Gado, (gado) => gado.consumoAguas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  idGado2!: Gado;
}
