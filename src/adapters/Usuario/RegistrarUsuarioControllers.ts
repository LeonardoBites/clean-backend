import Elysia from "elysia";
import RegistrarUsuario from "../../core/usuario/service/RegistrarUsuario";


export default class RegistrarUsuarioControllers {
    constructor(
        readonly servidor: Elysia,
        readonly casoDeUso: RegistrarUsuario
    ){

        servidor.post('/usuarios', async ({body}) => {
            const { nome, email, senha } = body as any;

            await this.casoDeUso.executar({nome, email, senha});

            return { status :201,
                     body: { mensagem: 'Usuário cadastrado com sucesso!' }
            };
        })

    }
}