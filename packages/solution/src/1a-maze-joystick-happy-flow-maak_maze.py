import requests


def maak_maze(api_base_url):
    endpoint = "/maze"
    api_url = api_base_url + endpoint
    response = requests.post(api_url)
    response_dictionary = response.json()
    maze_id = response_dictionary["id"]
    return maze_id


# Hoofdprogramma
api_base_url = "https://maze.zavo.academy"

maze_id = maak_maze(api_base_url)
print('Open je browser en ga naar https://maze.zavo.academy/detail/' + maze_id)
