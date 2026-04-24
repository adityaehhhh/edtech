from django.db import models

class Institute(models.Model):
    name = models.CharField(max_length=255)
    location_lat = models.FloatField(blank=True, null=True)
    location_lng = models.FloatField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    rating = models.FloatField(default=0.0)
    placement_percentage = models.FloatField(default=0.0)
    fees = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    student_strength = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
