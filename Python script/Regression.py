# Assuming the directories for your event and data files
from DataProcessor import DataProcessor
from RegressionPredictor import RegressionPredictor

event_dir = 'C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Event'
data_dir = 'C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Data'

# Use the DataProcessor class to load and merge the data
processor = DataProcessor(event_dir, data_dir, 22)
final_df = processor.load_and_merge_files()

# Use the RegressionPredictor class to perform regression and predictions
regressor = RegressionPredictor(final_df, 'TrustCount-1', 'ClickCount')
regressor.perform_regression()
regressor.predict_values()
