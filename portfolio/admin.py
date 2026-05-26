from django.contrib import admin

# Register your models here.
from .models import Profile,Skills,Project
admin.site.register(Profile)
admin.site.register(Skills)
admin.site.register(Project)