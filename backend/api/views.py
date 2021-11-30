from django.shortcuts import render
from django.http import JsonResponse
from .models import *

import time
import secrets

# Create your views here.

def get_client_services(request):
    
    return [{
            "name": "spotify",
            "widgets": [] #spotify
        },
        {
            "name":"youtube",
            "widgets": [] #youtube
        },
        {
            "name":"deezer",
            "widgets": [] #deezer
        }
    ]
    

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
    tk = request.headers['Clac-Token']
    data = UserData.objects.get(token=tk)

    ret = {
        "email": data.email,
        "password": data.password,
        "username": data.username,
        "created_at": data.created_at,
        "phone_number": data.phone_number,
        "widgets": data.widgets,
        "token": data.token,
    }
    return JsonResponse(ret)

def edit(request):
    tk = request.headers['Clac-Token']
    obj = UserData.objects.get(token=tk)
    
    e_mail = request.GET.get('email', obj.email)
    u_name = request.GET.get('username', obj.username)
    p_word = request.GET.get('password', obj.password)
    ph_num = request.GET.get('phone_number', obj.phone_number)
    
    if e_mail: obj.email = e_mail
    if u_name: obj.username = u_name
    if p_word: obj.password = p_word
    if ph_num: obj.phone_number = ph_num
    
    obj.save()

    data = {
        "token": obj.token,
        "email": obj.email,
        "username": obj.username,
        "password": p_word,
        "phone_number": ph_num,
    }    
    return JsonResponse(data)