
import { Column, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from 'typeorm';

@Entity("usuarios")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ name: 'user' })
    user: string; 

    @Column({ name: 'pass' })
    pass: string;

    @Column({ name: 'correo' })
    correo: string;

    @Column({ name: 'telefono' })
    telefono: string;

    @Column({ name: 'estado' })
    estado: number;

    static fromId(instId: number): UserEntity {
        const inst = new UserEntity();
        inst.id_usuario = instId;
        return inst;
    }

}
