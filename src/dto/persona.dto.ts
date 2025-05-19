import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PersonaDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser un texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  nombre: string;

  @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
  @IsString({ message: 'Los apellidos deben ser un texto' })
  @MinLength(2, { message: 'Los apellidos deben tener al menos 2 caracteres' })
  apellidos: string;
}
