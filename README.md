
# Simply Jet Technical Assessment  

In this Assessment, you have to build an entire Blog Application as per
the following instructions.
- Develop a Full Stack Application using Python (FastAPI) in the
backend and Javascript (Next Js) in the frontend.
- There will be two roles Author and Admin.
- Authors Can Register and Login with email and password, and
Create their Blogs.
- Authors can View, Update and Delete their Blogs Only in the
Dashboard.
- Admin can View, Update, and Delete any/all Blogs.
- On the homepage, all the blogs are listed and anyone can click
and visit the individual blog page and read the entire blog, and
even go back to the home page by clicking the logo/nav link in
the navigation bar. (Anyone (Author/Admin/No registered Users)
can view all the blogs)
- Admin role and Admin user will be created by default on app start
(admin@admin.com / Admin#100) when the app is initialized.

Example - Let's say ‘x’ and ‘y’ are authors, so they will first register
themselves in the app using Email and Password. And ‘z’ is admin so,
he is initialized by default with Email and Password
(admin@admin.com / Admin#100). ‘x’ and ‘y’ can create, update and
delete their own blogs only. And ‘z’ has the access to view, update and
delete any blogs.

Backend Tech Stack -
- Language - Python
- Framework - FastAPI (https://fastapi.tiangolo.com/)
- Database - SQLite
- Testing (Optional) - Pytest(https://docs.pytest.org/en/7.1.x/)
- Images can be stored in FileSystem.
- ORM - SqlAlchamy (https://www.sqlalchemy.org/)
Frontend Tech Stack -
- Framework - NextJs (https://nextjs.org/)
- Design Library - Mantine (https://mantine.dev/)
- You may use React Query in the Dashboard part may be.
- You can use any Rich Text/Markdown Editor of your choice for
Blog Description.
- Testing (Optional) - Cypress (https://www.cypress.io/).
Database Design Suggestions - (You can even use your own database
structure)
- Blog - (title, description, image, relation(User))
- User - (first_name, last_name, email, password)
- Role - (name, relation(permissions))
- Permission - (action(enum-C,R,U,D),resource)

# How to start 
 ## Clone the repository:
```bash
git clone https://github.com/abcdamit44/myblog.git
```
# Install packages:

```bash
cd frontend
npm i
```

```bash
cd backend
pip install -r requirements.txt
```

## Start the server:

```bash
cd backend
uvicorn main:app --reload
```
## Start the client server:

```bash
cd frontend
npm run dev
```


