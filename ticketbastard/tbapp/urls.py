from django.conf.urls import url

from . import views

app_name = "tbapp"
urlpatterns = [
    url(r'^events$', views.AllEvents, name='events'),
    url(r'^venues$', views.AllVenues, name='venues'),
    url(r'^tickets$', views.AllTickets, name='tickets'),
    url(r'^users$', views.AllUsers, name='users'),
]
