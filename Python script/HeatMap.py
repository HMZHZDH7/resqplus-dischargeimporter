import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import os

# Directory paths
source_directory = r'C:\Users\bapti\Documents\CESI\A4\Stage\Eye tracking'
target_directory = r'C:\Users\bapti\Documents\CESI\A4\Stage\Result'

# DataFrame to store percentages
percentages_df = pd.DataFrame(columns=['Patient', 'Left Side', 'Right Side'])

# Iterate over each file in the source directory
for filename in os.listdir(source_directory):
    if filename.endswith('.csv'):
        file_path = os.path.join(source_directory, filename)

        # Load CSV data
        df = pd.read_csv(file_path)

        # Create heatmap data
        heatmap_data, _, _ = np.histogram2d(df['X'], df['Y'], bins=(192, 108))
        max_val = heatmap_data.max()
        vmax_val = 0.9 * max_val

        # Calculate the percentages
        total_points = len(df)
        left_points = len(df[df['X'] < 960])
        right_points = len(df[df['X'] >= 960])
        left_percentage = (left_points / total_points) * 100
        right_percentage = (right_points / total_points) * 100
        patient_name = os.path.splitext(filename)[0]

        # Add to percentages DataFrame
        new_row = pd.DataFrame({
            'Patient': [patient_name],
            'Left Side': [left_percentage],
            'Right Side': [right_percentage]
        })
        percentages_df = pd.concat([percentages_df, new_row], ignore_index=True)

        # Plot the heatmap
        plt.figure(figsize=(10, 6))
        sns.heatmap(heatmap_data.T, cmap='jet', vmax=vmax_val)
        plt.title(f'Eye Tracking Heatmap for {filename}')
        plt.xlabel('X Coordinate')
        plt.ylabel('Y Coordinate')

        # Save the figure
        output_file_path = os.path.join(target_directory, f'heatmap_{os.path.splitext(filename)[0]}.png')
        plt.savefig(output_file_path, dpi=300)
        plt.close()

# Save percentages to CSV
output_csv_path = os.path.join(target_directory, 'percentages.csv')
percentages_df.to_csv(output_csv_path, index=False)
