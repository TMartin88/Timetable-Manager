from django.shortcuts import render, get_object_or_404, redirect
from .models import Urban
from .models import prepare_for_json
from .forms import UrbanForm
from django.utils.text import slugify
from django.views import generic, View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.db.models import Q


@method_decorator(login_required, name='dispatch')
class UrbanList(generic.ListView):
    model = Urban
    template_name = 'list_urban.html'
    context_object_name = 'urbans'
    ordering = ['title']
    paginate_by = 10

    def get_queryset(self):
        query = self.request.GET.get('q')
        if query:
            return Urban.objects.filter(
                Q(title__icontains=query) |
                Q(slug__icontains=query)
            ).order_by('title')
        else:
            return Urban.objects.all().order_by('title')


@login_required
def add_urban(request):
    if request.method == 'POST':
        form = UrbanForm(request.POST, request=request)
        if form.is_valid():
            urban = form.save(commit=False)
            urban.slug = slugify(urban.title)
            urban.save()
            return redirect('urban_list')
    else:
        form = UrbanForm(request=request)
    context = {
        'form': form
    }
    return render(request, 'add_urban.html', context)


@login_required
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

    prepare_for_json(Urban.objects.all())

    return redirect('urban_list')
