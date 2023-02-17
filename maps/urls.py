from django.urls import path
from .import views

urlpatterns = [
    path('urban-locations/', views.urban_locations, name='urban_locations'),
]
