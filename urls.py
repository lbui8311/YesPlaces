from django.urls import path
from .views import submit_comment
from react_comments_django.sitemaps import ThreadSitemap
from react_comments_django.urls_api import urlpatterns as react_comments_django_urls_api

sitemaps = {
    'react_comments_django': ThreadSitemap
}

urlpatterns = [
    # Other URL patterns...
    path('api/comments/', submit_comment, name='submit_comment'),
     url(r'^api/v1/', include(react_comments_django_urls_api)),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
]
