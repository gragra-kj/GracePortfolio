from django.shortcuts import render
from rest_framework import viewsets
from .models import ContactMessage

# Create your views here.from
from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset=ContactMessage.objects.all()
    serializer_class=ContactSerializer