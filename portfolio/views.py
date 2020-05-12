from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Post
from django.views.generic.edit import CreateView
from django.contrib.messages.views import SuccessMessageMixin
# Create your views here.
class IndexPageView(TemplateView):
    template_name='index.html'
class HomePageView(SuccessMessageMixin,CreateView):
    template_name='home.html'
    model=Post
    fields='__all__'
    success_url = '/portfolio/'
    success_message="Yor message has been posted."
    