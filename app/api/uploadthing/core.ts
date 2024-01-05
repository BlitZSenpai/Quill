import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
