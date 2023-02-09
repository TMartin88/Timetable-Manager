from django.shortcuts import render, get_object_or_404, reverse
from django.views import generic, View
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from .models import Urban


class UrbanList(View):

    def get_urban_list(request):
        urbans = Urban.objects.all()
        context = {
            'urbans': urbans
        }
        return render(request, 'urban/urban_list.html')

    def add_urban(request):
        return render(request, 'urban/add_urban.html')
