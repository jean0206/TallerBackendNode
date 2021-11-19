# TallerBackendNode
App to register users and their tasks

## Deployed on
    https://powerful-brook-14818.herokuapp.com/

# Usage

## Routes
    `(POST) https://powerful-brook-14818.herokuapp.com/users/`
        Request Body Example
        {
           "firstname":"UsersFirstName",
            "lastname":"UsersFirstName",
	        "username": "UserName",
            "identification": 123456789,
	        "password":"supersecurepassword",
	        "photo":"https://hipertextual.com/wp-content/uploads/2020/01/hipertextual-rickroll-2020776881.jpg"
        }

    `(GET) https://powerful-brook-14818.herokuapp.com/users/id`
        Just gotta add the id for the user on the path

    `(DELETE) https://powerful-brook-14818.herokuapp.com/users/id`
        Just gotta add the id for the user on the path

    `(PUT) https://powerful-brook-14818.herokuapp.com/users/id`
        Request Body Example
        But also you gotta add the id for the user on the path
        {
           "firstname":"UsersFirstName",
            "lastname":"UsersFirstName",
	        "username": "UserName",
            "identification": 123456789,
	        "password":"supersecurepassword",
	        "photo":"https://hipertextual.com/wp-content/uploads/2020/01/hipertextual-rickroll-2020776881.jpg"
        }