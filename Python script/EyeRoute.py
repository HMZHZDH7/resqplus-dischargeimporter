import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib.animation import FFMpegWriter

# Replace this with the location of your CSV file
file_path = r"C:\Users\bapti\Documents\CESI\A4\Stage\Eye tracking\P1.csv"

# Load data
data = pd.read_csv(file_path)

# Extract time in milliseconds, and x and y coordinates
times = data["Time"].values
x_coords = data["X"].values
y_coords = data["Y"].values

# Create a plot
fig, ax = plt.subplots(figsize=(10, 6))

# Initialize plot elements
line, = ax.plot([], [], '-o', markersize=5)
start_point = ax.scatter([], [], color='green', s=100, zorder=5)
end_point = ax.scatter([], [], color='red', s=100, zorder=5)
annotation = ax.text(0, 0, '', fontsize=8)

# Initialize the plot limits and axes
def init():
    ax.set_xlim(0, 1920)
    ax.set_ylim(0, 1080)
    ax.invert_yaxis()  # Invert y-axis if necessary
    return line, start_point, end_point, annotation

# Update the plot for each frame of the animation
def update(frame):
    current_time = times[frame]
    min_time = current_time - 3000  # 3 seconds in milliseconds

    # Find the indices of points to display
    indices_to_show = [i for i, t in enumerate(times[:frame+1]) if t >= min_time]

    line.set_data(x_coords[indices_to_show], y_coords[indices_to_show])
    start_point.set_offsets([x_coords[indices_to_show[0]], y_coords[indices_to_show[0]]])
    end_point.set_offsets([x_coords[frame], y_coords[frame]])
    annotation.set_text(f"{times[frame]}ms")
    annotation.set_position([x_coords[frame], y_coords[frame]])
    return line, start_point, end_point, annotation

# Create animation with 50 ms between frames
ani = FuncAnimation(fig, update, frames=range(1, len(x_coords)), init_func=init, blit=True, interval=35)

# Save the animation as an MP4 file in the specified folder
ani.save(r'C:\Users\bapti\Documents\CESI\A4\Stage\Result\eye_tracking_animation.mp4', writer='ffmpeg', fps=28)

# Set plot title and labels
plt.title("Eye Tracking Path")
plt.xlabel("X Position")
plt.ylabel("Y Position")

# Show the plot (optional if you just want to save the animation)
# plt.show()
