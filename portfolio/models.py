from django.db import models
from django.urls import reverse
# Create your models here.
class Post(models.Model):
    name=models.CharField(default='Your Name',max_length=150,null=False,blank=False)
    email=models.EmailField(default='Your Email',null=False,blank=False,max_length=100)
    message=models.TextField(default='Message',null=True,blank=False)

    def __str__(self):
        return self.name
    #def get_absolute_url(self):
        #return reverse('home')