import { createClient } from "contentful";

export const getAllProjects = async () => {
  const client = createClient({
    space: String(import.meta.env.VITE_CONTENTFUL_SPACE_ID),
    accessToken: String(import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN),
  });

  const res = await client.getEntries({
    content_type: "project",
    // @ts-expect-error - contentful types are not up to date
    order: "fields.order",
  });
  return res;
};
