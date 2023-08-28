import pandas as pd


class DataProcessor:

    def __init__(self, event_dir, data_dir, num_files):
        self.event_dir = event_dir
        self.data_dir = data_dir
        self.num_files = num_files

    @staticmethod
    def clean_field_id(value):
        suffixes = ["Check", "Uncheck", "Yes", "No", "Unknown", "None"]
        for suffix in suffixes:
            if value.endswith(suffix):
                return value[:-len(suffix)].strip()
        return value

    def load_and_merge_files(self):
        merged_dataframes = []
        for i in range(1, self.num_files + 1):
            event_file = f'{self.event_dir}\\P{i}.csv'
            data_file = f'{self.data_dir}\\data_P{i}.csv'

            df1 = pd.read_csv(event_file)
            df2 = pd.read_csv(data_file)

            df2['FieldId'] = df2['FieldId'].apply(self.clean_field_id)
            df1['ClickCount'] = df1['Event'].apply(lambda x: 1 if 'click' in str(x) else 0)

            click_count_df = df1.groupby(df1['Element'].str.replace(' Iterator', '')).sum()['ClickCount']
            merged_df = df2.merge(click_count_df, left_on='FieldId', right_index=True, how='left').fillna(0)

            merged_dataframes.append(merged_df)

        return pd.concat(merged_dataframes, ignore_index=True)
