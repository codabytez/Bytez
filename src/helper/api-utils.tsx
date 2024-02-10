import { createClient } from "contentful";

export const getAllProjects = async () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
  });

  const res = await client.getEntries({
    content_type: "project",
    // @ts-expect-error - contentful types are not up to date
    order: "fields.order",
  });
  return res;
};
