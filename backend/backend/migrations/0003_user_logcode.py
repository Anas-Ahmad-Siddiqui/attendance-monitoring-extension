# Generated by Django 3.2.11 on 2023-03-25 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_user_logstatus'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='logCode',
            field=models.IntegerField(default=-1),
        ),
    ]