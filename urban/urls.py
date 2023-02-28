from . import views
from django.urls import path
from .views  import UrbanList

urlpatterns = [
    path("urban/", UrbanList.as_view(), name="urban_list"),
    path("add/", views.add_urban, name="add"),
    path("edit/<urban_id>/", views.edit_urban, name="edit"),
    path("toggle/<urban_id>", views.toggle_urban, name="toggle"),
    path("delete/<urban_id>", views.delete_urban, name="delete"),
]
