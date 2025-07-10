from django.contrib.auth.models import 
from channels.db import database_sync_to_async
from channels.middleware import BaseMiddleware

from rest_framework_simplejwt.tokens import AccessToken

from useraccount.models import User


@database_sync_to_async
def get_user(token_key):
    try:
        token = AccessToken(token_key)
        user_id = token.payload['user_id']
        return User.objects.get(pk=user_id)
    
    except Exception as e:
        return AnonymousUser
    

class TokenAuthMiddleware(BaseMiddleware):
    def __init__(self, inner):
        self.inner = inner