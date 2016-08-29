from django.conf.urls import url

from . import views

app_name = "tbapp"
urlpatterns = [
    url(r'^events$', views.all_events_view, name='events'),
    url(r'^venues$', views.all_venues_view, name='venues'),
    url(r'^tickets$', views.all_tickets_view, name='tickets'),
    url(r'^users$', views.all_users_view, name='users'),
    url(r'^create_event$', views.create_event, name='create_event'),
]
