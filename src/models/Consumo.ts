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

@Index("fk_TB_consumo_TB_gado1_idx", ["idGado"], {})
@Index("fk_TB_consumo_TB_produtos1_idx", ["idProdutos"], {})
@Index("idConsumo_UNIQUE", ["idConsumo"], { unique: true })
@Entity("Consumo", { schema: "TCC" })
export class Consumo {
  @PrimaryGeneratedColumn({ type: "int", name: "idConsumo" })
  idConsumo!: number;

  @Column("int", { name: "idGado" })
  idGado!: number;

  @Column("float", { name: "quant", precision: 12 })
  quant!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;

  @Column("int", { name: "idProdutos" })
  idProdutos!: number;

  @ManyToOne(() => Gado, (gado) => gado.consumos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
  idGado2!: Gado;

  @ManyToOne(() => Produtos, (produtos) => produtos.consumos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idProdutos", referencedColumnName: "idProdutos" }])
  idProdutos2!: Produtos;
}
