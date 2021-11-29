from django.db import models

# Create your models here.

class Logins(models.Model):
    email = models.EmailField(max_length=256)
    password = models.CharField(max_length=30)
    
class UserData(models.Model):
    logins = models.OneToOneField(
        Logins,
        on_delete=models.CASCADE,
        primary_key=True,
    )