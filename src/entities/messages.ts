import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey } from "sequelize-typescript";
import { User } from "./user";

@Table({
    tableName: "messages"
})
class Messages extends Model {
    @PrimaryKey
    @Column
    declare id: number
    @ForeignKey(() => User)
    @Column
    declare user_id: number
    @Column
    declare message_type: string
    @Column
    declare message_content: string

    @BelongsTo(() => User)
    declare user: User
}

export { Messages };