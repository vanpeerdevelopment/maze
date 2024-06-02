import requests


def post_maze(api_base_url):
    response = requests.post(api_base_url + "/maze")
    response_dictionary = response.json()
    return response_dictionary["id"]


api_base_url = "http://localhost:3000"
maze_id = post_maze(api_base_url)
print("Maze id: " + maze_id)
