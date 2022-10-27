export type UserEntity = {
  id: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
  profiles: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
};

export type CreateUserDTO = {
  id?: string;
  name: string;
  last_name: string;
  email: string;
  profiles?: string;
  created_at: Date;
};
