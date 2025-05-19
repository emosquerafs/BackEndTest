import { Test, TestingModule } from '@nestjs/testing';
import { PersonasService } from './personas.service';
import { PersonaDto } from '../dto/persona.dto';

describe('PersonasService', () => {
  let service: PersonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonasService],
    }).compile();

    service = module.get<PersonasService>(PersonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('saludar', () => {
    it('debe retornar un saludo con el nombre y apellido', () => {
      const persona: PersonaDto = {
        nombre: 'Juan',
        apellidos: 'Perez',
      };
      
      expect(service.saludar(persona)).toBe('Hola Juan Perez');
    });
    
    it('debe manejar nombres compuestos correctamente', () => {
      const persona: PersonaDto = {
        nombre: 'Maria Jose',
        apellidos: 'Garcia Lopez',
      };
      
      expect(service.saludar(persona)).toBe('Hola Maria Jose Garcia Lopez');
    });
  });
});
