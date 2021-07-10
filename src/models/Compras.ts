import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Estoque } from "./Estoque";
import { Produtos } from "./Produtos";

@Index("fk_TB_compras_TB_estoque1_idx", ["idEstoque"], {})
@Index("idCompras_UNIQUE", ["idCompras"], { unique: true })
@Entity("Compras", { schema: "TCC" })
export class Compras {
  @PrimaryGeneratedColumn({ type: "int", name: "idCompras" })
  idCompras!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;

  @Column("int", { name: "idEstoque" })
  idEstoque!: number;

  @ManyToOne(() => Estoque, (estoque) => estoque.compras, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idEstoque", referencedColumnName: "idEstoque" }])
  idEstoque2!: Estoque;

  @OneToMany(() => Produtos, (produtos) => produtos.idCompras2)
  produtos!: Produtos[];
}
