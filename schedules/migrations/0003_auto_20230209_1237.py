# Generated by Django 3.2.16 on 2023-02-09 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedules', '0002_auto_20230208_2236'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='urban',
            name='status',
        ),
        migrations.AddField(
            model_name='urban',
            name='approved',
            field=models.BooleanField(default=False),
        ),
    ]
