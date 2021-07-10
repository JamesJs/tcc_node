import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Financeiro } from "./Financeiro";

@Index("fk_TB_receitaFutura_TB_financeiro1_idx", ["idFinanceiro"], {})
@Entity("ReceitaFutura", { schema: "TCC" })
export class ReceitaFutura {
  @PrimaryGeneratedColumn({ type: "int", name: "idFutura" })
  idFutura!: number;

  @Column("int", { primary: true, name: "idFinanceiro" })
  idFinanceiro!: number;

  @Column("float", { name: "valor", precision: 12 })
  valor!: number;

  @Column("timestamp", { name: "dataPrevisao" })
  dataPrevisao!: Date;

  @ManyToOne(() => Financeiro, (financeiro) => financeiro.receitaFuturas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
  idFinanceiro2!: Financeiro;
}
