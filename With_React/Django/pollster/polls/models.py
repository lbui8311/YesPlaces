from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text


class React(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

class Restaurant(models.Model):
    name = models.CharField(max_length=30)
    review = models.CharField(max_length=100)

class PetRestaurant(models.Model):
    name = models.CharField(max_length=30)
    review = models.CharField(max_length=100)

class Recipe(models.Model):
    name = models.CharField(max_length=30)
    review = models.CharField(max_length=100)

class Hotel(models.Model):
    name = models.CharField(max_length=30)
    review = models.CharField(max_length=100)

class Profile(models.Model):
    profileName = models.CharField("Change Display Name:", max_length=100)
    profileCity = models.CharField("Enter Location:", max_length=100)
    profilePetName = models.CharField("Pet Name:", max_length=100)

class ProfilePlace(models.Model):
    placeName = models.CharField("Add a Place:", max_length=100)
    placeAddress = models.CharField("Street Address:", max_length=100)
    placeCity = models.CharField("City Address:", max_length=100)
    placeCountry = models.CharField("Country:", max_length=100)
    placeDescription = models.CharField("Pet Name:", max_length=255)
    placeLink = models.CharField("Link:", max_length=100)
    placeType = models.CharField("Restaurant, Pet Restaurant, or Hotel?:", max_length=100)

class ProfileRecipe(models.Model):
    recipeName = models.CharField("Add a Place:", max_length=100)
    recipeIngredients = models.CharField("Street Address:", max_length=100)
    recipeInstructions = models.CharField("City Address:", max_length=100)
    recipeLocation = models.CharField("Country:", max_length=100)
    recipePetFriendly = models.BooleanField("Pet-friendly:", False)

