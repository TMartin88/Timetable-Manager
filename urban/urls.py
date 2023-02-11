from . import views
from django.urls import path
from urban import views

urlpatterns = [
    path("urban/list", views.get_urban_list, name="urban_list"),
    path("urban/add", views.add_urban, name="add"),
    path("urban/edit<urban_id>", views.edit_urban, name="edit"),
    path("urban/toggle<urban_id>", views.toggle_urban, name="toggle"),
    path("urban/delete<urban_id>", views.delete_urban, name="delete"),
]
