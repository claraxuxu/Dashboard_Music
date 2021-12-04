import requests

def fetch_itunes_artist_id(artist:str):
    data = requests.get('https://itunes.apple.com/search?media=music&term=' + artist.replace(' ', '+') + '&limit=1').json()
    artist_id = data['results'][0]['artistId']
    return artist_id

def get_itunes_best_songs(artist):
    musics = requests.get('https://itunes.apple.com/lookup?id=' + str(fetch_itunes_artist_id(artist)) + '&entity=song&limit=5').json()
    
    interests = [
        {
            "title": music["trackName"],
            "album": music["collectionName"]
        } for music in musics['results'][1:]
    ]
    return interests