#! /usr/bin/env python2.7
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views import generic

class IndexView(generic.TemplateView):
    template_name = 'home/index.html'
