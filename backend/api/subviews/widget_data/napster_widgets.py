import requests

def fetch_napster_artist_id(artist):
    url = 'http://api.napster.com/v2.0/search?q="' + artist + '"&type=artist&apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4'
    data = requests.get(url)
    data = data.json()
    artist_id = data['data'][0]['id']
    print(artist_id)
    return artist_id


#####################################################################################

def get_napster_best_songs(artist):
    url = 'http://api.napster.com/v2.2/artists/' + fetch_napster_artist_id(artist) + '/tracks/top?limit=5&apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4'
    data = requests.get(url)
    data = data.json()
    musics = data['tracks']
    
    print(data)
    interests = [
        {
            "title": music["name"],
            "album": music["albumName"]
        } for music in musics
    ]
    
    return interests