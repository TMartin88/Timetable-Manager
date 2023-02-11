from .models import Urban
from django import forms


class UrbanForm(forms.ModelForm):
    class Meta:
        model = Urban
        fields = ('title', 'latitude', 'longitude', 'show')
