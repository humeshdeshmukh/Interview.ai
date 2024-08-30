import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
class Resume extends Model<Resume> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId!: string;
}

export default Resume;
