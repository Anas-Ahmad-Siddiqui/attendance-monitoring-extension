# Generated by Django 3.2.11 on 2023-03-25 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='logStatus',
            field=models.BooleanField(default=False),
        ),
    ]