# Lifion Vidsi - video streaming service challenge

1. ERD for setting up Relational Database Schema

   link to ERD
   ![image](files/Users/flatironschool/Desktop/preview.png)


2. SQL Query for 20 most watched videos in January 2017

    "SELECT videos.title, SUM(views) FROM videos JOIN views ON videos.id = views.video_id GROUP BY MONTH(timestamp) ORDER BY SUM(views) LIMIT 20"

3. Algorithm for inputs of invoices and subscribers, that returns a list of subscribers who haven't paid their invoices and need to be sent a cancelation notice.
