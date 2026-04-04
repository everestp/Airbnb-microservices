package services

import (
	db "AuthInGo/db/repositories"
	"fmt"

)


type UserService interface{
	GetUserByIDService() error
}


type UserServiceImpl struct{
userRepository db.UserRepository
}

func NewUserService(_userRepository db.UserRepository) UserService{
	return &UserServiceImpl{
		userRepository: _userRepository,
	}
}


func (u *UserServiceImpl) GetUserByIDService() error{
	fmt.Println("Fetching USer profile by ID   in user service")
	  userData , err := u.userRepository.GetByID();
	  if err != nil{
		fmt.Println("Error")
	}
	fmt.Println("User",userData)
return nil  ;
}
