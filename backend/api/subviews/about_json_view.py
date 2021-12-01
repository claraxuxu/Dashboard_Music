
def get_client_services(request):
    
    return [{
            "name": "spotify",
            "widgets": []
        },
        {
            "name":"napster",
            "widgets": [{
                "name": "best_songs",
                "description": "Display the artist chosen best songs",
                "params": [{
                    "name": "artist",
                    "type": "string"
                },
                {
                    "name": "clock",
                    "type": "integer"
                }]
            }] 
        },
        {
            "name":"deezer",
            "widgets": [{
                "name": "best_songs",
                "description": "Display the artist chosen best songs",
                "params": [{
                    "name": "artist",
                    "type": "string"
                },
                {
                    "name": "clock",
                    "type": "integer"
                }]
            },
            {
                "name": "newest_songs",
                "description": "Display the artist newest songs",
                "params": [{
                    "name": "artist",
                    "type": "string"
                },
                {
                    "name": "clock",
                    "type": "integer"
                }]
            },
            {
                "name": "playlist_song",
                "description": "Display the song inside a playlist",
                "params": [{
                    "name": "playlist",
                    "type": "string"
                },
                {
                    "name": "clock",
                    "type": "integer"
                }]
            },
            {
                "name": "song rank",
                "description": "Display the rank of a chosen song",
                "params": [{
                    "name": "artist",
                    "type": "string"
                },{
                    "name": "title",
                    "type": "string"
                },
                {
                    "name": "clock",
                    "type": "integer"
                }]
            }]
        }
    ]
    

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip