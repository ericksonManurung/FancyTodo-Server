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
POST/users/regis
POST/users/login


## Add Todo
Menambahkan data Todo
* URL
/todos
* Method:
POST
* Request Headers
access_token : <access token>
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
        "success": true,
        "data": {
            "id": 1,
            "title": "<todo title>",
            "description": "<todo description>",
            "status": "<todo status>",
            "due_date": "<todo due_date>",
            "UserId": <todo UserId>,
            "updatedAt": "2021-04-17T10:31:57.095Z",
            "createdAt": "2021-04-17T10:31:57.095Z"
        }
    }
* Error Response:
    Code : 400
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Title tidak boleh kosong,",
            "Validation error: Title Minimal 3 karater,",
            "Validation error: Description tidak boleh kosong"
        ]
    }
    OR
    Code: 500
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }



## List Todos
Menampilkan Semua data Todos
* URL
/todos
* Method:
GET
* Request Headers
access_token : <access token>
* URL Params
None
* Data Params
None
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
        "data": [   
            {
               "id": 1,
                "title": "<todo title>",
                "description": "<todo description>",
                "status": "<todo status>",
                "due_date": "<todo due_date>",
                "UserId": <todo UserId>,
                "createdAt": "2021-04-17T10:10:34.365Z",
                "updatedAt": "2021-04-17T10:10:34.365Z"
            },
            {
                "id": 2,
                "title": "<todo title>",
                "description": "<todo description>",
                "status": "<todo status>",
                "due_date": "<todo due_date>",
                "UserId": <todo UserId>,
                "createdAt": "2021-04-17T10:10:34.365Z",
                "updatedAt": "2021-04-17T10:10:34.365Z"
            },
        ]
    }
* Error Response:
    Code: 500
    Content
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }



## Detail Todo
Menampilkan satu data todo sesuai paramter
* URL
/todos/:id
* Method:
GET
* Request Headers
access_token : <access token>
* URL Params
id
* Data Params
None
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
        "data": {
            "id": 1,
            "title": "<todo title>",
            "description": "<todo description>",
            "status": "<todo status>",
            "due_date": "<todo due_date>",
            "UserId": <todo UserId>,
            "updatedAt": "2021-04-17T10:31:57.095Z",
            "createdAt": "2021-04-17T10:31:57.095Z"
        }
    }
    - OR
    Code: 404
    Content:
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
* Error Response:
    Code: 500
    Content
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }



## Update Todo
Mengupdate semua field pada data Todo
* URL
/todos/:id
* Method:
PUT
* Request Headers
access_token : <access token>
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
        "success": true,
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
    - OR
    Code: 404
    Content:
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
* Error Response:
    Code : 400
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Tidak bisa input tanggal kemarin,",
            "Validation error: Status tidak boleh kosong"
        ]
    }
    - OR
    Code: 500
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }



# Update Status Todo
Mengupdate field status pada data Todos
* URL
/todos/:id
* Method:
PATCH
* Request Headers
access_token : <access token>
* URL Params
id
* Data Params
    Required:
    {
        statu: req.body.status
    }
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
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
    - OR
    Code: 404
    Content:
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
* Error Response:
    Code: 400
    Content
    {
        "success": false,
        "errorMessage": [
            "Validation error: Tidak bisa input tanggal kemarin,",
            "Validation error: Status tidak boleh kosong"
        ]
    }
    - OR
    Code: 500
    Content
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }



# Delete Todo
Menghapus data Todo
* URL
/todos/:id
* Method:
DELETE
* Request Headers
access_token : <access token>
* URL Params
id
* Data Params
None
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
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
    OR
    Content:
    {message:"Todo Success Delete"}
    - OR
    Code: 404
    Content
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
* Error Response:
    Code: 500
    Content
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }



## Register Users
Menambahkan data Todo
* URL
/users/regis
* Method:
POST
* URL Params
None
* Data Params
    Required:
    {
        email: req.body.email,
        password: req.body.password
    }
* Success Response:
    Code: 201
    Content:
    {
        "success": true,
        "message": "User berhasil register"
    }
* Error Response:
    Code : 400
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Email tidak boleh kosong,",
            "Validation error: Format harus email. example: abc@gmail.com,"
        ]
    }
    OR
    Code: 500
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }



## Login Users
Menambahkan data Todo
* URL
/users/login
* Method:
POST
* URL Params
None
* Data Params
    Required:
    {
        email: req.body.email,
        password: req.body.password
    }
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
        "access_token": "<access token>"
    }
* Error Response:
    Code : 400
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Email tidak boleh kosong,",
            "Validation error: Format harus email. example: abc@gmail.com,"
        ]
    }
    OR
    Code: 500
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }