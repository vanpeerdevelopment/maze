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
    requests.put(api_url, json=request_body)


# Hoofdprogramma
api_base_url = "https://maze.zavo.academy"

maze_id = maak_maze(api_base_url)
print('Open je browser en ga naar https://maze.zavo.academy/detail/' + maze_id)
input_gebruiker = input('In welke richting wil je bewegeen: z = ⬆️, s = ⬇️, q = ⬅️, d = ➡️?')
if input_gebruiker == 'z':
    beweeg_in_maze(api_base_url, maze_id, 'up')
elif input_gebruiker == 's':
    beweeg_in_maze(api_base_url, maze_id, 'down')
elif input_gebruiker == 'q':
    beweeg_in_maze(api_base_url, maze_id, 'left')
elif input_gebruiker == 'd':
    beweeg_in_maze(api_base_url, maze_id, 'right')
