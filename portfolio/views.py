from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Post
from django.views.generic.edit import CreateView
# Create your views here.
class IndexPageView(TemplateView):
    template_name='index.html'
class HomePageView(CreateView):
    template_name='home.html'
    model=Post
    fields='__all__'