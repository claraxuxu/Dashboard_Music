import requests
from .deezer_widgets import *

def get_invalid_data():
    return {}


def get_data_from_deezer_service(widget, url):
    available_widgets = {
        'best_songs': get_deezer_best_songs,
        'newest_songs': get_deezer_newest_songs,
        'playlist_song': get_deezer_playlist_songs,
        'song_rank': get_deezer_song_rank,
    }
    return available_widgets[widget](url)

def get_data_from_napster_service(widget, url):
    pass

def get_data_from_tidal_service(widget, url):
    pass

def get_widget_data(service, widget, url):
    available_services = {
        'deezer': get_data_from_deezer_service,
        'napster': get_data_from_napster_service,
        'tidal': get_data_from_tidal_service
    }
    return available_services[service](widget, url)