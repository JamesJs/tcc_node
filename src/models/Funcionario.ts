import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contato } from "./Contato";
import { Endereco } from "./Endereco";
import { Fazenda } from "./Fazenda";
import { Funcao } from "./Funcao";
import { Movimentacao } from "./Movimentacao";

@Index("fk_TB_funcionario_TB_contato1_idx", ["idContato"], {})
@Index("fk_TB_funcionario_TB_endereco_idx", ["idEndereco"], {})
@Index("idFuncionario_UNIQUE", ["idFuncionario"], { unique: true })
@Entity("Funcionario", { schema: "TCC" })
export class Funcionario {
  @PrimaryGeneratedColumn({ type: "int", name: "idFuncionario" })
  idFuncionario!: number;

  @Column("varchar", { name: "nome", length: 255 })
  nome!: string;

  @Column("tinyint", { name: "isADM" })
  isAdm!: number;

  @Column("int", { name: "quantCochos" })
  quantCochos!: number;

  @Column("int", { name: "idEndereco" })
  idEndereco!: number;

  @Column("int", { name: "idContato" })
  idContato!: number;

  @ManyToOne(() => Contato, (contato) => contato.funcionarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idContato", referencedColumnName: "idContato" }])
  idContato2!: Contato;

  @ManyToOne(() => Endereco, (endereco) => endereco.funcionarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idEndereco", referencedColumnName: "idEndereco" }])
  idEndereco2!: Endereco;

  @ManyToMany(() => Fazenda, (fazenda) => fazenda.funcionarios)
  fazendas!: Fazenda[];

  @ManyToMany(() => Funcao, (funcao) => funcao.funcionarios)
  funcaos!: Funcao[];

  @OneToMany(() => Movimentacao, (movimentacao) => movimentacao.idFuncionario2)
  movimentacaos!: Movimentacao[];
}
