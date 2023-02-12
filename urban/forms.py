from .models import Urban
from django import forms


class UrbanForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        request = kwargs.pop('request', None)
        super().__init__(*args, **kwargs)
        self.fields['author'].disabled = True
        if request and request.user.is_authenticated:
            self.initial["author"] = request.user

    class Meta:
        model = Urban
        fields = ('title', 'slug', 'author', 'latitude', 'longitude', 'showmap')
