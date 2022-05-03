import spotipy
import spotipy.util as util
import types
import constants

# _________________________________________________
# initialize mongodb
from xmlrpc.client import Server
from pymongo import MongoClient
from pymongo.server_api import ServerApi
import certifi

client = MongoClient("mongodb+srv://tejabalu:tejabalu@cluster0.p2d72.mongodb.net/test?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = client.test1
dbhistory = db.dbhistory

# _________________________________________________
# spotify
def current_user_recently_played(self, limit=50):
    return self._get('me/player/recently-played', limit=limit)


token = util.prompt_for_user_token(
        # username="xxxxxxxxxxxxxx",
        scope="user-read-recently-played user-read-private user-top-read user-read-currently-playing",
        client_id=constants.cid,
        client_secret=constants.secret,
        redirect_uri="http://localhost:7777/callback")

spotify = spotipy.Spotify(auth=token)
spotify.current_user_recently_played = types.MethodType(current_user_recently_played, spotify)

history = spotify.current_user_recently_played(limit=50)


# _________________________________________________
# upload to mongodb

print(type(history))
response = dbhistory.insert_one(history)
print(response.acknowledged)

# _________________________________________________
# for writing out history into ext file
# out_file = open("history.json","w")
# out_file.write(json.dumps(history, sort_keys=True, indent=2))
# out_file.close()

# print(json.dumps(history, sort_keys=True, indent=2))