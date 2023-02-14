from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Urban
from .serializers import UrbanSerializer
from .helper import write_json
import json


def update_json_file(sender, instance, **kwargs):
    # Now working with Urban objects
    urbans = Urban.objects.all()
    # Now the Json file structure is important
    data = {'locations': []}
    for urban in urbans:
        data['locations'].append(
            {
                'location': {
                    'lat': urban.latitude,
                    'lng': urban.longitude
                },
                'name': urban.title,
                'showmap': urban.showmap
            }
        )

    try:
        with open('static/json/locations.json', 'w') as file:
            json.dump(data, file)
    except FileNotFoundError as e:
        print(f"Error updating JSON file: {e}")

    return data


@receiver(post_save, sender=Urban)
def update_on_save(sender, instance, **kwargs):
    update_json_file(sender, instance, **kwargs)


@receiver(post_delete, sender=Urban)
def update_on_delete(sender, instance, **kwargs):
    update_json_file(sender, instance, **kwargs)
