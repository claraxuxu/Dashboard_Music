import requests
from datetime import datetime as dt

def fetch_deezer_artist_id(artist):
    url = 'https://api.deezer.com/search?q=artist:"' + artist + '"'
    data = requests.get(url)
    data = data.json()
    artist_id = data['data'][0]['artist']['id']
    return artist_id

def album_dates_comparer(data):
    interests = {"release_date": "0001-01-01"}
    
    for album in data['data']:
        if dt.strptime(album['release_date'], "%Y-%m-%d") > dt.strptime(interests["release_date"], "%Y-%m-%d"):
            interests = album
    return interests

def fetch_deezer_song_data(param):
    url = 'https://api.deezer.com/search/track?q="' + param + '"'
    data = requests.get(url)
    data = data.json()
    song_data = data['data'][0]
    return song_data
    

##################################################################################################    


def get_deezer_best_songs(artist):
    url = 'https://api.deezer.com/artist/' + str(fetch_deezer_artist_id(artist)) + '/top?limit=10'
    data = requests.get(url)
    data = data.json()
    
    interests = [{
        "title": music["title"],
        "link": music["link"]
        } for music in data['data']
    ]
    return interests

def get_deezer_newest_release(params):
    url = 'https://api.deezer.com/artist/' + str(fetch_deezer_artist_id(params)) + '/albums'
    data = requests.get(url)
    album = album_dates_comparer(data.json())
    
    interests = {
        "title": album["title"],
        "release_date": album["release_date"],
        "link": album["link"],
        "cover": album["cover_big"]
    }
    return interests

def get_deezer_song_rank(param):
    music = fetch_deezer_song_data(param)
    interests = {
        "artist": music["artist"]["name"],
        "title": music["title"],
        "rank": music["rank"],
        "cover": music['album']["cover_big"]
    }
    return interests

def get_deezer_artist_stats(artist):
    url = 'https://api.deezer.com/artist/' + str(fetch_deezer_artist_id(artist))
    data = requests.get(url)
    artist_data = data.json()
    interests = {
        "artist": artist_data['name'],
        "cover": artist_data['picture_medium'],
        "nb_album": artist_data['nb_album'],
        "nb_fan": artist_data['nb_fan'],
    }
    return interests