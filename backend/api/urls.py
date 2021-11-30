
from django.urls import path
from .views import register, signin, unregister

urlpatterns = [
    path('signin', signin),
    path('register', register),
    path('unregister', unregister)
]
