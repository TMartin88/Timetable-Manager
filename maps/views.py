from django.http import JsonResponse
from urban.models import Urban

def urban_locations(request):
    data = Urban.objects.filter(showmap=True).values('title', 'latitude', 'longitude', 'showmap')
    locations = []
    for location in data:
        locations.append({
            'name': location['title'],
            'location': {
                'lat': float(location['latitude']),
                'lng': float(location['longitude'])
            },
            'showmap': location['showmap']
        })
    return JsonResponse({'locations': locations})
