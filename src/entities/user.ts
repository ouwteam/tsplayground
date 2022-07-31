import { Column, ForeignKey, HasMany, Model, PrimaryKey, Scopes, Table } from "sequelize-typescript";
import { Messages } from "./messages";

@Scopes(() => ({
    noPassword: {
        attributes: { exclude: ["password"] },
    },
}))

@Table({
    tableName: "users"
})
class User extends Model {
    @PrimaryKey
    @Column
    declare id: number;
    @Column
    declare name: string;
    @Column
    declare username: string;
    @Column
    declare password: string;

    @HasMany(() => Messages)
    declare messages: Messages[]
}

// User.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     timestamps: true,
//     sequelize: sequelizeInstance,
//     tableName: "users",
//     scopes: {
//         noPassword: {
//             attributes: { exclude: ["password"] },
//         },
//     },
// });

export { User };