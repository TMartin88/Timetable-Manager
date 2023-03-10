from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


STATUS = ((0, "Draft"), (1, "Published"))


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="schedules_posts"
    )
    featured_image = CloudinaryField('image', default='placeholder')
    timetable_pdf_url = models.URLField(blank=True)
    excerpt = models.TextField(blank=True)
    updated_on = models.DateTimeField(auto_now=True)
    content = models.TextField(blank=True)
    notes = models.TextField(blank=True)
    fare_calculator = models.BooleanField(default=False)
    change_direction = models.BooleanField(default=False)
    other_fares = models.BooleanField(default=False)
    leap_link = models.URLField(blank=True)
    go_app_link = models.URLField(blank=True)
    public_notes = models.TextField(blank=True)
    active_days = models.TextField(blank=True)
    outbound = models.TimeField(blank=True)
    inbound = models.TimeField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    likes = models.ManyToManyField(
        User, related_name='schedulespost_like', blank=True)

    class Meta:
        ordering = ["-created_on"]

    def __str__(self):
        return self.title

    def number_of_likes(self):
        return self.likes.count()


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE,
                             related_name="comments")
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)

    class Meta:
        ordering = ["created_on"]

    def __str__(self):
        return f"Comment {self.body} by {self.name}"
