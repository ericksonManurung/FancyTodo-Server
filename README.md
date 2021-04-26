# FancyTodo-Server

## Base URL
http://localhost:3000/

## INSTALL PACKAGE
* axios
* bcryptjs
* cors
* dotenv
* google-auth-library
* jsonwebtoken
* sequelize orm
* pg (database postgres)

## GET API
* [Kawal Corona API](https://kawalcorona.com/api/)
* [News API](https://newsapi.org/)

## FRONT END LIBRARY
* Bootstrap
* sweetalert
* toastify
* fontawesom

## End Points
* POST/todos
* GET/todos
* GET/todos/:id
* PUT/todos/:id
* PATCH/todos/:id
* DELETE/todos/:id
* POST/users/regis
* POST/users/login


## Add Todo
Menambahkan data Todo
* URL
```url
/todos
```
* Method:
```url
POST
```
* Request Headers
```headers
access_token : <access token>
```
* URL Params
```params
None
```
* Data Params
    Required:
    ```data
    {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        due_date: req.body.due_date
    }
    ```
* Success Response:
    Code: 201
    ```response
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
    ```
* Error Response:
    Code : 400
    ```errResponse
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Title tidak boleh kosong,",
            "Validation error: Title Minimal 3 karater,",
            "Validation error: Description tidak boleh kosong"
        ]
    }
    ```
    OR
    Code: 500
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



## List Todos
Menampilkan Semua data Todos
* URL
```url
/todos
```
* Method:
```method
GET
```
* Request Headers
```headers
access_token : <access token>
```
* URL Params
```params
None
```
* Data Params
```data
None
```
* Success Response:
    Code: 200
    ```response
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
    ```
* Error Response:
    Code: 500
    ```err
    Content
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



## Detail Todo
Menampilkan satu data todo sesuai paramter
* URL
```url
/todos/:id
```
* Method:
```method
GET
```
* Request Headers
```headers
access_token : <access token>
```
* URL Params
```params
id
```
* Data Params
```data
None
```
* Success Response:
    Code: 200
    ```res
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
    ```
    - OR
    Code: 404
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



## Update Todo
Mengupdate semua field pada data Todo
* URL
```url
/todos/:id
```
* Method:
```method
PUT
```
* Request Headers
```headers
access_token : <access token>
```
* URL Params
```params
id
```
* Data Params
    ```data
    Required: 
    {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        due_date: req.body.due_date
    }
    ```
* Success Response:
    Code: 200
    ```res
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
    ```
    - OR
    Code: 404
    ```err
    Content:
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
    ```
* Error Response:
    Code : 400
    ```err
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Tidak bisa input tanggal kemarin,",
            "Validation error: Status tidak boleh kosong"
        ]
    }
    ```
    - OR
    ```or
    Code: 500
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



# Update Status Todo
Mengupdate field status pada data Todos
* URL
```url
/todos/:id
```
* Method:
```method
PATCH
```
* Request Headers
```headers
access_token : <access token>
```
* URL Params
```params
id
```
* Data Params
    ```data
    Required:
    {
        statu: req.body.status
    }
    ```
* Success Response:
    Code: 200
    ```res
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
    ```   
    - OR
    Code: 404
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
    ```
* Error Response:
    Code: 400
    ```err
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Tidak bisa input tanggal kemarin,",
            "Validation error: Status tidak boleh kosong"
        ]
    }
    ```
    - OR
    Code: 500
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



# Delete Todo
Menghapus data Todo
* URL
```url
/todos/:id
```
* Method:
```delete
DELETE
```
* Request Headers
```headers
access_token : <access token>
```
* URL Params
```params
id
```
* Data Params
```data
None
```
* Success Response:
    Code: 200
    ```res
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
    ```
    - OR
    ```or
    Content:
    {message:"Todo Success Delete"}
    ```
    - OR
    Code: 404
    ```err
    Content
    {
        "success": false,
        "errorMessage": "Data tidak ditemukan"
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



## Register Users
Menambahkan data Todo
* URL
```url
/users/regis
```
* Method:
```method
POST
```
* URL Params
```params
None
```
* Data Params
    ```data
    Required:
    {
        email: req.body.email,
        password: req.body.password
    }
    ```
* Success Response:
    Code: 201
    ```res
    Content:
    {
        "success": true,
        "message": "User berhasil register"
    }
    ```
* Error Response:
    Code : 400
    ```err
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Email tidak boleh kosong,",
            "Validation error: Format harus email. example: abc@gmail.com,"
        ]
    }
    ```
    - OR
    Code: 500
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



## Login Users
Menambahkan data Todo
* URL
```url
/users/login
```
* Method:
```method
POST
```
* URL Params
```params
None
```
* Data Params
    Required:
    ```data
    {
        email: req.body.email,
        password: req.body.password
    }
    ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "access_token": "<access token>"
    }
    ```
* Error Response:
    Code : 400
    ```err
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: Email tidak boleh kosong,",
            "Validation error: Format harus email. example: abc@gmail.com,"
        ]
    }
    ```
    - OR
    Code: 500
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```


   
## 3rd API Kawal Covid
Menambahkan data Todo
* URL
```url
/kawalCovidIndonesia
```
* Method:
```method
GET
```
* URL Params
```params
None
```
* Data Params
```data
None
 ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "data": [
                    {
                        "name": "Indonesia",
                        "positif": "<data positif>",
                        "sembuh": "<data sembuh>",
                        "meninggal": "<data meningga>"
                        "dirawat": "<data dirawat>"
                    }
        ]
    }
    ```
* Error Response:
    Code: 500
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ```



## 3rd API news
Menambahkan data Todo
* URL
```url
/news
```
* Method:
```method
GET
```
* URL Params
```params
https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=<dirahasiakan>
```
* Data Params
```data
None
 ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "data": {
                    "status": "ok",
                    "totalResults": 70,
                    "articles": [
                                    {
                                        "source": {
                                                    "id": null,
                                                    "name": "<media>"
                                        },
                                        "author": "Astini Mega Sari",
                                        "title": "<title>",
                                        "description": "<description>",
                                        "url": "<url>",
                                        "urlToImage": "<url>",
                                        "publishedAt": "<tanggal>",
                                        "content": "<contetn>"
                                    },
    }
    ```
* Error Response:
    Code: 500
    ```or
    Content:
    {
        "success": false,
        "errorMessage": "Internal Server Error"
    }
    ``` 