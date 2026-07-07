from django.db import models

# Create your models here.
class Profile(models.Model):
    fullname = models.CharField(max_length=100)
    title = models.CharField(max_length=100)

    bio = models.TextField()          # Hero section
    about = models.TextField()        # About section

    profile_image = models.ImageField(upload_to="profile/")
    resume = models.FileField(upload_to="resume/", blank=True, null=True)

    email = models.EmailField()
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    
class Skills(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.PositiveIntegerField(default=80)
    icon = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name
    
class WorkExperience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    start_date = models.CharField(max_length=50)
    end_date = models.CharField(max_length=50, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.role} - {self.company}"    
    
class Project(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField(max_length=200)
    image=models.ImageField()
    github_link=models.URLField()
    live_demo=models.URLField()
    technology=models.CharField(max_length=255) 

class Education(models.Model):
    degree = models.CharField(max_length=150)
    institution = models.CharField(max_length=150)
    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField()
    details = models.TextField(blank=True)

    def __str__(self):
        return f"{self.degree} - {self.institution}"  
    
class Certificate(models.Model):
    title = models.CharField(max_length=150)
    issuer = models.CharField(max_length=150)
    issue_date = models.DateField()
    description = models.TextField(blank=True)
    credential_url = models.URLField()

    def __str__(self):
        return self.title      
       