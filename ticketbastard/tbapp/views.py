from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic
from django.core import serializers
from .models import Venue, Event, Ticket, User

# Create your views here.
def all_events_view(request):
    events = Event.objects.all()
    data = serializers.serialize('json', events)

    return HttpResponse(data, content_type='application/json')

def all_venues_view(request):
    venues = Venue.objects.all()
    data = serializers.serialize('json', venues)

    return HttpResponse(data, content_type='application/json')

def all_tickets_view(request):
    tickets = Ticket.objects.all()
    data = serializers.serialize('json', tickets)

    return HttpResponse(data, content_type='application/json')

def all_users_view(request):
    users = User.objects.all()
    data = serializers.serialize('json', users)

    return HttpResponse(data, content_type='application/json')
