# Lifion Vidsi - video streaming service challenge

1. ERD for setting up Relational Database Schema is attached


2. SQL Query for 20 most watched videos in January 2017

    "SELECT videos.title, SUM(licenses)
    FROM videos JOIN views ON videos.id = licenses.video_id
    WHERE licenses.timestamp >= "2017-01-01"
    AND licenses.timestamp < "2017-02-01"
    GROUP BY videos.title
    ORDER BY SUM(licenses) LIMIT 20"

3. Algorithm for inputs of invoices and subscribers, that returns a list of subscribers who haven't paid their invoices and need to be sent a cancelation notice.  The Function can be found in cancelation_notice.js file.
