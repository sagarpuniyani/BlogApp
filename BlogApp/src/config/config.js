// Configuration of the env variables

const config = {
    appwrite : String(import.meta.VITE_APPWRITE_URL),
    projectID : String(import.meta.VITE_APPWRITE_PROJECT_ID),
    databaseID : String(import.meta.VITE_APPWRITE_DATABASE_ID),
    collectionID : String(import.meta.VITE_APPWRITE_COLLECTION_ID),
    bucketID : String(import.meta.VITE_APPWRITE_BUCKET_ID)
}

export default config