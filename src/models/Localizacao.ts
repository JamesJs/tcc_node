import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cocho } from "./Cocho";
import { Fazenda } from "./Fazenda";
import { Gado } from "./Gado";
import { LocalizacaoGadoLog } from "./LocalizacaoGadoLog";

@Index("idLocalizacao_UNIQUE", ["idLocalizacao"], { unique: true })
@Entity("Localizacao", { schema: "TCC" })
export class Localizacao {
  @PrimaryGeneratedColumn({ type: "int", name: "idLocalizacao" })
  idLocalizacao!: number;

  @Column("varchar", { name: "latitude", length: 45 })
  latitude!: string;

  @Column("varchar", { name: "longitude", length: 45 })
  longitude!: string;

  @OneToMany(() => Cocho, (cocho) => cocho.idLocalizacao2)
  cochos!: Cocho[];

  @OneToOne(() => Fazenda)
  fazenda!: Fazenda;

  @OneToMany(() => Gado, (gado) => gado.idLocalizacao)
  gados!: Gado[];

  @OneToMany(
    () => LocalizacaoGadoLog,
    (localizacaoGadoLog) => localizacaoGadoLog.idLocalizacao2
  )
  localizacaoGadoLogs!: LocalizacaoGadoLog[];
}
