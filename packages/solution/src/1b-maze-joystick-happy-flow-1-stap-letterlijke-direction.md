```http request
### Create a new maze
### 200 OK - success response
### {
###   "id": "98525427-d369-4bde-8fb8-ea03363d2e7c",
### }

POST {{apiBaseUrl}}/maze



### Move in the maze with id in the requested direction
### Request: geldige directions: up, down, left, right
### 200 OK - success response

PUT {{apiBaseUrl}}/maze/{{mazeId}}/move

{
  "direction": "up"
}
```
