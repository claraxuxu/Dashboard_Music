import requests

def get_deezer_best_songs(artist):
    url = 'https://api.deezer.com/search?q=artist:"' + artist + '"'
    data = requests.get(url)
    data = data.json()
    interests = {
        
    }
    artist_id = data['data'][0]['artist']['id']
    return {}

def get_deezer_newest_songs(url):
    pass

def get_deezer_playlist_songs(url):
    pass

def get_deezer_song_rank(url):
    pass
