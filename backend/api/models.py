from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class WidgetsParam(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    
    def __str__(self):
        return "[" + self.name + ", " + self.type + "]"

class Widgets(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=256)
    params = models.ForeignKey(WidgetsParam, blank=True, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

class UserData(models.Model):
    email = models.EmailField(max_length=256)
    password = models.CharField(max_length=30)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    created_at = models.DateTimeField()
    widgets = models.ForeignKey(to=Widgets, blank=True, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.first_name + " " + self.last_name