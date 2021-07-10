import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ContasGado } from "./ContasGado";
import { ContasInvestimento } from "./ContasInvestimento";
import { ContasPagar } from "./ContasPagar";
import { Fazenda } from "./Fazenda";
import { ReceitaFutura } from "./ReceitaFutura";
import { Negociacao } from "./Negociacao";

@Index("fk_TB_financeiro_TB_fazenda1_idx", ["idFazenda"], {})
@Index("idFinanceiro_UNIQUE", ["idFinanceiro"], { unique: true })
@Entity("Financeiro", { schema: "TCC" })
export class Financeiro {
  @PrimaryGeneratedColumn({ type: "int", name: "idFinanceiro" })
  idFinanceiro!: number;

  @ManyToOne(() => Fazenda, (fazenda) => fazenda.financeiros, {
    cascade:true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
  @Column("int", { name: "idFazenda" })
  idFazenda!: Fazenda;

  @OneToMany(() => ContasGado, (contasGado) => contasGado.idFinanceiro,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  contasGados!: ContasGado[];

  @OneToMany(
    () => ContasInvestimento,
    (contasInvestimento) => contasInvestimento.idFinanceiro,{
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    }
  )
  contasInvestimentos!: ContasInvestimento[];

  @OneToMany(() => ContasPagar, (contasPagar) => contasPagar.idFinanceiro,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  contasPagars!: ContasPagar[];

 


  @OneToMany(
    () => ReceitaFutura,
    (receitaFutura) => receitaFutura.idFinanceiro,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  }
  )
  receitaFuturas!: ReceitaFutura[];

  @OneToMany(() => Negociacao, (negociacao) => negociacao.idFinanceiro,{
    cascade:true,
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  negociacaos!: Negociacao[];
}
