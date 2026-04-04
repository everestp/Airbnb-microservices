package db

import (
	"AuthInGo/models"
	"database/sql"
	"fmt"
)

type UserRepository interface {
	GetByID() (*models.User, error)
	Create() error
	GetAll() ([]*models.User, error)
	DeleteByID(id int64) error
}

type UserRepositoryImpl struct {
	db *sql.DB
}


func (u *UserRepositoryImpl) DeleteByID(id int64) error {
	panic("unimplemented")
}


func (u *UserRepositoryImpl) GetAll() ([]*models.User, error) {
	panic("unimplemented")
}

func NewUserRepository(_db *sql.DB) UserRepository {
	return &UserRepositoryImpl{
		db: _db,
	}
}

func (u *UserRepositoryImpl) GetByID() (*models.User, error) {
	fmt.Println("Getting user in user Repository")
	//STEP 1 : Prepate the query
	query := "SELECT * FROM users WHERE id =?"
	// STEP 2 :Execute the query
	row := u.db.QueryRow(query, 1)
	user := &models.User{}
	err := row.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			fmt.Println("No user found with the given ID")
			return nil, err
		} else {
			fmt.Println("Error scanning user:", user)
			return nil, err
		}
	}
	//Step 4 :Print the  user details
	fmt.Println("User fetched sucessfully", user)
	return user, nil
}
func (u *UserRepositoryImpl) Create() error {
	query := "INSERT INTO users (username,email,password) VALUES (? ,? ,?)"
	result, err := u.db.Exec(query, "test", "test@test.com", "test")
	if err != nil {
		fmt.Println("Error inserting user :", err)
		return err
	}
	rowsAffected, rowErr := result.RowsAffected()
	if rowErr != nil {
		fmt.Println("Error getting rows affected", rowErr)
		return rowErr
	}
	if rowsAffected == 0 {
		fmt.Println("no rows affected , user not created")
		return nil
	}
	fmt.Println("user created sucessfully , row affected", rowsAffected)
	return nil
}
