import csv
import math
import os


def distance(x1, y1, x2, y2):
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)


def process_file(input_file, output_file):
    with open(input_file, 'r') as csv_file:
        reader = csv.DictReader(csv_file)

        previous_time = None
        previous_x = None
        previous_y = None

        distance_accumulated = 0.0
        speeds = []
        last_second = 0

        for row in reader:
            current_time = float(row['Time'])
            current_x = float(row['X'])
            current_y = float(row['Y'])

            if previous_time is not None:
                delta_time = current_time - previous_time
                d = distance(previous_x, previous_y, current_x, current_y)

                distance_accumulated += d

                # Calculate speed
                speeds.append(d / delta_time * 1000)

            if int(current_time / 1000) > last_second:
                last_second = int(current_time / 1000)

                with open(output_file, 'a', newline='') as csvfile:
                    fieldnames = ['Time (s)', 'Total Distance (per second)', 'Average Speed (units/s)']
                    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

                    if last_second == 1:
                        writer.writeheader()

                    avg_speed = sum(speeds) / len(speeds) if speeds else 0
                    writer.writerow({'Time (s)': last_second, 'Total Distance (per second)': distance_accumulated,
                                     'Average Speed (units/s)': avg_speed})

                    # Reset for the next second
                    distance_accumulated = 0.0
                    speeds = []

            previous_time = current_time
            previous_x = current_x
            previous_y = current_y


source_dir = r"C:\Users\bapti\Documents\CESI\A4\Stage\Eye tracking"
result_dir = r"C:\Users\bapti\Documents\CESI\A4\Stage\Result"

for file_name in os.listdir(source_dir):
    if file_name.endswith('.csv'):
        input_file_path = os.path.join(source_dir, file_name)
        output_file_path = os.path.join(result_dir, file_name)

        # Process the input file and save the result to the output directory
        process_file(input_file_path, output_file_path)
