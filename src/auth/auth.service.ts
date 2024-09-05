// task.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../model/v1/view-user.entity';
import { Repository } from 'typeorm';
import { idUserDTO } from 'src/avalability/idUser.dto';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        @InjectRepository(UserEntity, 'mysql')
        private readonly authRepository: Repository<UserEntity>,
    ) { }

    async getListadoUsuarios(): Promise<any[]> {  
        let data = await this.authRepository.query(`SELECT * FROM usuarios`);
        
         const respuesta = [
            {
                borderColor: '#3F83BC',
                title: "Usuarios",
                data: data,
              },
            
          ];

          return respuesta;
    }

    async getUsuarioFiltroId(idUserDTO: idUserDTO): Promise<any[]> {  
        const { id } = idUserDTO;
        let data = await this.authRepository.query(`SELECT 
                                                    * 
                                                    FROM usuarios                                                 
                                                    WHERE id_usuario = ${id}`);
        const respuesta = [
            {
                borderColor: '#3F83BC',
                title: "UsuarioID",
                data: data,
              },
            
          ];

          return respuesta;
    }
}
