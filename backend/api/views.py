from django.shortcuts import render
from django.http import JsonResponse

import time

# Create your views here.

def get_client_services(request):
    pass

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def about_json(request):
    data = {
        "client": {
            "host": get_client_ip(request)
        },
        "server": {
            "current_time": time.time(),
            "services": get_client_services(request)
        }
    }
    return JsonResponse()