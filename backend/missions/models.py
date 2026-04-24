from django.db import models
from users.models import CustomUser

class Mission(models.Model):
    student = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='missions')
    goal = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    is_active = models.BooleanField(default=True)
    completion_percentage = models.FloatField(default=0.0)
    
    def __str__(self):
        return f"{self.student.username}'s 90-Day Mission to {self.goal}"

class MissionTask(models.Model):
    mission = models.ForeignKey(Mission, on_delete=models.CASCADE, related_name='tasks')
    day_number = models.IntegerField()
    title = models.CharField(max_length=255)
    task_type = models.CharField(max_length=50) # 'course', 'event', 'application', 'resume'
    is_completed = models.BooleanField(default=False)
