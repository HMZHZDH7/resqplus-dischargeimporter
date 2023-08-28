from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import KFold
import pandas as pd


class RegressionPredictor:

    def __init__(self, dataframe, input_column, target_column):
        self.dataframe = dataframe
        self.input_column = input_column
        self.target_column = target_column
        self.model = LinearRegression()

    def perform_regression(self, n_splits=5, random_state=42):
        X = self.dataframe[[self.input_column]].values
        y = self.dataframe[self.target_column].values

        kf = KFold(n_splits=n_splits, random_state=random_state, shuffle=True)

        mse_scores = []

        for train_index, test_index in kf.split(X):
            X_train, X_test = X[train_index], X[test_index]
            y_train, y_test = y[train_index], y[test_index]

            self.model.fit(X_train, y_train)
            y_pred = self.model.predict(X_test)

            mse = mean_squared_error(y_test, y_pred)
            mse_scores.append(mse)

        avg_mse = sum(mse_scores) / len(mse_scores)
        print(f"Average Mean Squared Error across folds: {avg_mse}")
        return avg_mse

    def predict_values(self, range_start=1, range_end=101, threshold=0.5):
        for i in range(range_start, range_end):
            value_to_predict = pd.DataFrame({self.input_column: [i]}).values.reshape(1, -1)
            predicted_click_count = self.model.predict(value_to_predict)

            if predicted_click_count[0] > threshold:
                print(f"For {self.input_column} value {i}, it is likely to be clicked.")
            else:
                print(f"For {self.input_column} value {i}, it is unlikely to be clicked.")
