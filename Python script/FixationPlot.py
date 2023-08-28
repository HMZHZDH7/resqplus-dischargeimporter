import pandas as pd
import matplotlib.pyplot as plt
import os

# Folder containing the CSV files
input_folder = "C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Eye tracking\\fixation"

# Folder to save the image files
output_folder = "C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Result\\fixation"

# List CSV files in the input folder
csv_files = [f for f in os.listdir(input_folder) if f.endswith('.csv')]

for csv_file in csv_files:
    # Load the CSV file into a DataFrame
    file_path = os.path.join(input_folder, csv_file)
    df = pd.read_csv(file_path)

    # Convert start_time to seconds
    df['start_time_seconds'] = df['start_time'] / 1000.0

    # Compute 95th percentile and average for 'duration' and 'start_time_seconds'
    p95_duration = df['duration'].quantile(0.95)
    avg_duration = df['duration'].mean()

    p95_start_time = df['start_time_seconds'].quantile(0.95)
    avg_start_time = df['start_time_seconds'].mean()

    # Replace values above the 95th percentile with the average
    df.loc[df['duration'] > p95_duration, 'duration'] = avg_duration
    df.loc[df['start_time_seconds'] > p95_start_time, 'start_time_seconds'] = avg_start_time

    # Sort the DataFrame by start_time_seconds for the second plot
    df.sort_values('start_time_seconds', inplace=True)

    # Create the plots
    plt.figure(figsize=(10, 5))

    plt.subplot(1, 2, 1)  # 1 row, 2 columns, first plot
    plt.bar(df['fixation'], df['duration'], color='blue')
    plt.title('Fixation Duration vs Fixation Number')
    plt.xlabel('Fixation Number')
    plt.ylabel('Duration (ms)')

    plt.subplot(1, 2, 2)  # 1 row, 2 columns, second plot
    plt.bar(df['start_time_seconds'], df['duration'], color='green')  # Bar chart for 'duration' against 'start_time_seconds'
    plt.title('Fixation Duration vs Start Time')
    plt.xlabel('Start Time (s)')
    plt.ylabel('Duration (ms)')

    # Save the plot as an image file
    image_path = os.path.join(output_folder, csv_file.replace('.csv', '.png'))
    plt.tight_layout()
    plt.savefig(image_path)
    plt.close()
