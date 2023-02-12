from django.shortcuts import render
from urban.models import Urban
import json


def map_view(request):
    locations = Urban.objects.filter(showmap=True).values_list('latitude', 'longitude')
    formatted_output = [{"lat": item[0], "lng": item[1]} for item in locations]
    const_locations_string = "const locations = [\n" + ",\n".join([f"{{ lat: {item['lat']}, lng: {item['lng']} }}" for item in formatted_output]) + "\n];"
    return render(request, 'map.html', {'const_locations_string': const_locations_string})
