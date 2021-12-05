from django.http import JsonResponse
from ..models import *
from .widget_data.widgets import get_widget_data

def get_widgets(request):
    try:
        tk = request.headers['Clac-Token']
        userdata = UserData.objects.get(token=tk).widgets_set.all()
        print(userdata) 
        rep = {
            "size" : len(userdata),
            "widgets": [
                {
                    "id": w.pk,
                    "services": w.services,
                    "feature": w.feature,
                    "params": w.params,
                    "clock": w.clock,
                    "data": get_widget_data(w.services, w.feature, w.params)
                } for w in userdata
        ]}
        return JsonResponse(rep)
    except:
        return JsonResponse({"source": "get_widgets don't work", "error": "The account doesn't exists"}, status=404)
    
def add_widgets(request):
    try:
        tk = request.headers['Clac-Token']
        service = request.GET.get('service', '')
        feature = request.GET.get('feature', '')
        args = request.GET.get('params', '')
        timer = request.GET.get('clock', '60')
        
        userdata = UserData.objects.get(token=tk)
        userdata.widgets_set.create(services=service, feature=feature, params=args, clock=int(timer))

        return get_widgets(request)
    except:
        return JsonResponse({"source": "add_widgets don't work", "error": "The account doesn't exists"}, status=403)

def edit_widgets(request):
    try:
        tk = request.headers['Clac-Token']
        id = request.GET.get('id', '0')
        
        widget = UserData.objects.get(token=tk).widgets_set.get(pk=id)
        
        args = request.GET.get('params', widget.params)
        timer = request.GET.get('clock', str(widget.clock))
        
        widget.params = args
        widget.clock = int(timer)
        widget.save()

        return get_widgets(request)
    except:
        return JsonResponse({"error": "The account doesn't exists"}, status=403)

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
        return JsonResponse({"error": "The account doesn't exists"}, status=403)