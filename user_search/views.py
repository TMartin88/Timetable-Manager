from django.shortcuts import render
from .models import Post


class PostList(generic.ListView):
    model = Post
    queryset = Post.objects.filter(status=1).order_by("-created_on")
    template_name = "search_results.html"
    paginate_by = 6
