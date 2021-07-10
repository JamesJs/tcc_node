import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Financeiro } from "./Financeiro";

@Index("fk_TB_contasPagar_TB_financeiro1_idx", ["idFinanceiro"], {})
@Index("idContasPagar_UNIQUE", ["idInvestimento"], { unique: true })
@Entity("ContasGado", { schema: "TCC" })
export class ContasGado {
  @PrimaryGeneratedColumn({ type: "int", name: "idInvestimento" })
  idInvestimento!: number;

  @Column("int", { name: "idFinanceiro" })
  idFinanceiro!: number;

  @Column("float", { name: "valor", precision: 12 })
  valor!: number;

  @Column("timestamp", { name: "vencimento" })
  vencimento!: Date;

  @ManyToOne(() => Financeiro, (financeiro) => financeiro.contasGados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
  idFinanceiro2!: Financeiro;
}
