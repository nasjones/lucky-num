import requests
import random

number_endpoint = "http://numbersapi.com/"

def validate_get_lucky_num(json):
    errors = {"errors": {}}

    for key in json:
        if not json[key]:
            errors["errors"][key] = [f"This field is required."]

        elif key == "year":
            if not year_check(json[key]):
                errors["errors"][key] = [
                    f"Invalid value, must be a number between 1900 and 2000"]

        elif key == "color" and json[key] not in ["red", "green", "orange", "blue"]:
            errors["errors"][key] = [
                f"Invalid value, must be one of: red, green, orange, blue."]

    if errors["errors"]:
        return errors
    else:
        output = random_num_api(int(json["year"]))
        return output


def year_check(num):
    if not num.isnumeric():
        return False
    year = int(num)
    if year > 2000 or year < 1900:
        return False
    return True


def random_num_api(year):
    rand = random.randint(1, 100)
    output = {}
    random_resp = requests.get(number_endpoint + f'{rand}/trivia')
    year_resp = requests.get(number_endpoint + f'{year}/year')

    if (random_resp.status_code != 200):
        output["num"] = {"fact": "There was a problem processing your request",
                         "num": rand}
    else:
        output["num"] = {"fact": random_resp.text,
                         "num": rand}

    if (year_resp.status_code != 200):
        output["year"] = {"fact": "There was a problem processing your request",
                          "num": rand}
    else:
        output["year"] = {"fact": year_resp.text,
                          "year": year}

    return output
