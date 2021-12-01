
from django.urls import path
from .views import account, widgets

urlpatterns = [
    path('account', account),
    path('widgets', widgets)
]
