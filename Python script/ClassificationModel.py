import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split, KFold
from sklearn.metrics import accuracy_score


def clean_field_id(value):
    suffixes = ["Check", "Uncheck", "Yes", "No", "Unknown", "None"]
    for suffix in suffixes:
        if value.endswith(suffix):
            return value[:-len(suffix)].strip()
    return value


merged_dataframes = []

# Loop to load, clean, and merge the data from each pair of files
for i in range(1, 23):
    event_file = f'C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Event\\P{i}.csv'
    data_file = f'C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Data\\data_P{i}.csv'

    df1 = pd.read_csv(event_file)
    df2 = pd.read_csv(data_file)

    df2['FieldId'] = df2['FieldId'].apply(clean_field_id)
    df1['Clicked'] = df1['Event'].apply(lambda x: 1 if 'click' in str(x) else 0)

    click_df = df1.groupby(df1['Element'].str.replace(' Iterator', '')).max()['Clicked']
    merged_df = df2.merge(click_df, left_on='FieldId', right_index=True, how='left').fillna(0)

    merged_dataframes.append(merged_df)

# Combine all the merged dataframes into a single dataframe
final_df = pd.concat(merged_dataframes, ignore_index=True)

# Prepare the data for classification
X = final_df[['TrustCount-1']].values
y = final_df['Clicked'].values

# Initialize the model
model = LogisticRegression()

# Apply KFold cross-validation
kf = KFold(n_splits=5, random_state=42, shuffle=True)

accuracy_scores = []

for train_index, test_index in kf.split(X):
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]

    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)
    accuracy_scores.append(accuracy)

# Average accuracy across all folds
avg_accuracy = sum(accuracy_scores) / len(accuracy_scores)
print(f"Average Accuracy across folds: {avg_accuracy:.2%}")

# Predicting for values from 1 to 100
for i in range(1, 101):
    value_to_predict = [[i]]  # Convert directly to a 2D numpy array

    predicted_click = model.predict(value_to_predict)

    if predicted_click[0] == 1:
        print(f"For TrustCount-1 value {i}, it is likely to be clicked.")
    else:
        print(f"For TrustCount-1 value {i}, it is unlikely to be clicked.")
