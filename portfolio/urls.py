from .views import ProfileViewSet,ProjectViewSet,SkillViewSet,WorkExperienceViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('profile',ProfileViewSet)
router.register('project',ProjectViewSet)
router.register('skills',SkillViewSet)
router.register('experience',WorkExperienceViewSet)

urlpatterns = router.urls
