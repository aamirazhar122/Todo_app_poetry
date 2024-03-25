This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Step 1: Install pipx - Open your terminal. - Install pipx using pip: python -m pip install --user pipx

Step 2: Ensure pipx's binary directory is in your PATH: python -m pipx ensurepath

Step 3: Restart your terminal to apply the PATH update.

Step 4: run the command pipx install poetry

Step 5: To check the version run poetry --version

Step 6: Create a new project with poetry new uit-api-class --name uitclass

Step 7: open the sub folder inside of the parent folder, in this case uitclass

Step 8: Now create a new file named main.py

Step 9 (optional): Check the version of python with the command poetry run python --version

Step 10: poetry add fastapi "uvicorn[standard]"

Step 10a (optional): Check the packages inside of the pyproject.toml

Step 11: Write the hello world code in the main.py file: - https://github.com/panaverse/learn-generative-ai/blob/main/05_microservices_all_in_one_platform/10_microservice_helloworld/fastapi-helloworld/fastapi_helloworld/main.py

Step 12: run the server: poetry run uvicorn uitclass.main:app --host 0.0.0.0 --port 8000

Step 13: Open the following urls: - http://0.0.0.0:8000/

- http://0.0.0.0:8000/docs

- http://0.0.0.0:8000/openapi.json

or 
- http://localhost:8000
First, run the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
