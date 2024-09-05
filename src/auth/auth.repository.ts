// task.repository.ts
import { UserEntity } from '../model/v1/view-user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class AuthRepository extends Repository<UserEntity> {}
