import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { idUserDTO } from 'src/avalability/idUser.dto';

@ApiTags('Authenticator')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @ApiOperation({ description: 'Devuelve Listado Usuarios' })
    @Get('/getUsuarios') 
    async getListadoUsuarios(): Promise<any[]> {
        return await this.authService.getListadoUsuarios();
    }

    @ApiOperation({ description: 'Devuelve Usuario con filtro por ID' })
    @Post('/UsuarioFiltroId') 
    async getUsuarioFiltroId(@Body() idUserDTO: idUserDTO): Promise<any[]> {
        return await this.authService.getUsuarioFiltroId(idUserDTO);
    }
    
}
