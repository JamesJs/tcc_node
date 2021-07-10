import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Compras } from "./Compras";
import { Fazenda } from "./Fazenda";
import { Movimentacao } from "./Movimentacao";

@Index("fk_TB_estoque_TB_fazenda1_idx", ["idFazenda"], {})
@Index("idEstoque_UNIQUE", ["idEstoque"], { unique: true })
@Entity("Estoque", { schema: "TCC" })
export class Estoque {
  @PrimaryGeneratedColumn({ type: "int", name: "idEstoque" })
  idEstoque!: number;

  @Column("int", { name: "idFazenda" })
  idFazenda!: number;

  @OneToMany(() => Compras, (compras) => compras.idEstoque2)
  compras!: Compras[];

  @ManyToOne(() => Fazenda, (fazenda) => fazenda.estoques, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
  idFazenda2!: Fazenda;

  @OneToMany(() => Movimentacao, (movimentacao) => movimentacao.idEstoque2)
  movimentacaos!: Movimentacao[];
}
