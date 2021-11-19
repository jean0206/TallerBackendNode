# TallerBackendNode
App to register users and their tasks

## Deployed on
    https://powerful-brook-14818.herokuapp.com/

# REST API

The REST API forthis project

## Create User
## Request

`POST https://powerful-brook-14818.herokuapp.com/users/`
    
    Request Body
    {
        "firstname":"UsersFirstName",
        "lastname":"UsersFirstName",
	    "username": "UserName",
        "identification": 123456789,
	    "password":"supersecurepassword",
	    "photo":"https://hipertextual.com/wp-content/uploads/2020/01/hipertextual-rickroll-2020776881.jpg"
    }

## Find User
## Request

`GET https://powerful-brook-14818.herokuapp.com/users/id`
    
    Just gotta add the id for the user on the path

## Delete User
## Request
`DELETE https://powerful-brook-14818.herokuapp.com/users/id`
    
    Just gotta add the id for the user on the path

## Modify User
## Request

`PUT https://powerful-brook-14818.herokuapp.com/users/id`
    
    Request Body
    But also you gotta add the id for the user on the path
    {
        "firstname":"UsersFirstName",
        "lastname":"UsersFirstName",
	    "username": "UserName",
        "identification": 123456789,
	    "password":"supersecurepassword",
	    "photo":"https://hipertextual.com/wp-content/uploads/2020/01/hipertextual-rickroll-2020776881.jpg"
    }