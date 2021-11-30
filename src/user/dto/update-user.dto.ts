import { Product } from '../user.schema';

export class UpdateUserDto {
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  phoneNumber?: string;
  mail?: string;
  address?: string;
  shoppingCart?: Product[];
}
