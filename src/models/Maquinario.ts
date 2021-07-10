import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fazenda } from "./Fazenda";

@Index("fk_TB_maquinario_TB_fazenda1_idx", ["idFazenda"], {})
@Index("idMaquinario_UNIQUE", ["idMaquinario"], { unique: true })
@Entity("Maquinario", { schema: "TCC" })
export class Maquinario {
  @PrimaryGeneratedColumn({ type: "int", name: "idMaquinario" })
  idMaquinario!: number;

  @Column("int", { name: "idFazenda" })
  idFazenda!: number;

  @Column("varchar", { name: "quant", length: 45 })
  quant!: string;

  @Column("varchar", { name: "nome", length: 45 })
  nome!: string;

  @ManyToOne(() => Fazenda, (fazenda) => fazenda.maquinarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
  idFazenda2!: Fazenda;
}
