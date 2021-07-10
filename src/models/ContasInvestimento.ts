import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Financeiro } from "./Financeiro";
import { Investimento } from "./Investimento";

@Index("fk_TB_contasPagar_TB_financeiro1_idx", ["idFinanceiro"], {})
@Index("idContasPagar_UNIQUE", ["idContasInvestimento"], { unique: true })
@Entity("ContasInvestimento", { schema: "TCC" })
export class ContasInvestimento {
  @PrimaryGeneratedColumn({ type: "int", name: "idContasInvestimento" })
  idContasInvestimento!: number;

  @Column("int", { name: "idFinanceiro" })
  idFinanceiro!: number;

  @Column("float", { name: "valor", precision: 12 })
  valor!: number;

  @Column("timestamp", { name: "vencimento" })
  vencimento!: Date;

  @Column("varchar", { name: "investimento", length: 45 })
  investimento!: string;

  @ManyToOne(() => Financeiro, (financeiro) => financeiro.contasInvestimentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
  idFinanceiro2!: Financeiro;

  @OneToMany(
    () => Investimento,
    (investimento) => investimento.idContasInvestimento2
  )
  investimentos!: Investimento[];
}
