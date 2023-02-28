# Fiamane Transporter Front-end

## Project structure

- `components/` - All the app components
  - `components/shared/` - Shared components
  - `components/app/` - All components used in the dashboard
  - `components/agence/` - All components used in the agency page
  - `components/depart/` - All components used in the departure page
  - `components/offre/` - All components used in the offer page
- `config/` - Configuration files
  - `config/env.ts` - Environment variables
  - `config/messages.ts` - All the app messages (imported from the json files in `constants/lang`)
- `constants/` - Constants
  - `constants/lang/` - All the app messages in all languages
  - `constants/data/` - Some fake data may coming handy
- `hooks/` - Custom hooks
- `layouts/` - All the app layouts
- `pages/` - All the app pages
- `public/` - Public files
- `styles/` - All the app styles
- `types/` - All the app types
- `utils/` - All the app utils
- `lib/` - All the app libraries configurations
- `types/` - All the app types

## Multi language

When you want to change the language simply prefix all your paths with `/lang` where `lang` is the chosen language.

```bash
# English
http://localhost:3000/en/{rest of the path}
# French
http://localhost:3000/fr/{rest of the path}
... etc
```

if you don't specify the language it will default to `fr`.

## Translation

You can translate the messages and content using `useTranslation` hook imported from `hooks/useTranslation.ts` file.

```tsx
const translate = useTranslation();
const title = translate("Navbar.Links.FindTransporter");
// title = "Trouver un transporteur"
```

## Authentication

The authentication is handled by the `useAuth` hook imported from `hooks/useAuth.ts` file if you want to use redux let me know.

```tsx
const { user, setUser, isAuthenticated, setIsAuthenticated, logout } =
  useAuth();

console.log(user); // { id: 1, name: "John Doe",...}
```

## Environment variables

The environment variables we are currently using are:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000 # Or any valid url so you don't get an error
```

## Server rendred pages

You can create the UI for server rendred pages by creating a file in page folder as `index.tsx` with fake data then I will get the data from the server and replace the fake data with the real data in `[id].tsx` or `[slug].tsx` file.

## Some extra notes

- Create the UI for the pages in `layouts/pages` folder then import it in the corresponding page in `pages` folder.
- Extract the hooks logic to `hooks` folder.
- Try to export the components and pages by name instead of exporting them as `Index`

## Final thoughts

We really appreciate your time and effort here at `Fiamane` and we hope you enjoy working on this project as much as we do and if you have any question let `Mohamed Achaq` know.
