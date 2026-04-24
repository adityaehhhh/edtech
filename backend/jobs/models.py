from django.db import models
from users.models import CustomUser

class Job(models.Model):
    JOB_TYPES = (
        ('job', 'Full-Time Job'),
        ('internship', 'Internship'),
        ('remote', 'Remote Job'),
        ('startup', 'Startup Role'),
    )
    recruiter = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='jobs_posted')
    title = models.CharField(max_length=255)
    description = models.TextField()
    job_type = models.CharField(max_length=20, choices=JOB_TYPES, default='job')
    location = models.CharField(max_length=100)
    salary_range = models.CharField(max_length=100, blank=True, null=True)
    required_skills = models.JSONField(default=list, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Application(models.Model):
    student = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='applications')
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    status = models.CharField(max_length=50, default='applied')
    resume_score = models.IntegerField(default=0) # Extracted by Resume Analyzer
    applied_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.username} - {self.job.title}"
