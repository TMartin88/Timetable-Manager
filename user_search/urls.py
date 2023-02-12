from django.urls import path
from .views import SearchResultsList

urlpatterns = [
    path("search/", SearchResultsList.as_view(), name="search_results"),
]
