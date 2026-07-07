from django.contrib import admin

# Register your models here.
from .models import Profile,Skills,Project,WorkExperience
admin.site.register(Profile)
admin.site.register(Skills)
admin.site.register(Project)
admin.site.register(WorkExperience)