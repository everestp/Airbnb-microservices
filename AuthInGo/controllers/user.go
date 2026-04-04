package controllers

import (
	"AuthInGo/services"
	"fmt"
	"net/http"
)


type UserController struct{
	UserService services.UserService

}
func NewUserController(_userService services.UserService) *UserController{
	return  &UserController{
		UserService: _userService,
	}
}

func (uc *UserController) GetUserByIDHandler(w http.ResponseWriter , r *http.Request)  {
	fmt.Println(" Fetching profile by ID handler")
	uc.UserService.GetUserByIDService()
	 w.Write([]byte("User fetching endpoint done"))
}
