from django.shortcuts import render, HttpResponse
from .models import Post
# Create your views here.


def blog_render(request):
    posts = Post.objects.all()
    return render(request, 'blog.html', context={'posts': posts})
