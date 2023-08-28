import json
import csv
import os


# Fonction pour calculer le pourcentage de champs vérifiés pour un fichier CSV donné
def calculate_verified_percentage(json_data, csv_file_path):
    form_ids = [item['FormId'] for item in json_data]
    total_verified = 0

    with open(csv_file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            field_id = row['FieldId']
            if field_id in form_ids:
                if row['Verified-1'] == 'True':
                    total_verified += 1

    total_fields = len(form_ids)
    percentage = (total_verified / total_fields) * 100

    return percentage


# Chemin vers le fichier JSON
json_path = 'C:\\Users\\bapti\\Documents\\temp.json'
with open(json_path, 'r', encoding='utf-8') as f:
    data_json = json.load(f)

# Parcourir tous les fichiers CSV
data_dir = 'C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Data'
results = []

for file_name in os.listdir(data_dir):
    if file_name.endswith('.csv'):
        csv_path = os.path.join(data_dir, file_name)
        percentage = calculate_verified_percentage(data_json, csv_path)
        results.append((os.path.splitext(file_name)[0], percentage))

# Exporter les résultats dans un nouveau CSV
output_path = 'C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Result\\results.csv'
with open(output_path, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['FileName', 'Percentage'])
    writer.writerows(results)

print(f"Résultats exportés dans {output_path}")
