import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gado } from "./Gado";

@Index("fk_TB_vacina_TB_gado1_idx", ["idGado"], {})
@Index("idVacina_UNIQUE", ["idVacina"], { unique: true })
@Entity("Vacina", { schema: "TCC" })
export class Vacina {
  @PrimaryGeneratedColumn({ type: "int", name: "idVacina" })
  idVacina!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;

  @Column("varchar", { name: "descricao", length: 255 })
  descricao!: string;

  @Column("int", { name: "idGado" })
  idGado!: number;

  @ManyToOne(() => Gado, (gado) => gado.vacinas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  idGado2!: Gado;
}
