import Usuario from "../model/Usuario";

export default interface RepositorioUsuario {
    consultarPorId(id: number): Promise<Usuario | null>;
    consultarTodos(): Promise<Usuario[]>;
    consultarPorEmail(email: string): Promise<Usuario | null>;
    criar(usuario: Partial<Usuario>): Promise<Usuario>;
}