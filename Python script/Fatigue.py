import pandas as pd
import os

# Folder containing the CSV files
input_folder = "C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Eye tracking\\fixation"

# File to save the comparison results
output_file = "C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Result\\fixation\\average_comparison.csv"

# List CSV files in the input folder
csv_files = [f for f in os.listdir(input_folder) if f.endswith('.csv')]

# Create an empty list to store the comparison results
results_list = []

for csv_file in csv_files:
    # Remove the '.csv' extension from the file name
    file_name_without_extension = os.path.splitext(csv_file)[0]

    # Load the CSV file into a DataFrame
    file_path = os.path.join(input_folder, csv_file)
    df = pd.read_csv(file_path)

    # Convert start_time to seconds
    df['start_time_seconds'] = df['start_time'] / 1000.0

    # Calculate the total time in seconds
    total_time_seconds = df['start_time_seconds'].max()

    # Filter the DataFrame to only include fixations in the first and last minutes
    first_minute_df = df[df['start_time_seconds'] < 60]
    last_minute_df = df[df['start_time_seconds'] > (total_time_seconds - 60)]

    # Calculate the average duration for these fixations
    avg_duration_first_minute = first_minute_df['duration'].mean()
    avg_duration_last_minute = last_minute_df['duration'].mean()

    # Calculate the time difference
    time_difference = avg_duration_last_minute - avg_duration_first_minute

    # Add the comparison results to the list
    results_list.append({
        'File': file_name_without_extension,
        'Avg_Duration_First_Minute': avg_duration_first_minute,
        'Avg_Duration_Last_Minute': avg_duration_last_minute,
        'Time_Difference': time_difference
    })

# Convert the list of dictionaries to a DataFrame
results_df = pd.DataFrame(results_list)

# Sort the DataFrame alphabetically by the 'File' column
results_df = results_df.sort_values(by='File')

# Save the sorted results DataFrame to a CSV file
results_df.to_csv(output_file, index=False)
