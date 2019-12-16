try:
    from Website import app
    from flask import render_template

    from flask import (Blueprint,
                       render_template,
                       redirect, url_for)

    from flask import (Flask,
                       request,
                       redirect,
                       session,
                       send_file)

    from io import BytesIO
    from flask import abort, jsonify
    import io
    from  random import sample

except Exception as e:
    print("Failed to load some Modules ")


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('Main.html')


if __name__ == '__main__':
    app.run(debug=True)
