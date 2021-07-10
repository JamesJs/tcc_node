import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Index("idFuncao_UNIQUE", ["idFuncao"], { unique: true })
@Entity("Funcao", { schema: "TCC" })
export class Funcao {
  @PrimaryGeneratedColumn({ type: "int", name: "idFuncao" })
  idFuncao!: number;

  @Column("varchar", { name: "nome", length: 100 })
  nome!: string;

  @Column("float", { name: "salario", precision: 12 })
  salario!: number;

  @ManyToMany(() => Funcionario, (funcionario) => funcionario.funcaos)
  @JoinTable({
    name: "Funcionario_has_Funcao",
    joinColumns: [{ name: "idFuncao", referencedColumnName: "idFuncao" }],
    inverseJoinColumns: [
      { name: "idFuncionario", referencedColumnName: "idFuncionario" },
    ],
    schema: "TCC",
  })
  funcionarios!: Funcionario[];
}
