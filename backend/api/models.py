from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class UserData(models.Model):
    email = models.EmailField(max_length=256, null=True)
    password = models.CharField(max_length=30)
    username = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    phone_number = models.CharField(max_length=10, null=True)
    token = models.CharField(max_length=80)

    def __str__(self):
        return self.username

class Widgets(models.Model):
    services = models.CharField(max_length=50)
    feature = models.CharField(max_length=50)
    params = models.CharField(max_length=256, null=True)
    clock = models.IntegerField(null=True)
    userdata = models.ForeignKey(to=UserData, null=True, on_delete=models.CASCADE)
    
    def __str__(self):
        return "["+ self.services + "](" + self.feature + ")"
    