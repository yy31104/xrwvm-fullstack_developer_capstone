# Best Cars Dealership Review Platform

Best Cars is a dealership review platform for customers who want to compare auto dealerships, read community feedback, and share purchase or service experiences. The project follows the IBM Full Stack Developer Capstone template and is being implemented incrementally so each submission artifact remains clear and grader-compatible.

## Architecture Overview

The application is organized as a Django backend with a React frontend scaffold and course-provided static pages:

- `server/djangoproj`: Django project settings and top-level URL routing.
- `server/djangoapp`: Django app views, URL routes, and future dealership/review endpoints.
- `server/frontend/static`: Static HTML, CSS, and image assets used by the Django-rendered landing pages.
- `server/frontend/src`: React application scaffold for login and future interactive views.
- `server/database`: Course database resources retained from the template.

This bootstrap step focuses on making the Django-rendered home, about, and contact pages available while keeping future dealership and review functionality untouched.

## Tech Stack

- Python and Django
- Django authentication/session support
- SQLite for local Django development
- React frontend scaffold
- Bootstrap and course-provided CSS
- Static image assets from the capstone template

## Local Development

From the repository root:

```powershell
cd server
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py check
python manage.py migrate
python manage.py runserver
```

Then open:

- Home: `http://127.0.0.1:8000/`
- About: `http://127.0.0.1:8000/about`
- Contact: `http://127.0.0.1:8000/contact`
- Login API: `http://127.0.0.1:8000/djangoapp/login`
- Logout API: `http://127.0.0.1:8000/djangoapp/logout`

The React scaffold can be developed separately from `server/frontend` when needed:

```powershell
cd server/frontend
npm install
npm start
```

## Current Implementation Status

Implemented in the current baseline:

- Django can render the course static home page from `/`.
- About and contact pages are complete enough for screenshot submission.
- Static CSS and image assets are wired through Django settings.
- Minimal login and logout API routes are available for smoke testing.

Not implemented yet:

- Dealer listing and dealer detail pages
- Review listing and review submission
- MongoDB/Cloudant-backed services
- CarMake and CarModel models
- Registration UI and endpoint
- Docker, Kubernetes, and GitHub Actions deployment assets

## Submission Artifact Notes

For this bootstrap milestone, suitable artifacts include screenshots of the home page, About Us page, Contact Us page, and successful Django validation commands. Do not claim dealer search, reviews, registration, or deployment functionality until those features are implemented in later steps.

## Future Portfolio Polish

After the graded functionality is complete, this project can be polished with clearer empty states, responsive dealer/review layouts, production-oriented environment settings, richer validation, and a short architecture diagram that explains the Django, React, and backend service boundaries.
