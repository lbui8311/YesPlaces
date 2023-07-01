from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['placeName', 'placeAddress', 'placeCity', 'placeCountry', 'placeDescription', 'placeLink', 'placeType',
                  'profileName', 'profileCity', 'profilePetName',
                  'recipeName', 'recipeIngredients', 'recipeInstructions', 'recipeLocation']