from django_cron import CronJobBase, Schedule
from . import scripts
import os
import json
import requests
from measurements.models import Measurement

class WaterDataDump(CronJobBase):
    RUN_AT_TIMES = ['00:30']
    schedule = Schedule(run_at_times=RUN_AT_TIMES)
    code = 'wwtracker_app.scripts.queryUSGS'
    DATA_DIR = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'data'));
    def do(self):
        allWater = []
        stateList = ["al","ak","az","ar","ca","co","ct","de","dc","fl","ga","hi","id","il","in","ia","ks","ky","la","me","md","ma","mi","mn","ms","mo","mt","ne","nv","nh","nj","nm","ny","nc","nd","oh","ok","or","pa","ri","sc","sd","tn","tx","ut","vt","va","wa","wv","wi","wy","pr"]
        for state in stateList:
            scripts.parseWaterData(allWater,state)
        with open(os.path.join(DATA_DIR, 'waterData.json'), 'w') as outfile:
            json.dump(allWater, outfile)

class InsertWaterData(CronJobBase):
    RUN_AT_TIMES = ['01:45']
    schedule = Schedule(run_at_times=RUN_AT_TIMES)
    code = 'wwtracker_app.scripts.queryUSGS'
    DATA_DIR = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'data'));
    def do(self):
        with open(os.path.join(DATA_DIR, 'waterData.json')) as data_file:
            waterData = json.load(data_file)
            waterData = scripts.byteify(waterData)
        print waterData
        for body in waterData:
            measurement = Measurement(value=body['value'], measured_at=body['dateTime'], body_id=int(body['id']))
            try:
                measurement.save()
            except:
                print "there was a problem saving the measurement"
