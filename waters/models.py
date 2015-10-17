from django.contrib.gis.db import models
from states.models import State

class Water(models.Model):
    name = models.TextField(max_length=255)
    loc = models.PointField()
    state = models.ForeignKey(State)

    class Meta:
        db_table = 'water_bodies'

    def __unicode__(self):
        return '{0}'.format(self.content)
