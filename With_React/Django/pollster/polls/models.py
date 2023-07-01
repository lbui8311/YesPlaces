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


class Profile(models.Model):
    placeName = models.CharField(max_length=30)
    placeAddress = models.CharField(max_length=100)
    placeCity = models.CharField(max_length=100)
    placeCountry = models.CharField(max_length=100)
    placeDescription = models.CharField(max_length=256)
    placeLink = models.CharField(max_length=100)
    placeType = models.CharField(max_length=50)

    profileName = models.CharField(max_length=100)
    profileCity = models.CharField(max_length=100)
    profilePetName = models.CharField(max_length=100)

    recipeName = models.CharField(max_length=100)
    recipeIngredients = models.CharField(max_length=255)
    recipeInstructions = models.CharField(max_length=255)
    recipeLocation = models.CharField(max_length=100)

