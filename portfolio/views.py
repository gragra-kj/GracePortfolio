from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializer import ProfileSerializer,ProjectSerializer,SkillsSerializer,ExperienceSerialier
from .models import Project,Profile,Skills,WorkExperience

class ProfileViewSet(viewsets.ModelViewSet):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer
    
class ProjectViewSet(viewsets.ModelViewSet):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializer
    
class SkillViewSet(viewsets.ModelViewSet):
    queryset=Skills.objects.all()
    serializer_class=SkillsSerializer       
    
class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset=WorkExperience.objects.all()
    serializer_class=ExperienceSerialier     