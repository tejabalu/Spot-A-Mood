import spotipy
import spotipy.util as util
import types

# import constants
import pandas as pd

# def loggingin(params):


def current_user_recently_played(self, limit=50):
    return self._get("me/player/recently-played", limit=limit)


token = util.prompt_for_user_token(
    scope="user-read-recently-played user-read-private user-top-read user-read-currently-playing",
    client_id="4c194a54913b473bb83708683dff2b7e",
    client_secret="08774da49c5a430a9630bb51146fb4e7",
    redirect_uri="http://localhost:7777/callback",
)

spotify = spotipy.Spotify(auth=token)
spotify.current_user_recently_played = types.MethodType(
    current_user_recently_played, spotify
)

history = spotify.current_user_recently_played(limit=50)
# print(history)


def FrontEndPost():
    df = pd.DataFrame()
    dfdict = {}

    for i in range(len(history["items"])):
        feature = spotify.audio_features(history["items"][i]["track"]["id"])
        featureList = list(feature[0].values())
        featureList = featureList[:11]
        dfdict[i] = [
            history["items"][i]["track"]["id"],
            history["items"][i]["track"]["name"],
            history["items"][i]["track"]["artists"][0]["name"],
            history["items"][i]["track"]["album"]["album_type"],
            history["items"][i]["track"]["album"]["name"],
            history["items"][i]["played_at"],
        ]
        dfdict[i].extend(featureList)

    df = pd.DataFrame.from_dict(
        dfdict,
        orient="index",
        columns=[
            "Song ID",
            "Name",
            "Artist",
            "Album Type",
            "Album Name",
            "Played At",
            "Danceability",
            "Energy",
            "Key",
            "Loudness",
            "Mode",
            "Speechiness",
            "Acoustics",
            "Instrumentalness",
            "Liveliness",
            "Valance",
            "Tempo",
        ],
    )
    df = df.drop(["Mode"], axis=1)

    # post above dataframe to front end in json
    return df.to_json(orient="records")
