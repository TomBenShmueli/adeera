
from flask import Flask, request
import json
import json


groupurls = ['groups/ApartmentsTelAviv']
# , 'groups/287564448778602', 'groups/1424244737803677', 'groups/1068642559922565',
#              'groups/253957624766723', 'groups/2092819334342645/', 'groups/1529488140613580', 'groups/RentinTLV',
#              'groups/119965198095838', 'groups/426607440821568', 'groups/550870795608828'

# Setup flask server
app = Flask(__name__)


def getPosts():
    jsonOutput = []
    for group in groupurls:
        from facebook_scraper import get_posts
        posts = get_posts(group, pages=1)
        for post in posts:
            print(post)
            jsonOutput.append(json.dumps(
                post, indent=4, sort_keys=True, default=str))
    return jsonOutput

    #         jsonOutput.append(json.dumps(
    #             my_json, ensure_ascii=False, indent=4))
    # jsonOutput.append(']}')
    # x = requests.post('https://herokuapp.adeera.com/posts', data=jsonOutput)
    # print(jsonOutput)
    # return jsonOutput


@app.route('/get_posts', methods=['POST'])
def get_posts():
    data = getPosts()
    return json.dumps({"result": data})
    # data = request.get_json()
    # print(data)

    # Data variable contains the
    # data from the node server
    # ls = data['array']
    # result = sum(ls)  # calculate the sum

    # Return data in json format


if __name__ == "__main__":
    app.run(port=5000)
