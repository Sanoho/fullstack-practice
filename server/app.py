from config import api, app, db, abort
from flask_restful import Resource
from flask import request, make_response, session

if __name__ == '__main__':
    app.run(port=5555, debug=True)