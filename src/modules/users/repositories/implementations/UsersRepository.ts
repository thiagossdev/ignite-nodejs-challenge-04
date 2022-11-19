import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const entity = new User();

    Object.assign(entity, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(entity);
    return entity;
  }

  findById(id: string): User | undefined {
    return this.users.find((entity) => entity.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((entity) => entity.email === email);
  }

  turnAdmin(receivedUser: User): User {
    receivedUser.admin = true;
    receivedUser.updated_at = new Date();
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
