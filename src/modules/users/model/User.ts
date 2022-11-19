import { v4 as uuidV4 } from 'uuid';

export class User {
  id: string;
  name: string;
  admin = false;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
