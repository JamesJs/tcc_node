import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Estoque } from "./Estoque";
import { Funcionario } from "./Funcionario";

@Index("fk_TB_movimentacao_TB_estoque1_idx", ["idEstoque"], {})
@Index("fk_TB_movimentacao_TB_funcionario1_idx", ["idFuncionario"], {})
@Index("idMovimentacao_UNIQUE", ["idMovimentacao"], { unique: true })
@Entity("Movimentacao", { schema: "TCC" })
export class Movimentacao {
  @Column("int", { primary: true, name: "idMovimentacao" })
  idMovimentacao!: number;

  @Column("int", { name: "idEstoque" })
  idEstoque!: number;

  @Column("int", { name: "idFuncionario" })
  idFuncionario!: number;

  @ManyToOne(() => Estoque, (estoque) => estoque.movimentacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idEstoque", referencedColumnName: "idEstoque" }])
  idEstoque2!: Estoque;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.movimentacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idFuncionario", referencedColumnName: "idFuncionario" },
  ])
  idFuncionario2!: Funcionario;
}
