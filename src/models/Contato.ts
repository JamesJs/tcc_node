import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comprador } from "./Comprador";
import { Funcionario } from "./Funcionario";

@Index("idContato_UNIQUE", ["idContato"], { unique: true })
@Entity("Contato", { schema: "TCC" })
export class Contato {
  @PrimaryGeneratedColumn({ type: "int", name: "idContato" })
  idContato!: number;

  @Column("varchar", { name: "numeroCel", nullable: true, length: 45 })
  numeroCel!: string | null;

  @Column("varchar", { name: "numeroFixo", nullable: true, length: 45 })
  numeroFixo!: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 150 })
  email!: string | null;

  @OneToMany(() => Comprador, (comprador) => comprador.idContato2)
  compradores!: Comprador[];

  @OneToMany(() => Funcionario, (funcionario) => funcionario.idContato2)
  funcionarios!: Funcionario[];
}
