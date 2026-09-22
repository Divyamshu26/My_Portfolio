export const projectsData = [
    {
        id: "syla",
        title: "Syla",
        tagline: "AI-powered menstrual health companion with personalized wellness insights.",
        gradient: "from-rose-500 via-pink-500 to-purple-600",
        stats: {
            type: "AI/ML HealthTech",
            architecture: "Cross-Platform Mobile",
            year: "2026",
            featuresCount: "8+ Key Features",
            status: "Active / Maintained"
        },
        overview: "Syla is a cross-platform AI-powered healthcare application designed to help women track menstrual cycles, predict future periods, monitor symptoms, and receive personalized wellness recommendations. The application integrates conversational AI to answer health-related questions, offers intelligent cycle prediction, and securely stores health records while maintaining a clean and user-friendly mobile experience.",
        categorizedTech: {
            "Frontend": ["React Native"],
            "Backend": ["Node.js", "Express.js", "REST APIs"],
            "Database": ["MongoDB"],
            "AI / ML": ["Gemini API"],
            "Integrations": ["Firebase Auth", "Google Fit Integration"]
        },
        keyFeatures: [
            { icon: "Brain", title: "Intelligent Cycle Prediction", desc: "Machine learning based prediction of upcoming menstrual cycles." },
            { icon: "MessageSquare", title: "AI Healthcare Chatbot", desc: "Conversational assistant providing instant health guidance." },
            { icon: "Sparkles", title: "Personalized Recommendations", desc: "Tailored wellness advice based on daily symptoms." },
            { icon: "Activity", title: "Symptom & Mood Tracking", desc: "Comprehensive logging of physical and emotional health." },
            { icon: "ShieldCheck", title: "Secure Authentication", desc: "Firebase-backed encrypted authentication and user data storage." },
            { icon: "Smartphone", title: "Cross-Platform UI", desc: "Seamless mobile experience built with React Native." },
            { icon: "BarChart3", title: "Health Analytics Dashboard", desc: "Visual trends and cycle history analysis." },
            { icon: "Bell", title: "Smart Reminder Notifications", desc: "Timely alerts for period dates and health habits." }
        ],
        skills: [
            "Cross-Platform Mobile Dev",
            "AI/LLM Integration",
            "Healthcare Analytics",
            "RESTful API Design",
            "User Data Security"
        ],
        challenges: [
            "Handled complex cycle length variations using adaptive prediction algorithms.",
            "Ensured private health data handling with secure Firebase authentication and MongoDB encryption.",
            "Integrated Gemini API with structured prompts for accurate, empathetic health responses."
        ],
        learnings: [
            "Designing empathetic mobile user interfaces for sensitive health data.",
            "Connecting React Native with native device APIs (Google Fit).",
            "Building scalable REST microservices for health metrics processing."
        ],
        highlights: [
            "AI-powered healthcare application",
            "Personalized recommendation engine",
            "Mobile-first architecture",
            "Real-world health monitoring use case"
        ],
        github: "https://github.com/dheerajnandiraju/mensies/tree/divyamshu",
        demo: null,
        docs: null,
        architectureDiagram: "/Syla Architecture diagram.webp",
        systemDesignDiagram: "/Syla System diagram.webp",
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "JavaScript / Python",
            updated: "2026"
        }
    },
    {
        id: "ridepal",
        title: "RidePal",
        tagline: "AI-powered Ride Intelligence Platform using Machine Learning and Generative AI.",
        gradient: "from-blue-600 via-indigo-600 to-purple-600",
        stats: {
            type: "AI/ML & GenAI",
            architecture: "Full Stack RAG",
            year: "2026",
            featuresCount: "8+ Key Features",
            status: "Production Ready"
        },
        overview: "RidePal is an intelligent ride assistant inspired by modern ride-hailing applications. It combines Machine Learning with Generative AI to help users estimate fares, analyze ride history, answer ride-related questions, and provide personalized travel insights. The application demonstrates Retrieval-Augmented Generation (RAG), conversational AI, and ML regression within a complete full-stack architecture.",
        categorizedTech: {
            "Frontend": ["React.js"],
            "Backend": ["Python", "FastAPI", "Flask", "REST APIs"],
            "Database": ["ChromaDB", "SQLite"],
            "AI / ML": ["Gemini API", "LangChain", "RAG", "Scikit-learn", "Pandas"],
            "Tools": ["Git", "Virtualenv"]
        },
        keyFeatures: [
            { icon: "Bot", title: "AI Ride Assistant", desc: "Generative AI chatbot for ride queries and recommendations." },
            { icon: "History", title: "Ride History Analysis", desc: "Automated analysis of previous trips and spending trends." },
            { icon: "DollarSign", title: "Fare Prediction Model", desc: "Machine Learning model for accurate fare estimation." },
            { icon: "MessageCircle", title: "Conversational Interface", desc: "Natural language query processing with contextual memory." },
            { icon: "Database", title: "Vector Search RAG", desc: "ChromaDB retrieval-augmented generation pipeline." },
            { icon: "Terminal", title: "Intelligent Prompt Engineering", desc: "Optimized prompt templates for precise AI responses." },
            { icon: "Server", title: "REST API Backend", desc: "High-performance Python backend serving ML predictions." },
            { icon: "Layout", title: "Interactive Dashboard", desc: "Responsive React UI for trip management and AI chat." }
        ],
        skills: [
            "Retrieval-Augmented Generation (RAG)",
            "Machine Learning Regression",
            "FastAPI Backend",
            "Vector Database (ChromaDB)",
            "Prompt Engineering"
        ],
        challenges: [
            "Reduced AI hallucinations using ChromaDB vector store RAG pipeline.",
            "Engineered multi-variable regression pipeline to accurately predict fares.",
            "Optimized latency between Python backend and React frontend."
        ],
        learnings: [
            "Building RAG systems with LangChain and vector databases.",
            "Combining deterministic ML models with LLM capabilities.",
            "Designing clean REST APIs in FastAPI."
        ],
        highlights: [
            "Combines ML with Large Language Models",
            "Demonstrates Agentic AI workflow",
            "Modular scalable architecture",
            "Production-ready AI project"
        ],
        github: "https://github.com/Divyamshu26/ridepal-genai",
        demo: null,
        docs: null,
        architectureDiagram: "/Ridepal architecture diagram.webp",
        systemDesignDiagram: "/Ridepal System Design Diagram.webp",
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "Python / JavaScript",
            updated: "2026"
        }
    },
    {
        id: "choti-bhojan-yatra",
        title: "Choti Bhojan Yatra",
        tagline: "AI-enabled food redistribution platform connecting food donors with NGOs.",
        gradient: "from-emerald-500 via-teal-600 to-cyan-600",
        stats: {
            type: "Full Stack Social Impact",
            architecture: "MERN + AI",
            year: "2026",
            featuresCount: "8+ Key Features",
            status: "Completed"
        },
        overview: "Choti Bhojan Yatra is a social impact platform developed to reduce food wastage by connecting restaurants, households, and event organizers with NGOs and volunteers. The system streamlines food donation, volunteer assignment, and logistics while leveraging AI for food recognition and quality verification.",
        categorizedTech: {
            "Frontend": ["React.js"],
            "Backend": ["Node.js", "Express.js"],
            "Database": ["MongoDB"],
            "AI / ML": ["Gemini AI", "Python"],
            "Integrations": ["Firebase Auth", "Google Maps API"]
        },
        keyFeatures: [
            { icon: "HeartHandshake", title: "Food Donation Portal", desc: "Easy listing of surplus food items by donors." },
            { icon: "Building2", title: "NGO Management Dashboard", desc: "Real-time requests and allocation for NGOs." },
            { icon: "Users", title: "Volunteer Logistics", desc: "Task assignment and routing for pickup volunteers." },
            { icon: "Camera", title: "AI Food Recognition", desc: "Automated food quality and freshness verification using AI." },
            { icon: "MapPin", title: "GPS Navigation", desc: "Google Maps integration for optimal pickup routes." },
            { icon: "Lock", title: "Secure Authentication", desc: "Firebase role-based access control for Donors/NGOs/Volunteers." },
            { icon: "Clock", title: "Real-Time Tracking", desc: "Live status updates for active food donations." },
            { icon: "Shield", title: "Role-Based Access", desc: "Customized dashboard interfaces depending on user role." }
        ],
        skills: [
            "Social Impact Systems",
            "Role-Based Authentication",
            "Google Maps API Integration",
            "MERN Stack Architecture",
            "Computer Vision / AI Verification"
        ],
        challenges: [
            "Created real-time matching algorithm between surplus food availability and nearby NGOs.",
            "Used Gemini AI image analysis to automatically verify food quality before listing.",
            "Optimized location search using spatial queries in MongoDB and Google Maps."
        ],
        learnings: [
            "Designing complex role-based authorization in full-stack applications.",
            "Integrating geolocation services with live map interfaces.",
            "Architecting software for social impact and real-world logistics."
        ],
        highlights: [
            "Social impact platform",
            "Full Stack MERN application",
            "AI-assisted food recognition",
            "Real-world logistics workflow"
        ],
        github: "https://github.com/Divyamshu26/choti_bhojan_yatra",
        demo: null,
        docs: null,
        architectureDiagram: "/Choti Bhojan Yatra Architecture diagram.webp",
        systemDesignDiagram: "/Choti Bhojan Yatra system design.webp",
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "JavaScript",
            updated: "2026"
        }
    },
    {
        id: "servicehub",
        title: "ServiceHub",
        tagline: "Full Stack marketplace connecting customers with trusted local service providers.",
        gradient: "from-amber-500 via-orange-500 to-red-600",
        stats: {
            type: "Full Stack Marketplace",
            architecture: "MERN Stack",
            year: "2026",
            featuresCount: "8+ Key Features",
            status: "Completed"
        },
        overview: "ServiceHub is a service booking platform that enables users to discover, compare, and book local professionals for home and business services. The application provides secure authentication, booking management, service provider dashboards, and customer management tools through a scalable MERN architecture.",
        categorizedTech: {
            "Frontend": ["React.js"],
            "Backend": ["Node.js", "Express.js", "REST APIs"],
            "Database": ["MongoDB"],
            "Tools & Auth": ["JWT Authentication", "Postman", "Git"]
        },
        architectureFlow: [
            "Customer / Provider UI",
            "Express REST API Engine",
            "MongoDB Data Store",
            "JWT Authentication Validation",
            "Booking & Schedule Confirmation"
        ],
        keyFeatures: [
            { icon: "Search", title: "Service Discovery", desc: "Search and filter local providers by category and rating." },
            { icon: "Calendar", title: "Booking Management", desc: "Seamless appointment scheduling and calendar management." },
            { icon: "UserCheck", title: "Customer Dashboard", desc: "Track active bookings and payment history." },
            { icon: "Briefcase", title: "Provider Portal", desc: "Manage service catalog, pricing, and schedule." },
            { icon: "KeyRound", title: "JWT Security", desc: "Encrypted token-based authentication session management." },
            { icon: "Sliders", title: "Advanced Filtering", desc: "Filter service listings by price, location, and reviews." },
            { icon: "Smartphone", title: "Responsive Interface", desc: "Mobile-optimized design built for all device sizes." },
            { icon: "ShieldAlert", title: "Role Authorization", desc: "Strict separation between customer and provider privileges." }
        ],
        skills: [
            "MERN Stack Development",
            "JWT Authentication",
            "Database Schema Design",
            "REST API Development",
            "State Management"
        ],
        challenges: [
            "Designed normalized MongoDB schema for complex provider schedules and bookings.",
            "Implemented robust JWT authentication with refresh tokens and middleware protection.",
            "Optimized database queries with indexing for rapid search filtering."
        ],
        learnings: [
            "Building end-to-end multi-role web marketplaces.",
            "Managing state synchronization across complex booking flows.",
            "Securing backend REST endpoints against unauthorized access."
        ],
        highlights: [
            "Complete MERN application",
            "Real-world booking workflow",
            "Modular backend architecture",
            "Clean user experience"
        ],
        github: "https://github.com/Divyamshu26/ServiceHub-chatbot",
        demo: null,
        docs: null,
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "JavaScript",
            updated: "2026"
        }
    },
    {
        id: "ride-fare-prediction",
        title: "Ride Fare Prediction",
        tagline: "Machine Learning regression model for intelligent ride fare estimation.",
        gradient: "from-cyan-500 via-blue-600 to-indigo-600",
        stats: {
            type: "Machine Learning",
            architecture: "ML Regression Pipeline",
            year: "2025",
            featuresCount: "6 Key Features",
            status: "Completed"
        },
        overview: "Ride Fare Prediction is an end-to-end Machine Learning project that estimates ride fares using ride attributes such as pickup location, destination, travel distance, traffic conditions, and ride timings. The project demonstrates the complete ML lifecycle including preprocessing, feature engineering, model training, evaluation, and prediction.",
        categorizedTech: {
            "Language": ["Python"],
            "Libraries": ["Scikit-learn", "Pandas", "NumPy"],
            "Visualization": ["Matplotlib", "Seaborn"],
            "ML Models": ["Linear Regression", "Random Forest", "Gradient Boosting"]
        },
        architectureFlow: [
            "Raw Ride Dataset",
            "Data Preprocessing & Outlier Cleaning",
            "Geospatial Feature Engineering",
            "Scikit-Learn Model Training",
            "Accurate Fare Price Output"
        ],
        keyFeatures: [
            { icon: "Database", title: "Data Preprocessing", desc: "Cleaning, handling missing values, and outlier treatment." },
            { icon: "Cpu", title: "Feature Engineering", desc: "Extracting distance metrics, time of day, and spatial clusters." },
            { icon: "GitCommit", title: "Regression Modeling", desc: "Evaluated multiple algorithms (Random Forest, XGBoost)." },
            { icon: "BarChart", title: "Model Evaluation", desc: "Rigorous assessment using RMSE, MAE, and R² scores." },
            { icon: "Calculator", title: "Fare Prediction Engine", desc: "Inference module for real-time price calculation." },
            { icon: "PieChart", title: "Visualization Dashboard", desc: "Exploratory data analysis plots for trend insights." }
        ],
        skills: [
            "Machine Learning Regression",
            "Data Preprocessing",
            "Feature Engineering",
            "Model Evaluation & Tuning",
            "Python Data Science"
        ],
        challenges: [
            "Calculated accurate Haversine and Manhattan distance formulas from raw GPS coordinates.",
            "Handled extreme price outliers using robust scaling and IQR filtering.",
            "Optimized hyperparameter tuning to achieve high R² prediction accuracy."
        ],
        learnings: [
            "Applying ML regression techniques to geospatial problems.",
            "Evaluating trade-offs between model interpretability and predictive accuracy.",
            "Creating reusable Python pipelines for machine learning."
        ],
        highlights: [
            "Complete ML workflow",
            "Regression-based prediction",
            "Data-driven decision making",
            "End-to-end pipeline"
        ],
        github: "https://github.com/Divyamshu26/Ride-Fare-Prediction",
        demo: null,
        docs: null,
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "Python",
            updated: "2025"
        }
    },
    {
        id: "food-demand-forecasting",
        title: "Food Demand Forecasting",
        tagline: "Time Series forecasting model for predicting restaurant food demand.",
        gradient: "from-emerald-600 via-green-600 to-teal-700",
        stats: {
            type: "Time Series ML",
            architecture: "Predictive Analytics",
            year: "2025",
            featuresCount: "6 Key Features",
            status: "Completed"
        },
        overview: "Food Demand Forecasting leverages historical restaurant order data to predict future food demand using time-series forecasting techniques. The project helps optimize inventory management, reduce food waste, and improve operational efficiency through predictive analytics.",
        categorizedTech: {
            "Language": ["Python"],
            "Data Science": ["Pandas", "NumPy"],
            "ML Modeling": ["Scikit-learn", "Time Series Models"],
            "Visualization": ["Matplotlib", "Seaborn"]
        },
        architectureFlow: [
            "Historical Restaurant Orders Data",
            "Lag Feature & Rolling Window Extraction",
            "Time-Series Machine Learning Model",
            "Demand Prediction Engine",
            "Inventory Optimization Plan"
        ],
        keyFeatures: [
            { icon: "TrendingUp", title: "Demand Forecasting", desc: "Multi-week predictive modeling for restaurant order volumes." },
            { icon: "Calendar", title: "Historical Trend Analysis", desc: "Identifying seasonality, holiday spikes, and weekly cycles." },
            { icon: "Sliders", title: "Lag Feature Engineering", desc: "Creating rolling window metrics and historical lag indicators." },
            { icon: "GitBranch", title: "Model Comparison", desc: "Benchmarking ARIMA, XGBoost, and Random Forest regressors." },
            { icon: "LineChart", title: "Prediction Visualization", desc: "Interactive plots comparing actual vs predicted demand." },
            { icon: "Package", title: "Inventory Optimization", desc: "Actionable insights to minimize food wastage." }
        ],
        skills: [
            "Time Series Analysis",
            "Predictive Analytics",
            "Feature Engineering",
            "Data Visualization",
            "Inventory Optimization"
        ],
        challenges: [
            "Engineered lag variables and rolling window averages to capture temporal trends.",
            "Handled missing historical dates and seasonal variance.",
            "Reduced forecasting error rate (MAPE) to improve inventory precision."
        ],
        learnings: [
            "Building time-series features for supervised learning algorithms.",
            "Addressing seasonality and trend decomposition.",
            "Translating ML outputs into actionable business recommendations."
        ],
        highlights: [
            "Time-series machine learning",
            "Business analytics application",
            "Inventory optimization",
            "Predictive modeling"
        ],
        github: "https://github.com/Divyamshu26/Food-Demand-Forecasting",
        demo: null,
        docs: null,
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "Python",
            updated: "2025"
        }
    },
    {
        id: "chat-intent-classification",
        title: "Chat Intent Classification",
        tagline: "Deep Learning NLP model for understanding user intentions in conversational systems.",
        gradient: "from-purple-600 via-fuchsia-600 to-pink-600",
        stats: {
            type: "Deep Learning & NLP",
            architecture: "Neural Network Pipeline",
            year: "2025",
            featuresCount: "7 Key Features",
            status: "Completed"
        },
        overview: "Chat Intent Classification is a Natural Language Processing project that classifies user messages into predefined intent categories. The project includes text preprocessing, tokenization, embedding generation, deep learning model training, evaluation, and inference, making it suitable for chatbot and virtual assistant applications.",
        categorizedTech: {
            "Deep Learning": ["TensorFlow", "Keras"],
            "NLP": ["NLTK", "Scikit-learn"],
            "Language": ["Python"],
            "Data Science": ["Pandas", "NumPy"]
        },
        architectureFlow: [
            "Raw Chat Text Input",
            "Tokenization & Lemmatization Pipeline",
            "Word Embedding Matrix",
            "Keras Deep Neural Network",
            "Intent Category Classification"
        ],
        keyFeatures: [
            { icon: "FileText", title: "Text Preprocessing", desc: "Tokenization, stopword removal, and lemmatization pipeline." },
            { icon: "Target", title: "Intent Classification", desc: "Categorizes user text into multi-class conversation topics." },
            { icon: "Hash", title: "Word Embeddings", desc: "Converts natural text into dense numerical vector representations." },
            { icon: "Layers", title: "Deep Learning Architecture", desc: "Dense multi-layer neural network built with TensorFlow/Keras." },
            { icon: "CheckCircle", title: "Accuracy Evaluation", desc: "Evaluated using confusion matrix, precision, recall, and F1 score." },
            { icon: "Workflow", title: "Inference Pipeline", desc: "Real-time intent prediction wrapper for chatbot integration." }
        ],
        skills: [
            "Natural Language Processing (NLP)",
            "Deep Learning (TensorFlow/Keras)",
            "Text Vectorization",
            "Multi-class Classification",
            "Model Deployment Readiness"
        ],
        challenges: [
            "Preprocessed noisy text inputs with stemming and lemmatization to boost model accuracy.",
            "Balanced imbalanced intent classes using custom loss weighting.",
            "Built a low-latency prediction pipeline for live chatbot engine consumption."
        ],
        learnings: [
            "Designing Neural Network architectures for NLP classification.",
            "Handling text tokenization and vocabulary dictionary generation.",
            "Building scalable NLP pipelines in TensorFlow/Keras."
        ],
        highlights: [
            "End-to-end NLP pipeline",
            "Deep learning model",
            "Chatbot integration ready",
            "Practical conversational AI project"
        ],
        github: "https://github.com/Divyamshu26/Chat-Intent-Classification",
        demo: null,
        docs: null,
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "Python",
            updated: "2025"
        }
    },
    {
        id: "house-price-prediction",
        title: "House Price Prediction",
        tagline: "End-to-end Machine Learning pipeline for accurate real estate price estimation.",
        gradient: "from-indigo-600 via-violet-600 to-purple-700",
        stats: {
            type: "Machine Learning",
            architecture: "End-to-End Pipeline",
            year: "2025",
            featuresCount: "6 Key Features",
            status: "Completed"
        },
        overview: "House Price Prediction is a supervised machine learning project that predicts residential property prices using multiple housing features such as location, area, number of bedrooms, and amenities. The project demonstrates data preprocessing, feature engineering, regression modeling, evaluation, and deployment-ready prediction workflows.",
        categorizedTech: {
            "Language": ["Python"],
            "Data Science": ["Pandas", "NumPy"],
            "ML Framework": ["Scikit-learn", "Regression Models"],
            "Visualization": ["Matplotlib", "Seaborn"]
        },
        architectureFlow: [
            "Raw Housing Dataset",
            "Outlier Cleaning & One-Hot Encoding",
            "StandardScaler Feature Transformation",
            "Ensemble Regression Modeling",
            "Real Estate Valuation Output"
        ],
        keyFeatures: [
            { icon: "Database", title: "Data Cleaning & Imputation", desc: "Handling missing property attributes and data normalization." },
            { icon: "Layers", title: "Feature Selection & Scaling", desc: "Selecting key price drivers and applying StandardScaler." },
            { icon: "GitPullRequest", title: "Regression Algorithms", desc: "Cross-validation across Linear, Ridge, Lasso, and Gradient Boosting." },
            { icon: "Sliders", title: "Model Hyperparameter Tuning", desc: "GridSearchCV tuning for optimized prediction variance." },
            { icon: "BarChart2", title: "Performance Metrics", desc: "Comprehensive evaluation with R², RMSE, and Residual plots." },
            { icon: "Home", title: "Property Price Predictor", desc: "Deployment-ready inference function for housing valuation." }
        ],
        skills: [
            "Supervised Learning",
            "Exploratory Data Analysis (EDA)",
            "Hyperparameter Tuning",
            "Ensemble Modeling",
            "Data Science Lifecycle"
        ],
        challenges: [
            "Engineered composite features like price-per-square-foot and total amenity scores.",
            "Mitigated multicollinearity using VIF analysis and regularization.",
            "Achieved high generalization accuracy with cross-validated ensemble methods."
        ],
        learnings: [
            "Executing a complete data science pipeline from raw dataset to inference.",
            "Applying regularization techniques (Ridge/Lasso) to prevent overfitting.",
            "Creating intuitive data visualizations to present machine learning results."
        ],
        highlights: [
            "End-to-end ML pipeline",
            "Real estate analytics",
            "Regression modeling",
            "Production-ready workflow"
        ],
        github: "https://github.com/Divyamshu26/House-Price-Prediction",
        demo: null,
        docs: null,
        repoMeta: {
            visibility: "Public",
            primaryLanguage: "Python",
            updated: "2025"
        }
    }
];
