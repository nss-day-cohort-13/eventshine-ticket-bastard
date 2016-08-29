from django.contrib import admin
from .models import Venue, Event, Ticket

# Register your models here.


class VenueAdmin(admin.ModelAdmin):
    list_display = ("name")


class EventAdmin(admin.ModelAdmin):
    list_display = ("name")


admin.site.register(Venue)
admin.site.register(Event)
admin.site.register(Ticket)
