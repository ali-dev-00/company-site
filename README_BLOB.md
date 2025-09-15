# Content persistence without a database

This project writes `content.json` to Vercel Blob so it works on serverless (read-only) environments.

## Setup

1. Install the SDK in the frontend project:
   - In VS Code terminal (Windows cmd):
     npm i @vercel/blob

2. Create a read-write token in Vercel:
   - Vercel Dashboard → Storage → Blob → Tokens → Create Read-Write token

3. Add environment variables:
   - CONTENT_BLOB_KEY: site-content/content.json
   - BLOB_READ_WRITE_TOKEN: <the token you created>
   - NEXT_PUBLIC_CONTENT_BLOB_URL: https://<your-account>.public.blob.vercel-storage.com/site-content/content.json

4. First-time bootstrap:
   - Deploy or run locally; on first save, the API will upload the merged `content.json` to the blob and return its URL.

## Notes
- No database required.
- If NEXT_PUBLIC_CONTENT_BLOB_URL is not set or the blob is missing, the API falls back to `public/content.json` for reading.
- Writes always go to Blob using CONTENT_BLOB_KEY and the token.