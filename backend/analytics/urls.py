from django.urls import path
from .views import career_gps_engine, profile_probability

urlpatterns = [
    path('gps/', career_gps_engine, name='career-gps'),
    path('probability/', profile_probability, name='profile-probability'),
]
