import os
import json
from django.conf import settings


def write_json(data):
    file_path = os.path.join(settings.BASE_DIR, 'static/json/locations.json')
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file)
