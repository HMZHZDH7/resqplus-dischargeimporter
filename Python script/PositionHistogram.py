import os
import pandas as pd
import matplotlib.pyplot as plt

# Folder containing the CSV files
input_folder = "C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Eye tracking\\data"

# Folder to save the image files
output_folder = "C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Result\\positionRecurrence"

# List CSV files in the input folder
csv_files = [f for f in os.listdir(input_folder) if f.endswith('.csv')]

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Loop through each CSV file and process it
for csv_file in csv_files:
    # Full path to the CSV file
    csv_path = os.path.join(input_folder, csv_file)

    # Read the CSV file into a DataFrame
    df = pd.read_csv(csv_path)

    # Filter the data to keep X values between 0 and 1920
    df = df[(df['X'] >= 0) & (df['X'] <= 1920)]

    # Create a histogram for the X column
    plt.hist(df['X'], bins=range(0, 1921, 10))

    # Display labels and title
    plt.xlabel('Position X')
    plt.ylabel('Number of Occurrences')
    plt.title("Number of Occurrence per X coordinates")

    # Full path to save the image
    image_path = os.path.join(output_folder, csv_file.replace('.csv', '.png'))

    # Save the image
    plt.savefig(image_path)

    # Close the plot to avoid overlapping images
    plt.close()
