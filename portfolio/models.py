from django.db import models

# Create your models here.
class Profile(models.Model):
    fullname=models.CharField(max_length=50)
    title=models.CharField(max_length=50)
    bio=models.TextField()
    profile_image=models.ImageField(upload_to='profile/')
    email=models.EmailField()
    git=models.URLField(blank=True)
    linkedin=models.URLField(blank=True)
    
    def __str__(self):
        return self.fullname
    
    