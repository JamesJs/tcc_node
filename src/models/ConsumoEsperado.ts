import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gado } from "./Gado";
import { Produtos } from "./Produtos";

@Index("fk_TB_consumoEsperado_TB_gado1_idx", ["idGado"], {})
@Index("fk_TB_consumoEsperado_TB_produtos1_idx", ["idProdutos"], {})
@Index("idCnsumoEsperado_UNIQUE", ["idCnsumoEsperado"], { unique: true })
@Entity("ConsumoEsperado", { schema: "TCC" })
export class ConsumoEsperado {
  @PrimaryGeneratedColumn({ type: "int", name: "idCnsumoEsperado" })
  idCnsumoEsperado!: number;

  @Column("int", { name: "idGado" })
  idGado!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;

  @Column("float", { name: "quant", precision: 12 })
  quant!: number;

  @Column("int", { name: "idProdutos" })
  idProdutos!: number;

  @ManyToOne(() => Gado, (gado) => gado.consumoEsperados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  idGado2!: Gado;

  @ManyToOne(() => Produtos, (produtos) => produtos.consumoEsperados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idProdutos", referencedColumnName: "idProdutos" }])
  idProdutos2!: Produtos;
}
