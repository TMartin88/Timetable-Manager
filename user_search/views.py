from django.shortcuts import render
from django.views import generic, View
from schedules.models import Post
from django.db.models import Q


class SearchResultsList(generic.ListView):
    model = Post
    context_object_name = "posts"
    template_name = "search_results.html"

    def get_queryset(self):
        query = self.request.GET.get("q")
        return Post.objects.filter(slug__search=query)
