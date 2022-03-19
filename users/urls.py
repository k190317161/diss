from django.conf.urls import include, url
from .views import UserListView

urlpatterns = [
# url('', UserListView.as_view()),
url('auth/', include('rest_auth.urls')),    
url('auth/register/', include('rest_auth.registration.urls')),
url('users', UserListView.as_view()),
]