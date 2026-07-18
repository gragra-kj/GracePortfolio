from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from django.conf.urls.static import static

def media_test(request):
    path = settings.MEDIA_ROOT / "profile" / "coding_programming_computer_technology_work.jpeg"

    return JsonResponse({
        "exists": path.exists(),
        "path": str(path),
    })

def home(request):
    return JsonResponse({
        "message": "Grace Portfolio API is running!"
    })

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("portfolio.urls")),
    path("api/contact/", include("contact.urls")),
    path("media-test/", media_test),
]

# Serve media files
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)