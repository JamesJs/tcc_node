import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cocho } from "./Cocho";

@Index("idMateriaPrima_UNIQUE", ["idMateriaPrima"], { unique: true })
@Entity("MateriaPrima", { schema: "TCC" })
export class MateriaPrima {
  @PrimaryGeneratedColumn({ type: "int", name: "idMateriaPrima" })
  idMateriaPrima!: number;

  @Column("varchar", { name: "nome", length: 100 })
  nome!: string;

  @OneToMany(() => Cocho, (cocho) => cocho.idMateriaPrima2)
  cochos!: Cocho[];
}
