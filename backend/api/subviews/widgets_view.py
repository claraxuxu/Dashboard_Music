from django.http import JsonResponse
from ..models import *

def get_widgets(request):
    try:
        tk = request.headers['Clac-Token']
        userdata = UserData.objects.get(token=tk).widgets_set.all()
        
        rep = {
            "widgets": [
                {
                    "id": w.pk,
                    "services": w.services,
                    "feature": w.feature,
                    "url_api": w.url_api,
                    "clock": w.clock,
                } for w in userdata
        ]}
        return JsonResponse(rep)
    except:
        return JsonResponse({"error": "The account doesn't exists"})
    
def add_widgets(request):
    try:
        tk = request.headers['Clac-Token']
        service = request.GET.get('service', '')
        feature = request.GET.get('feature', '')
        url = request.GET.get('url_api', '')
        timer = request.GET.get('clock', '60')
        
        userdata = UserData.objects.get(token=tk)
        userdata.widgets_set.create(services=service, feature=feature, url_api=url, clock=int(timer))

        return get_widgets(request)
    except:
        return JsonResponse({"error": "The account doesn't exists"})

def edit_widgets(request):
    try:
        tk = request.headers['Clac-Token']
        id = request.GET.get('id', '0')
        
        widget = UserData.objects.get(token=tk).widgets_set.get(pk=id)
        
        url = request.GET.get('url_api', widget.url_api)
        timer = request.GET.get('clock', str(widget.clock))
        
        widget.url_api = url
        widget.clock = int(timer)
        widget.save()

        return get_widgets(request)
    except:
        return JsonResponse({"error": "The account doesn't exists"})

def delete_widgets(request):
    try:
        tk = request.headers['Clac-Token']
        id = request.GET.get('id', '0')
        
        if id == 'all':
            UserData.objects.get(token=tk).widgets_set.all().delete()
        else:
            UserData.objects.get(token=tk).widgets_set.get(pk=int(id)).delete()
        return get_widgets(request)
    except:
        return JsonResponse({"error": "The account doesn't exists"})