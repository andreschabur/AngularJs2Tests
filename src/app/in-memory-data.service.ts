import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const heroes = [
            { id:0, codigo: 0, nombre: 'Zero' },
            { id:11, codigo: 11, nombre: 'Dr Crapula' },
            { id:12, codigo: 12, nombre: 'Dexter' },
            { id:13,codigo: 13, nombre: 'Shaggy y Scoby do' },
            { id:14,codigo: 14, nombre: 'CopiadoPor AndresChabur' },
            { id:15,codigo: 15, nombre: 'Shakira' },
            { id:16,codigo: 16, nombre: 'Eminem' },
            { id:17,codigo: 17, nombre: 'Snoop Dog' },
            { id:18,codigo: 18, nombre: 'Dr Dre' },
            { id:19,codigo: 19, nombre: 'Magma' },
            { id:20,codigo: 20, nombre: 'Tornado' }
        ];
        return {heroes};
    }
}
