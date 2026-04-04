package router

import (
	"AuthInGo/controllers"

	"github.com/go-chi/chi/v5"
)


type UserRouter struct{
	UserController  *controllers.UserController
}

func NewUserRouter(_userControler controllers.UserController) Router {
  return &UserRouter{
	UserController: &_userControler,
  }
}

func (ur *UserRouter) Register(r chi.Router){
	r.Post("/profile", ur.UserController.GetUserByIDHandler)
}
