

ng g m heroes --routing
ng g m shared
ng g m material
ng g component auth\pages\layoutPage --inline-style --skip-tests
ng g component auth\pages\loginPage --inline-style --skip-tests
ng g component auth\pages\registerPage --inline-style --skip-tests
ng g component heroes\pages\heroPage --inline-style --skip-tests
ng g component heroes\pages\layoutPage --inline-style --skip-tests
ng g component heroes\pages\listPage --inline-style --skip-tests
ng g component heroes\pages\newPage --inline-style --skip-tests
ng g component heroes\pages\searchPage --inline-style --skip-tests
ng g component shared\pages\Error404Page --inline-style --skip-tests


```bash
ng add @angular/material
```

# Init

```bash
npm install
```

# Backend

Install Dev Server:

```bash
npm install --save-dev json-server
```

Run the backend:

```bash
npm run backend
```

# Frontend

```bash
npm start
```
or
```bash
ng serve -o
```

# JSON to Interface

https://app.quicktype.io/
