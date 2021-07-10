import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cocho } from "./Cocho";
import { Estoque } from "./Estoque";
import { Localizacao } from "./Localizacao";
import { Financeiro } from "./Financeiro";
import { Funcionario } from "./Funcionario";
import { Gado } from "./Gado";
import { Maquinario } from "./Maquinario";

@Index("fk_TB_fazenda_TB_localizacao1_idx", ["idLocalizacao"], {})
@Index("idFazenda_UNIQUE", ["idFazenda"], { unique: true })
@Index("nome_UNIQUE", ["nome"], { unique: true })
@Entity("Fazenda", { schema: "TCC" })
export class Fazenda {
  @PrimaryGeneratedColumn({ type: "int", name: "idFazenda" })
  idFazenda!: number;

  @Column("varchar", { name: "nome", unique: true, length: 100 })
  nome!: string;

  @Column("int", { name: "tamanho" })
  tamanho!: number;

  @Column("int", { name: "quantFuncionarios" })
  quantFuncionarios!: number;

  @OneToMany(() => Cocho, (cocho) => cocho.idFazenda2,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  cochos!: Cocho[];

  @OneToMany(() => Estoque, (estoque) => estoque.idFazenda2,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  estoques!: Estoque[];

  @OneToOne(() => Localizacao, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
  ])
  idLocalizacao!: Localizacao;

  @OneToMany(() => Financeiro, (financeiro) => financeiro.idFazenda,{
    
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  financeiros!: Financeiro[];

  @ManyToMany(() => Funcionario, (funcionario) => funcionario.fazendas)
  @JoinTable({
    name: "Funcionario_has_Fazenda",
    joinColumns: [{ name: "idFazenda", referencedColumnName: "idFazenda" }],
    inverseJoinColumns: [
      { name: "idFuncionario", referencedColumnName: "idFuncionario" },
    ],
    schema: "TCC",
  })
  funcionarios!: Funcionario[];

  @OneToMany(() => Gado, (gado) => gado.idFazenda,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  gados!: Gado[];

  @OneToMany(() => Maquinario, (maquinario) => maquinario.idFazenda2,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  })
  maquinarios!: Maquinario[];
}
