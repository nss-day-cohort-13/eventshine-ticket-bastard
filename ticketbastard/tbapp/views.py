from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic
from django.core import serializers
from .models import Venue, Event, Ticket

# Create your views here.
def AllEvents(request):
    events = Event.objects.all()
    data = serializers.serialize('json', events)

    return HttpResponse(data, content_type='application/json')
