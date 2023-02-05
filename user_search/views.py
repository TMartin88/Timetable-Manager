from django.shortcuts import render
from django.views import generic, View
from schedules.models import Post
from django.db.models import Q


class SearchResultsList(generic.ListView):
    '''
    This is from https://testdriven.io/blog/django-search/
    '''
    model = Post
    context_object_name = "posts"
    template_name = "search_results.html"

    def get_queryset(self):
        query = self.request.GET.get("q")
        return Post.objects.filter(
            Q(slug__icontains=query) | Q(content__icontains=query)
        )
