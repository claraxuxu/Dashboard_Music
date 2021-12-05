from django.test import TestCase
from django.test.client import RequestFactory
from . import views
from django.http import JsonResponse

import random
import string
import ast

def get_random_string(length):
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str
    
def get_random_phone_number():
    letters = string.digits
    result_str = ''.join(random.choice(letters) for i in range(10))
    return int(result_str)

def get_json_from_request(response):
    dict_str = response.content.decode("UTF-8")
    return ast.literal_eval(dict_str)

# Create your tests here.

class AccountRequestsTest(TestCase):
    r_username = get_random_string(8)
    r_password = get_random_string(12)
    r_token = ''
    
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()

    def test_create_an_account_and_signin(self):
        request = self.factory.post('/api/account/?username=' + self.r_username + '&password=' + self.r_password)
        response : JsonResponse = views.account(request)

        data = get_json_from_request(response)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(type(data['token']), str)
        
        self.r_token = data['token']
        print(self.r_token)
        
        # request = self.factory.get('/api/account/', headers={'Clac-Token': self.r_token})
        # response : JsonResponse = views.account(request)

        # data = get_json_from_request(response)
        
        # print(data)