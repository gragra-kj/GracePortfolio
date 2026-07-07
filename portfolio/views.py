from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializer import ProfileSerializer,ProjectSerializer,SkillsSerializer,ExperienceSerialier,EducationSerializer,CertificateSerializer
from .models import Project,Profile,Skills,WorkExperience,Education,Certificate

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
class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer 
    
class CertificateViewSet(viewsets.ModelViewSet):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer       