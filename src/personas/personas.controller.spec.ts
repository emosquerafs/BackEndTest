import { Test, TestingModule } from '@nestjs/testing';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { PersonaDto } from '../dto/persona.dto';

describe('PersonasController', () => {
  let controller: PersonasController;
  let service: PersonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasController],
      providers: [PersonasService],
    }).compile();

    controller = module.get<PersonasController>(PersonasController);
    service = module.get<PersonasService>(PersonasService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  describe('saludar', () => {
    it('debe retornar un objeto con el mensaje de saludo', () => {
      const persona: PersonaDto = {
        nombre: 'Juan',
        apellidos: 'Perez',
      };
      
      const resultado = controller.saludar(persona);
      
      expect(resultado).toEqual({ mensaje: 'Hola Juan Perez' });
    });
    
    it('debe utilizar el servicio para generar el saludo', () => {
      const persona: PersonaDto = {
        nombre: 'Maria',
        apellidos: 'Garcia',
      };
      
      const spyService = jest.spyOn(service, 'saludar');
      
      controller.saludar(persona);
      
      expect(spyService).toHaveBeenCalledWith(persona);
    });
  });
});
