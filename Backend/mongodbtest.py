from pymongo.server_api import ServerApi
# pprint library is used to make the output look more pretty
from pprint import pprint
import certifi
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
import pymongo


client = pymongo.MongoClient("mongodb+srv://teja:asdfasdf@cluster0.p2d72.mongodb.net/test?retryWrites=true&w=majority", tlsCAFile=certifi.where())
# db = client.test

# client = MongoClient(<<MONGODB URL>>)
db=client.admin
# Issue the serverStatus command and print the results
serverStatusResult=db.command("serverStatus")
pprint(serverStatusResult)