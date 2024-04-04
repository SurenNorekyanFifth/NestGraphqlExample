import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from './post/entities/post.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password1234',
  database: 'example',
  entities: [Post],
  synchronize: true,
};
