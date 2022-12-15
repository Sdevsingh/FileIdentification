from Proccess import search_files
from FeatureExtract import extract
import json
import random
import pickle


def language(text, model):
    # predict language name
    values = extract(text)
    input_vec = [values]

    ans = model.predict(input_vec)
    return model.get_rank_label(ans[0])


def suffix(file, langs):

    ext = str(file).split(".")[-1]
    for lang, exts in langs.items():
        if ext in exts:
            return lang
    return None


def predict(test_cases, langs, model):
    files = random.sample(test_cases, 4)
    for file in files:
        temp_true = suffix(file, langs)
        myfile = open(file, encoding='utf-8', mode='r').read()
        lang = language(myfile, model)
        print("\nFile_Path: ", end=" ")
        print(file)
        print("\tTrue-Value: ", end=" ")
        print(temp_true)
        print("\tPredicted-Value", end=" ")
        print(lang)


test_path = './FileTypeData_Test'

lang_json = './languages.json'
filename = 'finalized_model.sav'

with open(lang_json) as f:
    languages = json.load(f)

extensions = [ext for exts in languages.values() for ext in exts]
test_files = search_files(test_path, extensions)
loaded_model = pickle.load(open(filename, 'rb'))

predict(test_files, languages, loaded_model)
