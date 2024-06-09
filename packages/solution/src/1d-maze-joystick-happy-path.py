import requests


def maak_maze(api_base_url):
    endpoint = "/maze"
    api_url = api_base_url + endpoint
    response = requests.post(api_url)
    response_dictionary = response.json()
    maze_id = response_dictionary["id"]
    return maze_id


def beweeg_in_maze(api_base_url, maze_id, richting):
    endpoint = "/maze/" + maze_id + "/move"
    api_url = api_base_url + endpoint
    request_body = {"direction": richting}
    response = requests.put(api_url, json=request_body)
    response_dictionary = response.json()
    finished = response_dictionary["finished"]
    return finished


# Hoofdprogramma
api_base_url = "https://maze.zavo.academy"

maze_id = maak_maze(api_base_url)
finished = False
while not finished:
    input_gebruiker = input('In welke richting wil je bewegeen: d = ⬆️, s = ⬇️, q = ⬅️, d = ➡️?')
    if input_gebruiker == 'z':
        finished = beweeg_in_maze(api_base_url, maze_id, 'up')
    elif input_gebruiker == 's':
        finished = beweeg_in_maze(api_base_url, maze_id, 'down')
    elif input_gebruiker == 'q':
        finished = beweeg_in_maze(api_base_url, maze_id, 'left')
    elif input_gebruiker == 'd':
        finished = beweeg_in_maze(api_base_url, maze_id, 'right')