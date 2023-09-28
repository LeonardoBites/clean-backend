import Elysia from "elysia";
import ConsultarUsuario from "../../core/usuario/service/ConsultarUsuario";


export default class ConsultarUsuarioControllers {
    constructor(
        readonly servidor: Elysia,
        readonly casoDeUso: ConsultarUsuario
    ){

        servidor.get('/usuarios', async () => {
            return casoDeUso.executar();
        })

    }
}