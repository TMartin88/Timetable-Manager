from django.shortcuts import render, get_object_or_404, redirect
from .models import Urban
from .forms import UrbanForm


def list_urban(request):
    urbans = Urban.objects.all()
    context = {
        'urbans': urbans
    }
    return render(request, 'list_urban.html', context)


def add_urban(request):
    if request.method == 'POST':
        form = UrbanForm(request.POST, request=request)
        if form.is_valid():
            form.save()
            return redirect('urban_list')
    else:
        form = UrbanForm(request=request)
    context = {
        'form': form
    }
    return render(request, 'add_urban.html', context)


def edit_urban(request, urban_id):
    urban = get_object_or_404(Urban, id=urban_id)
    if request.method == 'POST':
        form = UrbanForm(request.POST, instance=urban)
        if form.is_valid():
            form.save()
            return redirect('urban_list')
    form = UrbanForm(instance=urban)
    context = {
        'form': form
    }
    return render(request, 'edit_urban.html', context)


def toggle_urban(request, urban_id):
    urban = get_object_or_404(Urban, id=urban_id)
    urban.showmap = not urban.showmap
    urban.save()
    return redirect('urban_list')


def delete_urban(request, urban_id):
    urban = get_object_or_404(Urban, id=urban_id)
    urban.delete()
    return redirect('urban_list')
