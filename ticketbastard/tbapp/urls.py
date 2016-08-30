from django.conf.urls import url

from . import views

app_name = "tbapp"
urlpatterns = [
    url(r"^$", views.IndexView.as_view(), name="index"),
    url(r"^login$", views.login_view, name="login"),
    url(r"^events$", views.all_events_view, name="events"),
    url(r"^venues$", views.all_venues_view, name="venues"),
    url(r"^tickets$", views.all_tickets_view, name="tickets"),
    url(r"^users$", views.all_users_view, name="users"),
    url(r"^create_event$", views.create_event, name="create_event"),
    url(r"^register_user$", views.register_user, name="register_user"),
    url(r"^create_venue$", views.create_venue, name="create_venue"),
]
