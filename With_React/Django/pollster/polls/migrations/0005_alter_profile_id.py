# Generated by Django 4.2.2 on 2023-07-02 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0004_hotel_petrestaurant_recipe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]