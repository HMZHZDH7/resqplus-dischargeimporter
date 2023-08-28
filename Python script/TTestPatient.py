import pandas as pd
from scipy.stats import ttest_ind, shapiro, mannwhitneyu

# Read the CSV file
df = pd.read_csv('C:\\Users\\bapti\\Documents\\CESI\\A4\\Stage\\Result\\fixation\\average_comparison.csv')

# Separate the data into odd and even patient groups
odd_patient_data = df[df['File'].apply(lambda x: int(x[1:]) % 2 != 0)]['Avg_Duration_Last_Minute']
even_patient_data = df[df['File'].apply(lambda x: int(x[1:]) % 2 == 0)]['Avg_Duration_Last_Minute']

# Perform Shapiro-Wilk test for normality
stat_odd, p_odd = shapiro(odd_patient_data)
stat_even, p_even = shapiro(even_patient_data)

alpha = 0.05

# Interpret normality
if p_odd > alpha:
    print('The odd patient group appears to be normally distributed (fail to reject H0)')
else:
    print('The odd patient group does not appear to be normally distributed (reject H0)')

if p_even > alpha:
    print('The even patient group appears to be normally distributed (fail to reject H0)')
else:
    print('The even patient group does not appear to be normally distributed (reject H0)')

# If both groups are normally distributed, then proceed to t-test
if p_odd > alpha and p_even > alpha:
    # Perform the t-test
    t_stat, p_value = ttest_ind(odd_patient_data, even_patient_data)

    # Display the results
    print("t-statistic:", t_stat)
    print("p-value:", p_value)

    # Interpret the results
    if p_value < alpha:
        print("The difference between the two groups is statistically significant.")
    else:
        print("The difference between the two groups is not statistically significant.")

# If one or both groups are not normally distributed, perform a Mann-Whitney U test
else:
    print("One or both groups are not normally distributed. Performing a Mann-Whitney U test.")

    u_stat, p_value = mannwhitneyu(odd_patient_data, even_patient_data)

    # Display the results
    print("U-statistic:", u_stat)
    print("p-value:", p_value)

    # Interpret the results
    if p_value < alpha:
        print("The difference between the two groups is statistically significant according to the Mann-Whitney U test.")
    else:
        print("The difference between the two groups is not statistically significant according to the Mann-Whitney U test.")
