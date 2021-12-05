from .deezer_widgets import *
from .napster_widgets import *
from .itunes_widgets import *

def get_data_from_deezer_service(widget, params):
    available_widgets = {
        'best_songs': get_deezer_best_songs,
        'newest_release': get_deezer_newest_release,
        'song_rank': get_deezer_song_rank,
        'artist_stats': get_deezer_artist_stats,
    }
    return available_widgets[widget](params)

def get_data_from_napster_service(widget, params):
    available_widgets = {
        'best_songs': get_napster_best_songs,
    }
    return available_widgets[widget](params)

def get_data_from_itunes_service(widget, params):
    available_widgets = {
        'best_songs': get_itunes_best_songs,
    }
    return available_widgets[widget](params)

def get_widget_data(service, widget, params):
    try:
        available_services = {
            'deezer': get_data_from_deezer_service,
            'napster': get_data_from_napster_service,
            'itunes': get_data_from_itunes_service
        }
        return available_services[service](widget, params)
    except:
        return {}