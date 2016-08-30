from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic
from django.core import serializers
from django.db.utils import IntegrityError
from .models import Venue, Event, Ticket, User
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

class IndexView(generic.TemplateView):
    template_name = "index.html"


def all_events_view(request):
    events = Event.objects.all()
    data = serializers.serialize("json", events)

    return HttpResponse(data, content_type="application/json")

def all_venues_view(request):
    venues = Venue.objects.all()
    data = serializers.serialize("json", venues)

    return HttpResponse(data, content_type="application/json")

def all_tickets_view(request):
    tickets = Ticket.objects.all()
    data = serializers.serialize("json", tickets)

    return HttpResponse(data, content_type="application/json")

def all_users_view(request):
    users = User.objects.all()
    data = serializers.serialize("json", users)

    return HttpResponse(data, content_type="application/json")


@csrf_exempt
def register_user(request):
    print(request)
    print(request.body)
    try:
        user_data = json.loads(request.body.decode("utf-8"))
        new_user = User.objects.create_user(user_data["username"],
                                            user_data["email"],
                                            user_data["password"])
        return HttpResponse(new_user, status=200)
    except IntegrityError:
        return HttpResponse(status=400)


@csrf_exempt
def create_event(request):
    data = json.loads(request.body.decode("utf-8"))

    name = data["name"]
    description = data["description"]
    start_time = data["start_time"]
    end_time = data["end_time"]
    max_tickets = data["max_tickets"]
    venue = Venue.objects.get(pk=data["venue"])

    event_obj = Event(name=name,
                      description=description,
                      start_time=start_time,
                      end_time=end_time,
                      max_tickets=max_tickets,
                      venue=venue)
    event_obj.save()

    return HttpResponseRedirect(reverse("tbapp:index"))
