import { Injectable } from '@nestjs/common';
import { PersonaDto } from '../dto/persona.dto';

@Injectable()
export class PersonasService {
  saludar(persona: PersonaDto): string {
    return `Hola ${persona.nombre} ${persona.apellidos}`;
  }
}
