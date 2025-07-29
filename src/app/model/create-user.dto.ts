import { Competence } from "./Competence";

export interface CreateUserDto {
  email: string;
  password: string;
  name: string;
  bio: string;
  avatarUrl: string;
  competences: Competence[];
}


