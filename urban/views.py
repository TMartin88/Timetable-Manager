from django.shortcuts import render, get_object_or_404, redirect
from .models import Urban
from .forms import UrbanForm


def get_urban_list(request):
    urbans = Urban.objects.all()
    context = {
        'urbans': urbans
    }
    return render(request, 'urban_list.html', context)


def add_urban(request):
    if request.method == 'POST':
        form = UrbanForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('get_urban_list')
    form = UrbanForm()
    context = {
        'form': form
    }
    return render(request, 'urban/urban_add.html', context)


def edit_urban(request, urban_id):
    urban = get_object_or_404(Urban, id=urban_id)
    if request.method == 'POST':
        form = UrbanForm(request.POST, instance=urban)
        if form.is_valid():
            form.save()
            return redirect('get_urban_list')
    form = UrbanForm(instance=urban)
    context = {
        'form': form
    }
    return render(request, 'urban/urban_edit.html', context)


def toggle_urban(request, urban_id):
    urban = get_object_or_404(Urban, id=urban_id)
    urban.approved = not urban.approved
    urban.save()
    return redirect('urban_list')


def delete_urban(request, urban_id):
    urban = get_object_or_404(Urban, id=urban_id)
    urban.delete()
    return redirect('urban_list')
