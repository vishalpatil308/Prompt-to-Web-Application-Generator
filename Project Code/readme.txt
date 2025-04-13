Project Description

Artifacts AI is a powerful AI-based tool that generates web applications from a single prompt. It utilizes the LLaMA 3.3 Instruct Turbo (80B) model and is built with React, TypeScript, Tailwind CSS for the frontend and Python for the backend.

Software & Platforms Required

To successfully install and run the project, ensure you have the following:

1. Python 3.9+ (For backend processing)

2. Node.js 18+ (For frontend development)

3. NPM or Yarn (For managing dependencies)

4. Docker (Optional but recommended for containerized deployment)

5. Streamlit (For UI rendering)

6. Git (For version control)

Installation Steps

Follow these steps to set up the project:

1. Clone the Repository

 git clone https://github.com/yourgithubusername/Artifacts-AI.git
 cd Artifacts-AI

2. Backend Setup

 cd backend
 python -m venv venv  # Create a virtual environment
 source venv/bin/activate  # Activate it (For Windows: venv\Scripts\activate)
 pip install -r requirements.txt  # Install dependencies

3. Frontend Setup

 cd ../frontend
 npm install  # Install required dependencies

4. Running the Project

Start Backend Server

 cd backend
 python main.py  # Start backend server

Start Frontend Server

 cd frontend
 npm run dev  # Start frontend development server

5. Access the Application

Once both servers are running, open your browser and navigate to:

 http://localhost:3000

Contributors

Project Created By:

1. Kartik Pagariya📞 7020387403✉️ kartikpagariya106@gmail.com

2. Omesh Kshatriya📞 9881834790✉️ omeshkshatriya@gmail.com

3. Brajesh Kurkure📞 9373675705✉️ brajeshkurkure25@gmail.com

4. Rajshree Patil📞 7504151111✉️ rajshreepatil08@gmail.com

Notes

Ensure all dependencies are installed before running the project.

You may need to update environment variables if required.

If using Docker, refer to the docker-compose.yml file for containerized deployment.