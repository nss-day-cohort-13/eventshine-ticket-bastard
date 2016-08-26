from django.conf.urls import url

from . import views

app_name = "tbapp"
urlpatterns = [
    url(r'^events$', views.AllEvents, name='events'),
]
