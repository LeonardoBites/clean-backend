import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuario";
import Usuario from "../../core/usuario/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuarioPrismaPg implements RepositorioUsuario {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    consultarTodos(): Promise<Usuario[]> {
        return this.prisma.usuario.findMany()
    }
    
    consultarPorId(id: number): Promise<Usuario | null> {
        return this.prisma.usuario.findUnique({ where: { id } })
    }

    consultarPorEmail(email: string): Promise<Usuario | null> {
        return this.prisma.usuario.findUnique({ where: { email } })
    }

    criar(usuario: Usuario): Promise<Usuario> {
        return this.prisma.usuario.create({ data: usuario })
    }
    
}