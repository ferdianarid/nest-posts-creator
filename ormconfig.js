TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    password: "root",
    database: process.env.DB_NAME,
    // entities: [],
    autoLoadEntities: true,
    synchronize: true,
})