export default interface Usuario {
    id: number; 
    nome: string;
    email: string;
    senha: string;
    atualizadoEm: Date;
    criadoEm: Date;
}