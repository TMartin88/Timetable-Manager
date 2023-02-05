from django.urls import path
from .views import SearchResultsList

app_name = 'user_search'

urlpatterns = [
    path("search/", SearchResultsList.as_view(), name="search_results"),
]
