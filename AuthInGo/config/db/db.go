package db

import (
	env "AuthInGo/config/env"
	"database/sql"
	"fmt"

	"github.com/go-sql-driver/mysql"
)

func SetupDB() (*sql.DB, error) {
	cfg := mysql.NewConfig()
	cfg.User = env.GetString("DB_USER", "root")
	cfg.Passwd = env.GetString("DB_PASSWORD", "root")
	cfg.Net = env.GetString("DB_NET", "tcp")
	cfg.Addr = env.GetString("DB_ADDR", "t127.0.0.1:3306")
	cfg.DBName = env.GetString("DB_NAME", "auth_dev")

	fmt.Println("Connection to database", cfg.DBName, cfg.FormatDSN())
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		fmt.Println("Error coneection to database", err)
		return nil, err
	}
	fmt.Println("Trying to connect to database ...")
	pingErr := db.Ping()
	if pingErr != nil {
		fmt.Println("Error connection to database", pingErr)
		return nil, pingErr
	}

	fmt.Println("Connected to database sucessfully", cfg.DBName)
	return db, nil
}
