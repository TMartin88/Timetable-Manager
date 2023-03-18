from django.shortcuts import render
from django.views import generic, View
from schedules.models import Post
from django.db.models import Q


class SearchResultsList(generic.ListView):
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
        search_results = Post.objects.filter(
             Q(slug__icontains=query) | Q(content__icontains=query)
        )
        context["search_query"] = query
        context["search_results_count"] = search_results.count()
        return context
