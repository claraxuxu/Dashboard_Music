from django.http import JsonResponse
from .models import *

from rest_framework.decorators import api_view

from .subviews.about_json_view import get_client_ip, get_client_services
from .subviews.account_view import signin, register, unregister, get_account, edit
from .subviews.widgets_view import *

import time

# Create your views here.


@api_view(['GET'])
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

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def account(request):
    if request.method == 'GET':
        try:
            return get_account(request)
        except:
            return signin(request)
    if request.method == 'POST':
        return register(request)
    if request.method == 'PUT':
        return edit(request)
    if request.method == 'DELETE':
        return unregister(request)
    return JsonResponse({'status': 404})


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def widgets(request):
    if request.method == 'GET':
        return get_widgets(request)
    if request.method == 'POST':
        return add_widgets(request)
    if request.method == 'PUT':
        return edit_widgets(request)
    if request.method == 'DELETE':
        return delete_widgets(request)
    return JsonResponse({'status': 404})