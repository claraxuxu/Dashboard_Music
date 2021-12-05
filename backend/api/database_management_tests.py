from django.test import TestCase
from .models import *

import random
import string

def get_random_string(length):
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str
    
def get_random_phone_number():
    letters = string.digits
    result_str = ''.join(random.choice(letters) for i in range(10))
    return int(result_str)

# Create your tests here.

class DatabaseAccountTestCase(TestCase):
    r_username = get_random_string(8)
    r_password = get_random_string(12)
    
    def setUp(self):
        UserData.objects.create(username=self.r_username, password=self.r_password)
        
    def test_userdata_has_random_token(self):
        user = UserData.objects.create(username=self.r_username, password=self.r_password)
        self.assertEqual(type(user.token), str)
        
    def test_userdata_can_be_getted_by_username_and_password(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)
        self.assertEqual(user.username, self.r_username)
        self.assertEqual(user.password, self.r_password)

    def test_userdata_logins_can_be_modified(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)
        n_username = get_random_string(12)
        n_password = get_random_string(8)
        
        user.username = n_username
        user.password = n_password
        user.save()

        self.assertEqual(user.username, n_username)
        self.assertEqual(user.password, n_password)
        
    def test_userdata_infos_can_be_modified(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)
        n_username = get_random_string(12)
        n_password = get_random_string(8)
        n_email = get_random_string(10) + "@" + get_random_string(5) + ".com"
        n_phone_number = get_random_phone_number()
        
        user.username = n_username
        user.password = n_password
        user.email = n_email
        user.phone_number = n_phone_number
        user.save()

        self.assertEqual(user.username, n_username)
        self.assertEqual(user.password, n_password)
        self.assertEqual(user.email, n_email)
        self.assertEqual(user.phone_number, n_phone_number)
        
    def test_userdata_can_be_deleted(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)
        user.delete()
        
        self.assertEqual(len(UserData.objects.all()), 0)
        
class WidgetAccountTestCase(TestCase):
    r_username = get_random_string(8)
    r_password = get_random_string(12)
    
    def setUp(self):
        UserData.objects.create(username=self.r_username, password=self.r_password)
        
    def test_create_widget_to_user(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)

        user.widgets_set.create(services="deezer", feature="best_songs", params="ld2j", clock=60)

        widgets = UserData.objects.get(username=self.r_username, password=self.r_password).widgets_set.all()
        self.assertEqual(len(widgets), 1)
        self.assertEqual(widgets[0].params, "ld2j")

    def test_creat_all_available_widgets_to_user(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)
        
        user.widgets_set.create(services="deezer", feature="best_songs", params="ld2j", clock=60)
        user.widgets_set.create(services="deezer", feature="newest_releases", params="ld2j", clock=60)
        user.widgets_set.create(services="deezer", feature="song_rank", params="ld2j", clock=60)
        user.widgets_set.create(services="deezer", feature="artists_stats", params="ld2j", clock=60)
        user.widgets_set.create(services="napster", feature="best_songs", params="ld2j", clock=60)
        user.widgets_set.create(services="itunes", feature="best_songs", params="ld2j", clock=60)
        
        widgets = UserData.objects.get(username=self.r_username, password=self.r_password).widgets_set.all()
        self.assertEqual(len(widgets), 6)

    def test_edit_widget_to_user(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)

        user.widgets_set.create(services="deezer", feature="best_songs", params="ld2j", clock=60)

        widgets = UserData.objects.get(username=self.r_username, password=self.r_password).widgets_set.all()
        
        w = widgets[0]
        w.params = "kaaris"
        w.save()
        
        self.assertEqual(len(widgets), 1)
        self.assertEqual(widgets[0].params, "kaaris")
        
    def test_delete_user_widget(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)

        user.widgets_set.create(services="deezer", feature="best_songs", params="ld2j", clock=60)

        widgets = UserData.objects.get(username=self.r_username, password=self.r_password).widgets_set.all()
        self.assertEqual(len(widgets), 1)

        w = widgets[0]
        w.delete()

        self.assertEqual(len(user.widgets_set.all()), 0)
        

    def test_delete_user_delete_also_his_widgets(self):
        user = UserData.objects.get(username=self.r_username, password=self.r_password)

        user.widgets_set.create(services="deezer", feature="best_songs", params="ld2j", clock=60)

        widgets = UserData.objects.get(username=self.r_username, password=self.r_password).widgets_set.all()
        self.assertEqual(len(widgets), 1)
        
        user.delete()
        
        self.assertEqual(len(UserData.objects.all()), 0)
        self.assertEqual(len(Widgets.objects.all()), 0)