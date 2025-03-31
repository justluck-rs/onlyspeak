import { db } from '../../database';
import { CreateUserBody } from './user.interface';

export class UserRepository {


  async findAllUsers() {
    return await db('users').select('*');
  }

  async createUser(user: CreateUserBody) {
    return await db('users').insert(user).returning('*');
  }

  async findUserByEmail(email: string) {
    return await db('users').where({ email }).first();
  }
}