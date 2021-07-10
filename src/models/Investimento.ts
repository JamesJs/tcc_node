import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ContasInvestimento } from "./ContasInvestimento";

@Index(
  "fk_TB_investimento_TB_contasInvestimento1_idx",
  ["idContasInvestimento"],
  {}
)
@Index("idInvestimento_UNIQUE", ["idInvestimento"], { unique: true })
@Entity("Investimento", { schema: "TCC" })
export class Investimento {
  @PrimaryGeneratedColumn({ type: "int", name: "idInvestimento" })
  idInvestimento!: number;

  @Column("varchar", { name: "nome", length: 100 })
  nome!: string;

  @Column("int", { name: "idContasInvestimento" })
  idContasInvestimento!: number;

  @Column("varchar", { name: "descricao", length: 100 })
  descricao!: string;

  @ManyToOne(
    () => ContasInvestimento,
    (contasInvestimento) => contasInvestimento.investimentos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "idContasInvestimento",
      referencedColumnName: "idContasInvestimento",
    },
  ])
  idContasInvestimento2!: ContasInvestimento;
}
