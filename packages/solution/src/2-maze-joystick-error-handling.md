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
### {
###   "finished": false
### }
###
### 400 Bad Request - error response: when direction unknown, when moving towards a wall, when already finished
### {
###   "errorId": "49a9ce29-87f2-488b-9270-0f4f3066154c",
###   "errorMessage": "Can not move down because there is a wall"
### }

PUT {{apiBaseUrl}}/maze/{{mazeId}}/move

{
  "direction": "up"
}
```
