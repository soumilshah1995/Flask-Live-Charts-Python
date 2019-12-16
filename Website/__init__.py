try:
    import os
    from flask import Flask
    from flask import (Flask,
                       request,render_template,
                       redirect,
                       url_for,
                       session,
                       send_file)

    from Website.Sensor.views import sensor_blueprint
    from Website.Hunidity.views import humidity_blueprint

except Exception as e:
    print("Some Modules are Missing {}".format(e))

app = Flask(__name__)
app.config["SECRET_KEY"] = "mysecretkey"
app.register_blueprint(sensor_blueprint, url_prefix="/Sensor")
app.register_blueprint(humidity_blueprint, url_prefix="/Humidity")

# app.register_blueprint(result_blueprint, url_prefix="/Result")
