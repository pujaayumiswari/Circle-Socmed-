import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/Users";
import { Thread } from "./entities/Thread";
import { Replies } from "./entities/Replies";
import { Likes } from "./entities/Likes";
import { Followers } from "./entities/Follows";
import { MyMigration1698032263405 } from "./migrations/1698032263405-MyMigration";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "containers-us-west-35.railway.app",
  port: 5614,
  username: "postgres",
  password: "NoPgNfW1m3mukQlOi3A6",
  database: "railway",
  synchronize: true,
  logging: false,
  // entities: ["src/entities/*.ts"],
  entities: [User, Thread, Replies, Likes, Followers],
  // migrations: ["src/migrations/*.ts"],
  migrations: [MyMigration1698032263405],
  subscribers: [],
});
