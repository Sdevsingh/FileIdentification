"""Machine learning model for programming identification"""

import os
import gc
import logging
import random
from pathlib import Path
from math import ceil
import json
import warnings

import numpy as np

from sklearn.svm import LinearSVC
from sklearn.preprocessing import StandardScaler


from FeatureExtract import extract, CONTENT_SIZE

from Proccess import (search_files, extract_from_files, read_file)




#_FITTING_FACTOR = 20
_CHUNK_PROPORTION = 0.2
_CHUNK_SIZE = 1000


class Predictor:

    def __init__(self, model_dir=os.curdir, lang_json='languages.json'):

        # trained model dir
        self.model_dir = model_dir

        #: tells if current model is the default model
        # self.is_default = model_data[1]

        #: supported languages with associated extensions
        with open(lang_json) as f:
            self.languages = json.load(f)
        enumerator = enumerate(sorted(self.languages.items()))
        self.pred_rank = {}
        for i in enumerator:
            self.pred_rank[i[0]] = i[1][0]

        self._classifier = LinearSVC(class_weight='balanced')

    def language(self, text):
        # predict language name
        values = extract(text)
        input_fn = [values]
        ans = self._classifier.predict(input_fn)
        return self.pred_rank[ans[0]]

    def learn(self, input_dir):
        """Learning model"""

        extensions = [ext for exts in self.languages.values() for ext in exts]
        print(extensions)
        files = search_files(input_dir, extensions)
        random.shuffle(files)

        test_idx = int(len(files) * 0.2)
        evaluation_paths = files[:test_idx]
        train_paths_ = files[test_idx:]
        train_paths = ([], [])

        nb_files = len(train_paths_)
        chunk_size = min(int(_CHUNK_PROPORTION * nb_files), _CHUNK_SIZE)
        batches = _pop_many(train_paths_, chunk_size)

        evaluation_data = extract_from_files(evaluation_paths, self.languages)

        print("Start learning")
        for training_files in batches:

            training_data = extract_from_files(training_files, self.languages)

            train_paths[0].extend(training_data[0])
            train_paths[1].extend(training_data[1])

            #steps = int(_FITTING_FACTOR * len(training_data[0]) / 100)
            #if steps == 0:
            #   break

            self._classifier.fit(training_data[0], training_data[1])

            # evaluation
            accuracy = self._classifier.score(evaluation_data[0], evaluation_data[1])
            print(accuracy)

        return train_paths, evaluation_data

    def predict(self, x_test):
        return self._classifier.predict(x_test)

    def get_rank_label(self, val):
        return self.pred_rank[val]


def _pop_many(items, chunk_size):
    while items:
        yield items[0:chunk_size]

        # Avoid memory overflow
        del items[0:chunk_size]
        gc.collect()



