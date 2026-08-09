# Past4 Backend

This directory contains the FastAPI backend foundation for Past4. It currently provides basic health and root endpoints only.

## Setup on Windows

From the `backend` directory, create and activate a virtual environment:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

Install the dependencies:

```powershell
python -m pip install -r requirements.txt
```

## Run the server

With the virtual environment activated, run this command from `backend`:

```powershell
uvicorn app.main:app --reload
```

The server starts at `http://127.0.0.1:8000`.

## Available endpoints

- `GET /` returns `{"message": "Past4 API is running"}`.
- `GET /health` returns `{"status": "ok"}`.
- `GET /docs` opens FastAPI's interactive API documentation.
