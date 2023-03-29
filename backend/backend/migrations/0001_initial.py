# Generated by Django 3.2.11 on 2023-03-25 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(help_text='Hash digest of password SHA256', max_length=70)),
                ('first_name', models.CharField(help_text='Enter first name', max_length=50)),
                ('last_name', models.CharField(help_text='Enter lats name', max_length=50)),
                ('email', models.EmailField(help_text='Enter email id', max_length=50)),
                ('isTeacher', models.BooleanField(default=False, help_text='Is the user a teacher')),
            ],
        ),
    ]