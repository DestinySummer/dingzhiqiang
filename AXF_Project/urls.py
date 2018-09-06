"""AXF_Project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin

from axf.views import yx

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^axf/',include('axf.urls',namespace='axf')),
    url(r"^$",yx)
    # url(r'^axf/api/v1/',include('axf.urls_apis_v1',namespace='axfapi'))
]
