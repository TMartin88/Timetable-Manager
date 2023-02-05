from django.shortcuts import render
from django.views import generic, View
from schedules.models import Post
from django.db.models import Q


class SearchResultsList(generic.ListView):
    '''
    This is from https://testdriven.io/blog/django-search/ for the fancy search
    and https://stackoverflow.com/questions/51631651/why-use-get-context-data-self-kwargs-and-super
    for the context
    '''
    model = Post
    context_object_name = "posts"
    template_name = "search_results.html"
    paginate_by = 6

    def get_queryset(self):
        query = self.request.GET.get("q")
        return Post.objects.filter(
            Q(slug__icontains=query) | Q(content__icontains=query)
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        query = self.request.GET.get("q")
        context["search_query"] = query
        return context