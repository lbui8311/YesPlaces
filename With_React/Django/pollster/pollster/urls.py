"""pollster URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
# from django.conf.urls import url
from rest_framework import routers
from polls.views import *
from polls import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'restaurants', views.RestaurantViewSet)
router.register(r'pet-restaurants', views.PetRestaurantViewSet)
router.register(r'recipes', views.RecipeViewSet)
router.register(r'hotels', views.HotelViewSet)
router.register(r'profile', views.ProfileViewSet)
router.register(r'profile', views.ProfilePlaceViewSet)
router.register(r'profile', views.ProfileRecipeViewSet)


urlpatterns = [
    # path('', include('pages.urls')),
    path('',include(router.urls)),
    # path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
    path('', ReactView.as_view(), name="Yes!Places"),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
