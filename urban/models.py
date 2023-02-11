from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User


class Urban(models.Model):
    title = models.CharField(max_length=60, null=False, blank=False, unique=True)
    slug = models.SlugField(max_length=200, null=False, unique=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="urban_posts"
    )
    description = models.TextField(blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    showmap = models.BooleanField(null=False, blank=False, default=True)
    urban_link = models.URLField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_on"]

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("urban_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
