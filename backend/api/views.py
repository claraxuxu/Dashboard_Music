from django.shortcuts import render
from django.http import JsonResponse
from .models import *

import time
import secrets

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
            "current_time": round(time.time()),
            "services": get_client_services(request)
        }
    }
    return JsonResponse(data)

def signin(request):
    
    u_name = request.GET.get('username', '')
    p_word = request.GET.get('password', '')
    
    if (not u_name) or (not p_word) or (not UserData.objects.filter(username=u_name, password=p_word).count()):
        return JsonResponse({"error": "Bad username or password"})

    data = {
        "token": UserData.objects.get(username=u_name, password=p_word).token
    }
    return JsonResponse(data)

def register(request):
    
    u_name = request.GET.get('username', '')
    p_word = request.GET.get('password', '')
    
    if (not u_name) or (not p_word):
        return JsonResponse({"error": "Incorrect username or password"})
    if UserData.objects.filter(username=u_name).count():
        return JsonResponse({"error": "The account already exists"})
    
    UserData.objects.create(username=u_name, password=p_word, token=secrets.token_urlsafe(16))
    
    data = {
        "token": UserData.objects.get(username=u_name, password=p_word).token
    }
    return JsonResponse(data)
    
def edit(request):
    pass

def unregister(request):
    u_name = request.GET.get('username', '')
    p_word = request.GET.get('password', '')
    
    if (not u_name) or (not p_word) or (not UserData.objects.filter(username=u_name, password=p_word).count()):
        return JsonResponse({"error": "The account doesn't exists"})

    
    UserData.objects.get(username=u_name, password=p_word).delete()
    
    data = {
        "token": "no longer exists..."
    }
    return JsonResponse(data)

def account(request):
    pass