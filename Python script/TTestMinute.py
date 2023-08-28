import pandas as pd
from scipy.stats import ttest_ind, shapiro, mannwhitneyu

# Read the CSV file
df = pd.read_csv('C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Result\\fixation\\average_comparison.csv')

# Extract the data for the first and last minute columns
first_minute_data = df['Avg_Duration_First_Minute']
last_minute_data = df['Avg_Duration_Last_Minute']

# Perform Shapiro-Wilk test for normality
stat_first, p_first = shapiro(first_minute_data)
stat_last, p_last = shapiro(last_minute_data)

alpha = 0.05

# Interpret normality
if p_first > alpha:
    print('The first minute data appears to be normally distributed (fail to reject H0)')
else:
    print('The first minute data does not appear to be normally distributed (reject H0)')

if p_last > alpha:
    print('The last minute data appears to be normally distributed (fail to reject H0)')
else:
    print('The last minute data does not appear to be normally distributed (reject H0)')

# If both groups are normally distributed, then proceed to t-test
if p_first > alpha and p_last > alpha:
    # Perform the t-test
    t_stat, p_value = ttest_ind(first_minute_data, last_minute_data)

    # Display the results
    print("t-statistic:", t_stat)
    print("p-value:", p_value)

    # Interpret the results
    if p_value < alpha:
        print("The difference between the first and last minute is statistically significant.")
    else:
        print("The difference between the first and last minute is not statistically significant.")

# If one or both groups are not normally distributed, perform a Mann-Whitney U test
else:
    print("One or both groups are not normally distributed. Performing a Mann-Whitney U test.")

    u_stat, p_value = mannwhitneyu(first_minute_data, last_minute_data)

    # Display the results
    print("U-statistic:", u_stat)
    print("p-value:", p_value)

    # Interpret the results
    if p_value < alpha:
        print("The difference between the first and last minute is statistically significant according to the Mann-Whitney U test.")
    else:
        print("The difference between the first and last minute is not statistically significant according to the Mann-Whitney U test.")
