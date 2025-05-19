import { Body, Controller, Post } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonaDto } from '../dto/persona.dto';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post('saludar')
  saludar(@Body() persona: PersonaDto): { mensaje: string } {
    const saludo = this.personasService.saludar(persona);
    return { mensaje: saludo };
  }
}
