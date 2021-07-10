import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fazenda } from "./Fazenda";
import { Localizacao } from "./Localizacao";
import { MateriaPrima } from "./MateriaPrima";

@Index("fk_TB_cocho_TB_fazenda1_idx", ["idFazenda"], {})
@Index("fk_TB_cocho_TB_localizacao1_idx", ["idLocalizacao"], {})
@Index("fk_TB_cocho_TB_materiaPrima1_idx", ["idMateriaPrima"], {})
@Index("idCocho_UNIQUE", ["idCocho"], { unique: true })
@Entity("Cocho", { schema: "TCC" })
export class Cocho {
  @PrimaryGeneratedColumn({ type: "int", name: "idCocho" })
  idCocho!: number;

  @Column("float", { name: "altura", precision: 12 })
  altura!: number;

  @Column("float", { name: "largura", precision: 12 })
  largura!: number;

  @Column("tinyint", { name: "isCoberto" })
  isCoberto!: number;

  @Column("int", { name: "idMateriaPrima" })
  idMateriaPrima!: number;

  @Column("int", { name: "idFazenda" })
  idFazenda!: number;

  @Column("int", { name: "idLocalizacao" })
  idLocalizacao!: number;

  @ManyToOne(() => Fazenda, (fazenda) => fazenda.cochos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idFazenda", referencedColumnName: "idFazenda" }])
  idFazenda2!: Fazenda;

  @ManyToOne(() => Localizacao, (localizacao) => localizacao.cochos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idLocalizacao", referencedColumnName: "idLocalizacao" },
  ])
  idLocalizacao2!: Localizacao;

  @ManyToOne(() => MateriaPrima, (materiaPrima) => materiaPrima.cochos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idMateriaPrima", referencedColumnName: "idMateriaPrima" },
  ])
  idMateriaPrima2!: MateriaPrima;
}
