from django.urls import path
from .views import IndexPageView,HomePageView

urlpatterns=[
    path('',IndexPageView.as_view(),name='index'),
    path('portfolio/',HomePageView.as_view(),name='home'),
    
]
