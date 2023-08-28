import pandas as pd
import os

path = r'C:\Users\bapti\Documents\CESI\A4\Stage\Event'

# Liste tous les fichiers .csv dans le dossier
csv_files = [f for f in os.listdir(path) if f.endswith('.csv')]

for file in csv_files:
    filepath = os.path.join(path, file)

    df = pd.read_csv(filepath)
    df.columns = [col.strip() for col in df.columns]

    if 'Timestamp' not in df.columns:
        print(f"'Timestamp' column not found in {file}. Skipping...")
        continue

    try:
        df['Timestamp'] = pd.to_datetime(df['Timestamp'], format='%Y-%m-%d %H:%M:%S.%f')
    except Exception as e:
        print(f"Error while processing file {file}: {e}")
        continue

    # Conversion en millisecondes depuis le début du fichier
    start_time = df['Timestamp'].iloc[0]
    df['Timestamp'] = (df['Timestamp'] - start_time).dt.total_seconds() * 1000  # conversion en millisecondes

    df.to_csv(filepath, index=False)

