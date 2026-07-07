from rest_framework import serializers
from .models import Profile,Project,Skills,WorkExperience,Education,Certificate

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields='__all__'
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Skills
        fields='__all__'
        
class ExperienceSerialier(serializers.ModelSerializer):
    class Meta:
        model=WorkExperience
        fields='__all__'        

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"        
        
class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = "__all__"        
                        