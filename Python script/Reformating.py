import os


def process_file(input_path, output_path):
    with open(input_path, "r") as file:
        lines = file.readlines()[1:]  # Skip the first line

    cleaned_data = ["Time,X,Y"]
    first_time_value = None

    for line in lines:
        if line.startswith("TobiiStream"):
            line = line.replace("TobiiStream", "").strip()
            parts = line.split()

            time_value = float(parts[0])
            if first_time_value is None:
                first_time_value = time_value
            adjusted_time = time_value - first_time_value
            csv_line = f"{adjusted_time},{parts[1]},{parts[2]}"
            cleaned_data.append(csv_line)

    with open(output_path, "w") as file:
        for csv_line in cleaned_data:
            file.write(csv_line + "\n")


directory_path = r"C:\Users\bapti\Documents\CESI\A4\Stage\Eye tracking"

for filename in os.listdir(directory_path):
    if filename.endswith(".txt"):
        input_path = os.path.join(directory_path, filename)
        output_filename = filename.replace(".txt", ".csv")
        output_path = os.path.join(directory_path, output_filename)

        process_file(input_path, output_path)
        print(f"Le fichier {filename} a été transformé en {output_filename}.")

print("Tous les fichiers ont été transformés !")
