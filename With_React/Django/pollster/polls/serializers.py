from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['username', 'password']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'password']

class RestaurantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'review']

class PetRestaurantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PetRestaurant
        fields = ['id', 'name', 'review']


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'review']

class HotelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'review']