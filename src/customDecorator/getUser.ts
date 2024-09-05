import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'

export const GetUser = createParamDecorator(
    async (_data, ctx: ExecutionContext) => {
        const http = new HttpService;
        const req = ctx.switchToHttp().getRequest();
        const token = req.headers['authorization'];
        try {
            http.axiosRef.defaults.headers['Authorization'] = token;
            const autorizado = await http.axiosRef.patch('')
            return autorizado.data;
        } catch (error) {
            throw new BadRequestException(`Usted no esta autorizado a realizar peticiones`)
        }
    },
);