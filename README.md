 
# DevTasks

This setup provides the **task management application** while integrating various **AWS services** for enhanced functionality and performance.


# Setup Instructions:

## Clone Repository:
```shell
 git clone https://github.com/Hakutoshiro/DevTasks
 cd DevTasks
```
## Set up Environment variables:

Create a `.env` file in the Backend directory and add the following variables:
```shell 
 #Server Config
 PORT=4000

 # MongoDB Connection
 Mongo_URI=your_mongodb_uri

 # JWT Secret
 JWT_SECRET=your_jwt_secret

 # AWS Config
 AWS_ACCESS_KEY_ID=your_access_key_id
 AWS_SECRET_ACCESS_KEY=your_secret_access_key
 AWS_REGION=your_aws_region
```

## Install Dependencies:

```shell
 cd Frontend
 npm install
 cd ../Backend
 npm install
```

## Run the Application:

```shell
#Start the Frontend
 cd ../Frontend
 npm run dev
  
#Start the Backend
 cd ../Backend
 npm run devStart
```

## Additional Information:
-   Ensure that you have Node.js and MongoDB installed on your system.
-   You need to have an AWS account to configure AWS services.
-   The MongoDB URI should point to your MongoDB database.
-   Replace placeholders with your actual AWS and database credentials.


# Project Structure:
-   **Frontend/**: Contains the frontend React application. It includes components, pages, services, and the main App component responsible for rendering the UI.
    
-   **Backend/**: Houses the backend Node.js application. It includes controllers for handling API requests, Mongoose models for interacting with the MongoDB database, routes for defining API endpoints, utilities for common functions, and the entry point file for the Express application.
    
-   **config/**: Holds configuration files for AWS, MongoDB, and JWT. These files provide settings and credentials required for different parts of the application.
        
-   **.env**: Environment variables file used for storing sensitive information such as database URIs, API keys, and secrets.
    
-   **package.json**: Defines project dependencies and scripts for managing the application.


## Screenshots
![Screenshot (30)](https://github.com/Hakutoshiro/DevTasks/assets/89139969/30200fa7-d74b-40da-b954-1286dedce6f4)
 ![Screenshot (31)](https://github.com/Hakutoshiro/DevTasks/assets/89139969/f4cdce03-8852-4e71-bcd2-c260ccc6b42a)
![Screenshot (32)](https://github.com/Hakutoshiro/DevTasks/assets/89139969/3af63007-ce6f-4043-9f2e-4f1b79e92fb5)
![Screenshot (33)](https://github.com/Hakutoshiro/DevTasks/assets/89139969/152f6891-6e1e-4ddb-b872-05a134c945ad)
![Screenshot (34)](https://github.com/Hakutoshiro/DevTasks/assets/89139969/77b0d156-5cbc-4d30-ba3a-3ecf79844c43)
![Screenshot (35)](https://github.com/Hakutoshiro/DevTasks/assets/89139969/76188453-a6d5-4b74-90f0-818ee5713379)
