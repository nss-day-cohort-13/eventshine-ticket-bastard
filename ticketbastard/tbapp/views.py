from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse, HttpRequest
from django.contrib.auth import authenticate, login
from django.urls import reverse
from django.views import generic
from django.core import serializers
from django.db.utils import IntegrityError
from .models import Venue, Event, Ticket, User
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers.json import DjangoJSONEncoder
import json

# Create your views here.

class IndexView(generic.TemplateView):
    template_name = "index.html"

def login_view(request):
    print(request.body)
    data = json.loads(request.body.decode("utf-8"))
    username = data['username']
    password = data['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)

        # all distinct tickets purchased by the current user
        user_tickets = Ticket.objects.filter(user=user).values('event').distinct()

        # list of dictionaries of times and ids for each event for the tickets above
        user_events = Event.objects.filter(id__in=[ticket['event'] for ticket in user_tickets])

        conflict_events = []

        # compares each event start time to see if it falls between any other event's start and end times
        for event_to_test in user_events:
            for event_to_compare in user_events:
                if (event_to_test.id != event_to_compare.id
                    and event_to_compare.start_time <= event_to_test.start_time <= event_to_compare.end_time):
                        conflict_events.append(event_to_test)

        data = serializers.serialize("json", conflict_events)
        return HttpResponse(data, content_type="application/json", status=200)
    else:
        return HttpResponse(status=400)

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


def create_event(request):
    data = json.loads(request.body.decode("utf-8"))

    name = data["name"]
    description = data["description"]
    start_time = data["start_time"]
    end_time = data["end_time"]
    max_tickets = data["max_tickets"]
    venue = Venue.objects.get(pk=data["venue"])

    try:
        event_obj = Event(name=name,
                          description=description,
                          start_time=start_time,
                          end_time=end_time,
                          max_tickets=max_tickets,
                          venue=venue)
        event_obj.save()

        return HttpResponse(status=200)

    except IntegrityError:
        return HttpResponse(status=400)


def create_venue(request):
    data = json.loads(request.body.decode("utf-8"))
    name = data["name"]
    city = data["city"]

    try:
        venue_obj = Venue(name=name,
                          city=city)
        venue_obj.save()

        return HttpResponse(status=200)

    except IntegrityError:
        return HttpResponse(status=400)
