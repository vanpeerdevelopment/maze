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
    if response.status_code == 200:
        finished = response_dictionary["finished"]
        on_gold = response_dictionary["standingOnGold"]
        if on_gold:
            print("⚜️ Onder je voeten ligt goud begraven")
        return finished
    else:
        fout_boodschap = response_dictionary["errorMessage"]
        print("❌ " + fout_boodschap)
        return False


def graaf_goud(api_base_url, maze_id):
    endpoint = "/maze/" + maze_id + "/gold"
    api_url = api_base_url + endpoint
    response = requests.get(api_url)
    response_dictionary = response.json()
    if response.status_code == 200:
        print("⚜️ Goud opgegraven")
        finished = response_dictionary["finished"]
        return finished
    else:
        fout_boodschap = response_dictionary["errorMessage"]
        print("❌ " + fout_boodschap)
        return False


# Hoofdprogramma
api_base_url = "https://maze.zavo.academy"

maze_id = maak_maze(api_base_url)
print('Open je browser en ga naar https://maze.zavo.academy/detail/' + maze_id)
finished = False
while not finished:
    input_gebruiker = input('In welke richting wil je bewegeen: d = ⬆️, s = ⬇️, q = ⬅️, d = ➡️, g = ⚜️?')
    if input_gebruiker == 'z':
        finished = beweeg_in_maze(api_base_url, maze_id, 'up')
    elif input_gebruiker == 's':
        finished = beweeg_in_maze(api_base_url, maze_id, 'down')
    elif input_gebruiker == 'q':
        finished = beweeg_in_maze(api_base_url, maze_id, 'left')
    elif input_gebruiker == 'd':
        finished = beweeg_in_maze(api_base_url, maze_id, 'right')
    elif input_gebruiker == 'g':
        finished = graaf_goud(api_base_url, maze_id)
    else:
        print('⚠️ Dit is geen geldig input!')
print('🎉 Goed gedaan, je hebt het doel bereikt!')
