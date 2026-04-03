package services

import (
	db "AuthInGo/db/repositories"
	"fmt"
)


type UserService interface{
	CreateUser() error
}


type UserServiceImpl struct{
userRepository db.UserRepository
}

func NewUserService(_userRepository db.UserRepository) UserService{
	return &UserServiceImpl{
		userRepository: _userRepository,
	}
}


func (u *UserServiceImpl) CreateUser() error{
	fmt.Println("Creatinbg user in user service")
	if err := u.CreateUser(); err != nil{
		fmt.Println("Error")
	}
return nil  ;
}
