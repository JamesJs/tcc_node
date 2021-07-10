import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gado } from "./Gado";

@Index("fk_TB_producaoLeite_TB_gado1_idx", ["idGado"], {})
@Index("idProducaoLeite_UNIQUE", ["idProducaoLeite"], { unique: true })
@Entity("ProducaoLeite", { schema: "TCC" })
export class ProducaoLeite {
  @PrimaryGeneratedColumn({ type: "int", name: "idProducaoLeite" })
  idProducaoLeite!: number;

  @Column("float", { name: "quantLitros", precision: 12 })
  quantLitros!: number;

  @Column("timestamp", { name: "dia" })
  dia!: Date;

  @Column("int", { name: "idGado" })
  idGado!: number;

  @ManyToOne(() => Gado, (gado) => gado.producaoLeites, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  idGado2!: Gado;
}
