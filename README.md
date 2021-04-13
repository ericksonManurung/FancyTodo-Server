# FancyTodo-Server
Fancy Todo - Server

### Base URL ###
http://localhost:3000/


### API Documentations Todos ###

## End Points ##
POST/todos
GET/todos
GET/todos/:id
PUT/todos/:id
PATCH/todos/:id
DELETE/todos/:id

## Add Todo
Menambahkan data Todo
* URL
/todos
* Method:
POST
* URL Params
None
* Data Params
    Required:
    {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        due_date: req.body.due_date
    }
* Success Response:
    Code: 201
    Content:
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-13T14:04:12.464Z",
        "createdAt": "2021-04-13T14:04:12.464Z"
    }
* Error Response:
    Code : 400
    Content:
    { error : "SequelizeValidationError" }
    OR
    Code: 500
    Content:
    { message: "Internal Server Error"}


## List Todos
Menampilkan Semua data Todos
* URL
/todos
* Method:
GET
* URL Params
None
* Data Params
None
* Success Response:
    Code: 200
    Content:
    [
        {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-13T14:04:12.464Z",
        "createdAt": "2021-04-13T14:04:12.464Z"
        },
        {
        "id": 2,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-13T14:04:12.464Z",
        "createdAt": "2021-04-13T14:04:12.464Z"
        },
    ]
* Error Response:
    Code: 500
    Content
    {message: "Internas Server Error"}


## Detail Todo
Menampilkan satu data todo sesuai paramter
* URL
/todos/:id
* Method:
GET
* URL Params
id
* Data Params
None
* Success Response:
    Code: 200
    Content:
    {
        "id": 2,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-13T14:04:12.464Z",
        "createdAt": "2021-04-13T14:04:12.464Z"
    }
* Error Response:
    Code: 500
    Content
    {message: "Internal Server Error"}



## Update Todo
Mengupdate semua field pada data Todo
* URL
/todos/:id
* Method:
PUT
* URL Params
id
* Data Params
    Required:
    {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        due_date: req.body.due_date
    }
* Success Response:
    Code: 200
    Content:
    {
        "data": {
            "id": 3,
            "title": "<todo title>",
            "description": "<todo description>",
            "status": "<todo status>",
            "due_date": "<todo due_date>",
            "createdAt": "2021-04-13T14:04:12.464Z",
            "updatedAt": "2021-04-13T15:31:37.907Z"
        }
    }
* Error Response:
    Code : 400
    Content:
    { error : "SequelizeValidationError" }
    OR
    Code: 404
    Content:
    { message : "Data Not Found" }
    OR
    Code: 500
    Content:
    {message: "Internas Server Error"}



# Update Status Todo
Mengupdate field status pada data Todos
* URL
/todos/:id
* Method:
PATCH
* URL Params
id
* Data Params
    Required:
    {
        title: req.body.status
    }
* Success Response:
    Code: 200
    Content:
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-13T14:04:12.464Z",
        "createdAt": "2021-04-13T14:04:12.464Z"
    }
* Error Response:
    Code: 400
    Content
    { error : "SequelizeValidationError" }
    - OR
    Code: 404
    Content
    {message: "Data Not Found"}
    - OR
    Code: 500
    Content
    {message: "Internas Server Error"}



# Delete Todo
Menghapus data Todo
* URL
/todos/:id
* Method:
PATCH
* URL Params
id
* Data Params
None
* Success Response:
    Code: 200
    Content:
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-13T14:04:12.464Z",
        "createdAt": "2021-04-13T14:04:12.464Z"
    }
    OR
    {message:"Todo Success Delete"}
* Error Response:
    Code: 404
    Content
    {message: "Data Not Found"}
    - OR
    Code: 500
    Content
    {message: "Internas Server Error"}
