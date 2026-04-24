from rest_framework.decorators import api_view
from rest_framework.response import Response
import nltk
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize

# Ensure datasets are downloaded
try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')
try:
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()

@api_view(['POST'])
def chatbot_query(request):
    user_input = request.data.get('message', '').lower()
    
    if not user_input:
        return Response({"response": "Please say something."})
        
    tokens = word_tokenize(user_input)
    words = [lemmatizer.lemmatize(word) for word in tokens]
    
    # Simple Intent Recognition MVP using NLP lemmatization
    if 'plastic' in words:
        return Response({
            "response": "Here is how to handle plastics:\n- Recycle plastics locally\n- Reuse bottles\n- Avoid burning plastic",
            "intent": "environment"
        })
    elif 'internship' in words or 'python' in words:
        return Response({
            "response": "Found Python Internships in your area. Check the Job Board!",
            "intent": "job_search",
            "action": "redirect_to_jobs"
        })
    elif 'college' in words or 'nearby' in words:
        return Response({
            "response": "Opening the India Opportunity Heatmap for nearby colleges.",
            "intent": "college_search",
            "action": "redirect_to_map"
        })
    elif 'hackathon' in words:
        return Response({
            "response": "There are 5 upcoming hackathons this week. Check the Events tab.",
            "intent": "event_search"
        })
    else:
        return Response({"response": "I am your SkillOrbit AI Assistant. Ask me about internships, colleges, or hackathons."})
