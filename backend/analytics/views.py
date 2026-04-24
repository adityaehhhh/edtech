from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def career_gps_engine(request):
    """
    Career GPS Engine: Takes student attributes and returns an AI-curated roadmap.
    """
    data = request.data
    location = data.get('location', '')
    degree = data.get('degree', '')
    skills = data.get('skills', [])
    
    # Mock intelligent response based on inputs
    roadmap = [
        {"milestone": 1, "task": "Complete core DSA concepts", "duration": "Week 1-2"},
        {"milestone": 2, "task": f"Build 2 portfolio projects using {skills[0] if skills else 'React'}", "duration": "Week 3-5"},
        {"milestone": 3, "task": f"Apply to 15+ startups in {location if location else 'your city'}", "duration": "Week 6-8"},
    ]
    
    return Response({
        "status": "success",
        "engine": "Career GPS",
        "roadmap": roadmap,
        "recommended_colleges": ["IIT Bombay", "BITS Pilani", "Local Tech Hub"],
        "expected_salary_path": "8 LPA -> 12 LPA -> 20+ LPA"
    })

@api_view(['POST'])
def profile_probability(request):
    """
    Event ROI & Profile Success Probability Engine.
    """
    return Response({
        "internship_probability": "76%",
        "placement_probability": "82%",
        "top_recommended_events": [
            {"name": "National Hackathon", "roi_score": 98},
            {"name": "Cloud Ideathon", "roi_score": 85}
        ]
    })
