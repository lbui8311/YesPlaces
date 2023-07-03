# Generated by Django 4.2.2 on 2023-07-02 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0004_hotel_petrestaurant_recipe'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profileName', models.CharField(max_length=100, verbose_name='Change Display Name:')),
                ('profileCity', models.CharField(max_length=100, verbose_name='Enter Location:')),
                ('profilePetName', models.CharField(max_length=100, verbose_name='Pet Name:')),
            ],
        ),
        migrations.CreateModel(
            name='ProfilePlace',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('placeName', models.CharField(max_length=100, verbose_name='Add a Place:')),
                ('placeAddress', models.CharField(max_length=100, verbose_name='Street Address:')),
                ('placeCity', models.CharField(max_length=100, verbose_name='City Address:')),
                ('placeCountry', models.CharField(max_length=100, verbose_name='Country:')),
                ('placeDescription', models.CharField(max_length=255, verbose_name='Pet Name:')),
                ('placeLink', models.CharField(max_length=100, verbose_name='Link:')),
                ('placeType', models.CharField(max_length=100, verbose_name='Restaurant, Pet Restaurant, or Hotel?:')),
            ],
        ),
        migrations.CreateModel(
            name='ProfileRecipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipeName', models.CharField(max_length=100, verbose_name='Add a Place:')),
                ('recipeIngredients', models.CharField(max_length=100, verbose_name='Street Address:')),
                ('recipeInstructions', models.CharField(max_length=100, verbose_name='City Address:')),
                ('recipeLocation', models.CharField(max_length=100, verbose_name='Country:')),
                ('recipePetFriendly', models.BooleanField(verbose_name='Pet-friendly:')),
            ],
        ),
    ]