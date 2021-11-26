export class UsuarioModel {
    constructor(
        public name: string = '',
        public email: string = '',
        public cpf: string = '',
        public password: string = '',
        public userRole: string = '',
        public address: string = '',
        public phoneNumber: number = 0,

    ) { }
}
