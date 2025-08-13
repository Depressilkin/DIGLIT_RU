from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=30)
    img = models.ImageField(upload_to='media/')
    content = models.CharField(max_length=200)
    create_date = models.DateField(auto_now=bool)
