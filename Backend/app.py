from enum import unique
from pydoc import describe
from flask import Flask
app = Flask(__name__) #we are creating an instance of flask application here

from flask_sqlalchemy import SQLAlchemy 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)


class Drink(db.Model):
    id = db.Column(db.Integer, primary_keyy = True)
    name = db.Column(db.String(80), unique=True, nullable=False) #80 is the max length
    description = db.Column(db.String(120))
    
    def __repr__(self) -> str:
        return f'{self.name} - {self.description}'

@app.route('/')
def index():
    return '<p>Hello world!</p>'

@app.route('/drinks')
def getDrinks():
    return {'drinks':'drink data'}