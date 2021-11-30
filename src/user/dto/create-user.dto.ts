import { Product } from '../user.schema';

export class CreateUserDto {
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  mail: string;
  address: string;
  shoppingCart?: Product[];
}
