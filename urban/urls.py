from . import views
from django.urls import path
from urban import views

urlpatterns = [
    path("list/", views.list_urban, name="urban_list"),
    path("add/", views.add_urban, name="add"),
    path("edit/<urban_id>/", views.edit_urban, name="edit"),
    path("toggle/<urban_id>", views.toggle_urban, name="toggle"),
    path("delete/<urban_id>", views.delete_urban, name="delete"),
]
