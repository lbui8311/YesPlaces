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
        fields = ['id', 'content', 'created_at']


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'content', 'created_at']

class HotelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'review']

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'profileName', 'profileCity', 'profilePetName']


class ProfilePlaceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProfilePlace
        fields = ['id', 'placeName', 'placeAddress', 'placeCity', 'placeCountry', 'placeDescription', 'placeLink', 'placeType']

class ProfileRecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProfileRecipe
        fields = ['id', 'recipeName', 'recipeIngredients', 'recipeInstructions', 'recipeLocation', 'recipePetFriendly']