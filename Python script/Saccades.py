import pandas as pd
import numpy as np

# Read data from the CSV file
data = pd.read_csv(r'C:\Users\bapti\Documents\CESI\A4\Stage\Eye tracking\P1.csv')

# Calculate velocity between consecutive points
data['Velocity'] = np.sqrt((data['X'].diff())**2 + (data['Y'].diff())**2) / data['Time'].diff()

# Define a threshold for saccade detection
velocity_threshold = 10  # Adjust this as per your requirements. For instance, 100 pixels/second

# Find points where the velocity exceeds the threshold
saccades = data[data['Velocity'] > velocity_threshold]

print(f"Number of saccade points: {len(saccades)}")
