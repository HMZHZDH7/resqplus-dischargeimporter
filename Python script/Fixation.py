import pandas as pd
import numpy as np
import os

directory = r'C:\Users\bapti\Documents\CESI\A4\Stage\Eye tracking'
result_directory = r'C:\Users\bapti\Documents\CESI\A4\Stage\Result'
result_directory = r'C:\Users\bapti\Documents\CESI\A4\Stage\Result'
dispersion_threshold = 50
duration_threshold = 100

for filename in os.listdir(directory):
    if filename.endswith('.csv'):
        filepath = os.path.join(directory, filename)
        data = pd.read_csv(filepath)

        fixations = []
        current_fixation = []

        for i in range(len(data)):
            if len(current_fixation) == 0:
                current_fixation.append(data.iloc[i])
            else:
                current_max_x = max([point['X'] for point in current_fixation])
                current_min_x = min([point['X'] for point in current_fixation])
                current_max_y = max([point['Y'] for point in current_fixation])
                current_min_y = min([point['Y'] for point in current_fixation])

                dispersion_x = current_max_x - current_min_x
                dispersion_y = current_max_y - current_min_y

                if np.sqrt(dispersion_x ** 2 + dispersion_y ** 2) <= dispersion_threshold:
                    current_fixation.append(data.iloc[i])
                else:
                    if (current_fixation[-1]['Time'] - current_fixation[0]['Time']) >= duration_threshold:
                        fixations.append(current_fixation)
                    current_fixation = [data.iloc[i]]

        if (current_fixation[-1]['Time'] - current_fixation[0]['Time']) >= duration_threshold:
            fixations.append(current_fixation)

        results_df = pd.DataFrame(columns=['fixation', 'duration', 'start_time'])

        for i, fixation in enumerate(fixations):
            duration = fixation[-1]['Time'] - fixation[0]['Time']
            start_time = fixation[0]['Time']
            results_df.loc[len(results_df)] = [f"{i + 1}", f"{duration}", f"{start_time}"]

        results_df.to_csv(os.path.join(result_directory, filename), index=False)
