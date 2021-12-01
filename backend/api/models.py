from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class WidgetsParam(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    
    def __str__(self):
        return "[" + self.name + ", " + self.type + "]"

class Widgets(models.Model):
    services = models.CharField(max_length=50)
    description = models.TextField(max_length=256)
    params = models.ForeignKey(WidgetsParam, on_delete=models.CASCADE)
    clock = models.IntegerField(null=True)
    
    def __str__(self):
        return self.name

class UserData(models.Model):
    email = models.EmailField(max_length=256, null=True)
    password = models.CharField(max_length=30)
    username = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    phone_number = models.CharField(max_length=10, null=True)
    widgets = models.ForeignKey(to=Widgets, null=True, on_delete=models.CASCADE)
    token = models.CharField(max_length=80)
    
    def __str__(self):
        return self.username
    
    
# from api.models import *; UserData.objects.create(username="jonathan", password="jonathan")