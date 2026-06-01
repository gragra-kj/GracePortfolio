from .views import ProfileViewSet,ProjectViewSet,SkillViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('profile',ProfileViewSet)
router.register('project',ProjectViewSet)
router.register('skills',SkillViewSet)

urlpatterns = router.urls
