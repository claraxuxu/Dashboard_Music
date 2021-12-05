from django.contrib import admin

# Register your models here.
from api.models import *

@admin.register(UserData)
class UserAdmin(admin.ModelAdmin):
    empty_value_display = '-empty-'
    # fields = ('username', 'password')
    date_hierarchy = 'created_at'

@admin.register(Widgets)
class WidgetAdmin(admin.ModelAdmin):
    empty_value_display = '-empty-'