import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import os

# Directory paths
source_directory = r'C:\Users\bapti\Documents\CESI\A4\Stage\Eye tracking'
target_directory = r'C:\Users\bapti\Documents\CESI\A4\Stage\Result'

# Initialize the accumulation matrix with zeros
overall_heatmap_data = np.zeros((192, 108))
all_x_coordinates = []

# Iterate over each file in the source directory
for filename in os.listdir(source_directory):
    if filename.endswith('.csv'):
        file_path = os.path.join(source_directory, filename)

        # Load CSV data
        df = pd.read_csv(file_path)

        # Append x-coordinates to the accumulation list
        all_x_coordinates.extend(df['X'].values)

        # Create heatmap data
        heatmap_data, _, _ = np.histogram2d(df['X'], df['Y'], bins=(192, 108))

        # Accumulate the heatmap data
        overall_heatmap_data += heatmap_data

# Compute overall left and right percentages
left_percentage = sum(1 for x in all_x_coordinates if 0 <= x < 960) / len(all_x_coordinates) * 100
right_percentage = 100 - left_percentage

# Save percentages to a CSV file
percentages_df = pd.DataFrame({
    'Patient': ['Overall'],
    'Left Side': [left_percentage],
    'Right Side': [right_percentage]
})

percentages_df.to_csv(os.path.join(target_directory, 'overall_percentages.csv'), index=False)

# Plot the overall heatmap
max_val = overall_heatmap_data.max()
vmax_val = 0.9 * max_val

plt.figure(figsize=(10, 6))
sns.heatmap(overall_heatmap_data.T, cmap='jet', vmax=vmax_val)
plt.title('Overall Eye Tracking Heatmap')
plt.xlabel('X Coordinate')
plt.ylabel('Y Coordinate')
plt.savefig(os.path.join(target_directory, 'overall_heatmap.png'), dpi=300)
plt.close()
