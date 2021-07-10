import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Consumo } from "./Consumo";
import { ConsumoEsperado } from "./ConsumoEsperado";
import { Compras } from "./Compras";

@Index("fk_TB_produtos_TB_compras1_idx", ["idCompras"], {})
@Index("idProdutos_UNIQUE", ["idProdutos"], { unique: true })
@Entity("Produtos", { schema: "TCC" })
export class Produtos {
  @PrimaryGeneratedColumn({ type: "int", name: "idProdutos" })
  idProdutos!: number;

  @Column("int", { name: "idCompras" })
  idCompras!: number;

  @Column("float", { name: "valor", precision: 12 })
  valor!: number;

  @Column("varchar", { name: "nome", length: 100 })
  nome!: string;

  @Column("int", { name: "quant" })
  quant!: number;

  @OneToMany(() => Consumo, (consumo) => consumo.idProdutos2)
  consumos!: Consumo[];

  @OneToMany(
    () => ConsumoEsperado,
    (consumoEsperado) => consumoEsperado.idProdutos2
  )
  consumoEsperados!: ConsumoEsperado[];

  @ManyToOne(() => Compras, (compras) => compras.produtos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idCompras", referencedColumnName: "idCompras" }])
  idCompras2!: Compras;
}
