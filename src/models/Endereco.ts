import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Index("idRndereco_UNIQUE", ["idEndereco"], { unique: true })
@Entity("Endereco", { schema: "TCC" })
export class Endereco {
  @PrimaryGeneratedColumn({ type: "int", name: "idEndereco" })
  idEndereco!: number;

  @Column("varchar", { name: "CEP", length: 11 })
  cep!: string;

  @Column("int", { name: "numero" })
  numero!: number;

  @Column("varchar", { name: "bairro", length: 100 })
  bairro!: string;

  @Column("varchar", { name: "complemento", nullable: true, length: 100 })
  complemento!: string | null;

  @Column("varchar", { name: "estado", length: 3 })
  estado!: string;

  @Column("varchar", { name: "cidade", length: 100 })
  cidade!: string;

  @OneToMany(() => Funcionario, (funcionario) => funcionario.idEndereco2)
  funcionarios!: Funcionario[];
}
