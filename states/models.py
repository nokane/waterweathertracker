from django.db import models

class State(models.Model):
    name = models.TextField(max_length=255)
    abbr = models.TextField(max_length=255)

    class Meta:
        db_table = 'states'

    def __unicode__(self):
        return self.name
