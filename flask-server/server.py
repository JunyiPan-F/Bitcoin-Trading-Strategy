from flask import Flask

app = Flask(__name__)

@app.route('/home', methods=['GET'])
def home():
    return 'Hello, World!'

if __name__ == '__main__':
    #in development mode
    app.run(debug=True)