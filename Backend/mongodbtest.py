# import ssl
# from pymongo.server_api import ServerApi
# # pprint library is used to make the output look more pretty
# from pprint import pprint
# import certifi
# # connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
# import pymongo


# client = pymongo.MongoClient("mongodb+srv://teja:asdfasdf@cluster0.p2d72.mongodb.net/sample_weatherdata?retryWrites=true&w=majority")
# # db = client.test
# # db = client.test
# # print(db.list_collection_names())
# # client = MongoClient(<<MONGODB URL>>)
# # db=client.admin
# # Issue the serverStatus command and print the results
# # serverStatusResult=db.command("serverStatus")
# # pprint(serverStatusResult)

# db=client.admin
# # Issue the serverStatus command and print the results
# serverStatusResult=db.command("serverStatus")
# pprint(serverStatusResult)


# import pymongo
# print(pymongo.version)
from xmlrpc.client import Server
from pymongo import MongoClient
from pymongo.server_api import ServerApi
import certifi

client = MongoClient("mongodb+srv://tejabalu:tejabalu@cluster0.p2d72.mongodb.net/test?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = client.test1
people = db.people
import datetime
personDocument = {
    "name": { "first": "Alan", "last": "Turing" },
	"birth": datetime.datetime(1912, 6, 23),
	"death": datetime.datetime(1954, 6, 7),
	"contribs": [ "Turing machine", "Turing test", "Turingery" ],
	"views": 1250000
}

people.insert_one(personDocument)

print(people.find_one({ "name.last": "Turing" }))