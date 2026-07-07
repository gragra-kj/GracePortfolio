from .views import ProfileViewSet,ProjectViewSet,SkillViewSet,WorkExperienceViewSet,EducationViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('profile',ProfileViewSet)
router.register('project',ProjectViewSet)
router.register('skills',SkillViewSet)
router.register('experience',WorkExperienceViewSet)
router.register('education',EducationViewSet)

urlpatterns = router.urls
