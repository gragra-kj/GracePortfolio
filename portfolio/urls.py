from .views import ProfileViewSet,ProjectViewSet,CertificateViewSet,SkillViewSet,WorkExperienceViewSet,EducationViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('profile',ProfileViewSet)
router.register('project',ProjectViewSet)
router.register('skills',SkillViewSet)
router.register('experience',WorkExperienceViewSet)
router.register('education',EducationViewSet)
router.register('certificates',CertificateViewSet)

urlpatterns = router.urls
