from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Venue(models.Model):
    name = models.CharField(max_length=200)
    city = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=400)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    max_tickets = models.IntegerField()
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Ticket(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return "{} - {}".format(self.user,
                                self.event)
