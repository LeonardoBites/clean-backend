import RepositorioUsuarioMemoria from "./external/memoria/RepositorioUsuarioMemoria";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioControllers from "./adapters/Usuario/RegistrarUsuarioControllers";
import RepositorioUsuarioPrismaPg from "./external/prisma/RepositorioUsuarioPrismaPg";
import ConsultarUsuario from "./core/usuario/service/ConsultarUsuario";
import ConsultarUsuarioControllers from "./adapters/Usuario/ConsultarUsuarioControllers";
import ConsultarUsuarioPorId from "./core/usuario/service/ConsultarUsuarioPorId";
import ConsultarUsuarioPorIdControllers from "./adapters/Usuario/ConsultarUsuarioPorIdControllers";
import app from "./external/api/config"



//------------------------------------Registar rotas------------------------------------

const repositorioUsuario = new RepositorioUsuarioPrismaPg();

const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
new RegistrarUsuarioControllers(app, registrarUsuario); 

const consultarUsuario = new ConsultarUsuario(repositorioUsuario);
new ConsultarUsuarioControllers(app, consultarUsuario);

const consultarUsuarioPorId = new ConsultarUsuarioPorId(repositorioUsuario);
new ConsultarUsuarioPorIdControllers(app, consultarUsuarioPorId);


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
