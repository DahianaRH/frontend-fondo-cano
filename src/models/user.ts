export interface User {
    id: number;
    email: string;
    role: 'admin' | 'user';
    nombre: string;
    apellido: string;
}