# Assessment

## Tech Stack

### Frontend
- **React.js**

### Backend
- **Node.js**
- **Express**

### Database
- **SQLite**

## Installation (Both Server & Frontend)

1 . To set up the server and frontend, follow the steps below:

1. **Navigate to the frontend/backend directory:**
    ```bash
    cd frontend/backend
    ```

2. **Install dependencies:**
    ```bash
    pnpm install
    ```

3. **Start the server (both backend and frontend):**
    ```bash
    pnpm dev
    ```

2. Using Docker (run this in the root directory)
 ```bash
   docker-compose -f docker-compose.dev.yml up --build -d
 ```

## API Endpoints

### Health Check

- **Endpoint:**
    - `/api/health-check`

- **Description:**
    - Returns a simple health check response.

- **Response:**
    ```json
    { "msg": "Hello health check route" }
    ```

### Customers

- **Endpoint:**
    - `/api/customers`

- **Description:**
    - Returns a list of all customers.

- **Response Example:**
    ```json
    [
      {
        "id": 31,
        "name": "JACKSON NELLY",
        "phone": "(256) 7750694430",
        "country": "Uganda",
        "state": "valid"
      },
      // More customers
    ]
    ```
