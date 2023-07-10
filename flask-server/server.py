from flask import Flask

app = Flask(__name__)

@app.route('/graph')
def graph():
    return 'Hello, World!'