try:

    from flask import (Blueprint,
                       render_template,
                       redirect, url_for, session)

    from flask import Flask, request, session, send_file
    import random
    import json
    from time import time
    from random import random
    from flask import Flask, render_template, make_response

except Exception as e:
    print("Some modules didnt load {}".format(e))

sensor_blueprint = Blueprint('Sensor', __name__)


@sensor_blueprint.route('/data', methods=['GET'])
def data():
    Temperature = []
    for i in range(1,10):
        Temperature.append(random())
    data = {
        "temperature":Temperature
    }
    return data
