# Generated by Django 3.2.16 on 2023-02-19 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedules', '0005_delete_urban'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='timetable_pdf',
        ),
        migrations.AddField(
            model_name='post',
            name='timetable_pdf_url',
            field=models.URLField(blank=True),
        ),
    ]