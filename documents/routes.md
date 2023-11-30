```
/ (Homepage)

/login (Login page)

/signup (Signup page)

/dashboard (User's personal dashboard)

    /dashboard/edit (Edit profile and portfolio)

    /dashboard/projects                 (List of user's projects)
        /dashboard/projects/new         (Add a new project)
        /dashboard/projects/[id]        (View a specific project)
        /dashboard/projects/[id]/edit   (Edit a specific project)

    /dashboard/blog                 (User's blog posts)
        /dashboard/blog/new         (Add a new blog post)
        /dashboard/blog/[id]        (View a specific blog post)
        /dashboard/blog/[id]/edit   (Edit a specific blog post)

/[username]     (Public view of a user's portfolio)

    /[username]/projects/[id]   (Public view of a specific project)
    /[username]/blog/[id]       (Public view of a specific blog post)

/api/*  (API routes for handling backend logic)
    /api/projects
    /api/blog
    /api/comments
    /api/likes
```
