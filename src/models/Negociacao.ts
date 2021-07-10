import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comprador } from "./Comprador";
import { Gado } from "./Gado";
import { Financeiro } from "./Financeiro";

@Index("fk_TB_negociacao_TB_financeiro1_idx", ["idFinanceiro"], {})
@Index("idNegociacao_UNIQUE", ["idNegociacao"], { unique: true })
@Entity("Negociacao", { schema: "TCC" })
export class Negociacao {
  @PrimaryGeneratedColumn({ type: "int", name: "idNegociacao" })
  idNegociacao!: number;

  @Column("float", { name: "valor", precision: 12 })
  valor!: number;

  @Column("timestamp", { name: "data" })
  data!: Date;
  
  @Column("int", { name: "quantGado" })
  quantGado!: number;
  @OneToMany(() => Comprador, (comprador) => comprador.idNegociacao2)
  compradores!: Comprador[];

  @OneToMany(() => Gado, (gado) => gado.idNegociacao)
  gados!: Gado[];

  @ManyToOne(() => Financeiro, (financeiro) => financeiro.negociacaos, {

    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idFinanceiro", referencedColumnName: "idFinanceiro" }])
  idFinanceiro!: Financeiro;
}
