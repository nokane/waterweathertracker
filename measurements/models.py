from django.db import models
from waters.models import Water

class Measurement(models.Model):
    value = models.FloatField()
    measured_at = models.DateTimeField()
    body = models.ForeignKey(Water)

    class Meta:
        db_table = 'water_measurements'
    
    def __unicode__(self):
        return '{0}'.format(self.content)
