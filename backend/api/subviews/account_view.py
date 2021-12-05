import secrets

from django.http import JsonResponse
from ..models import *  

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

def unregister(request):
    try:
        tk = request.headers['Clac-Token']
        UserData.objects.get(token=tk).delete()
        data = {
            "token": "no longer exists..."
        }
        return JsonResponse(data)

    except:
        return JsonResponse({"error": "The account doesn't exists"})
    

def get_account(request):
    tk = request.headers['Clac-Token']
    data = UserData.objects.get(token=tk)

    ret = {
        "email": data.email,
        "password": data.password,
        "username": data.username,
        "created_at": data.created_at,
        "phone_number": data.phone_number,
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