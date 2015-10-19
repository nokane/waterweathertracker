from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import StateList, StateDetail



urlpatterns = patterns('',
  url(r'^api/$', StateList.as_view()),
  )

# urlpatterns = format_suffix_patterns(urlpatterns)