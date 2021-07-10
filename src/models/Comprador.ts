import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contato } from "./Contato";
import { Negociacao } from "./Negociacao";

@Index("fk_TB_comprador_TB_contato1_idx", ["idContato"], {})
@Index("fk_TB_comprador_TB_negociacao1_idx", ["idNegociacao"], {})
@Index("idComprador_UNIQUE", ["idComprador"], { unique: true })
@Entity("Comprador", { schema: "TCC" })
export class Comprador {
  @PrimaryGeneratedColumn({ type: "int", name: "idComprador" })
  idComprador!: number;

  @Column("int", { name: "idNegociacao" })
  idNegociacao!: number;

  @Column("int", { name: "idContato" })
  idContato!: number;

  @ManyToOne(() => Contato, (contato) => contato.compradores, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idContato", referencedColumnName: "idContato" }])
  idContato2!: Contato;

  @ManyToOne(() => Negociacao, (negociacao) => negociacao.compradores, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idNegociacao", referencedColumnName: "idNegociacao" }])
  idNegociacao2!: Negociacao;
}
