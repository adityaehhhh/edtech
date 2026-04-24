from django.db import models
from users.models import CustomUser

class Event(models.Model):
    EVENT_TYPES = (
        ('hackathon', 'Hackathon'),
        ('ideathon', 'Ideathon'),
        ('workshop', 'Workshop'),
        ('contest', 'Contest'),
    )
    organizer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='events_hosted')
    title = models.CharField(max_length=255)
    event_type = models.CharField(max_length=50, choices=EVENT_TYPES)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    rewards = models.CharField(max_length=255, blank=True, null=True)
    skills_gained = models.JSONField(default=list, blank=True)
    roi_score = models.FloatField(default=0.0) # Event ROI Engine score
    
    def __str__(self):
        return self.title

class EventRegistration(models.Model):
    student = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='event_registrations')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    team_name = models.CharField(max_length=100, blank=True, null=True)
    performance_score = models.IntegerField(default=0)
    registered_on = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.student.username} registered for {self.event.title}"
