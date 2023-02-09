from django.contrib import admin
from .models import Urban
from django_summernote.admin import SummernoteModelAdmin


@admin.register(Urban)
class UrbanAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'latitude', 'longitude', 'created_on', 'approved')
    list_filter = ('approved', 'created_on')
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    actions = ['approve_urbans']

    def approve_urbans(self, request, queryset):
        queryset.update(approved=True)